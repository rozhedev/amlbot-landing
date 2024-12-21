"use client";
import React from "react";
import chain from "@/public/icons/chain.webp";
import portfolio from "@/public/icons/portfolio.webp";
import qrScaner from "@/public/icons/qr_scaner.webp";
import search from "@/public/icons/search.webp";
import shieldWithCheckmark from "@/public/icons/shield_with_checkmark.webp";
import Image from "next/image";

const ServicesSect = () => {
    const services = [
        {
            icon: search,
            alt: "search",
            title: "AML/KYT Скрининг",
            description:
                "API-решения, расширяющие возможности инструментов для обеспечения соответствия требованиям AML в рамках вашей текущей системы. Все транзакции автоматически проверяются на соответствие требованиям AML и FATF и снижают риски вашего бизнеса.",
            darkMode: true,
        },
        {
            icon: qrScaner,
            alt: "qrScaner",
            title: "KYC для бизнеса",
            description:
                "Оптимизированный и автоматизированный процесс верификации позволяет вашему бизнесу быстро привлекать клиентов, снижая ручные усилия и минимизируя риски идентификационного мошенничества и незаконной активности.",
            darkMode: false,
        },
        {
            icon: shieldWithCheckmark,
            alt: "shieldWithCheckmark",
            title: "AML/KYC Процедуры",
            description:
                "Запустите свой криптовалютный проект с легкостью, простотой и уверенностью, используя наш консалтинг по вопросам AML и KYC, обеспечивающий беспрепятственное соблюдение требований и эффективное управление рисками с самого начала.",
            darkMode: false,
        },
        {
            icon: portfolio,
            alt: "portfolio",
            title: "Корпоративные счета на CEX/EMI",
            description: "При помощи наших специалистов вы сможете упростить открытие корпоративного счета на CEX EMI и сосредоточиться на развитии бизнеса в криптоиндустрии.",
            darkMode: false,
        },
        {
            icon: chain,
            alt: "chain",
            title: "Блокчейн-расследования",
            description: "Возврат украденной криптовалюты с помощью экспертных блокчейн-расследований, позволяющих оперативно выявить виновных и отследить средства для их эффективного возврата.",
            darkMode: false,
        },
    ];

    return (
        <section className="w-full bg-gray-100 py-32">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-5xl font-black text-center mb-4">AMLBot Сервисы</h2>
                <p className="text-center mb-16 text-xl">Мы предоставляем полный пакет опций для безопасной работы с криптовалютой</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                    {services.map((item, index) => (
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
                                <button
                                    className={`group flex items-center text-sm font-bold transition-all duration-300
                    ${item.darkMode ? "text-white hover:opacity-90" : "text-blue-700 hover:text-blue-600"}`}
                                >
                                    Узнать больше
                                    <span className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSect;
