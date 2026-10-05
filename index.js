const botonMenu =
    document.getElementById("botonMenu");

const menuPrincipal =
    document.getElementById("menuPrincipal");

botonMenu.addEventListener("click", () => {

    menuPrincipal.classList.toggle("activo");

});


const submenus =
    document.querySelectorAll(".submenu");

submenus.forEach(submenu => {

    const enlace =
        submenu.querySelector(":scope > a");

    enlace.addEventListener("click", evento => {

        if (window.innerWidth <= 700) {

            evento.preventDefault();

            submenu.classList.toggle("abierto");

        }

    });

});


const enlacesMenu =
    document.querySelectorAll(".Menu.Principal a");

enlacesMenu.forEach(enlace => {

    enlace.addEventListener("click", () => {

        if (
            window.innerWidth <= 700 &&
            !enlace.parentElement.classList.contains("submenu")
        ) {

            menuPrincipal.classList.remove("activo");

        }

    });

});


const tarjetas =
    document.querySelectorAll(".xcontenedor");

const observador =
    new IntersectionObserver(

        entradas => {

            entradas.forEach(entrada => {

                if (entrada.isIntersecting) {

                    entrada.target.classList.add("visible");

                }

            });

        },

        {
            threshold: 0.15
        }

    );

tarjetas.forEach(tarjeta => {

    observador.observe(tarjeta);

});


const botonesLeer =
    document.querySelectorAll(".boton-leer");

botonesLeer.forEach(boton => {

    boton.addEventListener("click", () => {

        const tarjeta =
            boton.closest(".xcontenedor");

        const parrafo =
            tarjeta.querySelector("p");

        if (
            parrafo.classList.contains("expandido")
        ) {

            parrafo.classList.remove("expandido");

            boton.textContent = "Ver más";

        } else {

            parrafo.classList.add("expandido");

            boton.textContent = "Ver menos";

        }

    });

});


const volverArriba =
    document.getElementById("volverArriba");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        volverArriba.classList.add("mostrar");

    } else {

        volverArriba.classList.remove("mostrar");

    }

});


volverArriba.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


const anio =
    document.getElementById("anio");

anio.textContent =
    new Date().getFullYear();


const codigoQR =
    document.getElementById("codigoQR");

const urlPagina =
    window.location.href;

new QRCode(codigoQR, {

    text: urlPagina,

    width: 200,

    height: 200,

    colorDark: "#0f172a",

    colorLight: "#ffffff",

    correctLevel:
        QRCode.CorrectLevel.H

});


const descargarQR =
    document.getElementById("descargarQR");

descargarQR.addEventListener("click", () => {

    const imagenQR =
        codigoQR.querySelector("img");

    if (!imagenQR) {

        alert("El QR todavía se está generando.");

        return;

    }

    const enlace =
        document.createElement("a");

    enlace.href =
        imagenQR.src;

    enlace.download =
        "QR-Venta-en-Linea.png";

    enlace.click();

});


const botonChat =
    document.getElementById("botonChat");

const ventanaChat =
    document.getElementById("ventanaChat");

const cerrarChat =
    document.getElementById("cerrarChat");

const enviarChat =
    document.getElementById("enviarChat");

const entradaChat =
    document.getElementById("entradaChat");

const chatMensajes =
    document.getElementById("chatMensajes");


botonChat.addEventListener("click", () => {

    ventanaChat.classList.toggle("abierto");

});


cerrarChat.addEventListener("click", () => {

    ventanaChat.classList.remove("abierto");

});


