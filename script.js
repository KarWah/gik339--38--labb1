// // Hämta element via deras id eller klass 
const colorInput = document.querySelector('#color');
const contentInput = document.getElementById('content');
const styleCheckbox = document.getElementById('divStyle');
const removeButton = document.querySelector('#removeButton');
const outputDiv = document.getElementById('outputDiv');
const contentButton = document.querySelector('#contentButton');
const colorButton = document.querySelector('#colorButton');

// Funktion för att ändra innehållet i outputDiv
function changeContent(e) {
    const contentValue = contentInput.value.trim();
    console.log('Event triggered by:', e.target); //Loggar att du klickat på knappen och säger vad du klickat på.
    outputDiv.textContent = contentValue || 'Inget innehåll angett'; 
    console.log(`Innehåll: "${contentValue}"`); // Anger vilket innehåll som används
}

// Funktion för att ändra bakgrundsfärgen i outputDiv
function changeColor(e) {
    const colorValue = colorInput.value.trim();
    console.log('Event triggered by:', e.target); // Loggar att du klickat på knappen och säger vad du klickat på.
    outputDiv.style.backgroundColor = colorValue || 'transparent'; // Transparent om ingen färg anges
    console.log(`Färg som används: "${colorValue || 'transparent'}"`); // Anger vilken färg som används
}

// Funktion för att ta bort OutputDiv
function removeOutputDiv(e) {
    const chosenColor = colorInput.value.trim();
    console.log('Event triggered by:', e.target); //Loggar att du klickat på knappen och säger vad du klickat på.
    console.log(`Elementets ID: "${outputDiv.id}", Innehåll: "${outputDiv.textContent}", Färg: "${chosenColor}"`); // Anger Elementets ID, Innehåll, och färg
    outputDiv.remove();
    console.log(`[${new Date().toLocaleTimeString()}] Elementet "${outputDiv.id}" har tagits bort.`); // Aanger tid, Output div och att den tagits bort.
}

// Funktion för checkbox som gör stilen i output "Bold" samt sätter dit en border
function toggleStyle(e) {
    const isStyled = styleCheckbox.checked;
    console.log('Event triggered by:', e.target); //Loggar att du klickat på checkboxen och säger att detta är triggat

    if (isStyled) {
        outputDiv.style.border = '0.2rem solid black';
        outputDiv.style.padding = '0.5rem';
        outputDiv.style.fontWeight = 'bold';
        console.log(`Stilen på text i "${outputDiv.id}" med innehåll "${outputDiv.textContent}" är nu i fet stil.`);
    } else {
        outputDiv.style.border = 'none';
        outputDiv.style.padding = '0';
        outputDiv.style.fontWeight = 'normal';
        console.log(`Stilen på text i "${outputDiv.id}" med innehåll "${outputDiv.textContent}" är nu i normal stil.`);
    }
}

// Kopplar Eventlitseners till samtliga funktioner.
contentButton.addEventListener('click', changeContent);
colorButton.addEventListener('click', changeColor);
removeButton.addEventListener('click', removeOutputDiv);
styleCheckbox.addEventListener('change', toggleStyle);



/*

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


*/