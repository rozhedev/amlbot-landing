import React from "react";
import Link from "next/link";
import Image from "next/image";

import { logoDark, telegram } from "@/data/svg-icons";
import { FOOTER_COL_TITLES, FOOTER_LINKS } from "@/data/footer-links";
import isoSertified1 from "@/public/img/iso-sertified-1.svg";
import isoSertified2 from "@/public/img/iso-sertified-2.svg";

import { TrustpilotBadge } from "./TrustpilotBadge";
import { NavColumn } from "./NavColumns";

export const Footer = () => {
    return (
        <footer className="bg-black text-gray-400 py-16">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-wrap justify-between items-start mb-16 border-b border-gray-800">
                    {/* Logo and Address */}
                    <div className="flex  items-start gap-20 mb-8">
                        <Link
                            href="/"
                            className="flex items-center mb-4"
                        >
                            <div className="flex items-center justify-center lg:w-40  md:w-32 h-auto">{logoDark}</div>
                        </Link>
                        <div className="text-sm max-w-xs">
                            <div className="text-[16px] text-gray-400 font-extrabold mb-2 uppercase">SAFELEMENT LIMITED.</div>
                            <div className="uppercase text-gray-400"> OFFICE 1111, SUITE 1102, LEE GARDEN ONE, 33 HYSAN AVENUE, CAUSEWAY BAY, HONG KONG</div>
                        </div>
                    </div>

                    {/* Certificates and Rating */}
                    <div className="flex items-center gap-10">
                        <div className="gap-6 flex items-center justify-center">
                            <Image
                                src={isoSertified1}
                                alt="iso-sertified-1"
                                className="w-[70px] h-auto flex items-center justify-center"
                            />
                            <Image
                                src={isoSertified2}
                                alt="iso-sertified-2"
                                className="w-[70px] h-auto flex items-center justify-center"
                            />
                        </div>
                        <TrustpilotBadge
                            labelColor="#fff"
                            isDark={true}
                        />
                    </div>
                </div>

                {/* Navigation Columns */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
                    {/* For Business */}
                    <NavColumn
                        label={FOOTER_COL_TITLES[0]}
                        linksArr={FOOTER_LINKS.forBusiness}
                    />

                    {/* For Personal Use */}
                    <NavColumn
                        label={FOOTER_COL_TITLES[1]}
                        linksArr={FOOTER_LINKS.forPersonal}
                    />

                    {/* Company */}
                    <NavColumn
                        label={FOOTER_COL_TITLES[2]}
                        linksArr={FOOTER_LINKS.company}
                    />

                    {/* Social Media */}
                    <NavColumn
                        label={FOOTER_COL_TITLES[3]}
                        linksArr={FOOTER_LINKS.social}
                    />
                </div>

                {/* Footer Bottom */}
                <div className="flex flex-wrap justify-between items-center pt-8 border-t border-gray-800">
                    <div className="flex items-center gap-4">
                        <div>© 2024 AMLBot</div>
                        <Link
                            href="/"
                            className="px-4 py-2 bg-gray-700 flex items-center gap-2 hover:bg-gray-700 transition-colors rounded-full"
                        >
                            <div className="w-5 h-5">{telegram}</div>
                            <span className="font-semibold text-white">Поддержка</span>
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
