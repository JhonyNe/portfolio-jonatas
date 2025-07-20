import { Github, Linkedin } from 'lucide-react';

const projects = [
  {
    title: "Chaveiro 3D Personalizado – Código5",
    description: "Design em 3D da logo 'Código5' com relevo termocrômico e camadas separadas para impressão FDM.",
    tools: ["Fusion 360", "PrusaSlicer", "PLA Termocrômico"],
  },
  {
    title: "Porta Guardanapo Personalizado",
    description: "Projeto vetorial para corte a laser com design elegante para festas e eventos.",
    tools: ["CorelDRAW", "Inkscape"],
  },
  {
    title: "Slider Animado com JavaScript",
    description: "Slider interativo com animação, controle de estado e navegação personalizada.",
    tools: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Scripts de Lógica e Automação",
    description: "Exercícios práticos com foco em lógica de programação e resolução de problemas.",
    tools: ["JavaScript", "Python"],
  },
];

export default function PortfolioPage() {
  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6 text-center text-white">Portfólio – Jonatas Medeiros</h1>

      <div className="flex justify-center gap-4 mb-10">
        <a href="https://github.com/JhonyNe" target="_blank" rel="noreferrer">
          <button className="bg-black/40 hover:bg-white text-white hover:text-black px-4 py-2 rounded-full flex items-center gap-2">
            <Github size={18} /> GitHub
          </button>
        </a>
        <a href="https://www.linkedin.com/in/jonatas-medeiros-5648361b7/" target="_blank" rel="noreferrer">
          <button className="bg-black/40 hover:bg-white text-white hover:text-black px-4 py-2 rounded-full flex items-center gap-2">
            <Linkedin size={18} /> LinkedIn
          </button>
        </a>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white text-black rounded-2xl p-5 shadow-lg">
            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            <p className="mb-2">{project.description}</p>
            <div className="flex flex-wrap gap-2 text-sm text-purple-800 font-medium">
              {project.tools.map((tool, i) => (
                <span key={i} className="bg-purple-100 px-3 py-1 rounded-full">{tool}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
