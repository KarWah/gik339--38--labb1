// Hämta element via deras id
const colorInput = document.getElementById('color');
const contentInput = document.getElementById('content');
const styleCheckbox = document.getElementById('divStyle');
const applyButton = document.getElementById('applyButton');
const outputDiv = document.getElementById('outputDiv');


// Lägg till en anonym funktion som eventlyssnare för knappen
applyButton.addEventListener('click', () => {
    // Ta bort div-elementet från DOM
    outputDiv.remove(); // Enkel och effektiv metod för att ta bort elementet
});

// Lägg till en anonym funktion som eventlyssnare på checkboxen
styleCheckbox.addEventListener('change', () => {
    // Hämta värden från input-fälten
    const colorValue = colorInput.value.trim();
    const contentValue = contentInput.value.trim();
    const isStyled = styleCheckbox.checked;

    // Uppdatera divens innehåll och stil
    outputDiv.textContent = contentValue || 'Inget innehåll angett'; // Standardtext om fältet är tomt
    outputDiv.style.backgroundColor = colorValue || 'transparent'; // Transparent om ingen färg anges
    console.log('Event triggered by:', event.target);
    // Om checkboxen är markerad, lägg till extra stil
    if (isStyled) {
        outputDiv.style.border = '2px solid black';
        outputDiv.style.padding = '10px';
        outputDiv.style.fontWeight = 'bold';
    } else {
        // Återställ stilen om checkboxen inte är markerad
        outputDiv.style.border = 'none';
        outputDiv.style.padding = '0';
        outputDiv.style.fontWeight = 'normal';
    }
});

