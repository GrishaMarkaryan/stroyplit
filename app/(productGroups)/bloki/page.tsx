import CategoryWraper from "@/app/_components/category-wraper"
import { allProducts } from "../all-products"

export default function Bloki() {
    return (
        <div>
            <CategoryWraper category="БЛОКИ" arr={allProducts.BLOKI} />
        </div>
    )
}