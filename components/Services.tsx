"use client";
import React from "react";
import Image from "next/image";
import { servicesContent } from "@/data/services";
import { ArrowBtn } from "./ui";

export const ServicesSect = () => {
    return (
        <section className="w-full bg-gray-100 py-32">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="sect-title font-black mb-4">AMLBot Сервисы</h2>
                <p className="text-center lg:mb-16 mb-12 lg:text-xl text-base">Мы предоставляем полный пакет опций для безопасной работы с криптовалютой</p>

                <div className="grid grid-cols-1 xl:grid-cols-5 md:grid-cols-2 gap-6">
                    {servicesContent.map((item, index) => (
                        <div
                            key={index}
                            className={`rounded-2xl p-6 h-full flex flex-col 
                ${item.darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800 hover:shadow-xl transition-shadow duration-300"}`}
                        >
                            <div className="text-3xl mb-4">
                                <Image
                                    className="w-16"
                                    src={item.icon}
                                    alt={item.alt}
                                />
                            </div>
                            <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                            <p className={`text-sm font-medium ${item.darkMode ? "text-gray-100" : "text-gray-700"}`}>{item.description}</p>
                            <div className="mt-auto pt-6">
                                <ArrowBtn
                                    label="Узнать больше"
                                    btnTextColor={item.darkMode ? "text-white hover:opacity-90" : "text-blue-700 hover:text-blue-600"}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
