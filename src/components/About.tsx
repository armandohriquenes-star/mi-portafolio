import { personalInfo } from '../data';

const About = () => {
  return (
    <section id="sobre-mi" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-12">Sobre mí</h2>

        <p className="text-lg text-gray-700 mb-10 text-center leading-relaxed">
          {personalInfo.bio}
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-blue-600">Formación</h3>
            <ul className="space-y-3 text-gray-700">
              {personalInfo.education.map((item, i) => (
                <li key={i} className="text-sm">🎓 {item}</li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-blue-600">Pasiones</h3>
            <ul className="space-y-3 text-gray-700">
              {personalInfo.pasiones.map((item, i) => (
                <li key={i} className="text-sm">💼 {item}</li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-blue-600">Objetivos</h3>
            <ul className="space-y-3 text-gray-700">
              {personalInfo.goals.map((item, i) => (
                <li key={i} className="text-sm">🎯 {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;