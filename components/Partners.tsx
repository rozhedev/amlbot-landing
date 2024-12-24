"use client";
import Image from "next/image";
import React from "react";
import BoxExchanger from "@/public/partners/boxexchanger.webp";
import Comistar from "@/public/partners/comistar.webp";
import Credits from "@/public/partners/credits.webp";
import CryptoNPL from "@/public/partners/cryptopnl.webp";
import GateIO from "@/public/partners/gateio.webp";
import KunaIO from "@/public/partners/kunaio.webp";
import LetsExchange from "@/public/partners/letsexchange.webp";
import Misttrack from "@/public/partners/misttrack.webp";
import Purefi from "@/public/partners/purefi.webp";
import Safe3 from "@/public/partners/safe3.webp";

export const Partners = () => {
    const partners = [
        { label: "Box Exchanger", img: BoxExchanger },
        { label: "Comistar", img: Comistar },
        { label: "Credits", img: Credits },
        { label: "CryptoPNL", img: CryptoNPL },
        { label: "Gate.io", img: GateIO },

        { label: "Kuna IO", img: KunaIO },
        { label: "LetsExchange", img: LetsExchange },
        // { label: "Misttrack", img: Misttrack },
        { label: "Purefi", img: Purefi },
        { label: "Safe3", img: Safe3 },
    ];

    return (
        <section className="w-full min-h-96 bg-gray-100 pt-12 pb-16">
            <div className="relative  mx-auto px-4">
                <h2 className="sect-title mb-12">Наши 300+ клиентов и партнеров</h2>

                <div className="md:absolute relative md:-left-32 -left-0 flex md:flex-nowrap flex-wrap items-center md:justify-between justify-around gap-6 overflow-x-hidden pb-4">
                    {partners.map((partner, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 bg-white rounded-2xl lg:px-6 lg:py-4 px-3 py-2"
                        >
                            <Image
                                src={partner.img}
                                alt={`${partner.label} logoLight`}
                                className="w-auto lg:h-16 h-12 object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