const preguntas = [

    {
        palabras: ["hola", "buenas", "hey"],
        respuesta: "👋 ¡Hola! Bienvenido a Venta en Línea. ¿En qué podemos ayudarte?"
    },

    {
        palabras: ["productos", "venden"],
        respuesta: "💻 Vendemos laptops, tablets, equipos All-in-One, mouse y otros accesorios tecnológicos."
    },

    {
        palabras: ["laptop", "portatil"],
        respuesta: "💻 Contamos con laptops para estudio, trabajo y uso profesional."
    },

    {
        palabras: ["tablet"],
        respuesta: "📱 Disponemos de tablets para estudio, entretenimiento y trabajo."
    },

    {
        palabras: ["mouse", "raton"],
        respuesta: "🖱️ Contamos con mouse para oficina, estudio y gaming."
    },

    {
        palabras: ["all in one", "all-in-one", "allone"],
        respuesta: "🖥️ Los equipos All-in-One integran computadora y monitor en un solo equipo."
    },

    {
        palabras: ["precio", "precios", "costo"],
        respuesta: "💰 Los precios dependen del modelo y las características del producto."
    },

    {
        palabras: ["descuento", "oferta", "promocion"],
        respuesta: "🏷️ Las promociones pueden variar. Pregunta por el producto que te interesa."
    },

    {
        palabras: ["pedido", "pedir", "comprar"],
        respuesta: "🛒 Para realizar un pedido indica el producto, cantidad y tus datos de contacto."
    },

    {
        palabras: ["compra"],
        respuesta: "🛍️ Puedes solicitar información del producto y posteriormente realizar tu compra."
    },

    {
        palabras: ["mayor"],
        respuesta: "📦 Sí, contamos con atención para pedidos por mayor."
    },

    {
        palabras: ["menor"],
        respuesta: "📦 También atendemos pedidos por menor."
    },

    {
        palabras: ["unidad"],
        respuesta: "📦 Puedes consultar la disponibilidad para comprar una unidad."
    },

    {
        palabras: ["envio", "envios", "delivery"],
        respuesta: "🚚 Consulta con nosotros las opciones de envío disponibles para tu ubicación."
    },

    {
        palabras: ["entrega"],
        respuesta: "🚚 El tiempo de entrega depende de la ubicación y disponibilidad del producto."
    },

    {
        palabras: ["lima"],
        respuesta: "📍 Tenemos atención en Lima. Consulta nuestra sección de sucursales."
    },

    {
        palabras: ["chiclayo"],
        respuesta: "📍 Contamos con información de atención para Chiclayo."
    },

    {
        palabras: ["tarapoto"],
        respuesta: "📍 Puedes consultar nuestra atención y disponibilidad en Tarapoto."
    },

    {
        palabras: ["cajamarca"],
        respuesta: "📍 Puedes consultar nuestra atención y disponibilidad en Cajamarca."
    },

    {
        palabras: ["huancayo"],
        respuesta: "📍 Puedes consultar nuestra atención y disponibilidad en Huancayo."
    },

    {
        palabras: ["sucursal", "sucursales"],
        respuesta: "📍 Nuestras sucursales incluyen Lima, Chiclayo, Tarapoto, Cajamarca y Huancayo."
    },

    {
        palabras: ["horario", "horarios"],
        respuesta: "🕐 Consulta nuestros horarios de atención directamente con la sucursal correspondiente."
    },

    {
        palabras: ["contacto", "contactar"],
        respuesta: "📞 Puedes contactarnos mediante nuestras redes sociales o canales de atención."
    },

    {
        palabras: ["telefono", "celular", "numero"],
        respuesta: "📱 El número de contacto puede agregarse en la sección de información de contacto."
    },

    {
        palabras: ["whatsapp"],
        respuesta: "💬 Puedes agregar tu número de WhatsApp para que los clientes puedan contactarte."
    },

    {
        palabras: ["facebook"],
        respuesta: "🔵 Puedes encontrarnos en Facebook mediante el enlace de nuestras redes."
    },

    {
        palabras: ["instagram", "ig"],
        respuesta: "📸 Puedes seguirnos en Instagram para conocer novedades y productos."
    },

    {
        palabras: ["tiktok", "tt"],
        respuesta: "🎵 También podemos compartir novedades y contenido en TikTok."
    },

    {
        palabras: ["linkedin", "linke"],
        respuesta: "💼 Puedes encontrarnos en LinkedIn para conocer más sobre nuestra empresa."
    },

    {
        palabras: ["youtube", "yt"],
        respuesta: "▶️ En YouTube podemos publicar demostraciones, novedades y contenido tecnológico."
    },

    {
        palabras: ["garantia", "garantía"],
        respuesta: "🛡️ Consulta las condiciones de garantía correspondientes a cada producto."
    },

    {
        palabras: ["devolucion", "devolución"],
        respuesta: "↩️ Las condiciones de devolución dependen del producto y las políticas de venta."
    },

    {
        palabras: ["cambio", "cambiar"],
        respuesta: "🔄 Para solicitar un cambio, comunícate con nuestro equipo indicando los datos de tu compra."
    },

    {
        palabras: ["pago", "pagos"],
        respuesta: "💳 Consulta los métodos de pago disponibles al momento de realizar tu pedido."
    },

    {
        palabras: ["tarjeta"],
        respuesta: "💳 Puedes consultar si el producto que deseas comprar admite pago con tarjeta."
    },

    {
        palabras: ["efectivo"],
        respuesta: "💵 Consulta con nosotros si el pago en efectivo está disponible para tu pedido."
    },

    {
        palabras: ["transferencia"],
        respuesta: "🏦 Consulta los datos de transferencia disponibles antes de realizar un pago."
    },

    {
        palabras: ["stock", "disponibilidad"],
        respuesta: "📦 La disponibilidad puede cambiar. Indícanos el producto que buscas."
    },

    {
        palabras: ["marca", "marcas"],
        respuesta: "🏷️ Trabajamos con productos tecnológicos de diferentes marcas según disponibilidad."
    },

    {
        palabras: ["calidad"],
        respuesta: "⭐ Buscamos ofrecer productos tecnológicos de buena calidad."
    },

    {
        palabras: ["recomendacion", "recomendar", "recomiendas"],
        respuesta: "🤖 Claro. Dime si buscas una laptop, tablet, mouse o All-in-One y para qué lo necesitas."
    },

    {
        palabras: ["estudiante", "estudios", "estudiar"],
        respuesta: "🎓 Para estudiar podemos recomendarte equipos según tu presupuesto y necesidades."
    },

    {
        palabras: ["trabajo", "oficina"],
        respuesta: "💼 Para trabajo u oficina podemos ayudarte a elegir un equipo adecuado."
    },

    {
        palabras: ["gaming", "juegos", "jugar"],
        respuesta: "🎮 Para gaming es importante revisar procesador, RAM, tarjeta gráfica, almacenamiento y pantalla."
    },

    {
        palabras: ["ram", "memoria"],
        respuesta: "🧠 La memoria RAM permite trabajar con varias aplicaciones simultáneamente."
    },

    {
        palabras: ["almacenamiento", "disco", "ssd"],
        respuesta: "💾 El almacenamiento permite guardar archivos y programas. Los SSD ofrecen velocidades rápidas."
    },

    {
        palabras: ["procesador", "cpu"],
        respuesta: "⚙️ El procesador es uno de los componentes principales de una computadora."
    },

    {
        palabras: ["pantalla", "monitor"],
        respuesta: "🖥️ Al elegir una pantalla conviene revisar tamaño, resolución y frecuencia de actualización."
    },

    {
        palabras: ["qr", "codigo"],
        respuesta: "📲 Nuestra página cuenta con un código QR para acceder rápidamente desde tu celular."
    },

    {
        palabras: ["empresa", "nosotros", "quienes somos"],
        respuesta: "🏢 Somos una tienda orientada a ofrecer productos tecnológicos y soluciones para nuestros clientes."
    },

    {
        palabras: ["gracias", "gracías"],
        respuesta: "😊 ¡Con mucho gusto! Estamos aquí para ayudarte."
    },

    {
        palabras: ["adios", "adiós", "chau", "hasta luego"],
        respuesta: "👋 ¡Gracias por visitar Venta en Línea! Esperamos verte nuevamente."
    }

];


