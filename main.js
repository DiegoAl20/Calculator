const screenResult = document.getElementById("result");
const screenOperations = document.getElementById("operations");
const btnClearAll = document.querySelector('.all-delete');

document.addEventListener('click', (e) => {
    const clickedElement = e.target;

    if (!clickedElement.matches(".number")) {
        return;
    }

    let value = clickedElement.getAttribute('value');
    screenOperations.textContent += value;
});

btnClearAll.addEventListener('click', () => {
    screenOperations.textContent = ""; 
    screenResult.textContent = "";
});