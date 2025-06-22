/* Funcionalidad para las descripciones detalladas de los Espacios Curriculares */

document.addEventListener('DOMContentLoaded', function() {
    // Configuración de los modales para cada Espacio Curricular
    const ecDetails = {
        'ec1': {
            title: 'Espacio Curricular (EC) 1: Introducción a la IA y su impacto en la educación',
            content: `
                <div class="ec-detail-content">
                    <h3>Descripción</h3>
                    <p>Este espacio curricular ofrece una introducción accesible y desmitificadora a la Inteligencia Artificial, con foco en sus aplicaciones educativas. Se abordan los conceptos fundamentales, la evolución histórica y las principales categorías de IA relevantes para la educación, estableciendo una base conceptual sólida para los espacios curriculares posteriores.</p>
                    
                    <div class="ec-detail-section">
                        <h4>Objetivos</h4>
                        <ul>
                            <li>Comprender los conceptos fundamentales de la IA y su evolución histórica</li>
                            <li>Identificar las principales categorías y aplicaciones de la IA en contextos educativos</li>
                            <li>Analizar críticamente el impacto actual y potencial de la IA en los procesos de enseñanza y aprendizaje</li>
                            <li>Desarrollar una postura reflexiva sobre las oportunidades y desafíos que presenta la IA para la educación</li>
                        </ul>
                    </div>
                    
                    <div class="ec-detail-section">
                        <h4>Contenidos principales</h4>
                        <ul>
                            <li>Fundamentos conceptuales de la IA: definiciones, enfoques y evolución histórica</li>
                            <li>Panorama actual de la IA en educación: principales categorías y aplicaciones</li>
                            <li>Impacto de la IA en los roles docentes y en las prácticas pedagógicas</li>
                            <li>Introducción a los modelos de lenguaje y la IA generativa en contextos educativos</li>
                            <li>Reflexiones críticas iniciales sobre las implicaciones pedagógicas, sociales y éticas</li>
                        </ul>
                    </div>
                    
                    <div class="ec-detail-section">
                        <h4>Metodología</h4>
                        <p>Combinación de exposiciones conceptuales, análisis de casos, experimentación guiada con herramientas de IA y espacios de reflexión colaborativa. Se promueve un acercamiento práctico y experiencial a las tecnologías de IA, complementado con lecturas y discusiones que fomentan el pensamiento crítico.</p>
                    </div>
                </div>
            `
        },
        'ec2': {
            title: 'Espacio Curricular (EC) 2: Herramientas de IA para la Práctica Docente',
            content: `
                <div class="ec-detail-content">
                    <h3>Descripción</h3>
                    <p>Este espacio curricular se centra en el conocimiento y aplicación práctica de diversas herramientas de IA que pueden enriquecer y potenciar la labor docente. Se exploran aplicaciones concretas para la personalización del aprendizaje, la creación de recursos educativos, la gestión del aula y el desarrollo profesional docente.</p>
                    
                    <div class="ec-detail-section">
                        <h4>Objetivos</h4>
                        <ul>
                            <li>Conocer y experimentar con diversas herramientas de IA aplicables a la práctica docente</li>
                            <li>Desarrollar habilidades para el uso efectivo de la IA generativa como "copiloto docente"</li>
                            <li>Aplicar estrategias de prompting educativo para obtener resultados relevantes y de calidad</li>
                            <li>Crear recursos educativos innovadores utilizando herramientas de IA</li>
                            <li>Evaluar críticamente la pertinencia y el valor agregado de diferentes herramientas de IA en contextos educativos específicos</li>
                        </ul>
                    </div>
                    
                    <div class="ec-detail-section">
                        <h4>Contenidos principales</h4>
                        <ul>
                            <li>Herramientas de IA para la personalización del aprendizaje</li>
                            <li>IA Generativa como "copiloto docente": posibilidades y limitaciones</li>
                            <li>Estrategias efectivas de prompting educativo</li>
                            <li>Creación de recursos educativos con apoyo de IA: textos, imágenes, audio y video</li>
                            <li>Herramientas de IA para la gestión del aula y la productividad docente</li>
                            <li>Criterios para la selección y evaluación de herramientas de IA en contextos educativos</li>
                        </ul>
                    </div>
                    
                    <div class="ec-detail-section">
                        <h4>Metodología</h4>
                        <p>Enfoque eminentemente práctico y experiencial, con talleres guiados, demostraciones en vivo y espacios para la experimentación autónoma. Se promueve el aprendizaje por descubrimiento y la resolución de problemas reales de la práctica docente mediante el uso estratégico de herramientas de IA.</p>
                    </div>
                </div>
            `
        },
        'ec3': {
            title: 'Espacio Curricular (EC) 3: IA para la Evaluación y Analítica del Aprendizaje',
            content: `
                <div class="ec-detail-content">
                    <h3>Descripción</h3>
                    <p>Este espacio curricular aborda las transformaciones que la IA está generando en los procesos de evaluación educativa y en el análisis de datos sobre el aprendizaje. Se exploran herramientas y metodologías que permiten enriquecer la evaluación formativa, automatizar ciertos aspectos de la retroalimentación y utilizar datos para la toma de decisiones pedagógicas informadas.</p>
                    
                    <div class="ec-detail-section">
                        <h4>Objetivos</h4>
                        <ul>
                            <li>Comprender el potencial de la IA para transformar los procesos de evaluación educativa</li>
                            <li>Explorar herramientas de IA para la evaluación formativa y la retroalimentación automatizada</li>
                            <li>Desarrollar competencias básicas en Analítica del Aprendizaje para la toma de decisiones pedagógicas</li>
                            <li>Analizar críticamente las implicaciones éticas del uso de IA en la evaluación y el análisis de datos educativos</li>
                            <li>Diseñar estrategias de evaluación enriquecidas con IA, centradas en el estudiante y alineadas con objetivos pedagógicos</li>
                        </ul>
                    </div>
                    
                    <div class="ec-detail-section">
                        <h4>Contenidos principales</h4>
                        <ul>
                            <li>Transformación de la evaluación educativa en la era de la IA</li>
                            <li>Herramientas de IA para la evaluación formativa y sumativa</li>
                            <li>Retroalimentación automatizada: posibilidades, limitaciones y complementariedad con la retroalimentación humana</li>
                            <li>Fundamentos de Analítica del Aprendizaje: recolección, análisis e interpretación de datos educativos</li>
                            <li>Visualización de datos para la toma de decisiones pedagógicas</li>
                            <li>Consideraciones éticas en el uso de IA para la evaluación y el análisis de datos educativos</li>
                        </ul>
                    </div>
                    
                    <div class="ec-detail-section">
                        <h4>Metodología</h4>
                        <p>Combinación de fundamentos conceptuales con aplicaciones prácticas, incluyendo análisis de casos, experimentación con herramientas de evaluación basadas en IA y proyectos de diseño de estrategias evaluativas innovadoras. Se promueve la reflexión crítica sobre las implicaciones pedagógicas y éticas de las tecnologías presentadas.</p>
                    </div>
                </div>
            `
        },
        'ec4': {
            title: 'Espacio Curricular (EC) 4: Diseño de Experiencias de Aprendizaje con IA',
            content: `
                <div class="ec-detail-content">
                    <h3>Descripción</h3>
                    <p>Este espacio curricular se enfoca en la integración pedagógica de la IA a través del diseño de experiencias de aprendizaje innovadoras. Se abordan marcos conceptuales y metodológicos para el diseño, implementación y evaluación de propuestas educativas que incorporen la IA de manera significativa, promoviendo el desarrollo del pensamiento crítico y la alfabetización en IA.</p>
                    
                    <div class="ec-detail-section">
                        <h4>Objetivos</h4>
                        <ul>
                            <li>Desarrollar competencias para el diseño de experiencias de aprendizaje que integren la IA de manera pedagógicamente fundamentada</li>
                            <li>Aplicar marcos conceptuales y metodológicos para la integración significativa de la IA en diferentes contextos educativos</li>
                            <li>Diseñar actividades que promuevan el pensamiento crítico sobre la IA y sus implicaciones</li>
                            <li>Elaborar propuestas de implementación contextualizada de la IA en entornos educativos específicos</li>
                            <li>Desarrollar criterios para la evaluación de experiencias de aprendizaje enriquecidas con IA</li>
                        </ul>
                    </div>
                    
                    <div class="ec-detail-section">
                        <h4>Contenidos principales</h4>
                        <ul>
                            <li>Marcos conceptuales para la integración pedagógica de la IA</li>
                            <li>Diseño de experiencias de aprendizaje centradas en el estudiante con apoyo de IA</li>
                            <li>Estrategias para promover el pensamiento crítico sobre la IA y sus implicaciones</li>
                            <li>Alfabetización en IA: desarrollo de competencias para comprender, usar y evaluar críticamente la IA</li>
                            <li>Planificación de la implementación: consideraciones contextuales, institucionales y curriculares</li>
                            <li>Evaluación de experiencias de aprendizaje enriquecidas con IA</li>
                        </ul>
                    </div>
                    
                    <div class="ec-detail-section">
                        <h4>Metodología</h4>
                        <p>Enfoque de aprendizaje basado en proyectos, donde los participantes diseñan, prototipan y evalúan experiencias de aprendizaje que integran la IA de manera significativa. Se promueve el trabajo colaborativo, la retroalimentación entre pares y la iteración como estrategias para el mejoramiento continuo de las propuestas.</p>
                    </div>
                </div>
            `
        },
        'ec5': {
            title: 'Espacio Curricular (EC) 5: Ética, ciudadanía digital y futuro de la IA en educación',
            content: `
                <div class="ec-detail-content">
                    <h3>Descripción</h3>
                    <p>Este espacio curricular profundiza en las dimensiones éticas, sociales y políticas de la IA en educación, promoviendo una reflexión crítica sobre sus implicaciones presentes y futuras. Se abordan dilemas éticos complejos, cuestiones de gobernanza y regulación, y se exploran escenarios prospectivos sobre el futuro de la educación en un mundo cada vez más mediado por la IA.</p>
                    
                    <div class="ec-detail-section">
                        <h4>Objetivos</h4>
                        <ul>
                            <li>Analizar críticamente las implicaciones éticas, sociales y políticas de la IA en educación</li>
                            <li>Identificar y abordar dilemas éticos relacionados con el uso de la IA en contextos educativos</li>
                            <li>Comprender los marcos de gobernanza y regulación de la IA en educación a nivel local y global</li>
                            <li>Desarrollar estrategias para promover una ciudadanía digital crítica y responsable en relación con la IA</li>
                            <li>Explorar escenarios prospectivos sobre el futuro de la educación en la era de la IA</li>
                        </ul>
                    </div>
                    
                    <div class="ec-detail-section">
                        <h4>Contenidos principales</h4>
                        <ul>
                            <li>Dilemas éticos en el uso educativo de la IA: privacidad, equidad, transparencia, autonomía</li>
                            <li>Sesgos algorítmicos y su impacto en contextos educativos</li>
                            <li>Gobernanza y regulación de la IA en educación: marcos normativos y buenas prácticas</li>
                            <li>Ciudadanía digital crítica en la era de la IA</li>
                            <li>Tendencias y escenarios futuros: transformaciones en los roles docentes, las instituciones educativas y los procesos de aprendizaje</li>
                            <li>Hacia una integración humanista de la IA en educación: principios y estrategias</li>
                        </ul>
                    </div>
                    
                    <div class="ec-detail-section">
                        <h4>Metodología</h4>
                        <p>Combinación de análisis de casos, debates estructurados, ejercicios de prospectiva y proyectos de investigación-acción. Se promueve el pensamiento crítico, la deliberación ética y la construcción colaborativa de visiones y propuestas para una integración humanista de la IA en educación.</p>
                    </div>
                </div>
            `
        }
    };

    // Crear los modales para cada EC
    function createECModals() {
        const modalContainer = document.createElement('div');
        modalContainer.id = 'ec-modals-container';
        document.body.appendChild(modalContainer);

        // Crear un modal para cada EC
        for (const [ecId, ecData] of Object.entries(ecDetails)) {
            const modalHTML = `
                <div id="${ecId}-modal" class="ec-modal">
                    <div class="ec-modal-content">
                        <div class="ec-modal-header">
                            <h2>${ecData.title}</h2>
                            <span class="ec-modal-close" data-modal="${ecId}-modal">&times;</span>
                        </div>
                        <div class="ec-modal-body">
                            ${ecData.content}
                        </div>
                    </div>
                </div>
            `;
            modalContainer.insertAdjacentHTML('beforeend', modalHTML);
        }

        // Agregar estilos para los modales
        const modalStyles = document.createElement('style');
        modalStyles.textContent = `
            .ec-modal {
                display: none;
                position: fixed;
                z-index: 1000;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                overflow: auto;
                background-color: rgba(0,0,0,0.6);
                opacity: 0;
                transition: opacity 0.3s ease;
            }
            
            .ec-modal.active {
                display: block;
                opacity: 1;
            }
            
            .ec-modal-content {
                background-color: #fff;
                margin: 5% auto;
                padding: 0;
                width: 80%;
                max-width: 800px;
                border-radius: 8px;
                box-shadow: 0 5px 15px rgba(0,0,0,0.3);
                transform: translateY(-20px);
                transition: transform 0.3s ease;
                max-height: 90vh;
                display: flex;
                flex-direction: column;
            }
            
            .ec-modal.active .ec-modal-content {
                transform: translateY(0);
            }
            
            .ec-modal-header {
                padding: 15px 20px;
                background-color: var(--um-azul-oscuro);
                color: white;
                border-radius: 8px 8px 0 0;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            
            .ec-modal-header h2 {
                margin: 0;
                font-size: 1.5rem;
            }
            
            .ec-modal-close {
                color: white;
                font-size: 28px;
                font-weight: bold;
                cursor: pointer;
            }
            
            .ec-modal-body {
                padding: 20px;
                overflow-y: auto;
            }
            
            .ec-detail-content {
                color: var(--um-gris-oscuro);
            }
            
            .ec-detail-section {
                background-color: #f8f9fa;
                border-left: 4px solid var(--um-azul-claro);
                padding: 15px;
                margin: 20px 0;
                border-radius: 0 4px 4px 0;
            }
            
            .ec-detail-section h4 {
                color: var(--um-azul-oscuro);
                margin-top: 0;
            }
            
            .ec-detail-section ul {
                padding-left: 20px;
            }
            
            .ec-detail-section li {
                margin-bottom: 8px;
            }
            
            @media (max-width: 768px) {
                .ec-modal-content {
                    width: 95%;
                    margin: 10% auto;
                }
                
                .ec-modal-header h2 {
                    font-size: 1.2rem;
                }
            }
        `;
        document.head.appendChild(modalStyles);
    }

    // Configurar los eventos para abrir y cerrar modales
    function setupModalEvents() {
        // Configurar los enlaces "Ver detalles" para abrir los modales
        const detailLinks = document.querySelectorAll('.card-link');
        detailLinks.forEach((link, index) => {
            const ecId = `ec${index + 1}`;
            link.setAttribute('data-modal', `${ecId}-modal`);
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const modalId = this.getAttribute('data-modal');
                const modal = document.getElementById(modalId);
                if (modal) {
                    modal.classList.add('active');
                    document.body.style.overflow = 'hidden'; // Prevenir scroll en el fondo
                }
            });
        });

        // Configurar los botones de cierre de los modales
        document.addEventListener('click', function(e) {
            if (e.target.classList.contains('ec-modal-close')) {
                const modalId = e.target.getAttribute('data-modal');
                const modal = document.getElementById(modalId);
                if (modal) {
                    modal.classList.remove('active');
                    document.body.style.overflow = ''; // Restaurar scroll
                }
            }
        });

        // Cerrar modal al hacer clic fuera del contenido
        document.addEventListener('click', function(e) {
            if (e.target.classList.contains('ec-modal')) {
                e.target.classList.remove('active');
                document.body.style.overflow = ''; // Restaurar scroll
            }
        });

        // Cerrar modal con la tecla Escape
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                const activeModal = document.querySelector('.ec-modal.active');
                if (activeModal) {
                    activeModal.classList.remove('active');
                    document.body.style.overflow = ''; // Restaurar scroll
                }
            }
        });
    }

    // Inicializar los modales
    createECModals();
    setupModalEvents();
});
