"use client";
import Image from "next/image";
import React from "react";
import medal from "@/public/icons/medal.webp";
import { ArrowBtn } from "./ui";

export const IsoCertification = () => {
    return (
        <section className="w-full justify-center bg-gray-100 pt-0 lg:pb-16 pb-12 px-4">
            <div className="lg:max-w-5xl max-w-3xl items-center mx-auto">
                <div
                    className="
                lg:px-20 px-12 lg:py-12 py-8 flex md:flex-row flex-col justify-center items-center md:items-start gap-8 md:gap-12 bg-white rounded-3xl shadow-md
                "
                >
                    {/* Medal Icon */}
                    <div className="flex lg:w-48 w-40 flex-shrink-0">
                        <Image
                            src={medal}
                            alt="medal"
                        />
                    </div>

                    {/* Content */}
                    <div className="flex flex-col md:items-start items-center">
                        <h2 className="sect-title mb-4 md:text-left">ISO сертифицировано</h2>
                        <p className="text-gray-900 md:text-xl text-base mb-6 md:text-left text-center">
                            Мы постоянно совершенствуем наши меры безопасности, чтобы обеспечить надежность и защиту. Узнайте больше о наших сертификациях
                        </p>
                        <ArrowBtn
                            label="Узнать больше"
                            btnTextColor="text-lg xl:mt-6 mt-4 text-blue-600 hover:text-blue-700"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
