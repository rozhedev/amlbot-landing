"use client";
import React from "react";
import { ArrowBtn } from "./ui";

// TODO Create adaptive versions
export const PricingBanner = () => {
    return (
        <section className="w-full bg-gray-100 py-16 px-4">
            <div className="max-w-3xl lg:max-w-5xl mx-auto">
                <div className={`bg-white md:bg-[url('../public/img/bg-price-banner.webp')] bg-right-bottom bg-contain bg-no-repeat rounded-3xl shadow-md p-8 md:p-12 relative`}>
                    {/* Content */}
                    <div className="flex flex-col md:items-start items-center relative z-10 max-w-xl">
                        <h2 className="sect-title md:text-4xl md:mb-8 mb-6 md:text-left">Сколько стоит ваше спокойствие?</h2>
                        <div className="mt-5 mb-5 md:text-4xl text-3xl font-semibold">От</div>
                        <div className="flex items-center">
                            <div className="flex items-baseline gap-1">
                                <span className="md:text-7xl text-5xl bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent font-extrabold">$0</span>
                                <span className="md:text-7xl text-5xl bg-gradient-to-r from-fuchsia-500 to-purple-500 bg-clip-text text-transparent font-extrabold">.2</span>
                                <span className="text-gray-500 md:text-3xl text-2xl font-medium ml-2">/ за проверку</span>
                            </div>
                        </div>
                        <ArrowBtn
                            label="Свяжитесь с нами"
                            btnTextColor="text-lg md:mt-16 mt-8 text-black hover:text-blue-600"
                        />
                    </div>
                </div>
                <div className="lg:mt-32 lg:mb-24 md:mt-28 md:mb-20 mt-24 mb-16 text-center font-medium lg:text-2xl md:text-xl text-lg leading-normal">
                    По нашей статистике, <span className="font-bold"> каждый четвертый кошелек — подозрительный. </span>
                    <br />
                    Потратив пару долларов на проверку, вы можете уберечь себя от потерь на <br />
                    несколько тысяч долларов.
                </div>
            </div>
        </section>
    );
};
