import { personalInfo } from '../data';

const Hero = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <img
          src={personalInfo.profileImage}
          alt={personalInfo.name}
          className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto mb-6 border-4 border-white shadow-lg object-cover"
        />
        <h1 className="text-4xl md:text-5xl font-bold mb-3">{personalInfo.name}</h1>
        <p className="text-xl md:text-2xl mb-4 opacity-90">{personalInfo.role}</p>
        <p className="text-lg max-w-2xl mx-auto mb-8 opacity-95">{personalInfo.shortPhrase}</p>
        <a
          href="#contacto"
          className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition shadow-lg"
        >
          Contáctame
        </a>
      </div>
    </section>
  );
};

export default Hero;