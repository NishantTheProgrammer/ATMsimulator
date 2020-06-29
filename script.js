const screen = document.querySelector('.screen').style;

let len = 4, i = 1;

setInterval(()=>{
    if(i > len) i = 1;
    screen.backgroundImage = `url('./img/ad${i++}.jpg')`
}, 2000);       //This function will run every 2s