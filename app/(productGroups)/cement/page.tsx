import CategoryWraper from "@/app/_components/category-wraper"
import { allProducts } from "../all-products"

export default function Cement() {
    return (
        <div>
            <CategoryWraper category="ЦЕМЕНТ" arr={allProducts.CEMENT} />
        </div>
    )
}