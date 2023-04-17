const bgInput = document.querySelector('#switchButton');
const switchButton = document.querySelector('#switchButtonLabel')
const icon = document.querySelector('label i')

bgInput.addEventListener('click', () => {

  if(switchButton.classList.contains('switchActive') === true) {
    
    async function setLightMode() {

    icon.classList.remove("ph-sun")
    icon.classList.add("ph-moon")
    document.body.classList.remove("darkModeColors")

    bgInput.classList.remove("checked")
    switchButton.classList.remove("switchActive")
    bgInput.classList.add("unchecked")
    switchButton.classList.add("switchDesative")

    }
    setLightMode()

  }else {

    async function setDarkMode() {

      icon.classList.remove("ph-moon")
      icon.classList.add("ph-sun")
      document.body.classList.add("darkModeColors")

      bgInput.classList.remove("unchecked")
      switchButton.classList.remove("switchDesative")
      bgInput.classList.add("checked")
      switchButton.classList.add("switchActive")
   
     }
     setDarkMode()

  }

})