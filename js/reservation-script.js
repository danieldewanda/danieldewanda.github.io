import { removeAllCheckedClass, bicycleTypes } from './reservation-style-helper.js'

class reservations{
    constructor(bicycleType, problems, address, schedule){
        this.bicycleType = bicycleType
        this.problems = problems
        this.address = address
        this.schedule = schedule
    }
}


// Error handling for section Problems
const confirmProblems = () => {
    let problems = []
    let problemschecked = document.getElementsByClassName("checkbox")
    let filled = false;
    for(let a of problemschecked){
        if(a.checked == true){
            filled = true
            break
        }
    }
    if(filled == false){
        document.getElementById("problems-error").style.display = "block";
        return false
    }
    
     
    for(let a of problemschecked){
        if(a.checked == true){
            problems.push(a.value)
        }
    }
    return problems;
}

// Error handling for section Address
const fillAddress = (target) => {
    let data = document.getElementById(`${target}-input`)
    if(!data.value && data.required == true){
        document.getElementById(`${target}-error`).style.display = 'block'
        return ''
    }
   
    return data.value
}


const resetErrors = () => {
    let errors = document.getElementsByClassName("error")
    for(let a of errors){
        a.style.display = "none"
    }
}

const resetForm = () => {
    document.getElementById("reservation-form").reset() 
    let problemschecked = document.getElementsByClassName("checkbox")
    for(let a of problemschecked){
        a.checked = false
    }
    removeAllCheckedClass(bicycleTypes)
}

const scrollTowardsError = () =>{
    let errors = document.getElementsByClassName("error")
    for(let a of errors){
        if(a.style.display == 'block'){
            location.href = `#${a.id}`
            return
        }
    }
    
}

const confirmBicycleType = () => {
    let bicycleTypes = document.getElementsByClassName('type')
    for(const element of bicycleTypes){
        if(element.classList.contains('checked')){
            return element.id
        }
    }
    return null
}

const confirmSchedule = () => {
    let selectedDate = document.getElementById('date').value
    let selectedTime = document.getElementById('time').value
    if(!selectedDate || !selectedTime) {
        document.getElementById("datetime-error").style.display = "block";
        return false
    }

    //returns an object
    return {
        date: selectedDate,
        time: selectedTime
    }
}
// Reserve button
let reservebutton = document.getElementById("reserve-button")
reservebutton.addEventListener("click", function(event){
    
    resetErrors() // reset errors
    let errorExist = false

    // Data
    let bicycleType = confirmBicycleType()
    let problems = confirmProblems()
 
    if(bicycleType == null){
        document.getElementById('biketype-error').style.display = 'block'
        errorExist = true
    }
    if(problems == false) errorExist = true

    let address = {
        addressline1: '',
        addressline2: '',
        province: '',
        citydistrict: '',
        subdistrict: '',
        urbanvillage: '',
        zipcode: ''
    }
    for(const attr in address){
        address[attr] = fillAddress(attr)
        if(address[attr] == '' && document.getElementById(`${attr}-input`).required == true) 
            errorExist = true
    }

    let schedule = confirmSchedule()
    if(!schedule){
        errorExist = true
    }

    // console.log(address)
    // if there are still errors, don't submit
    if(errorExist) {
       scrollTowardsError()
       return
    }

    // send the newReservation object to backend
    let newReservation = new reservations(bicycleType, problems, address, schedule)

    alert('Reservation filled successfully!')
    console.log(newReservation.bicycleType)
    console.log(newReservation.problems)
    console.log(newReservation.address)
    console.log(newReservation.schedule)
    event.preventDefault()

    resetForm() // reset form
})
