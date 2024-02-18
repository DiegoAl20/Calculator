
const screenOperations = document.getElementById("operations");

const btnClearAll = document.querySelector('.all-delete');
const btnDelete = document.querySelector('.one-delete');
const btnEquals = document.querySelector(".equals");
const btnDivider = document.querySelector(".divider");

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

//Boton igual
btnEquals.addEventListener('click', () => {
    let result = eval(screenOperations.textContent);

    if (isNaN(result)) {
        screenOperations.textContent = "ERROR!";
        return;
    }
    screenOperations.textContent = result;
});

// boton dividir
btnDivider.addEventListener('click', () => {
    let operations = +screenOperations.textContent;
    operations /= 100;
    
    if (isNaN(operations)) {
        screenOperations.textContent = "ERROR!";
        return;
    }
    screenOperations.textContent = operations
});