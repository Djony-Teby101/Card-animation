const panels= document.querySelectorAll('.panel');

// Boucle sur chaque elements de la liste.
panels.forEach(panel=>{
    panel.addEventListener('click', ()=>{
        removeActiveClasses()
        panel.classList.add('active');
    })
})

function removeActiveClasses(){
    panels.forEach(panel=>{
        panel.classList.remove('active')
    })
}