function buscarRespuesta(texto) {

    const textoNormalizado =
        texto
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");

    for (const pregunta of preguntas) {

        for (const palabra of pregunta.palabras) {

            if (
                textoNormalizado.includes(palabra)
            ) {

                return pregunta.respuesta;

            }

        }

    }

    return `
        🤔 No estoy seguro de haber entendido.

        <br><br>

        Puedes preguntarme sobre:

        <br>
        💻 Productos
        <br>
        🛒 Pedidos
        <br>
        🚚 Envíos
        <br>
        💳 Pagos
        <br>
        📍 Sucursales
        <br>
        📱 Redes sociales
        <br>
        🛡️ Garantía
    `;

}


function mostrarMensaje(
    texto,
    tipo
) {

    const mensaje =
        document.createElement("div");

    mensaje.classList.add(
        "mensaje",
        tipo
    );

    mensaje.innerHTML =
        texto;

    chatMensajes.appendChild(
        mensaje
    );

    chatMensajes.scrollTop =
        chatMensajes.scrollHeight;

}


function enviarMensaje() {

    const texto =
        entradaChat.value.trim();

    if (texto === "") {

        return;

    }

    mostrarMensaje(
        texto,
        "usuario"
    );

    entradaChat.value = "";

    setTimeout(() => {

        const respuesta =
            buscarRespuesta(texto);

        mostrarMensaje(
            respuesta,
            "bot"
        );

    }, 500);

}


enviarChat.addEventListener(
    "click",
    enviarMensaje
);


entradaChat.addEventListener(
    "keydown",
    evento => {

        if (evento.key === "Enter") {

            enviarMensaje();

        }

    }
);


const preguntasRapidas =
    document.querySelectorAll(
        ".preguntas-chat button"
    );

preguntasRapidas.forEach(
    boton => {

        boton.addEventListener(
            "click",
            () => {

                entradaChat.value =
                    boton.dataset.pregunta;

                enviarMensaje();

            }
        );

    }
);
