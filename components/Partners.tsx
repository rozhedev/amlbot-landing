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

const Partners = () => {
    const partners = [
        { label: "Box Exchanger", img: BoxExchanger },
        { label: "Comistar", img: Comistar },
        { label: "Credits", img: Credits },
        { label: "CryptoPNL", img: CryptoNPL },
        { label: "Gate.io", img: GateIO },

        { label: "Kuna IO", img: KunaIO },
        { label: "LetsExchange", img: LetsExchange },
        { label: "Misttrack", img: Misttrack },
        { label: "Purefi", img: Purefi },
        { label: "Safe3", img: Safe3 },
    ];

    return (
        <section className="w-full min-h-96 bg-gray-100 pt-12 pb-16">
            <div className="relative mx-auto px-4">
                <h2 className="text-4xl font-black text-center mb-12">Наши 300+ клиентов и партнеров</h2>

                <div className="absolute -left-32 flex items-center justify-between gap-6 overflow-x-hidden pb-4">
                    {partners.map((partner, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 bg-white rounded-2xl px-6 py-4"
                        >
                            <Image
                                src={partner.img}
                                alt={`${partner.label} logo`}
                                className="w-auto h-16 object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Partners;
