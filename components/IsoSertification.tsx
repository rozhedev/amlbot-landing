"use client";
import Image from "next/image";
import React from "react";
import medal from "@/public/icons/medal.webp";
import ArrowBtn from "./ui/ArrowBtn";

export const IsoCertification = () => {
    return (
        <section className="w-full justify-center bg-gray-100 pt-0 pb-16 px-4">
            <div className="max-w-5xl items-center mx-auto">
                <div
                    className="
                bg-white rounded-3xl shadow-md px-20 py-12 flex justify-center md:flex-row items-center md:items-start gap-8 md:gap-12
                "
                >
                    {/* Medal Icon */}
                    <div className="w-48 flex-shrink-0">
                        <Image
                            src={medal}
                            alt="medal"
                        />
                    </div>

                    {/* Content */}
                    <div className="">
                        <h2 className="text-5xl md:text-4xl font-black mb-4 text-center md:text-left">ISO сертифицировано</h2>
                        <p className="text-gray-900 text-base md:text-lg mb-6 max-w-2xl text-center md:text-left">
                            Мы постоянно совершенствуем наши меры безопасности, чтобы обеспечить надежность и защиту. Узнайте больше о наших сертификациях
                        </p>
                        <ArrowBtn
                            label="Узнать больше"
                            btnTextColor="text-lg mt-8 text-blue-600 hover:text-blue-700"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
