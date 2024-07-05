
export default function OurContacts() {
    return (
        <div className="flex flex-col px-[10%] py-14">
            <div className="text-3xl pb-12"> КОНТАКТЫ </div>
            <div className="pb-6">
                <div className="flex flex-col md:flex-row gap-7 md:gap-16 md:mr-5">
                    <div className="flex r gap-2">
                        <div>
                            <div className="flex font-semibold"> г. Сергиев Посад </div>
                            <div className="text-lg"> Производственная зона, 15/1 </div>
                        </div>
                    </div>

                    <div className="flex flex-row md:justify-center items-center gap-4 mr-8">
                        <div className="flex flex-col md:text-lg">
                            <div className="font-medium md:font-semibold"> Связаться с нами </div>
                            <div className="text-green-600"> +7(496)552-21-80 </div>
                            <div className="text-green-600"> +7(903)661-06-54 </div>
                            <div className="text-green-600"> +7(906)774-65-55 </div>
                        </div>
                    </div>
                </div>            </div>
            <div className="relative overflow-hidden">
                <iframe src="https://yandex.ru/map-widget/v1/?ll=38.171689%2C56.369337&mode=search&sctx=ZAAAAAgAEAAaKAoSCZ5eKcsQz0JAEdOgaB7A4EtAEhIJ4nMn2H8d9z8RAhHiytk73j8iBgABAgMEBSgKOABA1QFIAWIecmVsZXZfc2VydmljZV9hcmVhX3BlcmNlbnQ9MTAwagJydZ0BzcxMPaABAKgBAL0BlYRpT8IBAQCCAi%2FQn9GA0L7QuNC30LLQvtC00YHRgtCy0LXQvdC90LDRjyDQt9C%2B0L3QsCwgMTUvMYoCAJICAJoCDGRlc2t0b3AtbWFwcw%3D%3D&sll=38.171689%2C56.369337&sspn=0.014188%2C0.004566&text=%D0%9F%D1%80%D0%BE%D0%B8%D0%B7%D0%B2%D0%BE%D0%B4%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%B0%D1%8F%20%D0%B7%D0%BE%D0%BD%D0%B0%2C%2015%2F1&whatshere%5Bpoint%5D=38.171689%2C56.369337&whatshere%5Bzoom%5D=17&z=16" width="100%" height="400"></iframe>
            </div>
        </div>
    )
}