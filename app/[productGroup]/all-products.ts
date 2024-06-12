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
import bruschatka_krasnaya from '@/app/_images/bruschatka_krasnaya.jpg'
import bruschatka_seraya from '@/app/_images/bruschatka_seraya.png'
import bruschatka_korichnevaya from '@/app/_images/bruschatka_korichnevaya.jpg'

import { StaticImageData } from 'next/image'


interface ProductType {
  name: string;
  photo: StaticImageData | null; // change to StaticImageData
  color: string;
  price: number;
  size: string;
}

export interface Product {
  id: string;
  URL: string;
  name: string;
  photo: StaticImageData;
  price: number;
  size: string | null;
  types?: ProductType[];
}

type AllProducts = {
    [key: string]: Product[] | Omit<Product, 'types'>[];
}

export const allProducts: AllProducts = {

    bruschatka: [
        {
            id: 'kirpichik', 
            URL: '/bruschatka/kirpichik',
            name:'БРУСЧАТКА "КИРПИЧИК"',
            photo: kirpichik,
            price: 95,
            size: '200 x 100 x 60',
            types: [
                {
                    name: 'БРУСЧАТКА "КИРПИЧИК" КРАСНЫЙ',
                    photo: bruschatka_krasnaya,   // тут должно быть фото красное / серое / коричневое
                    color: 'красный',
                    price: 95,
                    size: '200 x 100 x 60',
                },
                {
                    name: 'БРУСЧАТКА "КИРПИЧИК" СЕРЫЙ',
                    photo: bruschatka_seraya,
                    color: 'серый',
                    price: 95,
                    size: '200 x 100 x 60',
                },
                {
                    name: 'БРУСЧАТКА "КИРПИЧИК" КОРИЧНЕВЫЙ',
                    photo: bruschatka_korichnevaya,
                    color: 'коричневый',
                    price: 95,
                    size: '200 x 100 x 60',
                },
            ]
        },
        {
            id: 'volna',
            URL: '/bruschatka/volna',
            name:'БРУСЧАТКА "ВОЛНА"',
            photo: volna,
            price: 95,
            size: '245 x 131 x 80',
            types: [] // тут должно быть фото красное / серое / коричневое
        },
    ],

    plitka: [
        {
            id: 'plitka',
            URL: '',
            name: 'ТРОТУАРНАЯ ПЛИТКА "КВАДРАТ"',
            photo: kvadrat,
            price: 95,
            size: '300 x 300 x 50',
            types: [] // тут должно быть фото красное / серое / коричневое
        },
    ],

    bordyur: [
        {
            id: 'bordyur_trotuarny',
            URL: '/bordyur/bordyur_trotuarny',
            name: 'ТРОТУАРНЫЙ БОРДЮР',
            photo: bordyurTrotuarny,
            price: 95,
            size: '1000 x 200 x 80',
            types: []  // тут должно быть фото красное / серое / коричневое
        },
        {
            id: 'bordyur_dorozhny',
            URL: '/bordyur/bordyur_dorozhny',
            name: 'ДОРОЖНЫЙ БОРДЮР',
            photo: bordyurDorozhny,
            price: 80,
            size: '1000 x 300 x 150',
            types: []  // тут должно быть фото красное / серое / коричневое
        },
    ],

    bloki: [
        {
            id: 'blok_polnotely',
            URL: 'bloki/blok_polnotely',
            name: 'Блок песко-цементный стеновой ПОЛНОТЕЛЫЙ',
            photo: blokPolnotely,
            price: 95,
            size: '390 x 188 x 190',
            types: []  // тут должно быть фото красное / серое / коричневое
        },
        {
            id: 'blok_pustotely',
            URL: 'bloki/blok_pustotely',
            name: 'Блок песко-цементный стеновой ПУСТОТЕЛЫЙ',
            photo: blokPustotely,
            price: 80,
            size: '390 x 188 x 190',
            types: []  // тут должно быть фото красное / серое / коричневое
        },
        {
            id: 'blok_keramzitny',
            URL: 'bloki/blok_keramzitny',
            name: 'Блок керамзитный стеновой ПУСТОТЕЛЫЙ',
            photo: blokKeramzitny,
            price: 80,
            size: '390 x 188 x 190',
            types: []  // тут должно быть фото красное / серое / коричневое
        },
        {
            id: 'blok_peregorodochny',
            URL: 'bloki/blok_peregorodochny',
            name: 'Блок песко-цементный ПЕРЕГОРОДОЧНЫЙ',
            photo: blokPeregorodochny,
            price: 40,
            size: '390 x 188 x 90',
            types: []  // тут должно быть фото красное / серое / коричневое
        },
    ],
    cement: [
        {
            id: 'cement',
            URL: '',
            name: 'ЦЕМЕНТ',
            photo: cement,
            price: 95,
            size: null,
        }
    ],
}