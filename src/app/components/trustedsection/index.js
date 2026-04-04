"use client"; // Required for Slick Slider in Next.js App Router

import Image from 'next/image';
import Slider from "react-slick";

// Import slick styles (can also be done in layout.tsx or globals.css)
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const personalityImages = [
    { id: 1, src: '/img/personality1.png', alt: 'Client 1' },
    { id: 2, src: '/img/personality2.png', alt: 'Client 2' },
    { id: 3, src: '/img/personality3.png', alt: 'Client 3' },
    { id: 4, src: '/img/personality4.png', alt: 'Client 4' },
];

export default function TrustedSection() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        centerMode: true,
        centerPadding: "0px",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    centerPadding: "40px", // Shows a peek of the next slide on mobile
                }
            }
        ]
    };

    return (
        <section className="bg-white px-4 overflow-hidden">
            <div className="container mx-auto">
                {/* Header Content */}
                <div className="text-center mb-8 md:mb-16">
                    <h2 className="font-gideon text-2xl md:text-5xl text-black mb-4 font-bold">
                        Trusted by those who expect the <span className="inline-block bg-text-gradient bg-clip-text text-transparent font-black">Best.</span>
                    </h2>
                    <p className="font-raleway text-black text-sm md:text-lg max-w-3xl mx-auto">
                        Leading personalities choose Maven Esthetics for doctor-led skin and hair treatments.
                    </p>
                </div>

                {/* Slick Slider */}
                <div className="trusted-slider-container">
                    <Slider {...settings}>
                        {personalityImages.map((img) => (
                            <div key={img.id} className="px-3"> {/* Added padding for gap between slides */}
                                <div className="relative w-full aspect-[4/5] overflow-hidden rounded-[60px] md:rounded-[80px] shadow-sm">
                                    <Image
                                        src={img.src}
                                        alt={img.alt}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

            {/* Custom CSS for Slick Dots styling */}
            <style jsx global>{`
                .trusted-slider-container .slick-dots li button:before {
                    color: #e3b16f;
                    font-size: 12px;
                }
                .trusted-slider-container .slick-dots li.slick-active button:before {
                    color: #e3b16f;
                }
                .trusted-slider-container .slick-list {
                    overflow: visible; /* Allows rounded corners to not clip weirdly during transition */
                }
            `}</style>
        </section>
    );
}