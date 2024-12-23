import chain from "@/public/icons/chain.webp";
import portfolio from "@/public/icons/portfolio.webp";
import qrScaner from "@/public/icons/qr_scaner.webp";
import search from "@/public/icons/search.webp";
import shieldWithCheckmark from "@/public/icons/shield_with_checkmark.webp";

export const servicesContent = [
    {
        icon: search,
        alt: "search",
        title: "AML/KYT Скрининг",
        description:
            "API-решения, расширяющие возможности инструментов для обеспечения соответствия требованиям AML в рамках вашей текущей системы. Все транзакции автоматически проверяются на соответствие требованиям AML и FATF и снижают риски вашего бизнеса.",
        darkMode: true,
    },
    {
        icon: qrScaner,
        alt: "qrScaner",
        title: "KYC для бизнеса",
        description:
            "Оптимизированный и автоматизированный процесс верификации позволяет вашему бизнесу быстро привлекать клиентов, снижая ручные усилия и минимизируя риски идентификационного мошенничества и незаконной активности.",
        darkMode: false,
    },
    {
        icon: shieldWithCheckmark,
        alt: "shieldWithCheckmark",
        title: "AML/KYC Процедуры",
        description:
            "Запустите свой криптовалютный проект с легкостью, простотой и уверенностью, используя наш консалтинг по вопросам AML и KYC, обеспечивающий беспрепятственное соблюдение требований и эффективное управление рисками с самого начала.",
        darkMode: false,
    },
    {
        icon: portfolio,
        alt: "portfolio",
        title: "Корпоративные счета на CEX/EMI",
        description: "При помощи наших специалистов вы сможете упростить открытие корпоративного счета на CEX EMI и сосредоточиться на развитии бизнеса в криптоиндустрии.",
        darkMode: false,
    },
    {
        icon: chain,
        alt: "chain",
        title: "Блокчейн-расследования",
        description: "Возврат украденной криптовалюты с помощью экспертных блокчейн-расследований, позволяющих оперативно выявить виновных и отследить средства для их эффективного возврата.",
        darkMode: false,
    },
];
