import React from "react";
import Image from "next/image";
import promoMockup from "@/public/products/promo_mockup.webp";

const Promo = () => {
    return (
        <section className="pt-32 pb-16 bg-gray-100">
            <div className="container mx-auto px-6 lg:flex lg:items-center lg:justify-between">
                {/* Текстовый блок */}
                <div className="lg:w-1/2 mb-10 lg:mb-0">
                    <h2 className="text-6xl lg:text-6xl font-black text-gray-900 leading-tight mb-6">
                        Комплексный <br /> комплаенс продукт <br /> для крипто бизнеса
                    </h2>
                    <p className="text-gray-900 text-2xl font-medium mb-8">AMLBot автоматизирует AML / KYC <br /> процедуры и снижает расходы на <br />соблюдение требований законодательства.</p>
                    {/* Кнопки */}
                    <div className="flex space-x-4">
                        <button className="bg-blue-600 text-white py-4 px-6 rounded-full text-lg font-bold hover:bg-blue-700 transition">Запросить демо</button>
                        <button className="text-gray-900 py-3 px-6 rounded-lg font-bold hover:underline">Чат-бот →</button>
                    </div>
                </div>

                {/* Блок изображения */}
                <div className="lg:w-[75%] bg-transparent flex justify-center">
                    <Image
                        src={promoMockup} /* Замените на реальный скриншот */
                        alt="Product Dashboard"
                        className="w-full max-w-5xl -mr-20"
                    />
                </div>
            </div>
        </section>
    );
};

export default Promo;
