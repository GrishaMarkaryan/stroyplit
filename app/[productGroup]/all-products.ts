import bruschatka_kirpichik_krasnaya from '@/app/_images/_bruschatka/bruschatka_krasnaya.png'
import bruschatka_kirpichik_seraya from '@/app/_images/_bruschatka/bruschatka_seraya.png'
import bruschatka_kirpichik_korichnevaya from '@/app/_images/_bruschatka/bruschatka_korichnevaya.png'
import bruschatka_volna_krasnaya from '@/app/_images/_bruschatka/bruschatka_volna_krasnaya.png'
import bruschatka_volna_seraya from '@/app/_images/_bruschatka/bruschatka_volna_seraya.png'
import bruschatka_volna_korichnevaya from '@/app/_images/_bruschatka/bruschatka_volna_korichnevaya.png'

import kvadrat from '@/app/_images/_trotuarPlitka/trotuarPlitkaKvadrat.png'
import trotuarPlitka_krasnaya from '@/app/_images/_trotuarPlitka/trotuarPlitka_krasnaya.png'
import trotuarPlitka_korichnevaya from '@/app/_images/_trotuarPlitka/trotuarPlitka_korichnevaya.png'
import trotuarPlitka_seraya from '@/app/_images/_trotuarPlitka/trotuarPlitkaKvadrat.png'

import bordyurTrotuarny from '@/app/_images/_bordyur/bordyurTrotuarny.png'
import bordyurTrotuarny_sery from '@/app/_images/_bordyur/bordyurTrotuarny.png'
import bodryurTrotuarny_krasny from '@/app/_images/_bordyur/bordyurTrotuarny_krasny.png'
import bodryurTrotuarny_korichnevy from '@/app/_images/_bordyur/bordyurTrotuarny_korichnevy.png'

import bordyurDorozhny from '@/app/_images/_bordyur/bordyurDorozhny.png'

import blokPustotely from '@/app/_images/_bloki/blokPeskoCementnyPustotely.png'
import blokPolnotely from '@/app/_images/_bloki/blokPeskoCementnyPolnoltely.png'
import blokKeramzitny from '@/app/_images/_bloki/blokKeramzitny.png'
import blokPeregorodochny from '@/app/_images/_bloki/blokPeregorodochny.png'

import cementMeshok from '@/app/_images/_cement/cementMeshok.jpg'

import { StaticImageData } from 'next/image'

