import { StaticImageData } from "next/image"
import { allProducts } from "./all-products"
import CategoryWraper from "../_components/category-wraper"

export type Products = {
    name: string,
    photo: StaticImageData,
    price: number,
}

export default function ProductGroup({ params }: {
    params: {
        productGroup: string,
    }
}) {
    const defineCategory = (input: string) => {
        switch (input) {
            case 'bruschatka':
                return 'БРУСЧАТКА';
                break;
            case 'plitka':
                return 'ТРОТУАРНАЯ ПЛИТКА';
                break;
            case 'bordyur':
                return 'БОРДЮРЫ';
                break;
            case 'bloki':
                return 'БЛОКИ';
                break;
            case 'cement':
                return 'ЦЕМЕНТ';
                break;
        }
    }

    const newArr = Object.keys(allProducts)
        .filter((key) => key === params.productGroup)
        .flatMap((key) => allProducts[key]) // This will get the array of products for the product group

    return (
        <div>
            <CategoryWraper category={defineCategory(params.productGroup)} arr={newArr} />
        </div>
    )
}