const dayNumberElement = document.getElementById("dayNumber");
const dayElement = document.getElementById("day");
const monthElement = document.getElementById("month");
const yearElement = document.getElementById("year");
const clockElement= document.getElementById("showClock");

function calender(){
    let date = new Date();
    let dayNumber = date.getDate();
    let day = date.getDay()+1;
    let month = date.getMonth();
    let year = date.getFullYear();

    const days = ['Pazar', 'Pazartesi', 'Salý', 'Çarþamba', 'Persembe', 'Cuma', 'Cumartesi'];
    const months = ['Ocak', 'Subat', 'Mart', 'Nisan', 'Mayis', 'Haziran', 'Temmuz', 'Agustos', 'Eylül', 'Ekim', 'Kasim', 'Aralik'];

    dayNumberElement.innerHTML = dayNumber;
    dayElement.innerHTML = days[day];
    monthElement.innerHTML = months[month];
    yearElement.innerHTML = year;
}

function updateClock(){
    let date = new Date();
    let hours = date.getHours().toString().padStart(2, '0');
    let minutes = date.getMinutes().toString().padStart(2, '0');
    let seconds = date.getSeconds().toString().padStart(2, '0');
    clockElement.innerHTML = `${hours}:${minutes}:${seconds}`;
}

calender();
updateClock();
setInterval(updateClock, 1000);