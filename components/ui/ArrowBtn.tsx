import React, { FC } from "react";

type TArrowBtn = {
    label: string;
    btnTextColor: string;
};

export const ArrowBtn: FC<TArrowBtn> = ({ label, btnTextColor }) => {
    return (
        <button className={`group flex items-center font-bold transition-all duration-300 ${btnTextColor}`}>
            {label}
            <span className="ml-2 font-bold transform transition-transform duration-300 group-hover:translate-x-1">→</span>
        </button>
    );
};
