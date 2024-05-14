import CategoryWraper from "@/app/_components/category-wraper"
import { allProducts } from "../all-products"

export default function Bruschatka() {
    return (
        <div>
            <CategoryWraper category="БРУСЧАТКА" arr={allProducts.BRUSCHATKA} />
        </div>
    )
}