/* Funcionalidad del chatbot con figura humana */

document.addEventListener('DOMContentLoaded', function() {
    // Elementos del chatbot
    const chatbotButton = document.getElementById('chatbotButton');
    const chatbotWindow = document.getElementById('chatbotWindow');
    const chatbotClose = document.getElementById('chatbotClose');
    const chatbotMessages = document.getElementById('chatbotMessages');
    const chatbotInput = document.getElementById('chatbotInput');
    const chatbotSend = document.getElementById('chatbotSend');
    
    // Base de conocimientos para el chatbot
    const knowledgeBase = [
        {
            keywords: ['diplomatura', 'qué es', 'de qué trata'],
            response: 'La Diplomatura Superior Universitaria en Inteligencia Artificial y Práctica Docente es un programa de formación de posgrado ofrecido por la Universidad de Mendoza, diseñado específicamente para docentes de todos los niveles y modalidades educativas. Busca brindar herramientas conceptuales, habilidades prácticas y competencias éticas para integrar la IA en la práctica docente de manera pedagógicamente fundamentada, crítica y responsable.'
        },
        {
            keywords: ['duración', 'cuánto dura', 'carga horaria', 'horas'],
            response: 'La diplomatura tiene una duración total de 200 horas reloj, distribuidas a lo largo de 8 meses de cursado (incluyendo el receso académico 2025-2026). La carga horaria se distribuye en: 150 horas para los cinco espacios curriculares (30 horas cada uno), 30 horas para el Trabajo Final Integrador, y 20 horas para actividades especiales sincrónicas (webinars y Jam Sessions).'
        },
        {
            keywords: ['modalidad', 'cursado', 'virtual', 'presencial', 'distancia'],
            response: 'La diplomatura se desarrolla en modalidad virtual a distancia, combinando trabajo asincrónico en el aula virtual con encuentros sincrónicos estratégicamente distribuidos. Cada espacio curricular incluye dos encuentros sincrónicos (al inicio y cierre), y se complementa con Jam Sessions y webinars. Esta modalidad ofrece flexibilidad a los participantes, permitiéndoles organizar gran parte de su tiempo de estudio según sus posibilidades y preferencias.'
        },
        {
            keywords: ['destinatarios', 'quiénes pueden', 'a quién está dirigida', 'inscribirse'],
            response: 'La diplomatura está dirigida a docentes de todos los niveles educativos (inicial, primario, secundario, superior) y modalidades (educación formal y no formal) interesados en la integración de la Inteligencia Artificial en contextos educativos. La diversidad de perfiles profesionales entre los participantes se considera una fortaleza de esta propuesta, ya que enriquece el intercambio de experiencias y perspectivas.'
        },
        {
            keywords: ['conocimientos previos', 'requisitos', 'programación', 'tecnología'],
            response: 'No se requieren conocimientos previos avanzados en tecnología o programación. La diplomatura parte de conceptos fundamentales y avanza progresivamente, permitiendo que docentes con diferentes niveles de familiaridad con las tecnologías digitales puedan incorporarse y beneficiarse del proceso formativo. Lo fundamental es la disposición para explorar, experimentar y reflexionar críticamente sobre las posibilidades y desafíos de la IA en educación.'
        },
        {
            keywords: ['estructura', 'módulos', 'contenidos', 'espacios curriculares'],
            response: 'La diplomatura se organiza en 5 espacios curriculares: 1) Introducción a la IA y su impacto en la educación; 2) Herramientas de IA para la Práctica Docente; 3) IA para la Evaluación y Analítica del Aprendizaje; 4) Diseño de Experiencias de Aprendizaje con IA; y 5) Ética, ciudadanía digital y futuro de la IA en educación. Estos se complementan con actividades especiales y un Trabajo Final Integrador de desarrollo procesual.'
        },
        {
            keywords: ['evaluación', 'aprobar', 'certificación', 'acreditación'],
            response: 'La evaluación es continua, formativa y auténtica. Se implementa un sistema de evaluación cualitativa basado en niveles de desarrollo de competencias (Inicial, En Desarrollo, Avanzado, Experto). Para aprobar cada espacio curricular y el TFI, se requiere alcanzar como mínimo el Nivel En Desarrollo. Al completar todos los requisitos, recibirás el certificado de "Diplomado/a Superior Universitario/a en IA y Práctica Docente" emitido por la Universidad de Mendoza.'
        },
        {
            keywords: ['trabajo final', 'tfi', 'integrador', 'proyecto'],
            response: 'El Trabajo Final Integrador (TFI) busca integrar los conocimientos y competencias desarrollados a lo largo de la diplomatura a través de una producción original y situada en tu contexto profesional. Tienes flexibilidad para elegir entre: Diseño de una Experiencia de Aprendizaje con IA, Desarrollo de recursos educativos, Investigación Aplicada/Ensayo Crítico, Propuesta de política institucional, o Proyecto de formación docente.'
        },
        {
            keywords: ['jam', 'sessions', 'actividades especiales', 'webinar'],
            response: 'Las Jam Sessions son eventos intensivos de co-creación y resolución de desafíos, con una duración de 5 horas cada uno. Promueven el trabajo colaborativo en equipos multidisciplinarios para abordar problemas complejos relacionados con la IA en educación. La diplomatura también incluye webinars con especialistas nacionales e internacionales que permiten profundizar en temáticas específicas.'
        },
        {
            keywords: ['inscripción', 'cómo inscribirse', 'comenzar', 'inicio', 'fecha'],
            response: 'La primera cohorte de la diplomatura comenzará en agosto de 2025. Para inscribirte, debes completar el formulario de pre-inscripción disponible en la página web de la Universidad de Mendoza, sección Posgrado y Formación Continua. Posteriormente, recibirás información detallada sobre el proceso de admisión y los requisitos específicos.'
        },
        {
            keywords: ['costo', 'precio', 'valor', 'arancel', 'pago', 'cuotas'],
            response: 'Para información sobre costos, aranceles y opciones de pago, te recomendamos contactar directamente a la Dirección de Posgrado y Formación Continua de la Universidad de Mendoza a través del formulario de contacto en esta página o por correo electrónico a posgrados@um.edu.ar. También existen opciones de becas parciales para docentes que cumplan con determinados requisitos.'
        },
        {
            keywords: ['becas', 'financiamiento', 'ayuda económica'],
            response: 'La Universidad de Mendoza ofrece un número limitado de becas parciales para docentes que cumplan con determinados requisitos. Para más información sobre becas y opciones de financiamiento, te recomendamos contactar directamente a la Dirección de Posgrado y Formación Continua a través del correo electrónico posgrados@um.edu.ar o completando el formulario de contacto en esta página.'
        },
        {
            keywords: ['requisitos técnicos', 'computadora', 'internet', 'técnicos'],
            response: 'Para aprovechar plenamente esta experiencia formativa, se recomienda contar con acceso regular a una computadora con conexión a internet estable, cámara y micrófono para los encuentros sincrónicos. No se requieren equipos de alta gama ni software especializado, ya que la diplomatura ha sido diseñada considerando la realidad y las limitaciones que pueden existir en diferentes entornos educativos.'
        },
        {
            keywords: ['grabaciones', 'clases grabadas', 'asistir', 'sincrónico'],
            response: 'Sí, todos los encuentros sincrónicos son grabados y puestos a disposición en el aula virtual para quienes no puedan participar en tiempo real. Sin embargo, se recomienda la participación sincrónica siempre que sea posible, ya que enriquece la experiencia formativa a través de la interacción directa con docentes y pares.'
        },
        {
            keywords: ['aula virtual', 'plataforma', 'campus'],
            response: 'El aula virtual de la Universidad de Mendoza utiliza una plataforma intuitiva y accesible, que incluye diversos recursos como materiales de estudio multimedia, foros de discusión, espacios para entrega de actividades, videoconferencias integradas, y herramientas de seguimiento del progreso. Al inicio de la diplomatura, se ofrece una inducción completa al uso de la plataforma.'
        },
        {
            keywords: ['hola', 'buenos días', 'buenas tardes', 'saludos'],
            response: '¡Hola! Soy el asistente virtual de la Diplomatura en IA y Práctica Docente. Estoy aquí para responder tus consultas sobre la diplomatura. ¿En qué puedo ayudarte?'
        },
        {
            keywords: ['gracias', 'muchas gracias', 'agradezco'],
            response: '¡De nada! Estoy aquí para ayudarte. Si tienes más preguntas sobre la Diplomatura en IA y Práctica Docente, no dudes en consultarme.'
        },
        {
            keywords: ['contacto', 'comunicarme', 'teléfono', 'email', 'correo'],
            response: 'Puedes contactar a la Dirección de Posgrado y Formación Continua de la Universidad de Mendoza a través del correo electrónico posgrados@um.edu.ar o completando el formulario de contacto en esta página. También puedes llamar al teléfono +54 (261) XXX-XXXX en horario de oficina.'
        }
    ];
    
    // Respuesta por defecto cuando no se encuentra coincidencia
    const defaultResponse = 'Lo siento, no tengo información específica sobre esa consulta. Te sugiero completar el formulario de contacto para que el equipo de la diplomatura pueda responderte personalmente, o reformular tu pregunta de otra manera.';
    
    // Abrir y cerrar ventana del chatbot
    chatbotButton.addEventListener('click', function() {
        chatbotWindow.classList.add('active');
    });
    
    chatbotClose.addEventListener('click', function() {
        chatbotWindow.classList.remove('active');
    });
    
    // Función para enviar mensaje
    function sendMessage() {
        const message = chatbotInput.value.trim();
        if (message === '') return;
        
        // Agregar mensaje del usuario
        addMessage(message, 'user');
        chatbotInput.value = '';
        
        // Procesar respuesta
        setTimeout(() => {
            const response = getResponse(message);
            addMessage(response, 'bot');
        }, 500);
    }
    
    // Enviar mensaje al hacer clic en el botón o presionar Enter
    chatbotSend.addEventListener('click', sendMessage);
    chatbotInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
    
    // Función para agregar mensaje al chat
    function addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}`;
        
        let messageHTML = '';
        
        if (sender === 'bot') {
            messageHTML = `
                <img src="images/avatar.jpg" alt="Asistente Virtual" class="avatar">
                <div class="message-content">
                    <p>${text}</p>
                </div>
            `;
        } else {
            messageHTML = `
                <div class="message-content">
                    <p>${text}</p>
                </div>
            `;
        }
        
        messageDiv.innerHTML = messageHTML;
        chatbotMessages.appendChild(messageDiv);
        
        // Scroll al final
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }
    
    // Función para obtener respuesta basada en el mensaje del usuario
    function getResponse(message) {
        // Convertir mensaje a minúsculas para facilitar la comparación
        const lowerMessage = message.toLowerCase();
        
        // Buscar coincidencias en la base de conocimientos
        for (const item of knowledgeBase) {
            // Verificar si alguna palabra clave está en el mensaje
            if (item.keywords.some(keyword => lowerMessage.includes(keyword.toLowerCase()))) {
                return item.response;
            }
        }
        
        // Si no hay coincidencias, devolver respuesta por defecto
        return defaultResponse;
    }
    
    // Añadir estilos para el chatbot
    const style = document.createElement('style');
    style.textContent = `
        .chatbot-messages .message {
            display: flex;
            margin-bottom: 15px;
        }
        
        .chatbot-messages .message.user {
            justify-content: flex-end;
        }
        
        .chatbot-messages .message.bot {
            justify-content: flex-start;
        }
        
        .chatbot-messages .avatar {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            margin-right: 10px;
        }
        
        .chatbot-messages .message-content {
            max-width: 70%;
            padding: 10px;
            border-radius: 10px;
        }
        
        .chatbot-messages .bot .message-content {
            background-color: var(--um-azul-claro);
            color: var(--um-blanco);
        }
        
        .chatbot-messages .user .message-content {
            background-color: var(--um-gris-medio);
            color: var(--um-gris-oscuro);
        }
    `;
    document.head.appendChild(style);
});
