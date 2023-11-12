document.addEventListener('mousemove', function(e) {
    let campo = document.getElementById('campo');
    let pelota = document.getElementById('pelota');

    // Obtener la posición del ratón relativa al campo
    let campoRect = campo.getBoundingClientRect();
    let x = e.clientX - campoRect.left;
    let y = e.clientY - campoRect.top;

    // Restringir el movimiento de la pelota dentro del campo
    if (x >= 0 && x <= campoRect.width - pelota.offsetWidth && 
        y >= 0 && y <= campoRect.height - pelota.offsetHeight) {
        pelota.style.left = x + 'px';
        pelota.style.top = y + 'px';
    }

    detectarPelota();
});

function detectarPelota() {
    let robot = document.getElementById('robot');
    let pelota = document.getElementById('pelota');

    let robotRect = robot.getBoundingClientRect();
    let pelotaRect = pelota.getBoundingClientRect();

    // Detectar colisión entre robot y pelota
    if (robotRect.left < pelotaRect.right && robotRect.right > pelotaRect.left &&
        robotRect.top < pelotaRect.bottom && robotRect.bottom > pelotaRect.top) {
        robot.style.backgroundColor = 'brown'; // Color cuando detecta la pelota
    } else {
        robot.style.backgroundColor = 'blue'; // Color original del robot
    }
}
