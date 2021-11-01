const panels = document.querySelectorAll('.panel')

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removerclasse()
        panel.classList.add('active')
    })
})


function removerclasse(){
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}
