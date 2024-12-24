"use client";
import React from "react";
import Image from "next/image";
import promoMockup from "@/public/products/promo_mockup.webp";
import { ArrowBtn } from "./ui";

export const Promo = () => {
    return (
        <section className="pt-32 pb-16 bg-gray-100">
            <div className="container mx-auto px-6 lg:flex lg:items-center lg:justify-between">
                {/* Текстовый блок */}
                <div className="lg:w-1/2 mb-10 lg:mb-0">
                    <h2 className="text-6xl lg:text-5xl font-black text-gray-900 leading-tight mb-6">
                        Комплексный <br /> комплаенс продукт <br /> для крипто бизнеса
                    </h2>
                    <p className="text-gray-900 text-2xl font-medium mb-8">
                        AMLBot автоматизирует AML / KYC <br /> процедуры и снижает расходы на <br />
                        соблюдение требований законодательства.
                    </p>

                    {/* Кнопки */}
                    <div className="flex items-center space-x-4 gap-6">
                        <button className="bg-blue-600 text-white py-5 px-7 rounded-full text-xl font-bold hover:bg-blue-700 transition-colors">Запросить демо</button>
                        <ArrowBtn
                            label="Чат-бот"
                            btnTextColor="text-xl text-gray-900 hover:text-blue-700"
                        />
                    </div>
                </div>

                {/* Блок изображения */}
                <div className="lg:w-[75%] bg-transparent flex justify-center ml-20">
                    <Image
                        src={promoMockup}
                        priority={true}
                        alt="Product Dashboard"
                        className="w-full max-w-5xl"
                    />
                </div>
            </div>
        </section>
    );
};
