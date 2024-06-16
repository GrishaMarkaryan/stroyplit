import kirpichik from '@/app/_images/_bruschatka/bruschatkaKirpichik.jpg'
import volna from '@/app/_images/_bruschatka/bruschatkaVolna.jpg'
import bruschatka_kirpichik_krasnaya from '@/app/_images/_bruschatka/bruschatka_krasnaya.jpg'
import bruschatka_kirpichik_seraya from '@/app/_images/_bruschatka/bruschatka_seraya.png'
import bruschatka_kirpichik_korichnevaya from '@/app/_images/_bruschatka/bruschatka_korichnevaya.jpg'
import bruschatka_volna_krasnaya from '@/app/_images/_bruschatka/bruschatka_volna_krasnaya.jpg'
import bruschatka_volna_seraya from '@/app/_images/_bruschatka/bruschatka_volna_seraya.png'
import bruschatka_volna_korichnevaya from '@/app/_images/_bruschatka/bruschatka_volna_korichnevaya.png'

import kvadrat from '@/app/_images/_trotuarPlitka/trotuarPlitkaKvadrat.png'
import trotuarPlitka_krasnaya from '@/app/_images/_trotuarPlitka/trotuarPlitka_krasnaya.png'
import trotuarPlitka_korichnevaya from '@/app/_images/_trotuarPlitka/trotuarPlitka_korichnevaya.png'
import trotuarPlitka_seraya from '@/app/_images/_trotuarPlitka/trotuarPlitkaKvadrat.png'

import bordyurTrotuarny from '@/app/_images/_bordyur/bordyurTrotuarny.jpg'
import bordyurTrotuarny_sery from '@/app/_images/_bordyur/bordyurTrotuarny.jpg'
import bodryurTrotuarny_krasny from '@/app/_images/_bordyur/bordyurTrotuarny_krasny.jpg'
import bodryurTrotuarny_korichnevy from '@/app/_images/_bordyur/bordyurTrotuarny_korichnevy.jpg'

import bordyurDorozhny from '@/app/_images/_bordyur/bordyurDorozhny.png'

import blokPustotely from '@/app/_images/_bloki/blokPeskoCementnyPustotely.png'
import blokPolnotely from '@/app/_images/_bloki/blokPeskoCementnyPolnoltely.png'
import blokKeramzitny from '@/app/_images/_bloki/blokKeramzitny.png'
import blokPeregorodochny from '@/app/_images/_bloki/blokPeregorodochny.png'

