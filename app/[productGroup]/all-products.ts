import bruschatka_kirpichik_krasnaya from '@/app/_images/_bruschatka/bruschatka_krasnaya.webp'
import bruschatka_kirpichik_seraya from '@/app/_images/_bruschatka/bruschatka_seraya.webp'
import bruschatka_kirpichik_korichnevaya from '@/app/_images/_bruschatka/bruschatka_korichnevaya.webp'
import bruschatka_volna_krasnaya from '@/app/_images/_bruschatka/bruschatka_volna_krasnaya.webp'
import bruschatka_volna_seraya from '@/app/_images/_bruschatka/bruschatka_volna_seraya.webp'
import bruschatka_volna_korichnevaya from '@/app/_images/_bruschatka/bruschatka_volna_korichnevaya.webp'

import kvadrat from '@/app/_images/_trotuarPlitka/trotuarPlitkaKvadrat.webp'
import trotuarPlitka_krasnaya from '@/app/_images/_trotuarPlitka/trotuarPlitka_krasnaya.webp'
import trotuarPlitka_korichnevaya from '@/app/_images/_trotuarPlitka/trotuarPlitka_korichnevaya.webp'
import trotuarPlitka_seraya from '@/app/_images/_trotuarPlitka/trotuarPlitkaKvadrat.webp'

import bordyurTrotuarny from '@/app/_images/_bordyur/bordyurTrotuarny.webp'
import bordyurTrotuarny_sery from '@/app/_images/_bordyur/bordyurTrotuarny.webp'
import bodryurTrotuarny_krasny from '@/app/_images/_bordyur/bordyurTrotuarny_krasny.webp'
import bodryurTrotuarny_korichnevy from '@/app/_images/_bordyur/bordyurTrotuarny_korichnevy.webp'

import bordyurDorozhny from '@/app/_images/_bordyur/bordyurDorozhny.webp'

import blokPustotely from '@/app/_images/_bloki/blokPeskoCementnyPustotely.webp'
import blokPolnotely from '@/app/_images/_bloki/blokPeskoCementnyPolnoltely.webp'
import blokKeramzitny from '@/app/_images/_bloki/blokKeramzitny.webp'
import blokPeregorodochny from '@/app/_images/_bloki/blokPeregorodochny.webp'

import cementMeshok from '@/app/_images/_cement/cementMeshok.webp'

import { StaticImageData } from 'next/image'

interface ProductType {
  name: string;
  photo: StaticImageData;
  color: string;
  price: string;
  size: string;
  pallet?: string;
  squareMeters?: string;
  weight?: string;
}

export interface Product {
  id: string;
  URL: string;
  name: string;
  photo: StaticImageData;
  price: string;
  size: string | null;
  types?: ProductType[];
}

type AllProducts = {
    [key: string]: Product[];
}

