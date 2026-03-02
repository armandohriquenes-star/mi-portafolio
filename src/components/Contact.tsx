import { useRef, useState } from 'react';
import { personalInfo } from '../data';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaMapPin } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_zoex04d';      // El ID de  servicio Gmail
const TEMPLATE_ID = 'template_ntfongw';             //  Template ID
const PUBLIC_KEY = 'gY0ahQRnSTrfWA_ad';     // Public Key

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    setIsSending(true);
    setSuccessMessage('');
    setErrorMessage('');

    emailjs.sendForm(
      SERVICE_ID,
      TEMPLATE_ID,
      form.current,
      PUBLIC_KEY
    )
      .then((result) => {
        console.log(' Mensaje enviado:', result.text);
        setSuccessMessage('¡Mensaje enviado con éxito! Te responderé pronto.');
        form.current?.reset();
        setIsSending(false);

        // Limpiar mensaje de éxito después de 5 segundos
        setTimeout(() => setSuccessMessage(''), 5000);
      })
      .catch((error) => {
        console.error(' Error:', error.text);
        setErrorMessage('Hubo un error al enviar. Intenta de nuevo.');
        setIsSending(false);

        // Limpiar mensaje de error después de 5 segundos
        setTimeout(() => setErrorMessage(''), 5000);
      });
  };

  return (
    <section id="contacto" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-12">Contacto</h2>

        {/* Mensajes de éxito/error */}
        {successMessage && (
          <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg text-center">
            {successMessage}
          </div>
        )}

        {errorMessage && (
          <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg text-center">
            {errorMessage}
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-12">
          {/* Columna izquierda - Información de contacto */}
          <div>
            <h3 className="text-xl font-bold mb-4">Hablemos</h3>
            <p className="text-gray-600 mb-6">
              ¿Tienes un proyecto en mente? Estoy a un mensaje de distancia.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-blue-600 text-xl"><FaEnvelope /></span>
                <a href={`mailto:${personalInfo.email}`} className="text-gray-700 hover:text-blue-600">
                  {personalInfo.email}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-blue-600 text-xl"><FaMapPin className='text-red-600' /></span>
                <span className="text-gray-700">{personalInfo.location}</span>
              </div>

              <div className="flex gap-4 pt-4">
                <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer"
                  className="text-gray-600 hover:text-black text-8xl transition-transform duration-300 hover:-translate-y-1">
                  <FaGithub />
                </a>
                <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 text-8xl transition-transform duration-300 hover:-translate-y-1">
                  <FaLinkedin />
                </a>
                <a href={personalInfo.social.instagram} target="_blank" rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#e1306c] text-8xl transition-transform duration-300 hover:-translate-y-1 flex items-center gap-2">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>

          {/* Columna derecha - Formulario */}
          <form ref={form} onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Tu nombre"
              required
              disabled={isSending}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 disabled:bg-gray-100"
            />
            <input
              type="email"
              name="email"
              placeholder="Tu email"
              required
              disabled={isSending}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 disabled:bg-gray-100"
            />
            <input
              type="text"
              name="title"
              placeholder="Asunto"
              required
              disabled={isSending}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 disabled:bg-gray-100"
            />
            <textarea
              name="message"
              rows={5}
              placeholder="Tu mensaje"
              required
              disabled={isSending}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 disabled:bg-gray-100"
            />
            <button
              type="submit"
              disabled={isSending}
              className={`w-full py-3 rounded-lg font-medium transition ${isSending
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
            >
              {isSending ? 'Enviando...' : 'Enviar mensaje'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;