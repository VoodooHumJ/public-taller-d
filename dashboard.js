document.getElementById('addSolutionButton').addEventListener('click', function() {
    const solutionInput = document.getElementById('solutionInput');
    const solutionText = solutionInput.value.trim();

    if (solutionText) {
        const solutionList = document.getElementById('solutionList');
        const newSolution = document.createElement('li');
        newSolution.textContent = solutionText;
        solutionList.appendChild(newSolution);
        solutionInput.value = '';   
    } else {
        alert('Por favor, escribe una solución antes de agregarla.');
    }
});
