import blokPustotely from '@/app/_images/blokPeskoCementnyPustotely.jpg'
import blokPolnotely from '@/app/_images/blokPeskoCementnyPolnoltely.jpg'
import blokKeramzitny from '@/app/_images/blokKeramzitny.png'
import blokPeregorodochny from '@/app/_images/blokPeregorodochny.jpg'
import { Products } from '@/app/_components/category-wraper'
import CategoryWraper from "@/app/_components/category-wraper"


export const blokiArr: Products[] = [
    {
        name: 'Блок песко-цементный стеновой ПОЛНОТЕЛЫЙ',
        photo: blokPolnotely,
        price: 95,        
    },
    {
        name: 'Блок песко-цементный стеновой ПУСТОТЕЛЫЙ',
        photo: blokPustotely,
        price: 80,                
    },
    {
        name: 'Блок керамзитный стеновой ПУСТОТЕЛЫЙ',
        photo: blokKeramzitny,
        price: 80,                
    },
    {
        name: 'Блок песко-цементный ПЕРЕГОРОДОЧНЫЙ',
        photo: blokPeregorodochny,
        price: 40,                
    },
]


export default function Bloki() {
    return (
        <div>
            <CategoryWraper category="БЛОКИ" arr={blokiArr}/>
        </div>
    )
}