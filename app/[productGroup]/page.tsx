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
        productId: string,
    }
}) {
    const defineCategory = (input: string) => {
        switch (input) {
            case 'bruschatka':
                return 'БРУСЧАТКА';
            case 'plitka':
                return 'ТРОТУАРНАЯ ПЛИТКА';
            case 'bordyur':
                return 'БОРДЮРЫ';
            case 'bloki':
                return 'БЛОКИ';
            case 'cement':
                return 'ЦЕМЕНТ';
            default:
                return ''
        }
    }

    const productGroupArray = allProducts[params.productGroup] || []
    return (
        <CategoryWraper category={defineCategory(params.productGroup)} arr={productGroupArray} params={params} />
    )
}