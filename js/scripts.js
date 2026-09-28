// Arreglo de módulos con la información completa del programa de 2.° Año
const modulosInfo = [
    {
        titulo: "Orientación metodológica",
        horas: "16 Horas lectivas (1 semana) - 0 UV",
        descripcion: "Promueve el desarrollo de habilidades metodológicas, autónomas y reflexivas para abordar el proceso formativo por competencias dentro del sector de servicios turísticos.",
        competencias: "Aplicar estrategias de aprendizaje autónomo y herramientas de pensamiento crítico de manera sistemática y reflexiva para resolver problemas complejos y adaptarse al entorno profesional.",
        herramientas: "Enfoque curricular por competencias, cuaderno de trabajo técnico, rúbricas de evaluación y pautas de autoevaluación/coevaluación.",
        contenido: "Estrategias de aprendizaje autónomo, fases de proyectos técnicos (preparación, ejecución, valoración), metodología 'aprender haciendo' y marca personal.",
        trabajo: "Aprenderás a gestionar tus proyectos de aula, trabajar colaborativamente y autoevaluar tu desempeño con rigor técnico."
    },
    {
        titulo: "Módulo 2.1: Organización de los establecimientos de alimentos y bebidas",
        horas: "80 Horas lectivas (5 semanas) - 4 UV",
        descripcion: "Comprende la estructura organizativa, planificación de espacios, gestión de personal e inventarios en el área de cocina y salón de comedores.",
        competencias: "Organizar los procesos y logística de trabajo de los servicios de alimentos y bebidas considerando normativas, protocolos, marco legal y necesidades del cliente.",
        herramientas: "Organigramas de A&B, formatos de control de inventario PEPS, software de gestión de comandas y manuales de funciones.",
        contenido: "Clasificación de establecimientos gastronómicos, perfiles y puestos de trabajo, rotación de inventarios, prevención de riesgos laborales e inocuidad.",
        trabajo: "Te capacita para coordinar brigadas de cocina y salón, administrar bodegas de insumos y supervisar las operaciones diarias en restaurantes y hoteles."
    },
    {
        titulo: "Módulo 2.2: Preparación de productos típicos de la gastronomía salvadoreña",
        horas: "80 Horas lectivas (5 semanas) - 4 UV",
        descripcion: "Módulo técnico práctico enfocado en la conservación, elaboración y revalorización del patrimonio gastronómico tradicional e histórico de El Salvador.",
        competencias: "Aplicar procesos de elaboración de platillos y bebidas típicas salvadoreñas según el contexto geográfico-cultural y tradiciones, promoviendo el turismo gastronómico.",
        herramientas: "Utensilios tradicionales (comales, bateas), cuchillería básica, recetarios autóctonos y fichas técnicas estandarizadas.",
        contenido: "Origen de la cocina precolombina y mestiza, preparación de pupusas, tamales, atoles, platillos festivos regionales, higiene alimentaria y promoción turística.",
        trabajo: "Podrás desempeñarte en restaurantes típicos, emprendimientos turísticos gastronómicos o como promotor del patrimonio cultural salvadoreño."
    },
    {
        titulo: "Módulo 2.3: Preparación de alimentos y bebidas",
        horas: "144 Horas lectivas (9 semanas) - 7 UV",
        descripcion: "Entrenamiento intensivo en técnicas culinarias de la cocina internacional, manejo seguro de alimentos y estandarización de recetas.",
        competencias: "Realizar procesos de preparación de alimentos y bebidas aplicando técnicas culinarias, recetas internacionales e insumos inocuos bajo la normativa de salud vigente.",
        herramientas: "Equipamiento de cocina industrial, cuchillos de chef, termómetros de alimentos, fichas técnicas de costo y básculas grameras.",
        contenido: "Mise en place, técnicas de cortes de vegetales y carnes, fondos y salsas madre, cocinas internacionales (mexicana, española, italiana, asiática) y prevención de contaminación cruzada.",
        trabajo: "Estarás preparado/a para trabajar como cocinero/a o auxiliar de cocina en hoteles, cruceros, restaurantes internacionales y empresas de catering."
    },
    {
        titulo: "Módulo 2.4: Desarrolla el montaje de eventos y banquetes",
        horas: "80 Horas lectivas (5 semanas) - 4 UV",
        descripcion: "Logística y diseño de salones, tipos de montajes, manejo de mantelería, vajilla y aplicación del protocolo de atención a comensales en banquetes.",
        competencias: "Planificar y coordinar el montaje de salones y servicio de banquetes optimizando recursos y tiempos de atención según requerimientos de eventos.",
        herramientas: "Planos de montaje de salón, mantelería, vajilla, cristalería, cubertería formal y bandejas de servicio.",
        contenido: "Estilos de montaje (auditorio, escuela, banquete, en U), protocolo de mesa, servicio francés, inglés y americano, y coordinación de meseros.",
        trabajo: "Te permitirá trabajar en la organización de bodas, convenciones, banquetes de hoteles y empresas planificadoras de eventos (Event Planners)."
    },
    {
        titulo: "Módulo 2.5: Elaboración de productos de panadería y pastelería",
        horas: "128 Horas lectivas (8 semanas) - 6 UV",
        descripcion: "Dominio de la química de la panificación, formulaciones exactas, fermentación, horneado y decoración básica y avanzada de repostería.",
        competencias: "Elaborar productos de panadería y repostería básica/avanzada siguiendo formulaciones, técnicas de horneado y estándares de calidad e higiene.",
        herramientas: "Hornos industriales, amasadoras, batidoras planetarias, mangas pasteleras, cortadores y porcentajes de panadero.",
        contenido: "Masas fermentadas (pan dulce y salado), hojaldres, galletas, pastelería clásica, cubiertas, decoración y cálculo de costos por pieza.",
        trabajo: "Podrás laborar en panaderías, pastelerías comerciales, áreas de repostería en hoteles o iniciar tu propio emprendimiento de repostería."
    },
    {
        titulo: "Módulo 2.6: Aplicación del inglés técnico en los servicios de alimentos y bebidas",
        horas: "48 Horas lectivas (3 semanas) - 2 UV",
        descripcion: "Formación idiomática enfocada en la interacción fluida con clientes extranjeros en el ámbito del servicio gastronómico.",
        competencias: "Comunicarse con fluidez en idioma inglés técnico en entornos de atención al cliente, toma de pedidos y resolución de requerimientos en A&B.",
        herramientas: "Glosarios técnicos gastronómicos en inglés, menús bilingües, ejercicios de rol (role-playing) y guiones de atención.",
        contenido: "Bienvenida y acomodo de clientes en inglés, explicación de platillos e ingredientes, toma de comandas, descripción de alérgenos y manejo de quejas.",
        trabajo: "Incremente de forma directa tus oportunidades laborales en restaurantes de zonas turísticas, hoteles de cadenas internacionales y atención a turistas extranjeros."
    },
    {
        titulo: "Módulo 2.7: Diseño de planes de negocio turísticos",
        horas: "64 Horas lectivas (4 semanas) - 3 UV",
        descripcion: "Creación y evaluación de proyectos de emprendimiento viable dentro del sector turístico local y nacional.",
        competencias: "Estructurar planes de negocio viables e innovadores enfocados en el sector turístico y de servicios gastronómicos.",
        herramientas: "Lienzo de Modelo de Negocio (Business Model Canvas), plantillas de costos, hojas de cálculo financiero y encuestas de mercado.",
        contenido: "Investigación de mercado, estrategia comercial y de marketing digital, análisis operativo, costeo y evaluación financiera básica.",
        trabajo: "Te capacita para formular tu propia empresa turística o formular propuestas de proyectos para convocatorias de capital semilla."
    }
];

// Función para abrir la ventana modal y cargar los datos del módulo correspondiente
function detalles(index) {
    const data = modulosInfo[index];
    if (!data) return;

    document.getElementById('titulo').innerText = data.titulo;
    document.getElementById('horas').innerText = data.horas;
    document.getElementById('descripcion').innerText = data.descripcion;
    document.getElementById('competencias').innerText = data.competencias;
    document.getElementById('herramientas').innerText = data.herramientas;
    document.getElementById('contenido').innerText = data.contenido;
    document.getElementById('trabajo').innerText = data.trabajo;

    document.getElementById('ventana').style.display = 'flex';
}

// Función para cerrar la ventana modal
function cerrar() {
    document.getElementById('ventana').style.display = 'none';
}

// Evento para cerrar la ventana modal si el usuario hace clic fuera del recuadro
window.onclick = function (event) {
    const modal = document.getElementById('ventana');
    if (event.target === modal) {
        cerrar();
    }
};