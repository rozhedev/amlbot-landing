"use client";
import React from "react";
import bgPriceBanner from "@/public/img/bg-price-banner.webp";

const PricingBanner = () => {
    return (
        <section className="w-full bg-gray-100 py-16 px-4">
            <div className="max-w-5xl mx-auto">
                <div
                    style={{ backgroundImage: `url(${bgPriceBanner})` }}
                    className="bg-white bg-cover bg-right rounded-3xl shadow-md p-8 md:p-12 relative overflow-hidden"
                >
                    {/* Content */}
                    <div className="relative z-10 max-w-xl">
                        <h2 className="text-5xl md:text-4xl font-black mb-8 text-center md:text-left">Сколько стоит ваше спокойствие?</h2>
                        <div className="mt-5 mb-5 text-4xl font-semibold">От</div>
                        <div className="flex items-center">
                            <div className="flex items-baseline gap-1">
                                <span className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent  text-7xl font-extrabold">$0</span>
                                <span className="bg-gradient-to-r from-fuchsia-500 to-purple-500 bg-clip-text text-transparent text-7xl font-extrabold">.2</span>
                                <span className="text-gray-500 text-3xl font-medium ml-2">/ за проверку</span>
                            </div>
                        </div>
                        <button className="group mt-8 flex items-center text-lg font-bold transition-all duration-300 text-black hover:text-blue-600">
                            Свяжитесь с нами
                            <span className="ml-2 text-lg font-bold transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                        </button>
                    </div>
                </div>
                <div className="mt-32 mb-24 text-center font-medium text-2xl leading-normal">
                    По нашей статистике, <span className="font-bold"> каждый четвертый кошелек — подозрительный. </span>
                    <br />
                    Потратив пару долларов на проверку, вы можете уберечь себя от потерь на <br />
                    несколько тысяч долларов.
                </div>
            </div>
        </section>
    );
};

export default PricingBanner;
