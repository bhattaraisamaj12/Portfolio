import { motion } from "framer-motion"
import { FaGithub, FaLinkedin } from "react-icons/fa";
function Hero() {

    const fadeInUp = {
        hidden: { opacity: 0, y: 40 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 1.6 }
        }
    };

    return (
        <motion.section
            id="home"
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="relative min-h-screen flex items-center pt-10">
            <div className="max-w-7xl mx-auto px-2 grid md:grid-cols-2 gap-12 items-start">

                <div className="space-y-6">

                    {/* Name */}
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                        <span className="text-white">Samaj </span>
                        <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                            Bhattarai
                        </span>
                    </h1>

                    <p className="text-gray-400 max-w-md">
                        Translating specifications into robust systems.
                    </p>

                    <div className="flex flex-wrap gap-3 pt-2">
                        {["JavaScript", "React", "Node.JS", "MySQL", "Mongo DB", "Tailwind"].map((tech) => (
                            <span
                                key={tech}
                                className="px-3 py-1 text-xs rounded-full border border-white/10 bg-white/5 text-gray-300"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div className="flex gap-4 pt-4">
                        <a
                            href="#contact"
                            className="px-6 py-3 rounded-full bg-purple-600 text-white text-sm transition-transform duration-300 hover:scale-105 transition shadow-[0_0_20px_rgba(139,92,246,0.4)]"
                        >
                            Get in Touch
                        </a>

                        <a
                            href="projects"
                            className="px-6 py-3 rounded-full border border-white/10 text-sm text-gray-300 transition-transform duration-300 hover:scale-105 transition"
                        >
                            View My Work
                        </a>
                    </div>
                    <div className="flex items-center gap-2 pt-2">
                        <div className="flex items-center gap-1 mr-2">
                            <span className="text-sm uppercase tracking-[0.25em] text-gray-400">
                                Follow
                            </span>

                            <div className="w-10 h-px bg-white/10"></div>
                        </div>
                        <a href="https://github.com/bhattaraisamaj12" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="group flex items-center justify-center w-10 h-10 rounded-full bg-white/3 backdrop-blur-xl border border-white/10 text-gray-300 shadow-[0_5px_20px_rgba(0,0,0,0.4)] transition duration-300 hover:scale-110 hover:text-white">
                            <FaGithub className="w-5 h-5 opacity-80 group-hover:opacity-100 transition" />
                        </a>

                        <a href="https://www.linkedin.com/in/samaj-bhattarai-5704b932a" target="_blank" rel="noopener noreferrer" aria-label="Linkedin" className="group flex items-center justify-center w-10 h-10 rounded-full bg-white/3 backdrop-blur-xl border border-white/10 text-gray-300 shadow-[0_5px_20px_rgba(0,0,0,0.4)] transition duration-300 hover:scale-110 hover:text-white">
                            <FaLinkedin className="w-5 h-5 opacity-80 group-hover:opacity-100 transition" />
                        </a>
                    </div>

                </div>

                {/* RIGHT SIDE */}
                <div className="flex justify-center">

                    <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl w-full max-w-md">

                        <div className="absolute inset-0 rounded-2xl 
                            bg-purple-500/20 blur-3xl -z-10"></div>
                        <img
                            src="https://cdn.dribbble.com/userupload/26470486/file/original-2a71d7f1e496feae326d8ab816cd86f9.jpg?resize=400x0"
                            alt="preview"
                            className="rounded-xl"
                        />
                        <div className="absolute -left-6 top-10">
                            <div className="flex items-center gap-3 px-4 py-2.5 rounded-full bg-[#0b0b14]/90 backdrop-blur-xl border border-white/10 shadow-[0_8px_25px_rgba(0,0,0,0.5)] float">
                                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-500/20 text-purple-400">
                                    📍
                                </div>
                                <div className="leading-tight">
                                    <p className="text-[10px] uppercase tracking-wide text-gray-400">
                                        Based in
                                    </p>
                                    <p className="text-sm font-semibold text-white">
                                        Kathmandu, Nepal
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="absolute -right-6 bottom-10">
                            <div className="flex items-center gap-3 px-4 py-2.5 rounded-full bg-[#0b0b14]/90 backdrop-blur-xl border border-white/10 shadow-[0_8px_25px_rgba(0,0,0,0.5)] float">

                                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-500/20 text-purple-400">
                                    ⚡
                                </div>

                                <p className="text-sm font-semibold text-white">
                                    Open to Work
                                </p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3">

                <a href="#about"><p className="text-[11px] tracking-[0.35em] uppercase text-gray-500">
                    Scroll
                </p></a>

                <div className="w-[1px] h-10 bg-gradient-to-b from-purple-400 to-transparent animate-pulse"></div>

            </div>
        </motion.section>
    );
};

export default Hero;