// Ejercicio 1
//1.
document.getElementById("url").textContent = window.location.href;

//2.
document.getElementById("info").textContent = window.navigator.userAgent;

//3.
document.getElementById("tam").textContent = window.screen.width + " " + window.screen.height;

// 4.
document.getElementById("idioma").textContent = window.navigator.language;


// Ejercicio 2
function ejercicio2() {
    window.alert(window.innerWidth + " " + window.innerHeight);

}

// Ejercicio 3
function ejercicio3_1() {
    window.history.back();

}

function ejercicio3_2() {
    window.location.reload();

}

// Ejercicio 4
let contador = 30;
let temporizador = null;

function actualizarContador() {
    document.getElementById("contador").textContent = contador;
}

function ejercicio4_1() {
    if (temporizador !== null) return;

    contador = 30;
    actualizarContador();

    temporizador = setInterval(() => {
        if (contador > 0) {
            contador--;
            console.log(contador);
            actualizarContador();
        } else {
            clearInterval(temporizador);
            temporizador = null;
            window.alert("Tiempo acabado");
        }
    }, 1000);
}

function ejercicio4_2() {
    clearInterval(temporizador);
    temporizador = null;
    contador = 30;
    actualizarContador();
}

// Ejercicio 5
function ejercicio5_1() {
    window.open("https://google.com");

}

function ejercicio5_2() {
    window.close();

}

// Ejercicio 6
function ejercicio6() {
    if (!window.confirm("Quieres cambiar el color de fondo?")) return;

    const color = window.prompt("Introduce un color:");
    if (color) {
        document.body.style.backgroundColor = color;
    }
}

// Ejercicio 7
function ejercicio7() {
    const nombre = window.prompt("Introduce tu nombre:");

    if (!nombre) {
        window.alert("No se ha introducido el nombre.");
        return;
    }

    window.alert("Bienvenido " + nombre);
}

// Ejercicio 8
function ejercicio8() {
    if (window.innerWidth < 768) {
        window.alert("Ventana pequeña");
    } else {
        window.alert("Ventana grande");
    }

    window.alert("Ancho actual: " + window.innerWidth);
}
