export let bicycleTypes = document.getElementsByClassName('type')

const handleMouseHover = (obj) => {
    obj.target.querySelector('.originalpic').style.display = 'none'
    obj.target.querySelector('.alternatepic').style.display = 'block'

    let typeStyle = getComputedStyle(obj.target)

    let currentColor = typeStyle.color
    obj.target.style.color = 'white'
    obj.target.style.backgroundColor = currentColor
}
const handleMouseOut = (obj) => {
    obj.target.querySelector('.originalpic').style.display = 'block'
    obj.target.querySelector('.alternatepic').style.display = 'none'
    
    let typeStyle = getComputedStyle(obj.target)
    let currentColor = typeStyle.backgroundColor
    obj.target.style.color = currentColor
    obj.target.style.backgroundColor = 'white'
}

const resetColor = element => {
    let currStyle = getComputedStyle(element)
    element.style.color = currStyle.backgroundColor
    element.style.backgroundColor = 'white'

    element.querySelector('.originalpic').style.display = 'block'
    element.querySelector('.alternatepic').style.display = 'none'
}

export function removeAllCheckedClass(parentElement) {
    for(const element of parentElement){
        if(element.classList.contains('checked')){
            resetColor(element)
            element.addEventListener('mouseenter',handleMouseHover)
            element.addEventListener('mouseleave',handleMouseOut)
            element.classList.remove('checked')
        }
    }
}

for(let type of bicycleTypes){
    
    type.addEventListener('mouseenter',handleMouseHover)
    type.addEventListener('mouseleave',handleMouseOut)

    // If Checked
    type.addEventListener('click', function(e){  
        removeAllCheckedClass(bicycleTypes)
        this.removeEventListener('mouseenter', handleMouseHover)
        this.removeEventListener('mouseleave', handleMouseOut)
        e.target.classList.toggle('checked')  
    })
}
