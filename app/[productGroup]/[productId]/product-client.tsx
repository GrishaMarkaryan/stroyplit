'use client'

import { useState } from "react"
import Image, { StaticImageData } from "next/image"
import { RiWhatsappFill } from "react-icons/ri"
import Colors from "@/app/_components/colors"

// ===== Типы =====

export type ProductType = {
  name: string
  color: string
  size?: string
  price: string | number
  photo: StaticImageData
}

export type Product = {
  id: string
  name: string
  types?: ProductType[]
}

// ===== Пропсы клиента =====

interface ProductClientProps {
  product: Product | null
  productGroup: string
  productId: string
}

export default function ProductClient({
  product,
  productGroup,
  productId,
}: ProductClientProps) {
  const [color, setColor] = useState("серый")

  const productTypes = product?.types?.filter((item) => item.color === color)

  if (!product) {
    return <div className="text-center text-xl p-10">Товар не найден</div>
  }

  return (
    <div>
      <div className="flex justify-center items-center text-2xl p-4 md:ml-24 m-2 md:m-7 md:bg-slate-200 rounded-xl w-fit md:w-2/5">
        {productTypes?.map((item) => item.name).join(", ")}
      </div>

      <div className="flex justify-left flex-wrap gap-16 mx-4 xl:mx-24">
        {productTypes?.map((item) => (
          <div
            key={item.name}
            className="flex flex-col md:flex-row mx-5 xl:mx-28 md:p-3 md:w-full relative"
          >
            <div className="w-fit">
              <Image
                src={item.photo}
                alt={item.name}
                className="border-2 rounded-3xl bg-stone-200"
                height={350}
                width={350}
              />
            </div>

            <div className="flex flex-col justify-between md:ml-12 gap-3 md:gap-7 py-3 md:py-12">
              {productId !== "cement" && (
                <div className="flex gap-3 text-xl">
                  <div className="font-semibold">Размер:</div>
                  <div>{item.size}</div>
                </div>
              )}

              {productGroup !== "cement" && (
                <div>
                  <div className="flex items-center gap-5 text-xl">
                    <div className="font-medium">Цвет:</div>
                    <div className="border-2 rounded-3xl w-fit py-3 px-4 bg-white">
                      {color}
                    </div>
                  </div>
                  <Colors
                    setColor={setColor}
                    productId={productId}
                    productGroup={productGroup}
                  />
                </div>
              )}

              <div className="flex items-center gap-3 mt-2 text-xl">
                <div className="font-medium">ЦЕНА:</div>
                <div className="text-blue-700">{item.price}</div>
              </div>

              <a
                href="https://wa.me/79036610654"
                target="_blank"
                className="flex justify-center items-center gap-5 border-2 rounded-3xl mt-3 px-4 py-3 md:py-5 bg-green-500 text-white"
              >
                <div className="text-xl">Заказать</div>
                <RiWhatsappFill size={35} color="white" />
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="text-3xl m-10">Доставка:</div>
      <div className="text-xl m-10">
        Условия доставки согласовываются индивидуально
      </div>
    </div>
  )
}
