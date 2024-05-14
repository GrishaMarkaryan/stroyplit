import CategoryWraper from "@/app/_components/category-wraper"
import kirpichik from '@/app/_images/bruschatkaKirpichik.jpg'
import volna from '@/app/_images/bruschatkaVolna.jpg'
import { Products } from '@/app/_components/category-wraper'

export const bruschatkaArr: Products[] = [
    {
        name: 'БРУСЧАТКА "КИРПИЧИК"',
        photo: kirpichik,
        price: 95, 
    },
    {
        name: 'БРУСЧАТКА "ВОЛНА"',
        photo: volna,
        price: 95, 
    },
]

export default function Bruschatka() {
    return (
        <div>
            <CategoryWraper category="БРУСЧАТКА" arr={bruschatkaArr}/>
        </div>
    )
}