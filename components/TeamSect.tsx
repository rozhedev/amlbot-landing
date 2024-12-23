"use client";
import React from "react";
import Image from "next/image";
import slavaDemchuk from "@/public/img/slava-demchuk.jpeg";
import sidPanda from "@/public/img/sid-panda.jpeg";
import graemeHampton from "@/public/img/graeme-hampton.jpeg";
import anmolJain from "@/public/img/anmol-jain.jpeg";
import Link from "next/link";

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

const TeamSect = () => {
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
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                className="w-5 h-5"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0zM7.09 20.34H3.43V9.02h3.66v11.32zM5.26 7.73c-1.16 0-1.91-.79-1.91-1.78 0-1.01.77-1.78 1.94-1.78s1.91.77 1.91 1.78c-.02.99-.77 1.78-1.94 1.78zm15.08 12.61h-3.64v-5.89c0-1.48-.53-2.5-1.88-2.5-1.02 0-1.63.68-1.89 1.33-.1.23-.12.56-.12.89v6.18h-3.65s.05-10.03 0-11.07h3.65v1.57c.49-.75 1.36-1.82 3.31-1.82 2.42 0 4.25 1.57 4.25 4.95v6.37z" />
                                            </svg>
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
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                shape-rendering="geometricPrecision"
                                                text-rendering="geometricPrecision"
                                                image-rendering="optimizeQuality"
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                className="w-5 h-5"
                                                viewBox="0 0 512 462.799"
                                            >
                                                <path
                                                    fill-rule="nonzero"
                                                    d="M403.229 0h78.506L310.219 196.04 512 462.799H354.002L230.261 301.007 88.669 462.799h-78.56l183.455-209.683L0 0h161.999l111.856 147.88L403.229 0zm-27.556 415.805h43.505L138.363 44.527h-46.68l283.99 371.278z"
                                                />
                                            </svg>
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

export default TeamSect;
