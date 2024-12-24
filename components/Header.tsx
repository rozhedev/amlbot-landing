"use client";
import React, { useState } from "react";
import { logoLight } from "@/data/svg-icons";

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="fixed bg-white top-0 left-0 w-full shadow-sm z-50">
            <nav className="container lg:h-[90px] h-[72px] mx-auto flex items-center justify-between py-3 px-6">
                {/* Логотип */}
                <div className="flex items-center justify-center xl:max-w-44 lg:max-w-36 max-w-32 w-full h-auto">{logoLight}</div>

                {/* Гамбургер-кнопка для мобильных устройств */}
                <div className="lg:hidden flex items-center">
                    <button
                        onClick={toggleMenu}
                        className="text-gray-800 hover:text-black focus:outline-none"
                    >
                        {isMenuOpen ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Навигационные ссылки */}
                <ul
                    className={`${
                        isMenuOpen ? "flex" : "hidden"
                    } absolute top-[72px] left-0 w-full bg-white flex-col items-center justify-center space-y-4 text-gray-900 lg:relative lg:flex lg:flex-row lg:space-x-8 lg:space-y-0 lg:top-0 lg:bg-transparent lg:pt-0 pt-4 lg:pb-0 pb-6`}
                >
                    <li className="hover:text-black cursor-pointer">Продукты</li>
                    <li className="hover:text-black cursor-pointer">Стоимость</li>
                    <li className="hover:text-black cursor-pointer">Анализ</li>
                    <li className="hover:text-black cursor-pointer">FAQ</li>
                    <li className="hover:text-black cursor-pointer">Блог</li>
                    <li className="hover:text-black cursor-pointer">О нас</li>
                </ul>

                {/* Кнопки */}
                <div className="hidden lg:flex items-center space-x-6">
                    <button className="min-w-48 inline-flex justify-center bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 font-medium rounded-full transition">Проверить кошелёк</button>
                    <div className="text-gray-700 font-medium cursor-pointer">RU</div>
                </div>
            </nav>
        </header>
    );
};
