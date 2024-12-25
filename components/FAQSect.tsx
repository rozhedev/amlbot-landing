"use client";
import React, { useState } from "react";
import { ChatBubbleLeftIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { faqData } from "@/data/faq";

export const FAQSect = () => {
    const [openItems, setOpenItems] = useState<number[]>([0]);

    const toggleAccordion = (id: number) => {
        setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]));
    };

    return (
        <div className="bg-gray-100">
            <div className="lg:pt-32 lg:pb-36 pt-28 pb-32 px-6">
                <div className="mx-auto max-w-7xl">
                    <h1 className="sect-title lg:mb-20 md:mb-16 mb-10">Популярные вопросы</h1>
                </div>

                <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-[350px,1fr] xl:gap-24 lg:gap-12 gap-16">
                    {/* Left Side - Contact Box */}
                    <div className="bg-blue-50 rounded-3xl lg:px-7 lg:py-9 px-7 py-7 h-fit">
                        <h2 className="text-gray-800 xl:text-2xl text-lg font-semibold mb-2">Ваш вопрос отсутствует в списке?</h2>
                        <p className="xl:text-lg text-base text-gray-600 mb-6">Свяжитесь с нами через мессенджер. Мы на связи <span className="font-semibold">24/7</span>, поэтому любой вопрос можем решить быстро и в формате живого общения.</p>

                        <button className="flex items-center gap-2 bg-white text-blue-500 px-4 py-2 rounded-xl">
                            <ChatBubbleLeftIcon className="w-6 h-6" />
                            <div className="text-left ml-1">
                                <div className="xl:text-lg text-base font-medium">Мы в мессенджере</div>
                                <div className="text-xs font-medium text-gray-400">Ответим в течение 30 сек</div>
                            </div>
                        </button>

                        <p className="lg:text-[13px] font-medium text-gray-600 mt-4">Ответ в ночное время может занять чуть больше времени.</p>
                    </div>

                    {/* Right Side - FAQ Accordion */}
                    <div className="space-y-4">
                        {faqData.map((item) => (
                            <div
                                key={item.id}
                                className="border-b border-gray-200"
                            >
                                <button
                                    className="w-full flex justify-between items-center lg:pt-4 lg:pb-6 pt-3 pb-5 focus:ring-0"
                                    onClick={() => toggleAccordion(item.id)}
                                >
                                    <span className="xl:text-2xl lg:text-xl text-lg font-medium text-left pr-4">{item.question}</span>
                                    <ChevronDownIcon className={`lg:w-8 lg:h-8 lg:min-w-8 lg:min-h-8 w-5 h-5 min-w-5 min-h-5 transition-transform ${openItems.includes(item.id) ? "rotate-180" : ""}`} />
                                </button>

                                {openItems.includes(item.id) && <div className="pb-4 xl:text-xl lg:text-lg text-base text-gray-500 whitespace-pre-line">{item.answer}</div>}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
