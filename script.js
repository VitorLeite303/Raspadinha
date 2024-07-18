document.addEventListener('DOMContentLoaded', () => {
    const gridContainer = document.querySelector('.grid-container');
    const prizeCountInput = document.getElementById('prizeCount');
    const setPrizesButton = document.getElementById('setPrizes');
    const resetButton = document.getElementById('reset');
    let numbers = Array.from({ length: 50 }, (_, i) => i + 1);
    let prizeNumbers = [];
    let buttons = [];

    function generateButtons() {
        gridContainer.innerHTML = '';
        numbers.forEach(number => {
            let button = document.createElement('button');
            button.textContent = number;
            button.classList.add('number-button');
            button.addEventListener('click', () => handleClick(button, number));
            buttons.push(button);
            gridContainer.appendChild(button);
        });
    }

    function handleClick(button, number) {
        if (!button.classList.contains('clicked')) {
            button.classList.add('clicked');
            button.disabled = true; // Desabilitar o botão
            if (prizeNumbers.includes(number)) {
                button.classList.add('prize');
                alert('Parabéns! Você encontrou um prêmio!');
            } else {
                alert('Tente novamente!');
            }
        }
    }

    function setPrizes() {
        const prizeCount = parseInt(prizeCountInput.value);
        if (isNaN(prizeCount) || prizeCount <= 0 || prizeCount > 50) {
            alert('Por favor, insira um número válido de prêmios.');
            return;
        }
        prizeNumbers = [];
        while (prizeNumbers.length < prizeCount) {
            const randomNumber = Math.floor(Math.random() * 50) + 1;
            if (!prizeNumbers.includes(randomNumber)) {
                prizeNumbers.push(randomNumber);
            }
        }
        alert(`${prizeCount} prêmios foram definidos! Boa sorte!`);
    }

    function reset() {
        prizeCountInput.value = '';
        prizeNumbers = [];
        buttons.forEach(button => {
            button.classList.remove('clicked', 'prize');
            button.disabled = false; // Habilitar o botão novamente
        });
    }

    setPrizesButton.addEventListener('click', setPrizes);
    resetButton.addEventListener('click', reset);

    generateButtons();
});
