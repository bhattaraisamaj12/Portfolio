import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiMongodb, SiMysql, SiExpress, SiPostman, SiPostgresql } from "react-icons/si";

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 1.6 }
    }
};

function Skills() {
    const skills = [
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "React", icon: <FaReact /> },
        { name: "Tailwind", icon: <SiTailwindcss /> },
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express", icon: <SiExpress /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "MySQL", icon: <SiMysql /> },
        { name: "Git", icon: <FaGitAlt /> },
        { name: "Postman", icon: <SiPostman /> },
        { name: "Postgre", icon: <SiPostgresql /> },
    ];

    return (
        <motion.section
            id="skills"
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="px-6 pt-20 pb-20"
        >
            <div className="max-w-6xl mx-auto">

                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold">
                        My <span className="text-[var(--accent)]">Skills</span>
                    </h2>
                    <p className="text-white/60 mt-4">
                        Technologies
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

                    {skills.map((skill, i) => (
                        <div
                            key={i}
                            className="group flex flex-col items-center justify-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:scale-105 transition duration-300"
                        >
                            <div className="text-3xl text-white/80 group-hover:text-[var(--accent)] transition">
                                {skill.icon}
                            </div>

                            <p className="mt-3 text-sm text-white/70">
                                {skill.name}
                            </p>
                        </div>
                    ))}

                </div>

            </div>
        </motion.section>
    );
}

export default Skills; 