// Hämta element via deras id
const colorInput = document.querySelector('#color');
const contentInput = document.getElementById('content');
const styleCheckbox = document.getElementById('divStyle');
const removeButton = document.querySelector('#removeButton');
const outputDiv = document.getElementById('outputDiv');
const contentButton = document.querySelector('#contentButton');
const colorButton = document.querySelector('#colorButton');

// Fördefinierad funktion för att ändra innehållet
function changeContent(e) {
    const contentValue = contentInput.value.trim();
    console.log('Event triggered by:', e.target); // Använd event-objektet
    outputDiv.textContent = contentValue || 'Inget innehåll angett'; // Standardtext om fältet är tomt
    console.log(`Innehåll som används: "${contentValue}"`);
}

// Fördefinierad funktion för att ändra färg
function changeColor(e) {
    const colorValue = colorInput.value.trim();
    console.log('Event triggered by:', e.target); // Använd event-objektet
    outputDiv.style.backgroundColor = colorValue || 'transparent'; // Transparent om ingen färg anges
    console.log(`Färg som används: "${colorValue || 'transparent'}"`);
}

// Fördefinierad funktion för att ta bort outputDiv
function removeOutputDiv(e) {
    const chosenColor = colorInput.value.trim();
    console.log('Event triggered by:', e.target); // Använd event-objektet
    console.log(`Elementets ID: "${outputDiv.id}", Innehåll: "${outputDiv.textContent}", Färg: "${chosenColor}"`);
    outputDiv.remove();
    console.log(`[${new Date().toLocaleTimeString()}] Elementet "${outputDiv.id}" har tagits bort.`);
}

// Fördefinierad funktion för att ändra stil via checkbox
function toggleStyle(e) {
    const isStyled = styleCheckbox.checked;
    console.log('Event triggered by:', e.target); // Använd event-objektet

    if (isStyled) {
        outputDiv.style.border = '2px solid black';
        outputDiv.style.padding = '10px';
        outputDiv.style.fontWeight = 'bold';
        console.log(`Stilen på text i "${outputDiv.id}" med innehåll "${outputDiv.textContent}" är nu i fet stil.`);
    } else {
        outputDiv.style.border = 'none';
        outputDiv.style.padding = '0';
        outputDiv.style.fontWeight = 'normal';
        console.log(`Stilen på text i "${outputDiv.id}" med innehåll "${outputDiv.textContent}" är nu i normal stil.`);
    }
}

// Koppla eventlyssnare till fördefinierade funktioner
contentButton.addEventListener('click', changeContent);
colorButton.addEventListener('click', changeColor);
removeButton.addEventListener('click', removeOutputDiv);
styleCheckbox.addEventListener('change', toggleStyle);
