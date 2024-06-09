import { StaticImageData } from 'next/image'
import bruschatka from '@/app/_images/bruschatka.jpg'
import trotuarPlitka from '@/app/_images/trotuarPlitka.jpg'
import bordyur from '@/app/_images/bordyur.jpg'
import bloki from '@/app/_images/bloki.jpg'
import cement from '@/app/_images/cement.png'

type Products = {
    id: number,
    bgPhoto: StaticImageData,
    name: string,
    URL: string,
}

export const products: Products[] = [
    {
        id: 1,
        bgPhoto: bruschatka,
        name: 'Брусчатка',
        URL: '/bruschatka',
    },
    {
        id: 2,
        bgPhoto: trotuarPlitka ,
        name: 'Тротуарная плитка',
        URL: '/plitka'

    },
    {
        id: 3,
        bgPhoto: bordyur ,
        name: 'Бордюры',
        URL: '/bordyur'

    },
    {
        id: 4,
        bgPhoto: bloki,
        name: 'Блоки',
        URL: '/bloki'

    },
    {
        id: 5,
        bgPhoto: cement ,
        name: 'Цемент',
        URL: '/cement'

    }
]