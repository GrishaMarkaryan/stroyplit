import { StaticImageData } from "next/image"

import blokPustotely from '@/app/_images/blokPeskoCementnyPustotely.jpg'  // эти фото удалить потом
import blokPolnotely from '@/app/_images/blokPeskoCementnyPolnoltely.jpg'
import blokKeramzitny from '@/app/_images/blokKeramzitny.png'
import blokPeregorodochny from '@/app/_images/blokPeregorodochny.jpg'


export type Products = {
    name: string,
    photo: StaticImageData,
    price: number,
}

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

export default function ProductGroup({ params }: {
    params: {
        route: string,
    }
}) {

    return (
        <div>
            <div> {params.route} </div>
            {blokiArr.map((item, name) => {
                return (
                    <div>
                        <div> {item.name} </div>
                        <div> {item.price} </div>
                    </div>
                )
            })}

        </div>
    )
}