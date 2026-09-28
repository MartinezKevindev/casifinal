const modulos = [

{
titulo: "Introducción al Turismo",
horas: "120 Horas",

descripcion:
"Este módulo introduce al estudiante en el sector turístico, sus conceptos fundamentales, evolución, importancia económica, social y cultural.",

competencias:
"Identificar los principales componentes del turismo, reconocer diferentes tipos de turismo y analizar las características de los servicios turísticos.",

herramientas:
"Mapas, guías turísticas, Internet, computadora, fotografías y recursos audiovisuales.",

contenido:
"Conceptos de turismo, historia del turismo, tipos de turismo, destinos turísticos, turista y visitante, servicios turísticos y turismo sostenible.",

trabajo:
"Agencias de viajes, hoteles, empresas turísticas, información turística y actividades relacionadas con la atención al visitante."
},

{

titulo: "Atención al Cliente",
horas: "100 Horas",

descripcion:
"El módulo desarrolla habilidades de comunicación y servicio necesarias para atender de manera adecuada a turistas y clientes.",

competencias:
"Comunicarse de manera clara, respetuosa y profesional; resolver situaciones y brindar atención de acuerdo con las necesidades del cliente.",

herramientas:
"Computadora, teléfono, correo electrónico, formularios, protocolos de atención y herramientas de comunicación.",

contenido:
"Comunicación efectiva, atención al cliente, servicio turístico, manejo de quejas, trabajo en equipo, empatía y comunicación asertiva.",

trabajo:
"Hoteles, restaurantes, agencias de viajes, centros turísticos, eventos y empresas de servicios."
},

{

titulo: "Geografía Turística",
horas: "90 Horas",

descripcion:
"Permite conocer la ubicación de los principales destinos y atractivos turísticos nacionales e internacionales.",

competencias:
"Identificar destinos turísticos, interpretar mapas y utilizar información geográfica para orientar a los visitantes.",

herramientas:
"Mapas físicos y digitales, Google Maps, GPS, Internet, aplicaciones de ubicación y guías turísticas.",

contenido:
"Geografía de El Salvador, regiones turísticas, destinos nacionales, destinos internacionales, atractivos naturales y culturales.",

trabajo:
"Elaboración de rutas, orientación de turistas, planificación de recorridos y apoyo en agencias de viajes."
},

{

titulo: "Hotelería",
horas: "100 Horas",

descripcion:
"Introduce al estudiante en la organización y funcionamiento de hoteles y establecimientos de alojamiento.",

competencias:
"Aplicar procedimientos básicos de recepción, reservación, registro y atención de huéspedes.",

herramientas:
"Computadora, sistemas de reservación, teléfono, formularios, registros y software hotelero.",

contenido:
"Tipos de alojamiento, recepción, reservaciones, registro de huéspedes, atención al cliente, habitaciones y servicios hoteleros.",

trabajo:
"Hoteles, hostales, resorts, alojamientos turísticos y áreas de recepción."
},

{

titulo: "Agencias de Viajes",
horas: "90 Horas",

descripcion:
"El estudiante aprende cómo funcionan las agencias de viajes y cómo se organizan diferentes servicios turísticos.",

competencias:
"Seleccionar servicios turísticos, elaborar itinerarios y organizar propuestas de viaje de acuerdo con las necesidades del cliente.",

herramientas:
"Internet, computadora, mapas, sistemas de reservas, correo electrónico y herramientas para crear itinerarios.",

contenido:
"Agencias de viajes, reservas, transporte, alojamiento, paquetes turísticos, itinerarios y atención al viajero.",

trabajo:
"Agencias de viajes, operadores turísticos, empresas de transporte y departamentos de turismo."
},

{

titulo: "Cultura y Patrimonio",
horas: "80 Horas",

descripcion:
"Permite conocer y valorar la cultura, historia, tradiciones y patrimonio natural y cultural de El Salvador.",

competencias:
"Identificar, valorar y promover el patrimonio cultural y natural como recurso para el desarrollo turístico.",

herramientas:
"Internet, libros, fotografías, cámaras, mapas, entrevistas y recursos audiovisuales.",

contenido:
"Historia, cultura, tradiciones, patrimonio cultural, patrimonio natural, sitios turísticos y conservación.",

trabajo:
"Museos, sitios turísticos, centros culturales, proyectos turísticos y actividades de promoción del patrimonio."
}

];


function detalles(numero) {

    let m = modulos[numero];

    document.getElementById("titulo").innerHTML = m.titulo;

    document.getElementById("horas").innerHTML = m.horas;

    document.getElementById("descripcion").innerHTML =
        m.descripcion;

    document.getElementById("competencias").innerHTML =
        m.competencias;

    document.getElementById("herramientas").innerHTML =
        m.herramientas;

    document.getElementById("contenido").innerHTML =
        m.contenido;

    document.getElementById("trabajo").innerHTML =
        m.trabajo;

    document.getElementById("ventana").style.display = "flex";
}


function cerrar() {

    document.getElementById("ventana").style.display = "none";

}