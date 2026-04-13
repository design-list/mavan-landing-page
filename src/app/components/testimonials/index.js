import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import Comma from '@/icons/coma.svg';

const testimonials = [
    {
        name: "Vishakha Shirke",
        role: "Client Review",
        image: "/img/testimnals1.png",
        text: "I had a great experience at Maven Aesthetics with Dr. Geoffrey Vaz. The staff is very friendly and made me feel comfortable throughout the treatment process. Ms. Varsha was especially helpful at the peeling station, guiding me and ensuring everything went smoothly."
    },
    {
        name: "Khan Bushra",
        role: "Client Review",
        image: "/img/testimnals2.png",
        text: "My experience here is really good. I saw lots of difference in my face. I am grateful here according to the guidelines of Dr. Geoffrey Vaz. He is such an amazing doctor. The staff are also extremely good and polite, especially Varsha, who is very hardworking and her work is excellent."
    },
    {
        name: "Yash Jain",
        role: "Client Review",
        image: "/img/testimnals3.png",
        text: "Had come to Maven Esthetics for an acne concern and had a solid experience. Dr. Geoffrey Vaz took the time to understand the root cause of the issue and explained it clearly. Felt comfortable throughout and happy with how it went."
    },
    {
        name: "Pooja Verma",
        role: "Client Review",
        image: "/img/testimnals4.png",
        text: "I have been taking consultation here for the last 1 year. Dr. Vaz and the staff are really caring. My skin texture has improved here. I do recommend it."
    },
    {
        name: "Kimberly Lewis",
        role: "Client Review",
        image: "/img/testimnals5.png",
        text: "I've been consulting Dr. Geoffrey for the past 3 years and have seen significant improvement in my skin. Every staff member is very friendly and makes sure you feel comfortable. Varsha ensured the treatment was smooth and comfortable throughout."
    },
    {
        name: "Sakshi Pandey",
        role: "Client Review",
        image: "/img/testimnals6.png",
        text: "I saw a major difference in my skin by consistently visiting the clinic and following the doctor's recommendations."
    },
    {
        name: "Adriel Machado",
        role: "Client Review",
        image: "/img/testimnals7.png",
        text: "Dr. Geoffrey is amazing in his diagnosis, treatment, and interactions as a dermatologist. I've been consulting with him for the past 3 years and have seen significant improvement in my overall health."
    },
    {
        name: "Soumita Das",
        role: "Client Review",
        image: "/img/testimnals8.png",
        text: "Stepped into Maven Esthetics and felt like I hit the skincare jackpot. The team's warmth and expertise are unmatched. Dr. Geoffrey's touch is pure magic and my laser treatment was smooth with amazing results."
    },
    {
        name: "Paaras Madaan",
        role: "Client Review",
        image: "/img/testimnals9.png",
        text: "Had an amazing experience at Maven Esthetics. The staff were welcoming and made me feel at ease. Dr. Geoffrey's expertise and care are outstanding. Laser treatment results were phenomenal."
    },
    {
        name: "Abel Biju",
        role: "Client Review",
        image: "/img/testimnals10.png",
        text: "Truly one of the best clinics I've visited. Honest, chilled, and friendly doctor. Grateful to have them as part of my journey."
    },
    {
        name: "Sushma Dsouza",
        role: "Client Review",
        image: "/img/testimnals11.png",
        text: "I visited for stubborn pigmentation and uneven skin tone. Dr. Geoffrey suggested a simple but effective treatment plan. Within weeks I saw visible improvement. Very honest and professional care."
    },
    {
        name: "FW",
        role: "Client Review",
        image: "/img/testimnals12.png",
        text: "Really good down-to-earth dermatologist and team. They are accommodating and friendly. Dr. Vaz is always open to discussion and ensures comfort throughout treatment."
    }
];

const TestimonialCard = ({ item, onClick }) => (
    <div
        onClick={onClick}
        className="bg-[#F5EEFF] p-8 rounded-[32px] mb-6 relative cursor-pointer select-none transition-shadow duration-300 hover:shadow-md"
    >
        <div className="absolute top-8 right-8">
            <Image src={Comma} alt='comma' />
        </div>
        <div className="flex items-center gap-4 mb-6">
            <div className="relative w-14 h-14 rounded-full border-2 border-golden overflow-hidden">
                <Image src={item.image} alt={item.name} fill className="object-cover" />
            </div>
            <div className="text-left">
                <h4 className="font-bold text-lg leading-tight">{item.name}</h4>
                <p className="text-sm text-gray-500 font-raleway">{item.role}</p>
            </div>
        </div>
        <p className="text-darkpurple leading-relaxed font-raleway text-sm md:text-base text-left">
            {item.text}
        </p>
    </div>
);

