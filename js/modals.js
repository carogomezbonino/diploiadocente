// Funcionalidad para las ventanas modales
document.addEventListener('DOMContentLoaded', function() {
    // Modal de fundamentos
    const btnFundamentos = document.getElementById('btnFundamentosDetalle');
    const modalFundamentos = document.getElementById('modalFundamentos');
    const closeFundamentos = modalFundamentos.querySelector('.modal-close');
    
    btnFundamentos.addEventListener('click', function(e) {
        e.preventDefault();
        modalFundamentos.style.display = 'block';
    });
    
    closeFundamentos.addEventListener('click', function() {
        modalFundamentos.style.display = 'none';
    });
    
    // Cerrar modal al hacer clic fuera de él
    window.addEventListener('click', function(e) {
        if (e.target === modalFundamentos) {
            modalFundamentos.style.display = 'none';
        }
    });
    
    // Funcionalidad para las ventanas emergentes de los espacios curriculares
    const cardLinks = document.querySelectorAll('.card-link');
    
    cardLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Crear modal dinámicamente
            const modal = document.createElement('div');
            modal.className = 'modal';
            
            const modalContent = document.createElement('div');
            modalContent.className = 'modal-content';
            
            const closeBtn = document.createElement('span');
            closeBtn.className = 'modal-close';
            closeBtn.innerHTML = '&times;';
            
            const title = document.createElement('h2');
            title.textContent = this.getAttribute('data-ec');
            
            const body = document.createElement('div');
            body.className = 'modal-body';
            
            // Contenido específico según el espacio curricular
            const ecId = this.getAttribute('data-ec').split(':')[0].trim();
            
            switch(ecId) {
                case 'Espacio Curricular (EC) 1':
                    body.innerHTML = `
                        <p>Este espacio curricular introductorio busca establecer una base sólida de comprensión sobre la Inteligencia Artificial y su impacto en la educación. A través de un enfoque accesible y desmitificador, los participantes explorarán los fundamentos conceptuales de la IA, conocerán el panorama actual de herramientas relevantes para la práctica docente, y comenzarán a desarrollar una mirada crítica y reflexiva sobre las implicaciones de esta tecnología en los procesos de enseñanza y aprendizaje.</p>
                        
                        <h3>Contenidos principales:</h3>
                        <ul>
                            <li>Fundamentos conceptuales de la IA: historia, evolución y estado actual</li>
                            <li>Tipos y categorías de IA relevantes para la educación</li>
                            <li>Panorama de herramientas de IA para la práctica docente</li>
                            <li>Impacto de la IA en los roles docentes y en las prácticas pedagógicas</li>
                            <li>Introducción a las consideraciones éticas en el uso educativo de la IA</li>
                        </ul>
                    `;
                    break;
                case 'Espacio Curricular (EC) 2':
                    body.innerHTML = `
                        <p>Este espacio curricular se enfoca en el conocimiento y aplicación práctica de diversas herramientas de IA que pueden enriquecer la labor docente. Los participantes explorarán cómo la IA puede potenciar la personalización del aprendizaje, funcionar como un "copiloto" en diversas tareas docentes, y facilitar la creación de recursos educativos. Se pondrá especial énfasis en el desarrollo de habilidades de prompting educativo, permitiendo a los docentes interactuar eficazmente con sistemas de IA generativa.</p>
                        
                        <h3>Contenidos principales:</h3>
                        <ul>
                            <li>Herramientas de IA para la personalización del aprendizaje</li>
                            <li>IA Generativa como copiloto docente: posibilidades y limitaciones</li>
                            <li>El arte del prompting educativo: estrategias y técnicas</li>
                            <li>Creación y adaptación de recursos educativos con IA</li>
                            <li>Evaluación crítica de herramientas: criterios pedagógicos y éticos</li>
                        </ul>
                    `;
                    break;
                case 'Espacio Curricular (EC) 3':
                    body.innerHTML = `
                        <p>Este espacio curricular aborda cómo la IA está transformando los procesos de evaluación educativa y abriendo nuevas posibilidades en el campo de la analítica del aprendizaje. Los participantes explorarán diversas herramientas y enfoques que permiten enriquecer la evaluación formativa, proporcionar retroalimentación automatizada, y utilizar datos educativos para la toma de decisiones pedagógicas, siempre desde una perspectiva crítica y atenta a las consideraciones éticas.</p>
                        
                        <h3>Contenidos principales:</h3>
                        <ul>
                            <li>Transformación de la evaluación educativa con IA</li>
                            <li>Sistemas de retroalimentación automatizada: posibilidades y limitaciones</li>
                            <li>Fundamentos de Analítica del Aprendizaje (Learning Analytics)</li>
                            <li>Interpretación de datos educativos para la toma de decisiones</li>
                            <li>Consideraciones éticas en la evaluación asistida por IA</li>
                        </ul>
                    `;
                    break;
                case 'Espacio Curricular (EC) 4':
                    body.innerHTML = `
                        <p>Este espacio curricular se centra en la integración pedagógica de la IA a través del diseño de experiencias de aprendizaje innovadoras. Los participantes desarrollarán competencias para planificar, implementar y evaluar propuestas educativas que incorporen la IA de manera significativa, promoviendo el pensamiento crítico y la agencia de los estudiantes. Se trabajará en el diseño de proyectos situados en los contextos específicos de cada docente.</p>
                        
                        <h3>Contenidos principales:</h3>
                        <ul>
                            <li>Modelos y marcos para la integración pedagógica de la IA</li>
                            <li>Diseño de actividades que promuevan el pensamiento crítico sobre la IA</li>
                            <li>Estrategias para fomentar la agencia y autonomía de los estudiantes</li>
                            <li>Planificación de implementaciones contextualizadas</li>
                            <li>Evaluación de experiencias de aprendizaje con IA</li>
                        </ul>
                    `;
                    break;
                case 'Espacio Curricular (EC) 5':
                    body.innerHTML = `
                        <p>Este espacio curricular profundiza en las dimensiones éticas, sociales y políticas de la IA en educación, promoviendo una reflexión crítica sobre sus implicaciones más amplias. Los participantes explorarán dilemas éticos complejos, aspectos de gobernanza y regulación, y desarrollarán competencias para fomentar una ciudadanía digital crítica. También se analizarán tendencias emergentes y escenarios futuros, preparando a los docentes para un panorama en constante evolución.</p>
                        
                        <h3>Contenidos principales:</h3>
                        <ul>
                            <li>Dilemas éticos profundos en la aplicación educativa de la IA</li>
                            <li>Gobernanza y regulación de la IA en contextos educativos</li>
                            <li>Desarrollo de ciudadanía digital crítica en la era de la IA</li>
                            <li>Tendencias emergentes y escenarios futuros</li>
                            <li>Construcción de una visión personal sobre el futuro de la educación con IA</li>
                        </ul>
                    `;
                    break;
                default:
                    body.innerHTML = '<p>Información detallada no disponible.</p>';
            }
            
            modalContent.appendChild(closeBtn);
            modalContent.appendChild(title);
            modalContent.appendChild(body);
            modal.appendChild(modalContent);
            document.body.appendChild(modal);
            
            modal.style.display = 'block';
            
            closeBtn.addEventListener('click', function() {
                modal.style.display = 'none';
                setTimeout(() => {
                    document.body.removeChild(modal);
                }, 300);
            });
            
            window.addEventListener('click', function(e) {
                if (e.target === modal) {
                    modal.style.display = 'none';
                    setTimeout(() => {
                        document.body.removeChild(modal);
                    }, 300);
                }
            });
        });
    });
});
