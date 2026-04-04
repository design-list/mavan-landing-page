import Image from 'next/image';
import Comma from '@/icons/coma.svg';

const testimonials = [
    {
        name: "Moniqa Linda",
        role: "Psychiatric Nurse",
        image: "/img/testimnals1.png",
        text: "From the very first session, I felt heard and understood. The counselors here are professional, compassionate, and genuinely care about your well-being. My mental health has improved significantly thanks to their support."
    },
    {
        name: "Romina Yonishe",
        role: "Office Administrator",
        image: "/img/testimnals1.png",
        text: "Very professional and understanding. Helped me navigate my anxiety with practical advice and support. A safe space for mental health care!"
    },
    {
        name: "Qabinal Roman",
        role: "Mental Health Counselor",
        image: "/img/testimnals1.png",
        text: "I struggled with stress and self-doubt for years, but this platform gave me a safe space to open up and heal. The sessions are insightful and truly work."
    }
];

// Removed TypeScript types here
const TestimonialCard = ({ item }) => (
    <div className="bg-[#F5EEFF] p-8 rounded-[32px] mb-6 relative">
        <div className="absolute top-8 right-8">
            <Image src={Comma} alt='comma' />
            {/* <svg width="30" height="24" viewBox="0 0 30 24" fill="currentColor">
                <path d="M0 24V10.2857C0 4.11429 4.28571 0 10.7143 0V4.71429C7.28571 4.71429 5.57143 6.85714 5.57143 10.2857H10.7143V24H0ZM19.2857 24V10.2857C19.2857 4.11429 23.5714 0 30 0V4.71429C26.5714 4.71429 24.8571 6.85714 24.8571 10.2857H30V24H19.2857Z" />
            </svg> */}
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
        <p className="text-gray-700 leading-relaxed font-raleway text-sm md:text-base text-left">
            {item.text}
        </p>
    </div>
);

export default function TestimonialMarquee() {
    const list = [...testimonials, ...testimonials, ...testimonials, ...testimonials];

    return (
        <section className="bg-white py-10 md:py-28 overflow-hidden relative">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12 relative z-20">
                    <h2 className="font-gideon text-2xl md:text-6xl text-black mb-4">
                        <span className="inline-block bg-text-gradient bg-clip-text text-transparent font-black">Loved</span> By Our Clients,
                        <span className="inline-block bg-text-gradient bg-clip-text text-transparent font-black ml-3">Trusted</span> By Many
                    </h2>
                    <div className="flex items-end justify-center gap-3 fon-raleway">
                        <span className="text-3xl font-bold">4.9</span>
                        <span className="text-sm text-gray-500">Out of 5 Rating</span>
                        <div className="flex text-yellow-400">★★★★★</div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[800px] overflow-hidden relative">
                    <div className="animate-marquee-vertical flex flex-col">
                        {list.map((item, i) => <TestimonialCard key={i} item={item} />)}
                    </div>
                    <div className="animate-marquee-vertical flex flex-col [animation-delay:-10s]">
                        {list.map((item, i) => <TestimonialCard key={i} item={item} />)}
                    </div>
                    <div className="animate-marquee-vertical flex flex-col [animation-delay:-5s] hidden md:flex">
                        {list.map((item, i) => <TestimonialCard key={i} item={item} />)}
                    </div>

                    {/* Gradient Overlays for smooth edges */}
                    <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#ffffffe0] to-transparent z-10" />
                    <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#ffffffe0] to-transparent z-10" />
                </div>
            </div>
        </section>
    );
}