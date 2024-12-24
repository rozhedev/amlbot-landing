"use client";
import Image from "next/image";
import target from "@/public/icons/target.webp";
import starDark from "@/public/icons/star-darken.webp";
import plainWithRound from "@/public/icons/plain_with_round.webp";
import { ArrowBtn } from "./ui";

export const Advantages = () => {
    return (
        <section className="bg-gray-100 pt-8 pb-28">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <h2 className="sect-title text-gray-900 mb-10">Почему AMLBot?</h2>
                <div className="grid grid-rows-7 grid-cols-10 gap-8">
                    {/* // --> Индивидуальный подход */}
                    <div className="row-span-3 col-span-10 bg-white rounded-3xl shadow-sm px-12 py-9">
                        <div className="flex items-start space-x-4">
                            <div className="lg:min-w-60">
                                <Image
                                    src={target}
                                    alt="Индивидуальный подход"
                                    className="lg:w-60 h-60 object-contain"
                                />
                            </div>
                            <div>
                                <h3 className="text-3xl font-extrabold text-gray-900">Индивидуальный подход</h3>
                                <ul className="mt-4 space-y-3">
                                    <li className="text-2xl">AMLBot предлагает широкий спектр комплаенс-решений, адаптированных для каждого клиента.</li>
                                    <li className="text-2xl">
                                        Мы уверены в том, что сможем удовлетворить ваши требования, ведь <strong>мы помогли 300+ криптовалютным организациям</strong> всех размеров в 25 юрисдикциях.
                                    </li>
                                </ul>
                                <button className="mt-7 px-8 py-4 bg-blue-600 text-white text-xl font-bold rounded-full hover:bg-blue-700">Давайте обсудим</button>
                            </div>
                        </div>
                    </div>

                    {/* // * Интегрированная платформа */}
                    <div className="row-span-4 col-span-6 bg-gray-700 rounded-3xl shadow-sm p-6">
                        <div className="flex flex-col items-start space-x-4">
                            <div className="lg:w-40">
                                <Image
                                    src={starDark}
                                    alt="Интегрированная платформа"
                                    className="lg:w-40 h-40 object-contain"
                                />
                            </div>
                            <div>
                                <h3 className="text-3xl font-extrabold text-white">
                                    Интегрированная платформа <br /> обеспечения соответствия
                                </h3>
                                <ul className="mt-3 text-white space-y-3">
                                    <li className="text-xl">Мы предлагаем KYT/Wallet скрининг, KYC, AML и многое другое для крипто бизнеса.</li>
                                    <li className="text-xl">
                                        Оценка рисков в AMLBot основана на многочисленных источниках данных, что обеспечивает получение наиболее достоверной информации в отрасли.
                                    </li>
                                    <li className="text-xl">
                                        Наши удобные в использовании сервисы и решения оптимизируют процессы в компании, устраняя сложности, связанные с соблюдением требований провайдеров услуг.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* // * Поддержка клиентов */}
                    <div className="row-span-4 col-span-4 bg-white rounded-3xl shadow-sm p-6">
                        <div className="flex flex-col items-start space-x-4">
                            <div className="lg:min-w-40">
                                <Image
                                    src={plainWithRound}
                                    alt="Поддержка клиентов"
                                    className="lg:w-40 h-40 object-contain"
                                />
                            </div>
                            <div>
                                <h3 className="text-3xl font-extrabold text-gray-900">Поддержка клиентов</h3>
                                <p className="mt-3 text-xl">Мы понимаем, насколько важна быстрая и дружелюбная поддержка наших клиентов, поэтому мы всегда рядом. Поддержка 24/7.</p>
                                <p className=" text-gray-500 mt-2">Ответ в ночное время может занять немного больше времени.</p>
                                <ArrowBtn
                                    label="Связаться"
                                    btnTextColor="text-lg mt-16 text-blue-600 hover:text-blue-700"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
