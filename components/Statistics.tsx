"use client";
import Image from "next/image";
import React from "react";
import BinanceWhiteLogo from "@/public/icons/binance-white-logo.svg";
import OkxWhiteLogo from "@/public/icons/okx-white-logo.svg";
import HuobiWhiteLogo from "@/public/icons/huobi-white-logo.svg";

export const Statistics = () => {
    const content = [
        {
            value: "+$100 000 000",
            description: "Количество обнаруженных рискованных активов",
        },
        {
            value: (
                <div className="flex sm:flex-row flex-col lg:justify-start justify-center items-center gap-5">
                    <Image
                        src={BinanceWhiteLogo}
                        alt="Binance"
                        className="w-auto h-7"
                    />
                    <Image
                        src={OkxWhiteLogo}
                        alt="OKX"
                        className="w-auto h-7"
                    />
                    <Image
                        src={HuobiWhiteLogo}
                        alt="Huobi"
                        className="w-auto h-7"
                    />
                </div>
            ),
            description: "Compliance отдел, который соответствует AML требованиям",
        },
        {
            value: "60,000+",
            description: "Провайдеров проверенно",
        },
    ];

    return (
        <section className="w-full bg-[#2e4cf7] xl:py-24 lg:py-20 py-16">
            <div className="container mx-auto px-8">
                <div className="lg:grid lg:grid-cols-3 flex flex-col items-center items-top lg:gap-10 gap-8">
                    {content.map((stat, index) => (
                        <div
                            key={index}
                            className="flex flex-col"
                        >
                            <div
                                className={`text-white xl:text-5xl lg:text-4xl text-2xl font-bold xl:mb-6 mb-4 xl:text-start text-center ${index === 0 ? "font-black" : "font-semibold"}
                                `}
                            >
                                {stat.value}
                            </div>
                            <p className="text-white xl:text-2xl lg:text-lg text-base leading-relaxed xl:text-start text-center max-w-md">{stat.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