import cement from '@/app/_images/_cement/cementMeshok.jpg'

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
                    name: 'БРУСЧАТКА "КИРПИЧИК" КРАСНАЯ',
                    photo: bruschatka_kirpichik_krasnaya,
                    color: 'красный',
                    price: 95,
                    size: '200 x 100 x 60',
                },
                {
                    name: 'БРУСЧАТКА "КИРПИЧИК" СЕРАЯ',
                    photo: bruschatka_kirpichik_seraya,
                    color: 'серый',
                    price: 95,
                    size: '200 x 100 x 60',
                },
                {
                    name: 'БРУСЧАТКА "КИРПИЧИК" КОРИЧНЕВАЯ',
                    photo: bruschatka_kirpichik_korichnevaya,
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
            types: [
                {
                    name: 'БРУСЧАТКА "ВОЛНА" КРАСНАЯ',
                    photo: bruschatka_volna_krasnaya,   
                    color: 'красный',
                    price: 95,
                    size: '245 x 131 x 80',
                },
                {
                    name: 'БРУСЧАТКА "ВОЛНА" СЕРАЯ',
                    photo: bruschatka_volna_seraya,
                    color: 'серый',
                    price: 95,
                    size: '245 x 131 x 80',
                },
                {
                    name: 'БРУСЧАТКА "ВОЛНА" КОРИЧНЕВАЯ',
                    photo: bruschatka_volna_korichnevaya,
                    color: 'коричневый',
                    price: 95,
                    size: '245 x 131 x 80',
                },
            ]
        },
    ],

    plitka: [
        {
            id: 'trotuarnaya_plitka',
            URL: '/plitka/trotuarnaya_plitka',
            name: 'ТРОТУАРНАЯ ПЛИТКА "КВАДРАТ"',
            photo: kvadrat,
            price: 95,
            size: '300 x 300 x 50',
            types: [
                {
                name: 'ТРОТУАРНАЯ ПЛИТКА "КВАДРАТ" КРАСНАЯ',
                photo: trotuarPlitka_krasnaya,   
                color: 'красный',
                price: 95,
                size: '300 x 300 x 50',
            },
            {
                name: 'ТРОТУАРНАЯ ПЛИТКА "КВАДРАТ" СЕРАЯ',
                photo: trotuarPlitka_seraya,
                color: 'серый',
                price: 95,
                size: '300 x 300 x 50',
            },
            {
                name: 'ТРОТУАРНАЯ ПЛИТКА "КВАДРАТ" КОРИЧНЕВАЯ',
                photo: trotuarPlitka_korichnevaya,
                color: 'коричневый',
                price: 95,
                size: '300 x 300 x 50',
            },
        ]
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
            types: [
                {
                name: 'ТРОТУАРНЫЙ БОРДЮР КРАСНЫЙ',
                photo: bodryurTrotuarny_krasny,   
                color: 'красный',
                price: 95,
                size: '1000 x 200 x 80',
            },
            {
                name: 'ТРОТУАРНЫЙ БОРДЮР СЕРЫЙ',
                photo: bordyurTrotuarny_sery,
                color: 'серый',
                price: 95,
                size: '1000 x 200 x 80',
            },
            {
                name: 'ТРОТУАРНЫЙ БОРДЮР КОРИЧНЕВЫЙ',
                photo: bodryurTrotuarny_korichnevy,
                color: 'коричневый',
                price: 95,
                size: '1000 x 200 x 80',
            },
        ]
        },
        {
            id: 'bordyur_dorozhny',
            URL: '/bordyur/bordyur_dorozhny',
            name: 'ДОРОЖНЫЙ БОРДЮР',
            photo: bordyurDorozhny,
            price: 80,
            size: '1000 x 300 x 150',
            types: [
                {
                    name: 'ДОРОЖНЫЙ БОРДЮР',
                    photo: bordyurDorozhny,
                    color: 'серый',
                    price: 95,
                    size: '1000 x 300 x 150',
                },
            ]  // тут должен быть цвет серый только
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
            types: [
                {
                    name: 'Блок песко-цементный стеновой ПОЛНОТЕЛЫЙ',
                    photo: blokPolnotely,
                    color: 'серый',
                    price: 95,
                    size: '390 x 188 x 190',
                },
            ]  // тут должен быть цвет серый только
        },
        {
            id: 'blok_pustotely',
            URL: 'bloki/blok_pustotely',
            name: 'Блок песко-цементный стеновой ПУСТОТЕЛЫЙ',
            photo: blokPustotely,
            price: 80,
            size: '390 x 188 x 190',
            types: [
                {
                    name: 'Блок песко-цементный стеновой ПУСТОТЕЛЫЙ',
                    photo: blokPustotely,
                    color: 'серый',
                    price: 95,
                    size: '390 x 188 x 190',
                },
            ]  // тут должен быть цвет серый только
        },
        {
            id: 'blok_keramzitny',
            URL: 'bloki/blok_keramzitny',
            name: 'Блок керамзитный стеновой ПУСТОТЕЛЫЙ',
            photo: blokKeramzitny,
            price: 80,
            size: '390 x 188 x 190',
            types: [
                {
                    name: 'Блок керамзитный стеновой ПУСТОТЕЛЫЙ',
                    photo: blokKeramzitny,
                    color: 'серый',
                    price: 95,
                    size: '390 x 188 x 190',
                },
            ]  // тут должен быть цвет серый только
        },
        {
            id: 'blok_peregorodochny',
            URL: 'bloki/blok_peregorodochny',
            name: 'Блок песко-цементный ПЕРЕГОРОДОЧНЫЙ',
            photo: blokPeregorodochny,
            price: 40,
            size: '390 x 188 x 90',
            types: [
                {
                    name: 'Блок песко-цементный ПЕРЕГОРОДОЧНЫЙ',
                    photo: blokPeregorodochny,
                    color: 'серый',
                    price: 95,
                    size: '390 x 188 x 90',
                },
            ]  // тут должен быть цвет серый только
        },
    ],
    cement: [
        {
            id: 'cement',
            URL: 'cement/cement',
            name: 'ЦЕМЕНТ',
            photo: cement,
            price: 95,
            size: null,
            types: [
                {
                    name: 'ЦЕМЕНТ',
                    photo: cement,
                    color: 'серый',
                    price: 95,
                    size: '',
                },
            ]  // тут должен быть цвет серый только
        }
    ],
}