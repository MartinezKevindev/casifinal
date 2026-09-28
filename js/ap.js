const modulos = [
    {
        titulo: "Orientación de Estudiantes al Proceso Educativo del Tercer Año (BTVST 3.0)",
        horas: "30 Horas (1 Semana)",
        descripcion: "Consolida la metodología de proyectos orientados a la acción para la fase final del bachillerato, enfatizando los roles del estudiante e integración al entorno productivo.",
        competencias: "Consolidar los conocimientos del aprendizaje orientado a la acción y evaluar alternativas para el desarrollo del proyecto de graduación.",
        herramientas: "Móduo guía del MINED, matrices de proyectos, cronogramas de trabajo, recursos de investigación.",
        contenido: "Ruta de aprendizaje, fases de la acción completa (informarse, planificar, decidir, ejecutar, controlar, valorar), plan de vida profesional.",
        trabajo: "Preparación para el egreso técnico, autogestión de proyectos y adaptación a puestos directivos o de supervisión."
    },
    {
        titulo: "Diseño y Ejecución de Paquetes Turísticos (BTVST 3.1)",
        horas: "210 Horas (7 Semanas)",
        descripcion: "Permite identificar tendencias de mercado para diseñar, cotizar, promocionar y ejecutar paquetes turísticos innovadores y sostenibles.",
        competencias: "Identificar tendencias del mercado, consolidar proveedores, calcular tarifas y costos de operación, y operar recorridos guiados.",
        herramientas: "Sistemas de reservación (GDS), itinerarios digitales, mapas turísticos, hojas de cálculo de costos, guías de campo.",
        contenido: "Análisis de oferta y demanda, diseño de itinerarios, costeo de paquetes, alianzas con proveedores y logística de tours.",
        trabajo: "Operadores de turismo (TTOO), agencias de viajes, diseño de productos de aventura y ejecutivo de ventas."
    },
    {
        titulo: "Manejo de Software y Redes Sociales en la Gestión Turística (BTVST 3.2)",
        horas: "150 Horas (5 Semanas)",
        descripcion: "Aplica tecnologías de información, plataformas digitales y software especializado para optimizar la gestión y promoción de empresas del sector.",
        competencias: "Manejar sistemas informáticos turísticos, administrar canales digitales, posicionar marcas en redes sociales y procesar reservas en línea.",
        herramientas: "Software de gestión hotelera y turística, GDS (Amadeus, Galileo, Sabre), redes sociales profesionales, gestores de contenido web.",
        contenido: "Sistemas informáticos hoteleros y de agencias, marketing digital, gestión de reputación online y venta de productos en redes social.",
        trabajo: "Auxiliar de Web Master turístico, gestor de redes sociales (Community Manager), encargado de reservas digitales."
    },
    {
        titulo: "Promoción y Comercialización de Productos Turísticos (BTVST 3.3)",
        horas: "210 Horas (7 Semanas)",
        descripcion: "Aborda el diseño e implementación de estrategias comerciales, material promocional y campañas para atraer clientes a productos y destinos.",
        competencias: "Implementar campañas comerciales, diseñar estrategias de venta directa e indirecta y brindar asesoría personalizada a clientes.",
        herramientas: "Material POP, catálogos digitales, plataformas publicitarias, sistemas CRM de clientes y métricas de venta.",
        contenido: "Estrategias de mercadeo turístico, técnicas de venta y negociación, canales de distribución y elaboración de material promocional.",
        trabajo: "Promotor comercial de destinos, ejecutivo de ventas en agencias o cadenas hoteleras y especialista en ferias turísticas."
    },
    {
        titulo: "Evaluación de Servicios Turísticos (BTVST 3.4)",
        horas: "150 Horas (5 Semanas)",
        descripcion: "Capacita en el uso de instrumentos de medición, auditoría de procesos y normativas de calidad para certificar productos y servicios turísticos.",
        competencias: "Diseñar y aplicar listas de cotejo, auditorías de servicio y estándares internacionales para asegurar la satisfacción del cliente.",
        herramientas: "Encuestas de satisfacción, manuales de marca, normas de calidad (ISO/UNE), software estadístico y listas de chequeo.",
        contenido: "Estándares internacionales de calidad, sistemas de auditoría, gestión del servicio al cliente y planes de mejora continua.",
        trabajo: "Auditor de calidad turística, supervisor de estándares de servicio, consultor independiente de calidad."
    },
    {
        titulo: "Gestión de Compras e Inventario de Materia Prima (BTVST 3.5)",
        horas: "120 Horas (4 Semanas)",
        descripcion: "Enfocado en los procesos de adquisición, almacenamiento, control de inventarios y gestión de proveedores en hoteles y restaurantes.",
        competencias: "Controlar inventarios, ejecutar procesos de aprovisionamiento, costear insumos y asegurar el flujo correcto de materia prima.",
        herramientas: "Kardex digital, software de control de inventarios, hojas de cálculo, formatos de solicitud de compras y cotizaciones.",
        contenido: "Cadena de suministros, gestión de bodegas, técnicas de control de inventarios, cotización y negociación con proveedores.",
        trabajo: "Encargado de compras, jefe de almacén o bodega en hoteles y restaurantes, gestor de inventarios."
    },
    {
        titulo: "Conversación en Inglés sobre Administración Turística (BTVST 3.6)",
        horas: "90 Horas (3 Semanas)",
        descripcion: "Desarrolla fluidez verbal y escrita para negociaciones comerciales, gestión administrativa e interacción ejecutiva bilingüe.",
        competencias: "Sostener conversaciones fluidas de negocios, redactar informes técnicos en inglés y negociar contratos con clientes extranjeros.",
        herramientas: "Vocabulario técnico administrativo, guiones de simulación de negocios, recursos de audio y software conversacional.",
        contenido: "Inglés administrativo, negociaciones comerciales, terminología de contratos, atención bilingüe a ejecutivos y resolución de conflictos.",
        trabajo: "Atención bilingüe en recepción/ejecutiva, representante de ventas internacionales, coordinador de eventos bilingüe."
    },
    {
        titulo: "Puesta en Marcha de la Microempresa Cooperativa (BTVST 3.7)",
        horas: "90 Horas (3 Semanas)",
        descripcion: "Guía la fase operativa e inicio legal de proyectos microempresariales bajo el modelo de asociatividad cooperativa.",
        competencias: "Ejecutar trámites legales, constituciones asociativas y la apertura operativa formal de microempresas turísticas.",
        herramientas: "Estatutos cooperativos (INSAFOCOOP), formularios del Registro de Comercio, planes financieros iniciales.",
        contenido: "Marco legal del cooperativismo, trámites de legalización, estructura organizativa y lanzamiento operativo del negocio.",
        trabajo: "Empresario turístico socio-cooperativo, administrador de emprendimientos comunitarios o locales."
    },
    {
        titulo: "Proyecto: Plan de Mercadeo Turístico (BTVST 3.8)",
        horas: "150 Horas (5 Semanas)",
        descripcion: "Desarrollo de un proyecto integral que formula un plan de mercadeo sostenible aplicado a MIPE, servicios o destinos turísticos.",
        competencias: "Formular, ejecutar y evaluar un plan estratégico de mercadeo adaptado a una necesidad real del mercado turístico.",
        herramientas: "Matriz FODA, modelo Canva, presupuestos de marketing, indicadores KPI, resúmenes ejecutivos.",
        contenido: "Diagnóstico situacional, investigación de mercados, mezcla de marketing turística (4P/7P), plan financiero y cronograma de ejecución.",
        trabajo: "Consultor de proyectos turísticos, gestor de desarrollo territorial o emprendedor de su propia MIPE turística."
    }
];

function detalles(numero) {
    let m = modulos[numero];

    document.getElementById("titulo").innerHTML = m.titulo;
    document.getElementById("horas").innerHTML = m.horas;
    document.getElementById("descripcion").innerHTML = m.descripcion;
    document.getElementById("competencias").innerHTML = m.competencias;
    document.getElementById("herramientas").innerHTML = m.herramientas;
    document.getElementById("contenido").innerHTML = m.contenido;
    document.getElementById("trabajo").innerHTML = m.trabajo;

    document.getElementById("ventana").style.display = "flex";
}

function cerrar() {
    document.getElementById("ventana").style.display = "none";
}

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('form-preinscripcion');
    const btnPreinscribirme = document.getElementById('btn-preinscribirme');

    if (btnPreinscribirme) {
        btnPreinscribirme.addEventListener('click', () => {
            form.reset();
        });
    }

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('¡Gracias! Tu preinscripción para 3er Año ha sido enviada correctamente.');
            form.reset();
        });
    }

    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", function() {
            navLinks.forEach(item => item.classList.remove("active"));
            this.classList.add("active");
        });
    });
});