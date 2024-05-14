import CategoryWraper from "@/app/_components/category-wraper";
import { allProducts } from "../all-products"

export default function Bordyur() {
    return (
        <div>
            <CategoryWraper category="БОРДЮРЫ" arr={allProducts.BORDYUR} />
        </div>
    )
}