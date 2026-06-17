import React, { useState } from 'react';
import { Layout, PenTool, Palette, ExternalLink, ShieldCheck, Zap, Layers } from 'lucide-react';
import lumina1 from './assets/Lumina_Dental_Clinic_1.png';
import lumina3 from './assets/Lumina_Dental_Clinic_3.png';
import horizon1 from './assets/Horizon.png';
import horizon2 from './assets/Horizon_2.png';
import biteboom2 from './assets/BiteBoom_2.png';
import biteboom3 from './assets/BiteBoom_3.png';

const PortfolioSections = () => {
    // State for filtering portfolio items
    const [filter, setFilter] = useState('All');

    const services = [
        {
            title: 'UI/UX Design',
            description: 'Creating high-fidelity wireframes, interactive prototypes, and user-centric digital interfaces that look stunning.',
            icon: <Layout className="w-6 h-6 text-cyan-400" />
        },
        {
            title: 'Brand Identities',
            description: 'Building strong, memorable brand identities through strategic logo design, visual systems, typography, and brand guidelines that help businesses stand out and connect with their audience.',
            icon: <Zap className="w-6 h-6 text-cyan-400" />
        },
        {
            title: 'Marketing Collateral',
            description: 'Creating professional marketing collateral, including brochures, flyers, presentations, social media graphics, and promotional materials that enhance brand visibility and support marketing goals.Creating high-impact marketing materials that communicate your message clearly, reflect your brand identity, and engage your target audience across both print and digital platforms.',
            icon: <PenTool className="w-6 h-6 text-cyan-400" />
        }
    ];

    const categories = ['All', 'Dentist', 'Real Estate', 'Food Industry'];

    const portfolioItems = [
        { title: 'Lumina Dental Clinic', category: 'Dentist', img: lumina1 },
        { title: 'Horizon Real Estate', category: 'Real Estate', img: horizon1 },
        { title: 'BiteBoom Campaign', category: 'Food Industry', img: biteboom2 },
        { title: 'Lumina Branding', category: 'Dentist', img: lumina3 },
        { title: 'Horizon Properties', category: 'Real Estate', img: horizon2 },
        { title: 'BiteBoom Identity', category: 'Food Industry', img: biteboom3 }
    ];

    const filteredItems = filter === 'All'
        ? portfolioItems
        : portfolioItems.filter(item => item.category === filter);

    return (
        <div className="bg-[#111822] text-slate-200 px-4 sm:p-8 space-y-16 pb-24">

            {/* ================= SERVICES SECTION ================= */}
            <section id="services" className="w-full max-w-6xl mx-auto bg-[#1c212b] rounded-[2rem] p-8 sm:p-12 shadow-2xl relative overflow-hidden">
                {/* Subtle ambient light inside card */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-500/10 blur-[60px] rounded-full pointer-events-none" />

                <div className="text-center max-w-2xl mx-auto mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        My <span className="text-cyan-400">Services</span>
                    </h2>
                    <p className="text-gray-400 text-sm sm:text-base">
                        Providing high-quality digital solutions tailored to elevate your product's experience and functionality.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-[#111822] p-8 rounded-2xl border-2 border-transparent hover:border-cyan-400/40 transition-all duration-300 group flex flex-col justify-between"
                        >
                            <div>
                                <div className="p-3 bg-[#1c212b] rounded-xl inline-block mb-6 shadow-md border border-gray-800 group-hover:scale-110 transition-transform duration-300">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {service.description}
                                </p>
                            </div>

                            <div className="mt-6 pt-4 border-t border-gray-800/50 flex items-center gap-2 text-xs font-semibold text-cyan-400 tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                Learn More <Layers className="w-3 h-3" />
                            </div>
                        </div>
                    ))}
                </div>
            </section>


            {/* ================= SKILLS SECTION ================= */}
            <section id="skills" className="w-full max-w-6xl mx-auto bg-[#1c212b] rounded-[2rem] p-8 sm:p-12 shadow-2xl relative overflow-hidden">
                <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-cyan-500/10 blur-[60px] rounded-full pointer-events-none" />
                <div className="text-center max-w-2xl mx-auto mb-12 relative z-10">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        Core <span className="text-cyan-400">Skills</span>
                    </h2>
                    <p className="text-gray-400 text-sm sm:text-base">
                        A toolkit of design software and disciplines I use to bring brand visions to life.
                    </p>
                </div>
                
                <div className="flex flex-wrap justify-center gap-4 relative z-10">
                    {['Adobe Photoshop', 'Adobe Illustrator', 'Adobe InDesign', 'Figma', 'Brand Identity', 'Typography', 'Logo Design', 'Print Design', 'Visual Communication', 'Marketing Materials'].map((skill, index) => (
                        <div key={index} className="bg-[#111822] text-gray-300 px-6 py-3 rounded-full border border-gray-800 hover:border-cyan-400 hover:text-cyan-400 hover:-translate-y-1 hover:shadow-[0_5px_15px_rgba(34,211,238,0.2)] transition-all duration-300 font-medium text-sm sm:text-base cursor-default">
                            {skill}
                        </div>
                    ))}
                </div>
            </section>

            {/* ================= PORTFOLIO SECTION ================= */}
            <section id="portfolio" className="w-full max-w-6xl mx-auto bg-[#1c212b] rounded-[2rem] p-8 sm:p-12 shadow-2xl relative overflow-hidden">

                <div className="text-center max-w-2xl mx-auto mb-8">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        Latest <span className="text-cyan-400">Projects</span>
                    </h2>
                    <p className="text-gray-400 text-sm sm:text-base">
                        A curated showcase of recent branding projects, marketing materials, and creative graphic design work, highlighting visually impactful and production-ready designs.                    </p>
                </div>

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 ${filter === cat
                                ? 'bg-cyan-400 text-slate-900 font-bold shadow-[0_0_15px_rgba(34,211,238,0.3)]'
                                : 'bg-[#111822] text-gray-400 hover:text-cyan-400 border border-gray-800'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Project Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredItems.map((item, index) => (
                        <div
                            key={index}
                            className="group relative bg-[#111822] rounded-2xl overflow-hidden border border-gray-800 shadow-lg aspect-[4/3]"
                        >
                            <img
                                src={item.img}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />

                            {/* Overlay with neon-gradient border on hover */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#111822]/95 via-[#111822]/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                                <span className="text-xs font-semibold text-cyan-400 tracking-widest uppercase mb-1">
                                    {item.category}
                                </span>
                                <h4 className="text-lg font-bold text-white mb-3">
                                    {item.title}
                                </h4>
                                <button className="self-start inline-flex items-center gap-2 text-xs bg-cyan-400 text-slate-900 px-3 py-1.5 rounded-md font-bold hover:bg-cyan-300 transition-colors">
                                    View Case Study <ExternalLink className="w-3 h-3" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
};

export default PortfolioSections;