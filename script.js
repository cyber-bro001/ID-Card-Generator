//Containers
const form = document.getElementById('profileForm');
const errorMsg = document.getElementById('errorMsg');
const ageMsg = document.getElementById('ageMsg');
const profileCard = document.getElementById('profileCard');
const downloadBtn = document.getElementById('downloadBtn');

//Outputs Containers
const displayImg = document.getElementById('displayImg');
const displayName = document.getElementById('displayName');
const displayAge = document.getElementById('displayAge');
const displayJob = document.getElementById('displayJob');
const displayEmail = document.getElementById('displayEmail');

form.addEventListener("submit", (event) => {
  event.preventDefault();

//Input containers 
const firstName = document.getElementById('firstnameInput').value.trim();
const lastName = document.getElementById('lastnameInput').value.trim();
const age = document.getElementById('ageInput').value.trim();
const job = document.getElementById('jobInput').value.trim();
const email = document.getElementById('emailInput').value.trim();
const image = document.getElementById('imgInput').files[0];

//Checking input field values.
if(!firstName || !lastName || !age || !job || !email || !image){
  errorMsg.textContent = 'All fields are required, including image.';
}else{
  errorMsg.textContent = '';
}

if(age.length < 2 || age.length >= 3){
  ageMsg.textContent = 'Please enter a valid age.';
}else{
  ageMsg.textContent ='';
}


//Display data if all is valid 
if(firstName && lastName  && age  && job  && email  && image){
displayName.textContent = firstName + ' ' + lastName;
displayAge.textContent = age;
displayJob.textContent = job;
displayEmail.textContent = email;

const reader = new FileReader();
reader.onload = (e) => {
  displayImg.src =  e.target.result;
};
reader.readAsDataURL(image);
form.style.display = 'none';
profileCard.style.display = 'block';
downloadBtn.style.display = 'block';
console.log('bad');

downloadBtn.addEventListener("click", () => {
console.log('good');

  html2canvas(profileCard).then(canvas => {
    const link = document.createElement('a');
    link.download = 'profileCard.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  });
});

}
});

