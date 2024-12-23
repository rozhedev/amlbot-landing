"use client";
import { trustpilotLight, trustpilotHalfStar, trustpilotDark } from "@/data/svg-icons";
import React, { FC } from "react";

type TTrustpilotBadge = { isDark: boolean, labelColor: string };

const TrustpilotBadge: FC<TTrustpilotBadge> = ({ labelColor, isDark }) => {
    return (
        <div>
            <div className="w-32">{isDark ? trustpilotDark : trustpilotLight}</div>
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
                                fill={labelColor}
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
    );
};

export default TrustpilotBadge;
