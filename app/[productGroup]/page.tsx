import { StaticImageData } from "next/image"
import { allProducts } from "./all-products"
import CategoryWraper from "../_components/category-wraper"

export type Products = {
    name: string,
    photo: StaticImageData,
    price: number,
}

export default async function ProductGroup({ params }: {
    params: Promise<{
        productGroup: string,
        productId: string,
    }>
}) {
    const resolvedParams = await params

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

    const productGroupArray = allProducts[resolvedParams.productGroup] || []
    return (
        <CategoryWraper category={defineCategory(resolvedParams.productGroup)} arr={productGroupArray} params={resolvedParams} />
    )
}