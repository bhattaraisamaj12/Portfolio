const projectList = [
    {
        title: "Online Food Ordering Platform",
        description:
            "A full-stack food ordering platform built for a single restaurant with real-time menu browsing, cart management, authentication, and order handling.",

        technologies: [
            "React",
            "Node.js",
            "Express",
            "PostgreSQL",
        ],

        github: "https://github.com/bhattaraisamaj12/Restaurant-Ordering-System",
    },

    {
        title: "Habit Tracker",
        description:
            "A habit tracking web application designed to help users build consistency through daily tracking, progress monitoring, and clean task management.",


        technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "PHP",
            "MySQL",
        ],

        github: "YOUR_GITHUB_LINK",
    },
];

const Projects = () => {
    return (
        <section id="projects" className="py-32">
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-20">
                    <p className="text-purple-400 uppercase tracking-[0.2em] text-sm mb-4">
                        My Work
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold text-white">
                        Featured Projects
                    </h2>
                </div>

                {/* Projects */}
                <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">

                    {projectList.map((project) => (
                        <div
                            key={project.title}
                            className="group relative rounded-3xl overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 transition duration-500 hover:-translate-y-2 hover:border-purple-500/30"
                        >
                            <div
                                className="absolute inset-0 bg-purple-500/0 group-hover:bg-purple-500/10 blur-3xl transition duration-500"
                            ></div>


                            {/* Content */}
                            <div className="p-4 relative z-10">

                                <h3 className="text-2xl font-semibold text-white">
                                    {project.title}
                                </h3>

                                <p className="text-gray-400 mt-4 text-sm leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 mt-6">
                                    {project.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-gray-300"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Buttons */}
                                <div className="flex gap-4 mt-8">

                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 text-center py-3 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 transition"
                                    >
                                        GitHub
                                    </a>

                                </div>

                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default Projects;