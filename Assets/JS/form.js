const submitBttnElement=document.querySelector('#submitBttn')
console.log('form')
console.log(submitBttnElement)
function formSubmit(x){
   // event.preventDefault()
      console.log("submit work")
      location.href='./blog.html'
   //this will submit the form
   //  submitform.addEventListener("click", function(e){
   //      console.log("SUBMITTED")
}
const Redirect=function(){
    //this will redirect page to blog.html
    function redirectToBlogPage() {
      window.location.href = 'blog.html';
    }
 }
 const Storelocalstorage=function(x){
    //this will  store local storage
    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    posts.push(postData);
    localStorage.setItem("posts", JSON.stringify(posts));
 }

 submitBttnElement.addEventListener('click', formSubmit)
