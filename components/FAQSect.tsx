"use client";
import React, { useState } from "react";
import { ChatBubbleLeftIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { faqData } from "@/data/faq";

const FAQSect = () => {
    const [openItems, setOpenItems] = useState<number[]>([1]);

    const toggleAccordion = (id: number) => {
        setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]));
    };

    return (
        <div className="bg-gray-100">
            <div className="pt-12 pb-20 px-6">
                <div className="mx-auto max-w-7xl">
                    <h1 className="text-4xl font-bold mb-8">Популярные вопросы</h1>
                </div>

                <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-[350px,1fr] gap-6">
                    {/* Left Side - Contact Box */}
                    <div className="bg-blue-50 rounded-lg p-6 h-fit">
                        <h2 className="text-xl font-medium mb-2">Ваш вопрос отсутствует в списке?</h2>
                        <p className="text-gray-600 mb-6">Свяжитесь с нами через мессенджер. Мы на связи 24/7, поэтому любой вопрос можем решить быстро и в формате живого общения.</p>

                        <button className="flex items-center gap-2 bg-white text-blue-500 px-4 py-2 rounded-lg">
                            <ChatBubbleLeftIcon className="w-5 h-5" />
                            <div className="text-left">
                                <div>Мы в мессенджере</div>
                                <div className="text-sm text-gray-500">Ответим в течение 30 сек</div>
                            </div>
                        </button>

                        <p className="text-sm text-gray-500 mt-4">Ответ в ночное время может занять чуть больше времени.</p>
                    </div>

                    {/* Right Side - FAQ Accordion */}
                    <div className="space-y-4">
                        {faqData.map((item) => (
                            <div
                                key={item.id}
                                className="border-b border-gray-200"
                            >
                                <button
                                    className="w-full flex justify-between items-center py-4"
                                    onClick={() => toggleAccordion(item.id)}
                                >
                                    <span className="text-lg font-medium text-left">{item.question}</span>
                                    <ChevronDownIcon className={`w-5 h-5 transition-transform ${openItems.includes(item.id) ? "rotate-180" : ""}`} />
                                </button>

                                {openItems.includes(item.id) && <div className="pb-4 text-gray-600 whitespace-pre-line">{item.answer}</div>}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQSect;