interface ProductType {
  name: string;
  photo: StaticImageData;
  color: string;
  price: string;
  size: string;
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
            price: 'от 750 ₽/М2',
            size: '200 x 100 x 60',
            types: [
                {
                    name: 'ТРОТУАРНАЯ ПЛИТКА "КИРПИЧИК" КРАСНАЯ',
                    photo: bruschatka_kirpichik_krasnaya,
                    color: 'красный',
                    price: '950 ₽/М2',
                    size: '200 x 100 x 60',
                },
                {
                    name: 'ТРОТУАРНАЯ ПЛИТКА "КИРПИЧИК" СЕРАЯ',
                    photo: bruschatka_kirpichik_seraya,
                    color: 'серый',
                    price: '750 ₽/М2',
                    size: '200 x 100 x 60',
                },
                {
                    name: 'ТРОТУАРНАЯ ПЛИТКА "КИРПИЧИК" КОРИЧНЕВАЯ',
                    photo: bruschatka_kirpichik_korichnevaya,
                    color: 'коричневый',
                    price: '950 ₽/М2',
                    size: '200 x 100 x 60',
                },
            ]
        },
        {
            id: 'volna',
            URL: '/plitka/volna',
            name:'ТРОТУАРНАЯ ПЛИТКА "ВОЛНА"',
            photo: bruschatka_volna_seraya,
            price: 'от 770 ₽/М2',
            size: '245 x 131 x 80',
            types: [
                {
                    name: 'ТРОТУАРНАЯ ПЛИТКА "ВОЛНА" КРАСНАЯ',
                    photo: bruschatka_volna_krasnaya,   
                    color: 'красный',
                    price: '970 ₽/М2',
                    size: '245 x 131 x 80',
                },
                {
                    name: 'ТРОТУАРНАЯ ПЛИТКА "ВОЛНА" СЕРАЯ',
                    photo: bruschatka_volna_seraya,
                    color: 'серый',
                    price: '770 ₽/М2',
                    size: '245 x 131 x 80',
                },
                {
                    name: 'ТРОТУАРНАЯ ПЛИТКА "ВОЛНА" КОРИЧНЕВАЯ',
                    photo: bruschatka_volna_korichnevaya,
                    color: 'коричневый',
                    price: '970 ₽/М2',
                    size: '245 x 131 x 80',
                },
            ]
        },
        {
            id: 'trotuarnaya_plitka',
            URL: '/plitka/trotuarnaya_plitka',
            name: 'ТРОТУАРНАЯ ПЛИТКА "КВАДРАТ"',
            photo: kvadrat,
            price: 'от 730 ₽/М2',
            size: '300 x 300 x 50',
            types: [
                {
                name: 'ТРОТУАРНАЯ ПЛИТКА "КВАДРАТ" КРАСНАЯ',
                photo: trotuarPlitka_krasnaya,   
                color: 'красный',
                price: '930 ₽/М2',
                size: '300 x 300 x 50',
            },
            {
                name: 'ТРОТУАРНАЯ ПЛИТКА "КВАДРАТ" СЕРАЯ',
                photo: trotuarPlitka_seraya,
                color: 'серый',
                price: '730 ₽/М2',
                size: '300 x 300 x 50',
            },
            {
                name: 'ТРОТУАРНАЯ ПЛИТКА "КВАДРАТ" КОРИЧНЕВАЯ',
                photo: trotuarPlitka_korichnevaya,
                color: 'коричневый',
                price: '930 ₽/М2',
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
            price: 'от 230 ₽/ШТ',
            size: '1000 x 200 x 80',
            types: [
                {
                name: 'ТРОТУАРНЫЙ БОРДЮР КРАСНЫЙ',
                photo: bodryurTrotuarny_krasny,   
                color: 'красный',
                price: '260 ₽/ШТ',
                size: '1000 x 200 x 80',
            },
            {
                name: 'ТРОТУАРНЫЙ БОРДЮР СЕРЫЙ',
                photo: bordyurTrotuarny_sery,
                color: 'серый',
                price: '230 ₽/ШТ',
                size: '1000 x 200 x 80',
            },
            {
                name: 'ТРОТУАРНЫЙ БОРДЮР КОРИЧНЕВЫЙ',
                photo: bodryurTrotuarny_korichnevy,
                color: 'коричневый',
                price: '260 ₽/ШТ',
                size: '1000 x 200 x 80',
            },
        ]
        },
        {
            id: 'bordyur_dorozhny',
            URL: '/bordyur/bordyur_dorozhny',
            name: 'ДОРОЖНЫЙ БОРДЮР',
            photo: bordyurDorozhny,
            price: '450 ₽/ШТ',
            size: '1000 x 300 x 150',
            types: [
                {
                    name: 'ДОРОЖНЫЙ БОРДЮР',
                    photo: bordyurDorozhny,
                    color: 'серый',
                    price: '450 ₽/ШТ',
                    size: '1000 x 300 x 150',
                },
            ]
        },
    ],

    bloki: [
        {
            id: 'blok_polnotely',
            URL: 'bloki/blok_polnotely',
            name: 'Блок песко-цементный стеновой ПОЛНОТЕЛЫЙ',
            photo: blokPolnotely,
            price: '-',
            size: '390 x 188 x 190',
            types: [
                {
                    name: 'Блок песко-цементный стеновой ПОЛНОТЕЛЫЙ',
                    photo: blokPolnotely,
                    color: 'серый',
                    price: '-',
                    size: '390 x 188 x 190',
                },
            ] 
        },
        {
            id: 'blok_pustotely',
            URL: 'bloki/blok_pustotely',
            name: 'Блок песко-цементный стеновой ПУСТОТЕЛЫЙ',
            photo: blokPustotely,
            price: '-',
            size: '390 x 188 x 190',
            types: [
                {
                    name: 'Блок песко-цементный стеновой ПУСТОТЕЛЫЙ',
                    photo: blokPustotely,
                    color: 'серый',
                    price: '-',
                    size: '390 x 188 x 190',
                },
            ] 
        },
        {
            id: 'blok_keramzitny',
            URL: 'bloki/blok_keramzitny',
            name: 'Блок керамзитный стеновой ПУСТОТЕЛЫЙ',
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
        },
        {
            id: 'blok_peregorodochny',
            URL: 'bloki/blok_peregorodochny',
            name: 'Блок песко-цементный ПЕРЕГОРОДОЧНЫЙ',
            photo: blokPeregorodochny,
            price: '-',
            size: '390 x 188 x 90',
            types: [
                {
                    name: 'Блок песко-цементный ПЕРЕГОРОДОЧНЫЙ',
                    photo: blokPeregorodochny,
                    color: 'серый',
                    price: '-',
                    size: '390 x 188 x 90',
                },
            ] 
        },
    ],
    cement: [
        {
            id: 'cement',
            URL: 'cement/cement',
            name: 'ЦЕМЕНТ',
            photo: cementMeshok,
            price: '500 ₽/ШТ',
            size: null,
            types: [
                {
                    name: 'ЦЕМЕНТ "ПОРТЛАНДЦЕМЕНТ М500", 50 кг',
                    photo: cementMeshok,
                    color: 'серый',
                    price: '500 ₽/ШТ',
                    size: '',
                },
            ]  
        }
    ],
}