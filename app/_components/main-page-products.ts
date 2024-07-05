import { StaticImageData } from 'next/image'
import plitki from '@/app/_images/_bruschatka/plitki.png'
import bordyuri from '@/app/_images/_bordyur/2bordyura.png'
import bloki from '@/app/_images/_bloki/bloki.png'
import cement from '@/app/_images/_cement/meshki.png'

type Products = {
    id: number,
    bgPhoto: StaticImageData,
    name: string,
    URL: string,
}

export const products: Products[] = [
    {
        id: 1,
        bgPhoto: plitki ,
        name: 'ТРОТУАРНАЯ ПЛИТКА',
        URL: '/plitka'

    },
    {
        id: 2,
        bgPhoto: bordyuri ,
        name: 'БОРДЮРЫ',
        URL: '/bordyur'

    },
    {
        id: 3,
        bgPhoto: bloki,
        name: 'БЛОКИ',
        URL: '/bloki'

    },
    {
        id: 4,
        bgPhoto: cement ,
        name: 'ЦЕМЕНТ',
        URL: '/cement'

    }
]