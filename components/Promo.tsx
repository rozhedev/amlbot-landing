"use client";
import React from "react";
import Image from "next/image";
import promoMockup from "@/public/products/promo_mockup.webp";
import { ArrowBtn } from "./ui";

export const Promo = () => {
    return (
        <section className="pt-20 md:pt-24 lg:pt-32 pb-12 lg:pb-16 bg-gray-100">
            <div className="container mx-auto px-6 lg:flex lg:items-center lg:justify-between sm:px-6">
                {/* Текстовый блок */}
                <div className="lg:w-1/2 lg:mb-0 mb-10 lg:flex-row lg:items-center lg:justify-between">
                    <h2
                        className="
                    2xl:text-5xl xl:text-4xl text-3xl md:mb-6 mb-4 font-black text-gray-900 leading-tight lg:text-left text-center
                    lg:mt-0 mt-8"
                    >
                        Комплексный комплаенс продукт для крипто бизнеса
                    </h2>
                    <p className="text-gray-900 font-medium mb-8 xl:text-2xl lg:text-xl   text-lg sm:mb-8 lg:text-left text-center">
                        AMLBot автоматизирует AML / KYC процедуры и снижает расходы на соблюдение требований законодательства.
                    </p>

                    {/* Кнопки */}
                    <div className="flex justify-center lg:justify-start items-center space-x-4 sm:gap-6 gap-2">
                        <button className="xl:py-5 xl:px-7 py-3 px-5 xl:text-xl md:text-base sm:text-lg bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold transition-colors">
                            Проверить кошелёк
                        </button>
                        <ArrowBtn
                            label="Чат-бот"
                            btnTextColor="xl:text-xl md:text-base sm:text-lg text-gray-900 hover:text-blue-700"
                        />
                    </div>
                </div>

                {/* Блок изображения */}
                <div className="lg:w-[75%] w-[100%] bg-transparent flex justify-center lg:ml-20 lg:mt-0 sm:mt-8">
                    <Image
                        src={promoMockup}
                        priority={true}
                        alt="Product Dashboard"
                        className="w-full max-w-5xl sm:max-w-xl lg:max-w-5xl"
                    />
                </div>
            </div>
        </section>
    );
};
