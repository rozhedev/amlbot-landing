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
                <div className="flex items-center gap-4">
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
        <section className="w-full bg-[#2563EB] py-24">
            <div className="container mx-auto px-8">
                <div className="grid grid-cols-3 items-top gap-12">
                    {content.map((stat, index) => (
                        <div
                            key={index}
                            className="flex flex-col"
                        >
                            <div className={`text-white text-5xl font-bold mb-6 ${index === 0 ? "font-black" : "font-semibold"}`}>{stat.value}</div>
                            <p className="text-white text-2xl leading-relaxed max-w-md">{stat.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
