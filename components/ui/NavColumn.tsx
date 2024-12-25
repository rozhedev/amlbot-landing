import React, { FC } from "react";
import Link from "next/link";

type TNavColumn = {
    label: string;
    linksArr: {
        icon?: any;
        label: string;
        href: string;
    }[];
};

export const NavColumn: FC<TNavColumn> = ({ label, linksArr }) => {
    return (
        <div>
            <h3 className="text-gray-100 uppercase mb-4 text-xs font-semibold tracking-wide md:text-left text-center">{label}</h3>
            <ul className="space-y-3">
                {linksArr.map((item, index) => (
                    <li key={`${item}${index}`}>
                        <Link
                            href={item.href}
                            className="hover:text-white transition-colors flex gap-1.5 py-0.5 px-1 items-center md:justify-start justify-center"
                        >
                            {item.icon && <div className="w-7 h-7 rounded-full bg-gray-700 p-1 justify-center items-center">{item.icon}</div>}
                            <span className="text-gray-400 font-medium md:justify-start justify-center">{item.label}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};
