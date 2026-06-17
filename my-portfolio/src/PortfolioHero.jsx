import React from 'react';
import { Globe, Mail, Link, MessageCircle } from 'lucide-react';
import ahmedProfilePic from './assets/Ahmed.png';

const PortfolioHero = () => {
    // Custom hexagon clip-path for the image frame
    const hexagonClipPath = 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)';

    return (
        // Outer wrapper with the global dark background and ambient glow
        <div className="min-h-screen bg-[#111822] flex items-center justify-center p-4 sm:p-8 relative overflow-hidden font-sans">

            {/* Background ambient glow matching the design template */}
            <div className="absolute -bottom-40 left-0 right-0 h-96 bg-cyan-500/20 blur-[120px] pointer-events-none" />

            {/* Main Container Card */}
            <div className="w-full max-w-6xl bg-[#1c212b] rounded-[2rem] p-8 sm:p-12 relative z-10 shadow-2xl flex flex-col min-h-[80vh]">

                {/* Navbar */}
                <nav className="flex flex-col sm:flex-row justify-between items-center gap-6 mb-16">
                    <div className="text-white font-bold text-2xl tracking-wide">
                        Portfolio.
                    </div>
                    <div className="flex flex-wrap justify-center gap-6 sm:gap-8 text-sm font-medium text-gray-300">
                        <a href="#home" className="text-cyan-400 transition-colors">Home</a>
                        <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
                        <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
                        <a href="#portfolio" className="hover:text-cyan-400 transition-colors">Portfolio</a>
                        <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
                    </div>
                </nav>

                {/* Hero Section Content */}
                <div className="flex flex-col md:flex-row items-center justify-between flex-1 gap-12">

                    {/* Left Column: Typography & Call to Actions */}
                    <div className="md:w-1/2 space-y-6 z-10 text-center md:text-left">
                        <h3 className="text-white text-xl sm:text-2xl font-semibold">
                            Hello, It's Me
                        </h3>
                        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                            Ahmed Osama
                        </h1>
                        <h2 className="text-white text-xl sm:text-2xl font-semibold">
                            And I'm a <span className="text-cyan-400">Graphic Designer</span>
                        </h2>

                        <p className="text-gray-400 max-w-md mx-auto md:mx-0 leading-relaxed text-sm sm:text-base">
                            A Graphic Designer passionate about crafting distinctive brand identities, marketing collateral, and visual experiences that communicate ideas effectively and leave a lasting impression through creative and purposeful design.                        </p>

                        {/* NEW: Experience & Brands Stats Row */}
                        <div className="flex items-center justify-center md:justify-start gap-8 pt-2 pb-2">
                            <div>
                                <span className="block text-3xl font-bold text-white mb-1">5<span className="text-cyan-400">+</span></span>
                                <span className="text-xs text-gray-400 uppercase tracking-widest font-semibold">Years Experience</span>
                            </div>
                            <div className="w-px h-10 bg-gray-700/50"></div>
                            <div>
                                <span className="block text-3xl font-bold text-white mb-1">15<span className="text-cyan-400">+</span></span>
                                <span className="text-xs text-gray-400 uppercase tracking-widest font-semibold">Brands Partnered</span>
                            </div>
                        </div>

                        {/* Social Media Icons - Updated to safe Lucide Icons */}
                        <div className="flex gap-4 pt-2 justify-center md:justify-start">
                            {[Globe, MessageCircle, Mail, Link].map((Icon, index) => (
                                <a
                                    key={index}
                                    href="#"
                                    className="p-2 rounded-full border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-[#1c212b] transition-all duration-300"
                                >
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>

                        {/* Download CV Button */}
                        <div className="pt-4">
                            <button className="bg-cyan-400 text-slate-900 font-bold px-8 py-3 rounded-full shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] hover:-translate-y-1 transition-all duration-300">
                                Download CV
                            </button>
                        </div>
                    </div>

                    {/* Right Column: Hexagon Profile Frame */}
                    <div className="md:w-1/2 flex justify-center relative w-full max-w-sm">
                        {/* Ambient cyan backdrop glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-400/40 blur-[60px] rounded-full pointer-events-none" />

                        {/* Outer Cyan Hexagon Border Frame */}
                        <div
                            className="relative w-72 h-80 sm:w-80 sm:h-[360px] bg-cyan-400 flex items-center justify-center drop-shadow-[0_0_30px_rgba(34,211,238,0.5)] transition-transform duration-500 hover:scale-105"
                            style={{ clipPath: hexagonClipPath }}
                        >
                            {/* Inner Hexagon Mask holding the Image */}
                            <img
                                src={ahmedProfilePic}
                                alt="Profile"
                                className="w-[97%] h-[97%] object-cover bg-[#1c212b]"
                                style={{ clipPath: hexagonClipPath }}
                            />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PortfolioHero;