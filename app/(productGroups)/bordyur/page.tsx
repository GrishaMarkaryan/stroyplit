import CategoryWraper from "@/app/_components/category-wraper";
import bordyurTrotuarny from '@/app/_images/bordyurTrotuarny.jpg'
import bordyurDorozhny from '@/app/_images/bordyurDorozhny.jpg'
import { Products } from '@/app/_components/category-wraper'

export const bordyurArr: Products[] = [
    {
        name: 'ТРОТУАРНЫЙ БОРДЮР',
        photo: bordyurTrotuarny,
        price: 95,        
    },
    {
        name: 'ДОРОЖНЫЙ БОРДЮР',
        photo: bordyurDorozhny,
        price: 80,                
    },
]

export default function Bordyur() {
    return (
        <div>
            <CategoryWraper category="БОРДЮРЫ" arr={bordyurArr}/>
        </div>
    )
}