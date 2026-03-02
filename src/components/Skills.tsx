import { skills } from '../data';

const Skills = () => {
  return (
    <section id="habilidades" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Habilidades</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-6 text-blue-600">Tecnologías</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {skills.technologies.map((skill) => (
                <span key={skill} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-bold mb-6 text-blue-600">Estilos</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {skills.style.map((skill) => (
                <span key={skill} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold mb-6 text-blue-600">Herramientas</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {skills.tools.map((skill) => (
                <span key={skill} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold mb-6 text-blue-600">Testing</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {skills.testing.map((skill) => (
                <span key={skill} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold mb-6 text-blue-600">Idioma</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {skills.language.map((skill) => (
                <span key={skill} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold mb-6 text-blue-600">Competencias</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {skills.competencies.map((skill) => (
                <span key={skill} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;