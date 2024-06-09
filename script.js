let btn = document.getElementById('one');
let container = document.querySelector('.container');
let xbar = document.querySelector('.xbar');
let sr = ScrollReveal();
let img = document.getElementById('changingimg');
let i = 1;
let all=document.getElementById('allservices')
setInterval(() => {
    if (i > 3) {
        i = 1;
    } else {
        img.src = `images/${i}.webp`;
        i++;
    }
}, 2500);

btn.addEventListener('click', (event) => {
    event.preventDefault();
    container.style.display = 'block';
    sr.reveal('#bar');
});

xbar.addEventListener('click', (event) => {
    container.style.display = 'none';
});

sr.reveal('.info', {
    duration: 2000,
    origin: 'bottom',
    distance: '50px',
    reset: false
});
sr.reveal('.third ul li',{
  delay:2000
})
sr.reveal('#allservices', {
    origin: 'bottom',
    distance: '100px',
    duration: 1000, // Adjust duration to match the CSS transition
    delay:1000,
});

sr.reveal('section h2', {
    origin: 'bottom',
    distance: '100px',
    duration: 2000
});
sr.reveal('.containerfooter',{
  origin:'bottom',
  duration:2000,
  distance:'200px'
})
sr.reveal('.rightfooter .second',{
  origin:'bottom',
  distance:'100px',
  duration:1400
})
sr.reveal('footer h4',{
  origin:'bottom',
  distance:'20px',
  duration:2500,
  delay:1000
})