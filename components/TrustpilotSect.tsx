"use client";
import React from "react";
import Image from "next/image";

import { TrustpilotBadge } from "./ui/TrustpilotBadge";
import INATBA from "@/public/members/INATBA.png";
import CDA from "@/public/members/CDA.png";
import ATII from "@/public/members/ATII.png";
import LSW3 from "@/public/members/LSW3.png";
import EBA from "@/public/members/EUBA.png";
import { checkmark } from "@/data/svg-icons";

export const TrustpilotSect = () => {
    const memberNames = [
        {
            label: "INATBA",
            img: INATBA,
        },
        {
            label: "CDA",
            img: CDA,
        },
        {
            label: "ATII",
            img: ATII,
        },
        {
            label: "LSW3",
            img: LSW3,
        },
        {
            label: "EBA",
            img: EBA,
        },
    ];

    return (
        <section className="flex lg:justify-start justify-center md:pb-28 pb-20 bg-gray-100">
            <div className="mx-auto container flex lg:flex-row flex-col lg:justify-around justify-between items-center mb-4 lg:mb-0 lg:mx-auto lg:px-6 px-0">
                {/* // ? Trustpilot Rating */}
                <TrustpilotBadge
                    labelColor="#fff"
                    isDark={false}
                />

                {/* // ? Membership Badges */}
                <div className="lg:mx-0 mx-4 flex flex-col items-center lg:space-y-0 space-y-4 lg:px-8 px-4 py-6 lg:mt-0 mt-8 border rounded-[20px]">
                    <div className="flex sm:flex-row flex-col items-center space-x-2">
                        <div className="bg-green-500 text-white rounded-full p-1">{checkmark}</div>
                        <span className="sm:text-left text-center sm:mt-0 mt-4 text-gray-800 font-semibold">Мы являемся полноправными участниками</span>
                    </div>

                    <div className="flex flex-wrap lg:space-between lg:gap-5 gap-6 pt-6">
                        {memberNames.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center"
                            >
                                <Image
                                    src={item.img}
                                    alt={item.label}
                                    className="w-8 h-8"
                                />
                                <span className="ml-2 font-semibold">{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
