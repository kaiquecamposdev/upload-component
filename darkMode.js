const switchButton = document.querySelector('i.ph-moon')
const switchButtonSun = document.querySelector('i.ph-sun')
const divButton = document.querySelector('.dark-mode-div')

switchButton.addEventListener('click', () => {

  switchButton.classList.add('ph-sun')
  divButton.classList.add('dark-mode-on')

})
divButton.addEventListener('click', () => {

  switchButton.classList.add('ph-sun')
  divButton.classList.add('dark-mode-on')
  divButton.style.transition = "justify-content 1s ease"

})