export const allProducts: AllProducts = {

    plitka: [
        {
            id: 'kirpichik', 
            URL: '/plitka/kirpichik',
            name:'ТРОТУАРНАЯ ПЛИТКА "КИРПИЧИК"',
            photo: bruschatka_kirpichik_seraya,
            price: 'от 900 ₽/М2',
            size: '200 x 100 x 60',
            types: [
                {
                    name: 'ТРОТУАРНАЯ ПЛИТКА "КИРПИЧИК" КРАСНАЯ',
                    photo: bruschatka_kirpichik_krasnaya,
                    color: 'красный',
                    price: '1200 ₽/М2',
                    size: '200 x 100 x 60',
                    pallet: '12 м²',
                    squareMeters: '50 шт',
                    weight: '2,5 кг'
                },
                {
                    name: 'ТРОТУАРНАЯ ПЛИТКА "КИРПИЧИК" СЕРАЯ',
                    photo: bruschatka_kirpichik_seraya,
                    color: 'серый',
                    price: '900 ₽/М2',
                    size: '200 x 100 x 60',
                    pallet: '12 м²',
                    squareMeters: '50 шт',
                    weight: '2,5 кг'
                },
                {
                    name: 'ТРОТУАРНАЯ ПЛИТКА "КИРПИЧИК" КОРИЧНЕВАЯ',
                    photo: bruschatka_kirpichik_korichnevaya,
                    color: 'коричневый',
                    price: '1200 ₽/М2',
                    size: '200 x 100 x 60',
                    pallet: '12 м²',
                    squareMeters: '50 шт',
                    weight: '2,5 кг'
                },
            ]
        },
       /* {
            id: 'volna',
            URL: '/plitka/volna',
            name:'ТРОТУАРНАЯ ПЛИТКА "ВОЛНА"',
            photo: bruschatka_volna_seraya,
            price: 'от 800 ₽/М2',
            size: '245 x 131 x 80',
            types: [
                {
                    name: 'ТРОТУАРНАЯ ПЛИТКА "ВОЛНА" СЕРАЯ',
                    photo: bruschatka_volna_seraya,
                    color: 'серый',
                    price: '800 ₽/М2',
                    size: '245 x 131 x 80',
                },
            ]
        },*/
        {
            id: 'trotuarnaya_plitka',
            URL: '/plitka/trotuarnaya_plitka',
            name: 'ТРОТУАРНАЯ ПЛИТКА "КВАДРАТ"',
            photo: kvadrat,
            price: 'от 850 ₽/М2',
            size: '300 x 300 x 50',
            types: [
                {
                name: 'ТРОТУАРНАЯ ПЛИТКА "КВАДРАТ" КРАСНАЯ',
                photo: trotuarPlitka_krasnaya,   
                color: 'красный',
                price: '1150 ₽/М2',
                size: '300 x 300 x 50',
                pallet: '12 м²',
                squareMeters: '11 шт',
                weight: '10 кг'
            },
            {
                name: 'ТРОТУАРНАЯ ПЛИТКА "КВАДРАТ" СЕРАЯ',
                photo: trotuarPlitka_seraya,
                color: 'серый',
                price: '850 ₽/М2',
                size: '300 x 300 x 50',
                pallet: '12 м²',
                squareMeters: '11 шт',
                weight: '10 кг'
            },
            {
                name: 'ТРОТУАРНАЯ ПЛИТКА "КВАДРАТ" КОРИЧНЕВАЯ',
                photo: trotuarPlitka_korichnevaya,
                color: 'коричневый',
                price: '1150 ₽/М2',
                size: '300 x 300 x 50',
                pallet: '12 м²',
                squareMeters: '11 шт',
                weight: '10 кг'
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
            price: 'от 280 ₽/ШТ',
            size: '1000 x 200 x 80',
            types: [
                {
                name: 'ТРОТУАРНЫЙ БОРДЮР КРАСНЫЙ',
                photo: bodryurTrotuarny_krasny,   
                color: 'красный',
                price: '300 ₽/ШТ',
                size: '1000 x 200 x 80',
                pallet: '42 шт',
                weight: '30 кг'
            },
            {
                name: 'ТРОТУАРНЫЙ БОРДЮР СЕРЫЙ',
                photo: bordyurTrotuarny_sery,
                color: 'серый',
                price: '280 ₽/ШТ',
                size: '1000 x 200 x 80',
                pallet: '42 шт',
                weight: '30 кг'
            },
            {
                name: 'ТРОТУАРНЫЙ БОРДЮР КОРИЧНЕВЫЙ',
                photo: bodryurTrotuarny_korichnevy,
                color: 'коричневый',
                price: '300 ₽/ШТ',
                size: '1000 x 200 x 80',
                pallet: '42 шт',
                weight: '30 кг'
            },
        ]
        },
        {
            id: 'bordyur_dorozhny',
            URL: '/bordyur/bordyur_dorozhny',
            name: 'ДОРОЖНЫЙ БОРДЮР',
            photo: bordyurDorozhny,
            price: '520 ₽/ШТ',
            size: '1000 x 300 x 150',
            types: [
                {
                    name: 'ДОРОЖНЫЙ БОРДЮР',
                    photo: bordyurDorozhny,
                    color: 'серый',
                    price: '520 ₽/ШТ',
                    size: '1000 x 300 x 150',
                    pallet: '21 шт',
                    weight: '96 кг'
                },
            ]
        },
    ],

    bloki: [
        {
            id: 'blok_polnotely',
            URL: 'bloki/blok_polnotely',
            name: 'Блок песко-цементный ПОЛНОТЕЛЫЙ',
            photo: blokPolnotely,
            price: '120 ₽/ШТ',
            size: '390 x 188 x 190',
            types: [
                {
                    name: 'Блок песко-цементный стеновой ПОЛНОТЕЛЫЙ',
                    photo: blokPolnotely,
                    color: 'серый',
                    price: '120 ₽/ШТ',
                    size: '390 x 188 x 190',
                    pallet: '90 шт',
                    weight: '27 кг'
                },
            ] 
        },
        {
            id: 'blok_pustotely',
            URL: 'bloki/blok_pustotely',
            name: 'Блок песко-цементный ПУСТОТЕЛЫЙ',
            photo: blokPustotely,
            price: '110 ₽/ШТ',
            size: '390 x 188 x 190',
            types: [
                {
                    name: 'Блок песко-цементный стеновой ПУСТОТЕЛЫЙ',
                    photo: blokPustotely,
                    color: 'серый',
                    price: '110 ₽/ШТ',
                    size: '390 x 188 x 190',
                    pallet: '90 шт',
                    weight: '19 кг' 
                },
            ] 
        },
       /* {
            id: 'blok_keramzitny',
            URL: 'bloki/blok_keramzitny',
            name: 'Блок керамзитный ПУСТОТЕЛЫЙ',
            photo: blokKeramzitny,
            price: '-',
            size: '390 x 188 x 190',
            types: [
                {
                    name: 'Блок керамзитный стеновой ПУСТОТЕЛЫЙ',
                    photo: blokKeramzitny,
                    color: 'серый',
                    price: '-',
                    size: '390 x 188 x 190',
                },
            ] 
        },*/
        {
            id: 'blok_peregorodochny',
            URL: 'bloki/blok_peregorodochny',
            name: 'Блок песко-цементный ПЕРЕГОРОДОЧНЫЙ',
            photo: blokPeregorodochny,
            price: '50 ₽/ШТ',
            size: '390 x 188 x 90',
            types: [
                {
                    name: 'Блок песко-цементный ПЕРЕГОРОДОЧНЫЙ',
                    photo: blokPeregorodochny,
                    color: 'серый',
                    price: '50 ₽/ШТ',
                    size: '390 x 188 x 90',
                    pallet: '222 шт',
                    weight: '10 кг'
                },
            ] 
        },
    ],
    cement: [
        {
            id: 'cement',
            URL: 'cement/cement',
            name: 'ЦЕМЕНТ М500, 50 кг',
            photo: cementMeshok,
            price: '550 ₽/ШТ',
            size: null,
            types: [
                {
                    name: 'ЦЕМЕНТ "ПОРТЛАНДЦЕМЕНТ М500", 50 кг',
                    photo: cementMeshok,
                    color: 'серый',
                    price: '550 ₽/ШТ',
                    size: '',
                },
            ]  
        }
    ],
}