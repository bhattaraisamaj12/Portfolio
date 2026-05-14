import { motion } from "framer-motion";
const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 1.6, ease: "easeOut" }
    }
};

function About() {
    return (
        <motion.section
            id="about"
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="flex items-center justify-center px-6 py-16 mt-16 min-h-[90vh] bg-[#05070f]/10 backdrop-blur-xl border-t border-white/5"
        >

            <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">

                {/* LEFT SIDE */}
                <div className="space-y-6">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                        About <span className="text-[var(--accent)]">Me</span>
                    </h2>

                    <p className="text-white/70 leading-relaxed">
                        I am a dedicated Computer Science student with a passion for building seamless, high-quality user experiences. With a strong foundation in frontend technologies, I am currently expanding my expertise into Backend Development to provide comprehensive Full Stack solutions.Additionally, I am fluent in English, Nepali and Hindi. Cooperative, Calm, and a quick learner.
                    </p>

                    <p className="text-white/60 leading-relaxed">
                        Every challenge is a learning experience and every project is an opportunity to deliver remarkable experience.
                    </p>

                    {/* HIGHLIGHTS */}
                    <div className="flex flex-wrap gap-3 pt-4">
                        {["MERN Stack", "UI/UX Focus", "Problem Solving"].map((item, i) => (
                            <span
                                key={i}
                                className="px-4 py-2 text-sm rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                </div>

                {/* RIGHT SIDE (CARD) */}
                <div className="relative">
                    <div className="rounded-2xl p-8 bg-white/5 border border-white/10 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.5)]">

                        <h3 className="text-xl font-semibold mb-4 text-[var(--accent)]">
                            Quick Info
                        </h3>

                        <div className="space-y-3 text-white/70 text-sm">
                            <p>📍 Based in Kathmandu,Nepal</p>
                            <p>💻 Adaptive Developer</p>
                            <p>⚡ Focus: MERN + Modern UI</p>
                            <p>🚀 Currently building real-world projects</p>
                        </div>

                    </div>
                </div>

            </div>
        </motion.section >
    );
};

export default About;