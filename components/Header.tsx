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
            <nav className="container h-[90px] mx-auto flex items-center justify-between py-3 px-6">
                {/* Логотип */}
                <div className="flex items-center justify-center max-w-44 w-full h-auto">{logoLight}</div>

                {/* Гамбургер-кнопка для мобильных устройств */}
                <div className="md:hidden flex items-center">
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
                    } absolute top-[75px] left-0 w-full bg-white flex-col items-center justify-center space-y-4 text-gray-900 md:relative md:flex md:flex-row md:space-x-8 md:space-y-0 md:top-0 md:bg-transparent`}
                >
                    <li className="hover:text-black cursor-pointer">Продукты</li>
                    <li className="hover:text-black cursor-pointer">Стоимость</li>
                    <li className="hover:text-black cursor-pointer">Анализ</li>
                    <li className="hover:text-black cursor-pointer">FAQ</li>
                    <li className="hover:text-black cursor-pointer">Блог</li>
                    <li className="hover:text-black cursor-pointer">О нас</li>
                </ul>

                {/* Кнопки */}
                <div className="hidden md:flex items-center space-x-6 ">
                    <button className="text-gray-800 hover:text-black font-medium">Войти</button>
                    <button className="bg-black w-40 text-white py-2 px-4 font-medium rounded-full hover:bg-gray-800 transition">Создать аккаунт</button>
                    <div className="text-gray-700 font-medium cursor-pointer">RU</div>
                </div>
            </nav>
        </header>
    );
};
