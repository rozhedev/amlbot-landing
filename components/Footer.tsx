import React from "react";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-black text-gray-400 py-16">
            <div className="max-w-7xl mx-auto px-4">
                {/* Header Section */}
                <div className="flex flex-wrap justify-between items-start mb-16">
                    {/* Logo and Address */}
                    <div className="w-full md:w-auto mb-8 md:mb-0">
                        <Link
                            href="/"
                            className="flex items-center mb-4"
                        >
                            <div className="text-white text-2xl font-bold mr-2">◆</div>
                            <div className="text-white text-2xl font-bold">AMLBot</div>
                        </Link>
                        <div className="text-sm max-w-xs">
                            <div className="text-gray-500 font-medium mb-2">SAFELEMENT LIMITED.</div>
                            <div>OFFICE 1111, SUITE 1102, LEE GARDEN ONE, 33 HYSAN AVENUE, CAUSEWAY BAY, HONG KONG</div>
                        </div>
                    </div>

                    {/* Certificates and Rating */}
                    <div className="flex items-center gap-6">
                        <div className="flex gap-4">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-xs text-black">ISO</div>
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-xs text-black">ISO</div>
                        </div>
                        <div>
                            <div className="flex items-center gap-1 mb-1">
                                <span className="text-white">Trustpilot</span>
                                <div className="flex">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <div
                                            key={star}
                                            className="w-4 h-4 bg-green-500"
                                        ></div>
                                    ))}
                                </div>
                            </div>
                            <div className="text-sm">4.5 out of 5</div>
                        </div>
                    </div>
                </div>

                {/* Navigation Columns */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
                    {/* For Business */}
                    <div>
                        <h3 className="text-white uppercase mb-4 text-sm">для бизнеса</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    href="/"
                                    className="hover:text-white transition-colors"
                                >
                                    KYT
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/"
                                    className="hover:text-white transition-colors"
                                >
                                    KYC
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/"
                                    className="flex items-center gap-2 hover:text-white transition-colors"
                                >
                                    AMLBot <span className="px-1.5 py-0.5 bg-purple-600 rounded-md text-xs text-white">PRO</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/"
                                    className="hover:text-white transition-colors"
                                >
                                    AML Тренинг
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/"
                                    className="hover:text-white transition-colors"
                                >
                                    Консалтинг
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* For Personal Use */}
                    <div>
                        <h3 className="text-white uppercase mb-4 text-sm">для личного пользования</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    href="/"
                                    className="hover:text-white transition-colors"
                                >
                                    AML Чат-бот
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/"
                                    className="hover:text-white transition-colors"
                                >
                                    Мобильное приложение
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/"
                                    className="hover:text-white transition-colors"
                                >
                                    Расследование
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-white uppercase mb-4 text-sm">компания</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    href="/"
                                    className="hover:text-white transition-colors"
                                >
                                    О нас
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/"
                                    className="hover:text-white transition-colors"
                                >
                                    Анализ
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/"
                                    className="hover:text-white transition-colors"
                                >
                                    Сертификаты
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/"
                                    className="hover:text-white transition-colors"
                                >
                                    Блог
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/"
                                    className="hover:text-white transition-colors"
                                >
                                    Пресс-кит
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h3 className="text-white uppercase mb-4 text-sm">социальные сети</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    href="/"
                                    className="flex items-center gap-2 hover:text-white transition-colors"
                                >
                                    <span className="w-6 h-6 flex items-center justify-center bg-gray-800 rounded-full">T</span>
                                    Telegram
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/"
                                    className="flex items-center gap-2 hover:text-white transition-colors"
                                >
                                    <span className="w-6 h-6 flex items-center justify-center bg-gray-800 rounded-full">in</span>
                                    LinkedIn
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/"
                                    className="flex items-center gap-2 hover:text-white transition-colors"
                                >
                                    <span className="w-6 h-6 flex items-center justify-center bg-gray-800 rounded-full">X</span>X
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/"
                                    className="flex items-center gap-2 hover:text-white transition-colors"
                                >
                                    <span className="w-6 h-6 flex items-center justify-center bg-gray-800 rounded-full">▶</span>
                                    YouTube
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/"
                                    className="flex items-center gap-2 hover:text-white transition-colors"
                                >
                                    <span className="w-6 h-6 flex items-center justify-center bg-gray-800 rounded-full">M</span>
                                    Medium
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="flex flex-wrap justify-between items-center pt-8 border-t border-gray-800">
                    <div className="flex items-center gap-4">
                        <div>© 2024 AMLBot</div>
                        <Link
                            href="/"
                            className="px-4 py-2 bg-gray-800 rounded-lg flex items-center gap-2 hover:bg-gray-700 transition-colors"
                        >
                            <span className="w-4 h-4 flex items-center justify-center">✉</span>
                            Поддержка
                        </Link>
                    </div>
                    <div className="flex gap-6">
                        <Link
                            href="/"
                            className="hover:text-white transition-colors"
                        >
                            Польз. соглашение
                        </Link>
                        <Link
                            href="/"
                            className="hover:text-white transition-colors"
                        >
                            Политика конфиденциальности
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
