// Hämta element via deras id
const colorInput = document.getElementById('color');
const contentInput = document.getElementById('content');
const styleCheckbox = document.getElementById('divStyle');
const removeButton = document.getElementById('removeButton');
const outputDiv = document.getElementById('outputDiv');




// Lägg till en anonym funktion som eventlyssnare för knappen




contentButton.addEventListener('click', (e) => {
    const contentValue = contentInput.value.trim();
    console.log('Event triggered by:', e.target);
    console.log(`Elementets ID: "${outputDiv.id}", Innehåll: "${outputDiv.textContent}"`);
    outputDiv.textContent = contentValue || 'Inget innehåll angett'; // Standardtext om fältet är tomt
    console.log(`Innehåll som används: "${contentValue}"`);
});
colorButton.addEventListener('click', (e) => {
    const colorValue = colorInput.value.trim();
    console.log('Event triggered by:', e.target);
    console.log(`Elementets ID: "${outputDiv.id}"`);
    outputDiv.style.backgroundColor = colorValue || 'transparent'; // Transparent om ingen färg anges
    console.log(`Färg som används: "${colorValue}"`);
    
});
removeButton.addEventListener('click', (e) => {
    const chosenColor = colorInput.value.trim();
    console.log('Event triggered by:', e.target);
    console.log(`Elementets ID: "${outputDiv.id}", Innehåll: "${outputDiv.textContent}" Färg: "${chosenColor}"`);
    outputDiv.remove();
    console.log(`[${new Date().toLocaleTimeString()}] Elementet "${outputDiv.id}" har tagits bort.`);
    
});



// Lägg till en anonym funktion som eventlyssnare på checkboxen
styleCheckbox.addEventListener('change', (e) => {
    // Hämta värden från input-fälten

    const isStyled = styleCheckbox.checked;
    console.log('Event triggered by:', e.target);
    // Om checkboxen är markerad, lägg till extra stil
    if (isStyled) {
        outputDiv.style.border = '2px solid black';
        outputDiv.style.padding = '10px';
        outputDiv.style.fontWeight = 'bold';
        console.log(`Stilen på text i "${outputDiv.id}" med innehåll "${outputDiv.textContent}" är nu i fet stil.`);
    } else {
        // Återställ stilen om checkboxen inte är markerad
        outputDiv.style.border = 'none';
        outputDiv.style.padding = '0';
        outputDiv.style.fontWeight = 'normal';
        console.log(`Stilen på text i "${outputDiv.id}" med innehåll "${outputDiv.textContent}" är nu i normal stil.`);
    }
    
    
    
});

