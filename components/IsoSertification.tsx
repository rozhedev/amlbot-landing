import Image from "next/image";
import React from "react";
import medal from "@/public/icons/medal.webp";

const IsoCertification = () => {
    return (
        <section className="w-full bg-gray-100 pt-0 pb-16 px-4">
            <div className="max-w-7xl items-center mx-auto">
                <div className="bg-white rounded-3xl shadow-sm p-8 md:p-12 flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
                    {/* Medal Icon */}
                    <div className="w-24 md:w-32 flex-shrink-0">
                        <Image
                            className="w-auto max-h-[12.5rem] min-h-[6rem]"
                            src={medal}
                            alt="medal"
                        />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                        <h2 className="text-4xl md:text-3xl font-black mb-4 text-center md:text-left">ISO сертифицировано</h2>
                        <p className="text-gray-600 text-base md:text-lg mb-6 max-w-2xl text-center md:text-left">
                            Мы постоянно совершенствуем наши меры безопасности, чтобы обеспечить надежность и защиту. Узнайте больше о наших сертификациях
                        </p>
                        <button
                            className="group flex items-center text-sm font-bold transition-all duration-300 text-blue-700 hover:text-blue-600"
                        >
                            Узнать больше
                            <span className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IsoCertification;
