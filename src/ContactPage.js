import React, { useState, useRef, useEffect } from "react";
import emailjs from "emailjs-com";
import gsap from "gsap";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    acceptTerms: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      formRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
  }, []);

  // Gestió de canvis en els inputs
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // 📨 **Enviament amb EmailJS**
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.acceptTerms) {
      alert("Has de acceptar la política de privacitat per continuar.");
      return;
    }

    // Enviar el formulari amb EmailJS
    emailjs.sendForm(
      "service_14rgdxn", // 🔹 El teu Service ID d'EmailJS
      "template_xxxxxxx", // 🔹 El teu Template ID d'EmailJS
      e.target,
      "user_xxxxxxxxx" // 🔹 El teu Public Key d'EmailJS
    )
    .then(
      (result) => {
        console.log("Email enviat correctament!", result.text);
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 4000);
      },
      (error) => {
        console.log("Error en enviar email:", error.text);
      }
    );

    e.target.reset();
    setFormData({
      name: "",
      email: "",
      message: "",
      acceptTerms: false,
    });
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gray-100 dark:bg-gray-900 px-6 sm:px-10 py-16">
      <h2 className="text-5xl font-bold text-indigo-600 dark:text-indigo-300 mb-6">¡Hablemos!</h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-10 text-center max-w-xl">
        ¿Tienes un proyecto en mente? Rellena el formulario y me pondré en contacto contigo lo antes posible.
      </p>

      {/* Formulari */}
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 space-y-6 transition-all duration-500"
      >
        <div>
          <label className="block text-gray-700 dark:text-gray-300 font-medium">Nombre</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
          />
        </div>

        <div>
          <label className="block text-gray-700 dark:text-gray-300 font-medium">Correo electrónico</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
          />
        </div>

        <div>
          <label className="block text-gray-700 dark:text-gray-300 font-medium">Mensaje</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
          ></textarea>
        </div>

        <div className="flex items-start space-x-3">
          <input
            type="checkbox"
            name="acceptTerms"
            checked={formData.acceptTerms}
            onChange={handleChange}
            required
            className="w-5 h-5 text-indigo-600 focus:ring-2 focus:ring-indigo-500 border-gray-300 rounded"
          />
          <label className="text-gray-700 dark:text-gray-300">
            Acepto la{" "}
            <a href="/politica-privacidad" className="text-indigo-600 dark:text-indigo-300 underline">
              política de privacidad
            </a>
            .
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
        >
          Enviar mensaje
        </button>

        {submitted && (
          <p className="mt-4 text-green-600 dark:text-green-400 font-semibold text-center">
            ✅ ¡Mensaje enviado correctamente!
          </p>
        )}
      </form>
    </section>
  );
}

export default ContactPage;


