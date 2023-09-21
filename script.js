// Get the element
const photo = document.querySelector("#animated-photo1");

// Listen for the user to hover over the image
photo.addEventListener('mouseover', () => {
  // Start the animation
  photo.style.animationPlayState = 'running';
});

// Listen for user to leave image
photo.addEventListener('mouseout', () => {
  // Stop the animation
  photo.style.animationPlayState = 'paused';
});
function formdata() 
{
var firstname1= document.getElementById("name").value;
var lastname1= document.getElementById("email").value;
document.writeln("<h1>Confirmation Page</h1><br>");
document.writeln("Thank you for completing this form.<br><br>");
document.writeln("The first name you entered is " + firstname + "<br>");
document.writeln("The last name you entered is " + lastname);
}