const screenResult = document.getElementById("result");
const screenOperations = document.getElementById("operations");

const btnClearAll = document.querySelector('.all-delete');
const btnDelete = document.querySelector('.one-delete');

document.addEventListener('click', (e) => {
    const clickedElement = e.target;

    if (!clickedElement.matches(".number")) {
        return;
    }

    let value = clickedElement.getAttribute('value');
    screenOperations.textContent += value;
});

document.addEventListener('click', (e) => {
    const clickedElement = e.target;

    if (!clickedElement.matches(".operator")) {
        return;
    }

    let value = clickedElement.getAttribute('value');
    screenOperations.textContent += value;
});

// Limpia toda la pantalla
btnClearAll.addEventListener('click', () => {
    screenOperations.textContent = ""; 
    screenResult.textContent = "";
});

// Botón para borrar el ultimo numero
btnDelete.addEventListener('click', () => {
    let newContent = screenOperations.textContent.slice(0, -1);
    screenOperations.textContent = newContent;
});