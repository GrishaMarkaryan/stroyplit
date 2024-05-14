import CategoryWraper from "@/app/_components/category-wraper"
import kvadrat from '@/app/_images/trotuarPlitkaKvadrat.jpg'
import { Products } from '@/app/_components/category-wraper'

export const trotuarnayaPlitka: Products[] = [
 
    {
        name: 'ТРОТУАРНАЯ ПЛИТКА "КВАДРАТ"',
        photo: kvadrat,
        price: 95, 
    },
]

export default function trotuarnPlitka() {
    return (
        <div>
            <CategoryWraper category="ТРОТУАРНАЯ ПЛИТКА" arr={trotuarnayaPlitka}/>
        </div>
    )
}