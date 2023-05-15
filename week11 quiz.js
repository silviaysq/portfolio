
const headingTitle = document.querySelector('#heading-title');
headingTitle.textContent = 'JUMP INTO SOMEWHERE';

const contexTitle = document.querySelector('#rules');
contexTitle.textContent ='Please click the empty area!'

const svg = document.getElementById("gamewindow");
const particles = [];
const minParticleSize = 1;
const maxParticleSize = 20;
window.addEventListener("resize", resizeSvg);
svg.addEventListener("mousemove", onmousemove);
svg.addEventListener("mouseup", onmouseup);

let mouseX = 0;
let mouseY = 0;

function onmousemove(event) {
  mouseX = event.clientX;
  mouseY = event.clientY;
}

function onmouseup(event) {
  let particle = new Particle(randomNum(minParticleSize, maxParticleSize));
  particle.x = mouseX;
  particle.y = mouseY;
  particle.targetX = mouseX;
  particle.targetY = mouseY;
  particle.drawParticle();
}


function resizeSvg() {
  let bbox = svg.getBoundingClientRect();
  svg.setAttribute("viewBox", `0 0 ${bbox.width} ${bbox.height}`);

  for (let particle of particles) {
    particle.resizeParticle(bbox.width, bbox.height);
  }
}

class Particle {
  constructor(radius) {
    this.x = mouseX;
    this.y = mouseY;
    this.r = radius;
    this.svgElement;
    this.animDuration = randomNum(3, 6);
    this.targetX = randomNum(0, 1000);
    this.targetY = randomNum(0, 600);
    this.color = makeRGB();
  }

  drawParticle() {
    this.svgElement = makeCircle(this.x, this.y, this.r, this.color);
    svg.appendChild(this.svgElement);
    this.addAnimateX();
    this.addAnimateY();
  }

  addAnimateX() {
    let animElement = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "animate"
    );
    animElement.setAttribute("attributeName", "cx");
    animElement.setAttribute("values", `${this.x}; ${this.targetX};`);
    animElement.setAttribute("dur", `${this.animDuration}`);
    animElement.setAttribute("repeatCount", "indefinite");
    this.svgElement.appendChild(animElement);

    let gravityanimElement1 = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "animate"
    );
    gravityanimElement1.setAttribute("attributeName", "cx");
    
    gravityanimElement1.setAttribute(
      "values",
      ` ${this.x} ; ${height + this.r}`
    );
    
    gravityanimElement1.setAttribute("dur", `${this.animDuration}`);
    gravityanimElement1.setAttribute("repeatCount", "indefinite");
    this.svgElement.appendChild(gravityanimElement1);
  }

  addAnimateY() {
    let animElement = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "animate"
    );
    animElement.setAttribute("attributeName", "cy");
    animElement.setAttribute("values", `${this.y}; ${this.targetY};`);
    animElement.setAttribute("dur", `${this.animDuration}`);
    animElement.setAttribute("repeatCount", "indefinite");
    this.svgElement.appendChild(animElement);

    let gravityanimElement = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "animate"
    );
    gravityanimElement.setAttribute("attributeName", "cy");
    
    gravityanimElement.setAttribute(
      "values",
      `${height - this.r}; ${this.y} ;  ${ this.r}`
    );
    
    gravityanimElement.setAttribute("dur", `${this.animDuration}`);
    gravityanimElement.setAttribute("repeatCount", "indefinite");
    this.svgElement.appendChild(gravityanimElement);

  }
}

function createParticlesArray(num) {
  let particleInstances = [];

  for (let i = 0; i < num; i++) {

    let particleSize = randomNum(width * 0.001, width * 0.005);
    let particleFill = makeRGB();
  
    particleInstances.push(new Particle(particleSize, particleFill));


    }
  
    return particleInstances;
  }
  
  function randomNum(lower, upper) {
    let num = lower + Math.random()*(upper-lower);
    return num;
  }

  function makeCircle(x, y, radius) {
    let circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", x);
    circle.setAttribute("cy", y);
    circle.setAttribute("r", radius);
    circle.setAttribute("fill",makeRGB());
    return circle;
  }

function makeRGB(redinput , greeninput,blueinput){
        let  redoutput=redinput ?? Math.random()*255;
        let  greenoutput=greeninput ?? Math.random()*255;
        let  blueoutput=blueinput ?? Math.random()*255;
        return `rgb(${redoutput},${greenoutput},${blueoutput}`;  
        }


  let width = 1000;
  let height = 300;
  


const clearButton = document.getElementById("Claerall");
const svgElement = document.getElementById("gamewindow");
clearButton.addEventListener("click", () => {
  svgElement.innerHTML = "";
});

>>>>>>> e1ed0c0e24e7f59e7ed95de63db6ecfe4d588202
