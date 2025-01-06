
//vriables

const send =document.querySelector('#send'),
Name = document.querySelector('#Name'),
Email =document.querySelector('#Email')
Subject = document.querySelector('#Subject'),
message = document.querySelector('#message')

//eventlisteners
eventListeners()

function eventListeners(){

    document.addEventListener('DOMContentLoaded',appInt)
    Name.addEventListener('blur',validateField)
    Email.addEventListener('blur',validateField)
    Subject.addEventListener('blur',validateField)
    message.addEventListener('blur',validateField)
}


 //functions
 function appInt(){
    send.disabled =true
 }
 function validateField(){
  
    validateLength(this)
    if(this.type === 'Email'){
       validatEmail(this)
    }
 }




 function validateLength(field){
    if(field.value.length > 0){
       field.style.borderBottomColor ='green'
       field.classList.remove('error')
    } else{
        field.style.borderBottomColor ='red'
        field.classList.add('error')
    }
 }

 



