const select = document.getElementById("kindOfBusiness")
const business = document.getElementById("nameBusiness")

select.addEventListener('change', function(event){business.innerHTML = `Name of your ${event.target.value}`})


