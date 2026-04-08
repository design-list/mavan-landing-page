"use client";

import Image from 'next/image';

const personalityImages = [
    { id: 1, src: '/img/personality1.png', alt: 'Client 1' },
    { id: 2, src: '/img/personality2.png', alt: 'Client 2' },
    { id: 3, src: '/img/personality3.png', alt: 'Client 3' },
    { id: 4, src: '/img/personality4.png', alt: 'Client 4' },
    { id: 5, src: '/img/personality5.png', alt: 'Client 5' },
    { id: 6, src: '/img/personality6.png', alt: 'Client 6' },
    { id: 7, src: '/img/personality7.png', alt: 'Client 7' },
    { id: 8, src: '/img/personality8.png', alt: 'Client 8' },
];

// Duplicate enough times to fill wide screens without gaps
const track = [...personalityImages, ...personalityImages, ...personalityImages];

export default function TrustedSection() {
    return (
        <section className="bg-white py-10 md:py-20 overflow-hidden">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-8 md:mb-16">
                    <h2 className="font-garamond text-2xl md:text-5xl text-black mb-4 font-bold">
                        Trusted by those who expect the{' '}
                        <span className="inline-block bg-text-gradient bg-clip-text text-transparent font-black">
                            Best.
                        </span>
                    </h2>
                    <p className="font-raleway text-black text-sm md:text-lg max-w-3xl mx-auto">
                        Leading personalities choose Maven Esthetics for doctor-led skin and hair treatments.
                    </p>
                </div>
            </div>

            {/* Full-bleed marquee — outside container so it spans edge to edge */}
            <div className="marquee-wrapper">
                <div className="marquee-track">
                    {track.map((img, i) => (
                        <div key={i} className="marquee-card">
                            <div className="relative w-full h-full overflow-hidden rounded-[40px] md:rounded-[60px]">
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    fill
                                    className="object-cover"
                                    sizes="280px"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx global>{`
                .marquee-wrapper {
                    width: 100%;
                    overflow: hidden;
                    /* Edge fade */
                    mask-image: linear-gradient(
                        to right,
                        transparent 0%,
                        black 8%,
                        black 92%,
                        transparent 100%
                    );
                    -webkit-mask-image: linear-gradient(
                        to right,
                        transparent 0%,
                        black 8%,
                        black 92%,
                        transparent 100%
                    );
                }

                .marquee-track {
                    display: flex;
                    gap: 20px;
                    width: max-content;

                    /* GPU-accelerated smooth scroll */
                    animation: marquee-scroll 30s linear infinite;
                    will-change: transform;
                }

                .marquee-track:hover {
                    animation-play-state: paused;
                }

                .marquee-card {
                    flex-shrink: 0;
                    width: 220px;
                    height: 275px;
                }

                @media (min-width: 768px) {
                    .marquee-card {
                        width: 280px;
                        height: 350px;
                    }
                    .marquee-track {
                        gap: 28px;
                    }
                }

                @keyframes marquee-scroll {
                    0%   { transform: translateX(0); }
                    /* Scroll exactly 1/3 of the track — one full set of images */
                    100% { transform: translateX(calc(-100% / 3)); }
                }
            `}</style>
        </section>
    );
}