const units = [
    {
        image: "image/shiny quantum camera.png",
        name: "Shiny Quantum Camera",
        description: "the improvement quantum with 50% attack"
    },

    {
        image: "image/quatum camera .png",
        name: "Quantum Camera",
        description: "ultimate camera having aoe and another attack with powerful blackhole"
    },
    
    {
        image: "image/golden future.png",
        name: "golden future",
        description: "the large guy with can stop time"
    },
    {
        image: "image/utddm .png",
        name: "UTDDM",
        description: "the dragon can eat each enemy with drill mouth annd burn it"
    },
    {
        image: "image/utcm.png",
        name: "upgraded titan clock man",
        description: "strong titan can stop time"
    },
    {
        image: "image/dj tvman.png",
        name: "DJ TV MAN",
        description: "booster you're unit"
    },
   
];
function searchUnits() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const unitList = document.getElementById('unit-list');
    unitList.innerHTML = ''; 

    units.forEach(unit => {
        const { image, name, description } = unit;
        if (name.toLowerCase().includes(searchTerm) || description.toLowerCase().includes(searchTerm)) {
            const card = document.createElement('div');
            card.classList.add('unit-card');
            card.innerHTML = `
                <img src="${image}" alt="${name}">
                <h2>${name}</h2>
                <p>${description}</p>
            `;
            unitList.appendChild(card);
        }
    });
    
}


searchUnits();
function goToAnotherPage() {
    
    window.location.href = "index2.html"; 
}
document.getElementById('checkAnotherUnit').addEventListener('click', () => {
   
    window.location.href = 'halaman2.html'; 
});