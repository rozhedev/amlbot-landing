"use client";
import React from "react";
import Image from "next/image";
import slavaDemchuk from "@/public/img/slava-demchuk.jpeg";
import sidPanda from "@/public/img/sid-panda.jpeg";
import graemeHampton from "@/public/img/graeme-hampton.jpeg";
import anmolJain from "@/public/img/anmol-jain.jpeg";
import Link from "next/link";
import { linkedIn, twitterLight } from "@/data/svg-icons";

const teamMembers = [
    {
        name: "Slava Demchuk",
        role: "Co-Founder",
        linkedin: "#",
        twitter: "#",
        image: slavaDemchuk, // Путь к картинке
    },
    {
        name: "Sid Panda",
        role: "Blockchain Analyst",
        linkedin: "#",
        image: sidPanda,
    },
    {
        name: "Graeme Hampton",
        role: "Certified AML Specialist",
        linkedin: "#",
        image: graemeHampton,
    },
    {
        name: "Anmol Jain",
        role: "VP",
        linkedin: "#",
        image: anmolJain,
    },
];

export const TeamSect = () => {
    return (
        <div className="bg-gray-100 lg:py-16 py-10">
            <div className="max-w-7xl mx-auto lg:px-8 px-6">
                <h2 className="sect-title mb-12">Наша команда</h2>
                <div className="flex lg:justify-between justify-around lg:flex-nowrap flex-wrap xl:gap-8 gap-6">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="bg-white max-w-[270px] rounded-3xl shadow-lg"
                        >
                            <Image
                                src={member.image}
                                alt={member.name}
                                width={150}
                                height={150}
                                className="w-full rounded-t-3xl"
                            />
                            <div className="lg:p-6 p-4">
                                <p className="xl:mb-4 mb-2 xl:text-base text-sm text-gray-400 font-semibold">{member.role}</p>
                                <h3 className="xl:text-2xl md:text-lg font-semibold">{member.name}</h3>
                                <div className="flex mt-4 space-x-3">
                                    {member.linkedin && (
                                        <Link
                                            href={member.linkedin}
                                            className="text-black"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <span className="sr-only">LinkedIn</span>
                                            {linkedIn}
                                        </Link>
                                    )}
                                    {member.twitter && (
                                        <Link
                                            href={member.twitter}
                                            className="text-black"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <span className="sr-only">Twitter</span>
                                            {twitterLight}
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
