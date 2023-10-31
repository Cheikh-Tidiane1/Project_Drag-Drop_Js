let base = document.querySelector('.base')
const premiereCase = document.querySelector('#premiere-case')
const boxs = document.querySelectorAll('.case')
const destroy =  document.querySelector('.destroy')
const allCases = []

for (let i = 0; i < boxs.length; i++) {
     allCases.push(boxs[i])
}
allCases.push(destroy)

let indexPhoto = 1

base.style.backgroundImage = `url(https://loremflickr.com/320/240?random=${indexPhoto})`

function nbBase(){
    const newBas = document.querySelector('#cloneBase').content.cloneNode(true).querySelector('div')
    indexPhoto++
    newBas.style.backgroundImage = `url(https://loremflickr.com/320/240?random=${indexPhoto})`
    premiereCase.appendChild(newBas)
    base = newBas
}

function dragOver(e){
    e.preventDefault()
}

function dragEnter(e){
    e.preventDefault()
}

function dragDrop(){
    if(this.id === "premiere-case"){
        return
    }

    if(this.id === "destroy"){
        base.remove()
        nbBase()
        return
    }

    this.removeEventListener('drop', dragDrop)
    this.removeEventListener('dragenter', dragEnter)
    this.removeEventListener('dragover', dragOver)
    this.appendChild(base)
    this.childNodes[0].setAttribute('draggable', false)
    nbBase()
}

for (const vide of allCases) {
    vide.addEventListener('dragover', dragOver)
    vide.addEventListener('dragenter', dragEnter)
    vide.addEventListener('drop', dragDrop)
}

