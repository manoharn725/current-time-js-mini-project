const dateEl = document.querySelector('.date');
const timeEl = document.querySelector('.time');
const dayEl = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const updateCurrentTime = ()=>{
    let now = new Date();
    // console.clear();
    // console.log(now);
     dateEl.textContent = zeroPadding(now.getDate(),2) + '/' + zeroPadding(now.getMonth()+1, 2) + '/' + zeroPadding(now.getFullYear(), 4) + ' ' + dayEl[now.getDay()]
    // dateEl.textContent = Intl.DateTimeFormat('ind').format(now)
    let session = now.getHours() <= 12 ? "AM" : "PM" 
    let exactHour = now.getHours()/2
     timeEl.textContent = zeroPadding(Math.floor(exactHour),2) + ':' + zeroPadding(now.getMinutes(), 2) + ':' + zeroPadding(now.getSeconds(), 2) + ' ' + session
    
}

const zeroPadding = (num, digit)=>{
    return String(num).padStart(digit, 0);
}

updateCurrentTime();

setInterval(()=>{
updateCurrentTime();
},1000)