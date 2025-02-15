import React from "react";
import { Link } from "react-router-dom";

function PrivacyPolicy() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gray-100 dark:bg-gray-900 px-6 sm:px-10 py-16">
      <div className="max-w-3xl bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold text-indigo-600 dark:text-indigo-300 mb-6 text-center">
          Política de Privacidad
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Esta política de privacidad describe cómo se recopilan, utilizan y protegen los datos personales que proporcionas en este sitio web.
        </p>

        <h2 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-300 mt-6">1. Información general</h2>
        <p className="text-gray-700 dark:text-gray-300">
          <strong>Responsable:</strong> Arnau Solé.  
          <br />
          <strong>Correo de contacto:</strong> arnau@a-dimension.design
        </p>

        <h2 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-300 mt-6">2. Datos que recopilamos</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Al utilizar el formulario de contacto en este sitio web, recopilamos los siguientes datos personales:
        </p>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
          <li><strong>Nombre:</strong> Para identificar al remitente del mensaje.</li>
          <li><strong>Correo electrónico:</strong> Para poder responder a la consulta.</li>
          <li><strong>Mensaje:</strong> El contenido del mensaje enviado a través del formulario.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-300 mt-6">3. Finalidad del tratamiento</h2>
        <p className="text-gray-700 dark:text-gray-300">
          La información proporcionada se utilizará exclusivamente para responder a las consultas enviadas a través del formulario de contacto.  
          No compartimos, vendemos ni cedemos estos datos a terceros bajo ninguna circunstancia.
        </p>

        <h2 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-300 mt-6">4. Legitimación para el tratamiento</h2>
        <p className="text-gray-700 dark:text-gray-300">
          La base legal para el tratamiento de tus datos personales es el consentimiento del usuario.  
          Al marcar la casilla de aceptación de la política de privacidad antes de enviar el formulario, el usuario otorga su consentimiento para el tratamiento de sus datos con la finalidad indicada.
        </p>

        <h2 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-300 mt-6">5. Conservación de los datos</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Los datos se conservarán durante el tiempo necesario para atender la consulta realizada a través del formulario.  
          Posteriormente, podrán ser eliminados de nuestra base de datos salvo que se establezca una relación comercial o de servicio con el usuario.
        </p>

        <h2 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-300 mt-6">6. Derechos del usuario</h2>
        <p className="text-gray-700 dark:text-gray-300">
          El usuario tiene derecho a:
        </p>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
          <li>Acceder a sus datos personales y obtener información sobre su tratamiento.</li>
          <li>Solicitar la rectificación de datos inexactos o la supresión de los mismos.</li>
          <li>Oponerse al tratamiento de sus datos en determinadas circunstancias.</li>
          <li>Solicitar la limitación del tratamiento de sus datos.</li>
          <li>Solicitar la portabilidad de sus datos a otro proveedor de servicios.</li>
        </ul>
        <p className="text-gray-700 dark:text-gray-300">
          Para ejercer estos derechos, el usuario puede enviar un correo electrónico a: <strong>[tu email]</strong>.
        </p>

        <h2 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-300 mt-6">7. Seguridad de los datos</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Implementamos medidas de seguridad técnicas y organizativas para garantizar la protección de los datos personales y evitar su acceso no autorizado, alteración o eliminación.
        </p>

        <h2 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-300 mt-6">8. Uso de servicios de terceros</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Para el envío de mensajes desde el formulario de contacto, utilizamos <strong>EmailJS</strong>.  
          Esta herramienta actúa como intermediaria en el envío del correo electrónico y almacena temporalmente la información proporcionada por el usuario.  
          Para más detalles, consulta la <a href="https://www.emailjs.com/legal/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-300 underline">Política de Privacidad de EmailJS</a>.
        </p>

        <h2 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-300 mt-6">9. Cambios en la política de privacidad</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Nos reservamos el derecho a modificar esta política de privacidad en cualquier momento.  
          Cualquier cambio será notificado en este sitio web y entrará en vigor en el momento de su publicación.
        </p>

        <div className="mt-8 text-center">
          <Link to="/" className="text-indigo-600 dark:text-indigo-300 underline text-lg">
            Volver al inicio
          </Link>
        </div>
      </div>
    </section>
  );
}

export default PrivacyPolicy;

