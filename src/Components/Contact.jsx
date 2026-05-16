import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const MotionSection = motion.section;

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 1.6 }
    }
};

const Contact = () => {
    return (
        <>
            {/* CONTACT SECTION */}
            <MotionSection
                id="contact"
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="relative overflow-hidden px-5 sm:px-6 pt-6 md:pt-16 pb-10 scroll-mt-28">

                <div className="max-w-5xl mx-auto">

                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-[500px] sm:h-[500px] bg-purple-500/10 blur-3xl rounded-full">
                    </div>


                    <div
                        className="relative z-10 rounded-2xl sm:rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-5 sm:p-8 md:p-14 text-center"
                    >

                        <p className="text-purple-400 uppercase tracking-[0.2em] text-sm mb-4">
                            Contact
                        </p>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                            Let's Work Together
                        </h2>
                        {/* Contact Links */}
                        <div className="flex flex-col md:flex-row md:flex-wrap justify-center gap-4 mt-8 md:mt-12">

                            <a
                                href="mailto:bhattarai.samaj12@gmail.com"
                                className="group flex min-w-0 items-center gap-3 px-4 sm:px-6 py-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-purple-500/30 hover:-translate-y-1 transition duration-300"
                            >
                                <div
                                    className="w-10 h-10 rounded-full flex items-center justify-center bg-purple-500/20 text-purple-400"
                                >
                                    <MdEmail className="w-5 h-5" />
                                </div>

                                <div className="min-w-0 text-left">
                                    <p className="text-xs text-gray-400 uppercase tracking-wide">
                                        Email
                                    </p>
                                    <p className="text-sm font-medium text-white break-all">
                                        bhattarai.samaj12@gmail.com
                                    </p>
                                </div>
                            </a>

                            {/* GitHub */}
                            <a
                                href="https://github.com/bhattaraisamaj12"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex min-w-0 items-center gap-3 px-4 sm:px-6 py-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-purple-500/30 hover:-translate-y-1 transition duration-300"
                            >
                                <div
                                    className="w-10 h-10 rounded-full flex items-center justify-center bg-purple-500/20 text-purple-400"
                                >
                                    <FaGithub className="w-5 h-5" />
                                </div>

                                <div className="min-w-0 text-left">
                                    <p className="text-xs text-gray-400 uppercase tracking-wide">
                                        GitHub
                                    </p>
                                    <p className="text-sm font-medium text-white break-all">
                                        github.com/bhattaraisamaj12
                                    </p>
                                </div>
                            </a>

                            {/* LinkedIn */}
                            <a
                                href="https://www.linkedin.com/in/samaj-bhattarai-5704b932a"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex min-w-0 items-center gap-3 px-4 sm:px-6 py-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-purple-500/30 hover:-translate-y-1 transition duration-300"
                            >
                                <div
                                    className="w-10 h-10 rounded-full flex items-center justify-center bg-purple-500/20 text-purple-400"
                                >
                                    <FaLinkedin className="w-5 h-5" />
                                </div>

                                <div className="min-w-0 text-left">
                                    <p className="text-xs text-gray-400 uppercase tracking-wide">
                                        LinkedIn
                                    </p>
                                    <p className="text-sm font-medium text-white break-all">
                                        linkedin.com/samaj-bhattarai
                                    </p>
                                </div>
                            </a>

                        </div>
                    </div>
                </div>
            </MotionSection>

            {/* FOOTER */}
            <footer className="border-t border-white/10 py-8">
                <div
                    className="max-w-7xl mx-auto px-5 sm:px-6
                     flex flex-col md:flex-row
                     items-center justify-between gap-4"
                >

                    <p className="text-sm text-gray-500">
                        &copy; 2026 Samaj Bhattarai. All rights reserved.
                    </p>

                    <div className="flex items-center gap-6">

                        <a
                            href="https://github.com/bhattaraisamaj12"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition"
                        >
                            GitHub
                        </a>

                        <a
                            href="https://www.linkedin.com/in/samaj-bhattarai-5704b932a"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition"
                        >
                            LinkedIn
                        </a>

                        <a
                            href="mailto:bhattarai.samaj12@gmail.com"
                            className="text-gray-400 hover:text-white transition"
                        >
                            Email
                        </a>

                    </div>
                </div>
            </footer>
        </>
    );
};

export default Contact;
