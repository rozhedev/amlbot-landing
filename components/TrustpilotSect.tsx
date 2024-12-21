"use client";
import React from "react";
import Image from "next/image";
import INATBA from "@/public/members/INATBA.png";
import CDA from "@/public/members/CDA.png";
import ATII from "@/public/members/ATII.png";
import LSW3 from "@/public/members/LSW3.png";
import EBA from "@/public/members/EUBA.png";
import { trustpilot, trustpilotStar, trustpilotHalfStar, checkmark } from "@/data/svg-icons";

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
                    <div className="w-32">{trustpilot}</div>
                    <div className="flex items-center">
                        <div className="flex mt-4 gap-2">
                            {[...Array(4)].map((_, index) => (
                                <svg
                                    key={index}
                                    viewBox="0 0 47 47"
                                    className="w-[40px] h-[40px]"
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <title>Trustpilot</title>
                                    <polygon
                                        fill="#219654"
                                        points="0 46.330002 46.375587 46.330002 46.375587 0 0 0"
                                    ></polygon>
                                    <path
                                        d="M39.532606,19.711433 L13.229706,38.800651 L17.067125,27.002824 L7.019821,19.711433 L19.438795,19.711433 L23.276213,7.912809 L27.113631,19.711433 L39.532606,19.711433 L39.532606,19.711433 Z M23.27717,31.510075 L30.460765,30.000499 L33.322879,38.800651 L23.27717,31.510075 Z"
                                        fill="#FFFFFF"
                                    ></path>
                                </svg>
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
                        <div className="bg-green-500 text-white rounded-full p-1">{checkmark}</div>
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
