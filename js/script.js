const today = new Date();
const year = today.getFullYear();
const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
const date = today.getDate()+ "/" +(today.getMonth()+1)+ "/" +today.getFullYear();
document.getElementById('year').innerHTML= year;
document.getElementById('current-date').innerHTML= date + " " +time;
