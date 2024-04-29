const buttonElement=document.querySelector('#toggle')
console.log("logic")

const mode=function(x){
   //this will change from day to night mode
   function toggleMode() {
      document.body.classList.toggle("dark-mode");
  }

  document.getElementById("toggleMode").addEventListener("click", toggleMode);
}
const modeToggle=function(){
    //this will check if i need to change day and night
    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

 }
 const readlocalstorage=function(){
    //this will read from local storage
 
 }
 const readmode=function(){
    //this will get an item from local storage
 
 }
 const savemode=function(){
    //this will set the item from local storage
    if (localStorage.getItem('darkMode') === 'true' || prefersDarkMode) {
      document.body.classList.add('dark-mode');
    }
 }
//  buttonElement.addEventListener('click',modeToggle)