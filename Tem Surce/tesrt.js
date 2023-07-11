
var companyName= 'kwabena kitchen';
document.getElementById('demo').innerHTML= companyName
document.getElementById('demo').style.color='black'
var homePage ='Take to me Homepage';
function mySubmit(){
    document.getElementById('clickMe');
    homePage.innerHTML='take me to homepage'

}
function mySubmit(){
var homePage = '<a href="index.html">Home</a>'
document.getElementById('clickMe').innerHTML= homePage;
document.getElementById('cickMe').style.color= 'white'



 
}function validateForm(){
    var email = document.getElementById('email').value;
    var atPos = email.indexOf('@');
    var atDot =email.lastIndexOf('.');
    if ( atPos < 1 || atDot < atPos+2 || atDOt+2 >=x.length ){
        alert('please type a valid email address');
        return false;
        
    }





}










