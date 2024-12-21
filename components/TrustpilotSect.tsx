"use client";
import React from "react";
import Image from "next/image";
import INATBA from "@/public/members/INATBA.png";
import CDA from "@/public/members/CDA.png";
import ATII from "@/public/members/ATII.png";
import LSW3 from "@/public/members/LSW3.png";
import EBA from "@/public/members/EUBA.png";
import { trustpilot, trustpilotStar, trustpilotHalfStar } from "../data/svg-icons";

const TrustpilotSection = () => {
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
        <section className="flex items-start justify-around pb-28 bg-gray-100">
            <div className="container flex items-center space-x-2 mb-4 lg:mb-0container mx-auto px-6 lg:flex lg:items-center lg:justify-around">
                {/* // ? Trustpilot Rating */}
                <div>
                    {trustpilot}
                    <div className="flex items-center">
                        <div className="flex mt-4 gap-2">
                            {[...Array(4)].map((_, index) => (
                                <React.Fragment key={index}>{trustpilotStar}</React.Fragment>
                            ))}
                            {trustpilotHalfStar}
                        </div>
                        <span className="text-sm font-medium mt-4 ml-2">
                            <span className="font-semibold">4.5</span> out of 5
                        </span>
                    </div>
                </div>

                {/* // ? Membership Badges */}
                <div className="flex flex-col items-start lg:items-center space-y-4 lg:space-y-0 lg:space-x-6 px-4 py-6 rounded-[20px] border">
                    <div className="flex items-center space-x-2">
                        <div className="bg-green-500 text-white rounded-full p-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="w-5 h-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4.5 12.75l6 6 9-13.5"
                                />
                            </svg>
                        </div>
                        <span className="text-gray-800 font-semibold">Мы являемся полноправными участниками</span>
                    </div>

                    <div className="flex gap-5 pt-6">
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

export default TrustpilotSection;
