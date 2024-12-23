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
        <div className="bg-gray-100 py-16">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-5xl font-black text-center mb-12">Наша команда</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-3xl shadow-lg"
                        >
                            <Image
                                src={member.image}
                                alt={member.name}
                                width={150}
                                height={150}
                                className="w-full rounded-t-3xl"
                            />
                            <div className="p-6">
                                <p className="mb-4 text-gray-400 font-semibold ">{member.role}</p>
                                <h3 className="text-2xl font-semibold">{member.name}</h3>
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
