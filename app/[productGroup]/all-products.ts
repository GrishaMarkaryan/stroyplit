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

type PhotoType = string;

interface ProductType {
  name: string;
  color: string;
  // Assuming there should be a 'photo' property for each type based on the comment
  photo?: PhotoType;
}

interface Product {
  name: string;
  photo: StaticImageData;
  price: number;
  size: string;
  types?: ProductType[];
}

type AllProducts = {
    'bruschatka': Product[];
    'plitka': Product[];
    'bordyur': Product[];
    'bloki': Product[];
    'cement': Omit<Product, 'types'>[];
}

export const allProducts: AllProducts = {     // здесь исправить тип, если any написать то не будет ошибки

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

{/*
    In this type definition:

PhotoType is a type alias for a string, which is used to represent the photo URLs.
ProductType describes the structure of the types array within each product, including an optional photo property as suggested by the comment in the code.
Product describes the structure of each product, including a types array which is an array of ProductType.
AllProducts describes the structure of the allProducts object, with keys for each product category and values that are arrays of Product. For the CEMENT category, we use Omit to exclude the types property since it's not present in the cement products.
Please note that I've made an assumption that the photo properties are of type string. If they are meant to be a different type (e.g., an object representing an image), you should adjust the PhotoType accordingly. Additionally, the types property for Product is marked as optional (types?) because some products do not have this property, as seen in the BORDYUR and BLOKI categories.

*/}