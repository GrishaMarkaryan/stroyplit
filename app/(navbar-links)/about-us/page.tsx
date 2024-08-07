'use client'
import SliderImages from "@/app/_components/slider"

export default function AboutUs() {
    return (
        <div className="w-full my-[15px] md:my-[70px]">
            <div className="bg-gray-300 px-[10%] ">
                <SliderImages />

            </div>
            <div className="px-[10%] ">
                <div className="py-10 text-4xl"> О компании </div>
                <div className="flex flex-col pb-10 text-xl gap-4">
                    <div>
                        Компания «Стройплит» предлагает купить тротуарную плитку, бордюры, строительные блоки для облицовки дорог и троп, возведения стен, а также облагораживания Вашего участка.
                        Мы гарантируем качество и долговечность наших изделий.
                    </div>
                    <div>
                        Производство было открыто в 2005 году. Первоначально мы выпускали только небольшие партии.
                        Постепенно мы приобретали новое оборудование и создали массовое производство прочных и долговечных продуктов.
                    </div>
                    <div>
                        Каждый клиент для нас – партнер, с уникальными потребностями и видением.
                        Мы ценим индивидуальный подход и готовы предложить персонализированные решения, которые помогут воплотить в жизнь самые смелые идеи и проекты.
                    </div>
                    <div>
                        Полный список услуг и цены продукции доступны на нашем сайте.
                    </div>
                </div>
            </div>
        </div>

    )
}