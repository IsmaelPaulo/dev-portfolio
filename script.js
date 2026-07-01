tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        darkblue: "#0a192f",
                        neon: "#00d1ff",
                        lightgray: "#ccd6f6",
                        darkgray: "#495670"
                    },
                    fontFamily: {
                        poppins: ["Poppins", "sans-serif"]
                    },
                    animation: {
                        'pulse-slow': 'pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite'
                    }
                }
            }
        }

const navItems = [
            { "label": "Início", "href": "#hero" },
            { "label": "Sobre", "href": "#about" },
            { "label": "Habilidades", "href": "#skills" },
            { "label": "Experiência", "href": "#experience" },
            { "label": "Projetos", "href": "#projects" },
            { "label": "Formação", "href": "#education" },
            { "label": "Contato", "href": "#contact" }
        ];

        const skills = [
    { name: "HTML5", icon: "fab fa-html5", color: "text-orange-500" },
    { name: "CSS3", icon: "fab fa-css3-alt", color: "text-blue-500" },
    { name: "JavaScript", icon: "fab fa-js", color: "text-yellow-400" },
    { name: "React", icon: "fab fa-react", color: "text-cyan-400" },
    { name: "Node.js", icon: "fab fa-node-js", color: "text-green-500" },
    { name: "Flutter", icon: "fas fa-mobile-alt", color: "text-sky-500" },
    { name: "Dart", icon: "fas fa-code", color: "text-blue-400" },
    { name: "PostgreSQL", icon: "fas fa-database", color: "text-indigo-500" },
    { name: "Git", icon: "fab fa-git-alt", color: "text-orange-600" },
    { name: "Figma", icon: "fab fa-figma", color: "text-pink-500" },
    { name: "Scrum", icon: "fas fa-users-cog", color: "text-purple-500" },
    { name: "Kanban", icon: "fas fa-columns", color: "text-emerald-500" }
];

        const experiences = [
    {
        company: "Centro Educacional Menino Jesus (CEMJ)",
        position: "Estagiário de Suporte Técnico em TI",
        period: "Out 2024 - Out 2025",
        description: "Atuação no suporte técnico aos usuários, manutenção de equipamentos e apoio às atividades de infraestrutura de TI, garantindo o funcionamento dos recursos tecnológicos da instituição.",
        achievements: [
            "Suporte técnico presencial e remoto aos usuários",
            "Atendimento de chamados e suporte telefônico",
            "Manutenção preventiva e corretiva de computadores",
            "Diagnóstico e resolução de problemas de hardware e software",
            "Suporte remoto utilizando TeamViewer",
            "Manutenção e configuração de monitores e impressoras",
            "Instalação e configuração de programas e periféricos",
            "Apoio na organização e manutenção do ambiente de TI"
        ]
    }
];

        const projects = [
    {
        title: "Em Construção",
        description: "Esta seção será atualizada em breve com projetos.",
        technologies: ["Em breve"],
        github: "",
        demo: ""
    }
];

        const education = [
            {
                "institution": "SENAI SC / São José",
                "degree": "Técnico em Análise e Desenvolvimento de Sistemas",
                "period": "2024 - 2025"
            }
        ];

        const contactMethods = [
            { 
                "icon": "fab fa-linkedin", 
                "label": "LinkedIn", 
                "value": "linkedin.com/in/joaosilva",
                "href": "#", 
                "color": "text-blue-400" 
            },
            { 
                "icon": "fab fa-github", 
                "label": "GitHub", 
                "value": "github.com/IsmaelPaulo",
                "href": "https://github.com/IsmaelPaulo", 
                "color": "text-gray-300" 
            },
            { 
                "icon": "fab fa-whatsapp", 
                "label": "WhatsApp", 
                "value": "+55 (48) 9 9196-3616",
                "href": "#", 
                "color": "text-green-500" 
            },
            { 
                "icon": "fas fa-envelope", 
                "label": "E-mail", 
                "value": "contato@joaosilva.dev",
                "href": "#", 
                "color": "text-red-400" 
            }
        ];

        const socialLinks = [
            { "icon": "fab fa-linkedin-in", "href": "#", "color": "hover:text-blue-400" },
            { "icon": "fab fa-github", "href": "https://github.com/IsmaelPaulo", "color": "hover:text-gray-300" },
            { "icon": "fab fa-instagram", "href": "#", "color": "hover:text-purple-400" }
        ];

        function renderNavItems(items) {
            return items.map(item => 
                `<li><a href="${item.href}" class="text-lightgray hover:text-neon transition">${item.label}</a></li>`
            ).join("");
        }

        function renderSkills(items) {
            return items.map(skill => 
                `<div class="bg-darkgray/20 p-4 rounded-lg flex items-center">
                    <i class="${skill.icon} ${skill.color} text-2xl mr-3"></i>
                    <span class="font-medium">${skill.name}</span>
                </div>`
            ).join("");
        }

        function renderExperiences(items) {
            return items.map(exp => 
                `<div class="border-l-2 border-neon pl-6 relative pb-10">
                    <div class="absolute -left-2 top-0 w-4 h-4 bg-neon rounded-full"></div>
                    <h3 class="text-xl font-bold">${exp.position}</h3>
                    <p class="text-neon font-semibold">${exp.company} | ${exp.period}</p>
                    <p class="my-3">${exp.description}</p>
                    <ul class="list-disc pl-5 space-y-2">
                        ${exp.achievements.map(a => `<li>${a}</li>`).join("")}
                    </ul>
                </div>`
            ).join("");
        }

        function renderProjects(items) {
    return items.map(project => {

        const githubButton = project.github && project.github !== "#"
            ? `<a href="${project.github}" target="_blank"
                class="px-4 py-2 bg-darkgray/40 rounded-md hover:bg-neon hover:text-darkblue transition">
                <i class="fab fa-github mr-2"></i>Código
            </a>`
            : `<button disabled
                class="px-4 py-2 bg-gray-700 text-gray-400 rounded-md cursor-not-allowed opacity-60">
                <i class="fab fa-github mr-2"></i>Código
            </button>`;

        const demoButton = project.demo && project.demo !== "#"
            ? `<a href="${project.demo}" target="_blank"
                class="px-4 py-2 border border-neon text-neon rounded-md hover:bg-neon hover:text-darkblue transition">
                <i class="fas fa-external-link-alt mr-2"></i>Demo
            </a>`
            : `<button disabled
                class="px-4 py-2 border border-gray-600 text-gray-500 rounded-md cursor-not-allowed opacity-60">
                <i class="fas fa-external-link-alt mr-2"></i>Demo
            </button>`;

        return `
            <div class="bg-darkgray/20 rounded-xl overflow-hidden card-hover">
                <img src="https://picsum.photos/600/400?random=${Math.floor(Math.random() * 100)}"
                    alt="${project.title}"
                    class="w-full h-48 object-cover"
                    loading="lazy">

                <div class="p-6">
                    <h3 class="text-xl font-bold mb-2">${project.title}</h3>

                    <p class="text-gray-400 mb-4">${project.description}</p>

                    <div class="flex flex-wrap gap-2 mb-4">
                        ${project.technologies.map(tech =>
                            `<span class="bg-darkgray/40 px-3 py-1 rounded-full text-sm">${tech}</span>`
                        ).join("")}
                    </div>

                    <div class="flex gap-3">
                        ${githubButton}
                        ${demoButton}
                    </div>
                </div>
            </div>
        `;
    }).join("");
}
        function renderEducation(items) {
            return items.map(edu => 
                `<div class="bg-darkgray/20 p-6 rounded-xl">
                    <h3 class="text-xl font-bold">${edu.institution}</h3>
                    <p class="text-neon font-medium my-2">${edu.degree}</p>
                    <p class="text-gray-400">${edu.period}</p>
                </div>`
            ).join("");
        }

        function renderContactMethods(items) {
    return items.map(contact =>
        `<a href="${contact.href}" target="_blank" rel="noopener noreferrer" onclick="return confirmLeave(event, '${contact.href}')"
            class="flex items-center gap-4 p-3 rounded-lg hover:bg-darkgray/30 transition duration-300">
            
            <i class="${contact.icon} ${contact.color} text-xl w-8"></i>

            <div>
                <p class="font-semibold">${contact.label}</p>
                <p class="text-gray-400">${contact.value}</p>
            </div>

        </a>`
    ).join("");
}

        function renderSocialLinks(items) {
    return items.map(social => 
        `<a href="${social.href}"
            target="_blank"
            rel="noopener noreferrer"
            onclick="return confirmLeave(event, '${social.href}')"
            class="w-12 h-12 rounded-full bg-darkgray/30 flex items-center justify-center ${social.color} hover:bg-darkgray/50 transition">
            <i class="${social.icon}"></i>
        </a>`
    ).join("");
}

        document.getElementById('nav-list').innerHTML = renderNavItems(navItems);
        document.getElementById('mobile-nav-list').innerHTML = renderNavItems(navItems);
        document.getElementById('skills-container').innerHTML = renderSkills(skills);
        document.getElementById('experience-list').innerHTML = renderExperiences(experiences);
        document.getElementById('projects-grid').innerHTML = renderProjects(projects);
        document.getElementById('education-list').innerHTML = renderEducation(education);
        document.getElementById('contact-methods').innerHTML = renderContactMethods(contactMethods);
        document.getElementById('social-links').innerHTML = renderSocialLinks(socialLinks);

        document.getElementById('mobile-menu').addEventListener('click', function() {
            const mobileNav = document.getElementById('mobile-nav');
            mobileNav.classList.toggle('hidden');
        });

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    document.getElementById('mobile-nav').classList.add('hidden');
                }
            });
        });
        
        function confirmLeave(event, url) {
    event.preventDefault();

    const sair = confirm("Você será redirecionado para um site externo. Deseja continuar?");

    if (sair) {
        window.open(url, "_blank", "noopener,noreferrer");
    }

    return false;
}