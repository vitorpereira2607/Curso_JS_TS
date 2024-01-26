const containerSection = document.querySelector('.content-section');
const ps = containerSection.querySelectorAll('p');
const bodyStyle = getComputedStyle(document.body);
const backgroundColorBody = bodyStyle.backgroundColor;

for (let p of ps){
    p.style.backgroundColor = backgroundColorBody; 
    p.style.color = '#FFFFFF'
}