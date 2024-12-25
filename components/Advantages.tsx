"use client";
import Image from "next/image";
import target from "@/public/icons/target.webp";
import starDark from "@/public/icons/star-darken.webp";
import plainWithRound from "@/public/icons/plain_with_round.webp";
import { ArrowBtn } from "./ui";

export const Advantages = () => {
    return (
        <section className="bg-gray-100 pt-8 pb-28">
            <div className="max-w-7xl mx-auto lg:px-8 px-6">
                <h2 className="sect-title text-gray-900 mb-10">Почему AMLBot?</h2>
                <div className="lg:grid lg:grid-rows-7 lg:grid-cols-10 lg:gap-8 flex flex-col gap-5">
                    {/* // --> Индивидуальный подход */}
                    <div className="lg:row-span-3 lg:col-span-10 bg-white rounded-3xl shadow-sm lg:px-12 lg:py-9 px-6 py-6">
                        <div className="flex md:flex-row flex-col md:items-center items-start space-x-4">
                            <Image
                                src={target}
                                alt="Индивидуальный подход"
                                className="lg:w-60 lg:h-60 w-40 h-40 object-contain"
                            />
                            <div className="lg:ml-4 ml-0">
                                <h3 className="lg:text-3xl text-xl font-extrabold text-gray-900">Индивидуальный подход</h3>
                                <ul className="mt-4 space-y-3">
                                    <li className="lg:text-2xl text-lg">AMLBot предлагает широкий спектр комплаенс-решений, адаптированных для каждого клиента.</li>
                                    <li className="lg:text-2xl text-lg">
                                        Мы уверены в том, что сможем удовлетворить ваши требования, ведь <strong>мы помогли 300+ криптовалютным организациям</strong> всех размеров в 25 юрисдикциях.
                                    </li>
                                </ul>
                                <button className="lg:mt-7 mt-5 lg:px-8 lg:py-4 px-6 py-3 lg:text-xl text-base font-bold rounded-full bg-blue-600 text-white hover:bg-blue-700">Давайте обсудим</button>
                            </div>
                        </div>
                    </div>

                    {/* // --> Интегрированная платформа */}
                    <div className="lg:row-span-4 lg:col-span-6 bg-gray-700 rounded-3xl shadow-sm p-6">
                        <div className="advant-item__inner">
                                <Image
                                    src={starDark}
                                    alt="Интегрированная платформа"
                                    className="advant-item__inner-img"
                                />
                            <div>
                                <h3 className="lg:text-3xl text-xl font-extrabold text-white">
                                    Интегрированная платформа <span className="lg:block inline"> обеспечения соответствия</span>
                                </h3>
                                <ul className="mt-3 text-white space-y-3">
                                    <li className="lg:text-xl text-lg">Мы предлагаем KYT/Wallet скрининг, KYC, AML и многое другое для крипто бизнеса.</li>
                                    <li className="lg:text-xl text-lg">
                                        Оценка рисков в AMLBot основана на многочисленных источниках данных, что обеспечивает получение наиболее достоверной информации в отрасли.
                                    </li>
                                    <li className="lg:text-xl text-lg">
                                        Наши удобные в использовании сервисы и решения оптимизируют процессы в компании, устраняя сложности, связанные с соблюдением требований провайдеров услуг.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* // --> Поддержка клиентов */}
                    <div className="lg:row-span-4 lg:col-span-4 bg-white rounded-3xl shadow-sm p-6">
                        <div className="advant-item__inner">
                                <Image
                                    src={plainWithRound}
                                    alt="Поддержка клиентов"
                                    className="advant-item__inner-img"
                                />
                            <div>
                                <h3 className="lg:text-3xl text-xl font-extrabold text-gray-900">Поддержка клиентов</h3>
                                <p className="mt-3 lg:text-xl text-lg">Мы понимаем, насколько важна быстрая и дружелюбная поддержка наших клиентов, поэтому мы всегда рядом. Поддержка 24/7.</p>
                                <p className="mt-2 lg:text-base text-sm text-gray-500">Ответ в ночное время может занять немного больше времени.</p>
                                <ArrowBtn
                                    label="Связаться"
                                    btnTextColor="lg:text-lg lg:mt-16 mt-8 text-blue-600 hover:text-blue-700"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
