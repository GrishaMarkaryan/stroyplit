import kirpichik from '@/app/_images/bruschatkaKirpichik.jpg'
import volna from '@/app/_images/bruschatkaVolna.jpg'
import kvadrat from '@/app/_images/trotuarPlitkaKvadrat.jpg'
import bordyurTrotuarny from '@/app/_images/bordyurTrotuarny.jpg'
import bordyurDorozhny from '@/app/_images/bordyurDorozhny.jpg'
import blokPustotely from '@/app/_images/blokPeskoCementnyPustotely.jpg'
import blokPolnotely from '@/app/_images/blokPeskoCementnyPolnoltely.jpg'
import blokKeramzitny from '@/app/_images/blokKeramzitny.png'
import blokPeregorodochny from '@/app/_images/blokPeregorodochny.jpg'
import cement from '@/app/_images/cementMeshok.jpg'
import { StaticImageData } from 'next/image'


interface ProductType {
  name: string;
  color: string;
  // Assuming there should be a 'photo' property for each type based on the comment
  photo?: string;
}

export interface Product {
  name: string;
  photo: StaticImageData;
  price: number;
  size: string;
  types?: ProductType[];
}

type AllProducts = {
    [key: string]: Product[] | Omit<Product, 'types'>[];
}

export const allProducts: AllProducts = {

    bruschatka: [
        {
            name: 'БРУСЧАТКА "КИРПИЧИК"',
            photo: kirpichik,
            price: 95,
            size: '100 x 100 x 100',
            types: [
                {
                    name: 'БРУСЧАТКА "КИРПИЧИК" КРАСНЫЙ',
                    color: 'красный'    // тут должно быть фото красное / серое / коричневое
                },
                {
                    name: 'БРУСЧАТКА "КИРПИЧИК" Серый',
                    color: 'серый'
                },
                {
                    name: 'БРУСЧАТКА "КИРПИЧИК" КРАСНЫЙ',
                    color: 'коричневый'
                },
            ]
        },
        {
            name: 'БРУСЧАТКА "ВОЛНА"',
            photo: volna,
            price: 95,
            size: '100 x 100 x 100',
            types: [
                {
                    name: 'БРУСЧАТКА "КИРПИЧИК" КРАСНЫЙ',
                    color: 'красный'    // тут должно быть фото красное / серое / коричневое
                },
                {
                    name: 'БРУСЧАТКА "КИРПИЧИК" Серый',
                    color: 'серый'
                },
                {
                    name: 'БРУСЧАТКА "КИРПИЧИК" КРАСНЫЙ',
                    color: 'коричневый'
                },
            ]
        },
    ],

    plitka: [
        {
            name: 'ТРОТУАРНАЯ ПЛИТКА "КВАДРАТ"',
            photo: kvadrat,
            price: 95,
            size: '100 x 100 x 100',
            types: [
                {
                    name: 'БРУСЧАТКА "КИРПИЧИК" КРАСНЫЙ',
                    color: 'красный'    // тут должно быть фото красное / серое / коричневое
                },
                {
                    name: 'БРУСЧАТКА "КИРПИЧИК" Серый',
                    color: 'серый'
                },
                {
                    name: 'БРУСЧАТКА "КИРПИЧИК" КРАСНЫЙ',
                    color: 'коричневый'
                },
            ]
        },
    ],

    bordyur: [
        {
            name: 'ТРОТУАРНЫЙ БОРДЮР',
            photo: bordyurTrotuarny,
            price: 95,
            size: '100 x 100 x 100',
            types: []  // тут должно быть фото красное / серое / коричневое
        },
        {
            name: 'ДОРОЖНЫЙ БОРДЮР',
            photo: bordyurDorozhny,
            price: 80,
            size: '100 x 100 x 100',
            types: []  // тут должно быть фото красное / серое / коричневое
        },
    ],

    bloki: [
        {
            name: 'Блок песко-цементный стеновой ПОЛНОТЕЛЫЙ',
            photo: blokPolnotely,
            price: 95,
            size: '100 x 100 x 100',
            types: []  // тут должно быть фото красное / серое / коричневое
        },
        {
            name: 'Блок песко-цементный стеновой ПУСТОТЕЛЫЙ',
            photo: blokPustotely,
            price: 80,
            size: '100 x 100 x 100',
            types: []  // тут должно быть фото красное / серое / коричневое
        },
        {
            name: 'Блок керамзитный стеновой ПУСТОТЕЛЫЙ',
            photo: blokKeramzitny,
            price: 80,
            size: '100 x 100 x 100',
            types: []  // тут должно быть фото красное / серое / коричневое
        },
        {
            name: 'Блок песко-цементный ПЕРЕГОРОДОЧНЫЙ',
            photo: blokPeregorodochny,
            price: 40,
            size: '100 x 100 x 100',
            types: []  // тут должно быть фото красное / серое / коричневое
        },
    ],
    cement: [
        {
            name: 'ЦЕМЕНТ',
            photo: cement,
            price: 95,
            size: '100 x 100 x 100'
        }
    ],
}