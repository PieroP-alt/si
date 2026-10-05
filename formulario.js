const formulario =
    document.getElementById("formularioPedido");

const mensajeExito =
    document.getElementById("mensajeExito");

const botonModo =
    document.getElementById("botonModo");


const modoGuardado =
    localStorage.getItem("modo");


if (modoGuardado === "oscuro") {

    document.body.classList.add("oscuro");

    botonModo.textContent = "☀️";

}


botonModo.addEventListener("click", () => {

    document.body.classList.toggle("oscuro");


    const oscuro =
        document.body.classList.contains("oscuro");


    if (oscuro) {

        botonModo.textContent = "☀️";

        localStorage.setItem(
            "modo",
            "oscuro"
        );

    } else {

        botonModo.textContent = "🌙";

        localStorage.setItem(
            "modo",
            "claro"
        );

    }

});


formulario.addEventListener(
    "submit",
    evento => {

        evento.preventDefault();


        const nombre =
            document.getElementById("nombre").value;


        const producto =
            document.getElementById("producto").value;


        const cantidad =
            document.getElementById("cantidad").value;


        mensajeExito.classList.add(
            "mostrar"
        );


        mensajeExito.querySelector("p").textContent =

            `Gracias ${nombre}. Hemos recibido tu solicitud de ${cantidad} unidad(es) de ${producto}.`;


        formulario.reset();


        mensajeExito.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }
);
