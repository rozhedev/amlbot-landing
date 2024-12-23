import { linkedInSymbol, medium, telegram, twitterDark, youtube } from "./svg-icons";

export const FOOTER_COL_TITLES = ["для бизнеса", "для личного пользования", "компания", "социальные сети"];

export const FOOTER_LINKS = {
    forBusiness: [
        {
            label: "KYT",
            href: "/",
        },
        {
            label: "KYC",
            href: "/",
        },
        {
            label: "AMLBot PRO",
            href: "/",
        },
        {
            label: "AML Тренинг",
            href: "/",
        },
        {
            label: "Консалтинг",
            href: "/",
        },
    ],
    forPersonal: [
        {
            label: "AML Чат-бот",
            href: "/",
        },
        {
            label: "Мобильное приложение",
            href: "/",
        },
        {
            label: "Расследование",
            href: "/",
        },
    ],
    company: [
        {
            label: "О нас",
            href: "/",
        },
        {
            label: "Анализ",
            href: "/",
        },
        {
            label: "Сертификаты",
            href: "/",
        },
        {
            label: "Блог",
            href: "/",
        },
        {
            label: "Пресс-кит",
            href: "/",
        },
    ],
    social: [
        {
            icon: telegram,
            label: "Telegram",
            href: "/",
        },
        {
            icon: linkedInSymbol,
            label: "LinkedIn",
            href: "/",
        },
        {
            icon: twitterDark,
            label: "X",
            href: "/",
        },
        {
            icon: youtube,
            label: "YouTube",
            href: "/",
        },
        {
            icon: medium,
            label: "Medium",
            href: "/",
        },
    ],
};