export default function TestimonialMarquee() {
    const [isPaused, setIsPaused] = useState(false);
    const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0 });

    const sectionRef = useRef(null);
    const tooltipTimer = useRef(null);
    const mousePos = useRef({ x: 0, y: 0 });

    const list = [...testimonials, ...testimonials, ...testimonials, ...testimonials];

    // Continuously track mouse relative to section
    const handleMouseMove = (e) => {
        const rect = sectionRef.current?.getBoundingClientRect();
        if (!rect) return;
        mousePos.current = {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        };
    };

    const handleCardClick = () => {
        setIsPaused(prev => !prev);

        // Snap tooltip to current mouse position
        setTooltip({
            visible: true,
            x: mousePos.current.x,
            y: mousePos.current.y,
        });

        // Auto-hide after 1.8s
        clearTimeout(tooltipTimer.current);
        tooltipTimer.current = setTimeout(() => {
            setTooltip(prev => ({ ...prev, visible: false }));
        }, 1800);
    };

    useEffect(() => {
        return () => clearTimeout(tooltipTimer.current);
    }, []);

    const getColumnStyle = (delaySeconds) => ({
        animationPlayState: isPaused ? 'paused' : 'running',
        animationDelay: `${delaySeconds}s`,
    });

    return (
        <section
            ref={sectionRef}
            onMouseMove={handleMouseMove}
            className="bg-white py-10 md:py-28 overflow-hidden relative"
        >
            <div className="container mx-auto px-4">
                <div className="text-center mb-12 relative z-20">
                    <h2 className="font-garamond text-2xl md:text-6xl text-black mb-4">
                        <span className="inline-block bg-text-gradient bg-clip-text text-transparent font-black">Loved</span> By Our Clients,
                        <span className="inline-block bg-text-gradient bg-clip-text text-transparent font-black ml-3">Trusted</span> By Many
                    </h2>
                    <div className="flex items-end justify-center gap-3 font-raleway">
                        <span className="text-3xl font-bold">5.0</span>
                        <span className="text-sm text-gray-500">Out of 5 Rating</span>
                        <div className="flex text-yellow-400">★★★★★</div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[800px] overflow-hidden relative">
                    {/* Column 1 */}
                    <div className="animate-marquee-vertical flex flex-col" style={getColumnStyle(0)}>
                        {list.map((item, i) => (
                            <TestimonialCard key={i} item={item} onClick={handleCardClick} />
                        ))}
                    </div>

                    {/* Column 2 */}
                    <div className="animate-marquee-vertical flex flex-col mt-24" style={getColumnStyle(-15)}>
                        {list.map((item, i) => (
                            <TestimonialCard key={i} item={item} onClick={handleCardClick} />
                        ))}
                    </div>

                    {/* Column 3 — desktop only */}
                    <div className="animate-marquee-vertical flex-col hidden md:flex" style={getColumnStyle(-8)}>
                        {list.map((item, i) => (
                            <TestimonialCard key={i} item={item} onClick={handleCardClick} />
                        ))}
                    </div>

                    {/* Gradient fade edges */}
                    <div className="pointer-events-none absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent z-10" />
                    <div className="pointer-events-none absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-10" />
                </div>
            </div>

            {/* Cursor Tooltip — floats above click point */}
            <div
                className="pointer-events-none absolute z-50"
                style={{
                    left: tooltip.x,
                    top: tooltip.y,
                    transform: 'translate(-50%, -130%)',
                    opacity: tooltip.visible ? 1 : 0,
                    transition: 'opacity 0.25s ease',
                }}
            >
                <div className={`
                    px-4 py-2 rounded-full text-sm font-raleway font-medium whitespace-nowrap shadow-lg
                    flex items-center gap-2
                    ${isPaused
                        ? 'bg-darkpurple text-white'
                        : 'bg-white text-darkpurple border border-purple/20'
                    }
                `}>
                    <span className={`w-2 h-2 rounded-full ${isPaused ? 'bg-yellow-300' : 'bg-green-400'}`} />
                    {isPaused ? 'Scroll paused' : 'Scroll resumed'}
                </div>
                {/* Arrow caret */}
                <div className={`
                    w-3 h-3 rotate-45 mx-auto -mt-1.5 rounded-sm
                    ${isPaused ? 'bg-darkpurple' : 'bg-white border-r border-b border-purple/20'}
                `} />
            </div>
        </section>
    );
}