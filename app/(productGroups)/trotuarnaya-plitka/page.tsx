import CategoryWraper from "@/app/_components/category-wraper"
import { allProducts } from "../all-products"

export default function trotuarnPlitka() {
    return (
        <div>
            <CategoryWraper category="ТРОТУАРНАЯ ПЛИТКА" arr={allProducts.PLITKA} />
        </div>
    )
}