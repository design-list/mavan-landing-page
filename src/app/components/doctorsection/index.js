"use client";

import Image from "next/image";
import DoctorImage from "@/img/docter-profile.png";
import CurveLine from "@/icons/curve.svg";

export default function DoctorSection() {
    return (
        <section className="py-14 relative">
            <div className="container">
                <div className="flex flex-col md:flex-row gap-16 items-center">

                    {/* Left Content */}
                    <div className="w-full md:w-2/3">
                        <h2 className="font-garamond text-4xl md:text-5xl leading-tight">
                            Meet Your Doctor -{" "}
                            <span className="font-black inline-block bg-text-gradient bg-clip-text text-transparent ">
                                Dr. Geoffrey Vaz.
                            </span>
                        </h2>

                        <p className="mt-4 text-base font-semibold leading-snug">
                            Facial Aesthetic Specialist and a National & International Trainer
                            who educates doctors in advanced dermatology and aesthetic techniques.
                        </p>

                        <div className="relative block md:hidden">
                            <Image
                                src={DoctorImage}
                                alt="Doctor"
                                className="object-cover w-[70%] h-[310px] m-auto md:w-full md:h-full"
                            />
                        </div>

                        <div className="mt-8 space-y-2 text-sm leading-relaxed text-black">
                            <p>
                                Dr. Geoffrey Vaz is an MD Dermatologist, Facial Aesthetic Specialist, and a National & International Trainer who educates doctors in advanced dermatology and aesthetic techniques.
                            </p>
                            <p>
                                His approach has been shaped through mentorship with global leaders such as Dr. Arthur Swift, Dr. Woffles Wu, and Dr. Mauricio de Maio, refining his philosophy of subtle, natural results. With expertise spanning medical dermatology, advanced skin treatments, facial aesthetics, and hair restoration, Dr. Vaz practices a holistic approach, recognizing that skin and hair concerns often reflect deeper hormonal, metabolic, and lifestyle factors.
                            </p>
                            <p>
                                Beyond his clinical practice, he is associated with R.K. Mission, Jeevan Jyoti, and Prerna Healthcare, extending dermatology care to underserved communities, a commitment that remains central to his identity as a clinician.
                            </p>
                            <p>
                                A former footballer and lifelong athlete, he brings discipline and precision to managing complex dermatological conditions such as acne, eczema, psoriasis, and chronic skin concerns.
                            </p>
                            <p>
                                His precision and aesthetic sensibility have made him a trusted skincare and hair expert for contestants at Femina Miss India, Miss Diva, and Mr. India, supporting winners who have represented India at global platforms including Miss World, Miss Supranational, Miss Cosmoworld, and Mr. World.
                            </p>
                            <p>His interest in people and human behavior adds depth to his work - he approaches dermatology not just as treatment, but as an understanding of the individual.</p>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="w-full md:w-1/3 hidden md:flex justify-center lg:justify-end">
                        <div className="relative">
                            <Image
                                src={DoctorImage}
                                alt="Doctor"
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute -bottom-24" >
                <Image src={CurveLine} width={100} height={100} alt="Curve Line" className="w-full" />
            </div>
        </section>
    );
}