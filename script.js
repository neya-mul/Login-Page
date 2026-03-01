let firstSection = document.querySelector('.first-section');
let secondSection = document.querySelector('.second-section');
let  fourthSection = document.querySelector('.fourth-section')
let emailAcc = document.getElementById('email-acc');
let nameAcc = document.getElementById('name-acc');
let passAcc = document.getElementById('pass-acc');
let passAccCon = document.getElementById('pass-acc-con')
let checked = document.getElementById('checkbox')
// console.log(emailAcc, nameAcc, passAcc, passAccCon);


document.getElementById('start-btn').addEventListener('click', function () {
    firstSection.classList.add('hidden')
    secondSection.classList.remove('hidden')
    alert(`Enter Your Info. Your email must be real, password must contain '@' keyword and you must need to obey our turms and conditions` )

})



document.getElementById('register').addEventListener('click', function(){
   if(emailAcc.value.includes('@') && passAcc.value.includes('@') && passAcc.value === passAccCon.value && typeof nameAcc.value === 'string' && checked.checked){
    alert('account created successfully')
fourthSection.classList.remove('hidden')
secondSection.classList.add('hidden')
   }
   else{alert('Inter valid Information')}
    
})

