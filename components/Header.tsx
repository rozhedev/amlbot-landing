"use client";
import React, { useState } from "react";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="fixed bg-white top-0 left-0 w-full shadow-sm z-50">
            <nav className="container h-[75px] mx-auto flex items-center justify-between py-3 px-6">
                {/* Логотип */}
                <div className="flex items-center justify-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 160 33"
                        aria-label="AMLBot"
                        style={{
                            maxWidth: 180,
                            maxHeight: 90,
                            width: "100%",
                            height: "auto",
                        }}
                    >
                        <path
                            fill="#000"
                            d="M39.545 29h-6.818l7.681-23.273h8.637L56.727 29h-6.819l-5.09-16.864h-.182L39.545 29Zm-1.273-9.182H51.09v4.727H38.272v-4.727ZM58.968 5.727h7.864L72.24 18.91h.272l5.41-13.182h7.863V29h-6.182V15.545h-.181L74.24 28.818h-3.728l-5.181-13.364h-.182V29h-6.182V5.727ZM88.78 29V5.727H95.1v18.182h9.409v5.09H88.781ZM107.062 29V5.727h10.091c1.772 0 3.261.239 4.466.716 1.212.477 2.125 1.151 2.738 2.023.621.87.932 1.897.932 3.08 0 .855-.189 1.636-.568 2.34a5.016 5.016 0 0 1-1.568 1.773c-.675.47-1.462.795-2.364.977v.227c1 .038 1.909.292 2.727.762a5.221 5.221 0 0 1 1.955 1.92c.485.81.727 1.765.727 2.864 0 1.273-.333 2.405-1 3.398-.659.992-1.598 1.772-2.818 2.34-1.22.569-2.674.853-4.364.853h-10.954Zm6.318-5.046h2.955c1.06 0 1.856-.197 2.386-.59.53-.402.795-.993.795-1.773 0-.546-.125-1.008-.375-1.387-.25-.378-.606-.666-1.068-.863-.454-.197-1.004-.296-1.648-.296h-3.045v4.91Zm0-8.818h2.591c.553 0 1.042-.087 1.466-.261.424-.175.754-.425.988-.75.243-.334.364-.739.364-1.216 0-.72-.258-1.27-.773-1.648-.515-.386-1.166-.58-1.954-.58h-2.682v4.455ZM136.937 29.318c-1.894 0-3.515-.375-4.864-1.125a7.74 7.74 0 0 1-3.102-3.16c-.72-1.355-1.08-2.927-1.08-4.715 0-1.788.36-3.356 1.08-4.705a7.651 7.651 0 0 1 3.102-3.159c1.349-.757 2.97-1.136 4.864-1.136 1.894 0 3.515.379 4.863 1.136a7.647 7.647 0 0 1 3.103 3.16c.719 1.348 1.079 2.916 1.079 4.704 0 1.788-.36 3.36-1.079 4.716a7.737 7.737 0 0 1-3.103 3.159c-1.348.75-2.969 1.125-4.863 1.125Zm.045-4.636c.531 0 .989-.178 1.375-.534.387-.357.686-.864.898-1.523.212-.66.318-1.443.318-2.352 0-.917-.106-1.701-.318-2.353-.212-.659-.511-1.166-.898-1.523a1.959 1.959 0 0 0-1.375-.534c-.56 0-1.041.178-1.443.535-.401.356-.708.863-.92 1.522-.213.652-.319 1.436-.319 2.352 0 .91.106 1.694.319 2.353.212.659.519 1.166.92 1.523.402.356.883.534 1.443.534ZM158.937 11.545v4.546h-11.5v-4.546h11.5Zm-9.273-4.182h6.273v16.023c0 .243.041.447.125.614.083.159.212.28.386.363.174.076.398.114.671.114.189 0 .409-.023.659-.068.257-.046.447-.083.568-.114l.909 4.41c-.28.083-.682.185-1.205.306-.515.121-1.128.2-1.84.239-1.44.076-2.648-.072-3.625-.443-.978-.38-1.713-.974-2.205-1.784-.492-.811-.731-1.826-.716-3.046V7.363Z"
                        ></path>
                        <path
                            fill="#0057FF"
                            fill-rule="evenodd"
                            d="M14.555 1.543c-1.43-2.105-4.566-2.046-5.915.112L.531 14.63a3.49 3.49 0 0 0 .037 3.759l8.487 13.014c1.39 2.13 4.526 2.13 5.915 0l8.462-12.975a3.49 3.49 0 0 0-.036-3.87L14.555 1.543Zm.968 7.687c-.305 5.437-4.595 9.816-10.012 10.294l6.502 9.97 8.462-12.974-4.952-7.29Z"
                            clip-rule="evenodd"
                        ></path>
                    </svg>
                </div>

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
                    } absolute top-[75px] left-0 w-full bg-white flex-col items-center justify-center space-y-4 text-gray-600 md:relative md:flex md:flex-row md:space-x-8 md:space-y-0 md:top-0 md:bg-transparent`}
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

export default Header;
