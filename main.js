const btn = document.getElementById('btn')

btn.addEventListener('click', function () {
  var error = document.querySelector('.error')
  var email = document.getElementById('text')
  var regEx = /\w+@\w+\.(com|net|org|net)/gi
  if (!regEx.test(email.value)) {
    email.classList.add('active')
    error.classList.add('active')
  } else {
    email.classList.remove('active')
    error.classList.remove('active')
  }
})
