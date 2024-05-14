import CategoryWraper from "@/app/_components/category-wraper"
import { Products } from '@/app/_components/category-wraper'
import cement from '@/app/_images/cementMeshok.jpg'

export const cementArr: Products[] = [
    {
        name: 'ЦЕМЕНТ',
        photo: cement,
        price: 95, 
    }
]

export default function Cement() {
    return (
        <div>
            <CategoryWraper category="ЦЕМЕНТ" arr={cementArr}/>
        </div>
    )
}