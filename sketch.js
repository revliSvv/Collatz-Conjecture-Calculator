var value, prompt_value;

var prompt_value = prompt('Insert number.');

math(prompt_value);
// insert number you want to test in () (if the number is too big it will be rounded up to infinity) limit is somewhere around e300 i think
// keep an eye on debug console

function draw() { 
      math(value);
}


function math(arg) {
  value = arg;
    if (arg % 2 == 0) {
      // checks if number is even
      value = arg / 2;
      document.getElementById('number').innerHTML = value;
      console.log(value);
    }
    else if (arg % 2 != 0) {
      // checks if number is odd
      value = (arg * 3) + 1;
      document.getElementById('number').innerHTML = value;
      console.log(value);
    }
    if (value == 1) {
      document.getElementById('number').innerHTML = '4-2-1 sequence.';
      app.paused = true; 
      // this stops the function from infinitely running when it hits 1
    }
    if (value == Infinity) {
      document.getElementById('number').innerHTML = 'Input exceeds parameters.';
      app.paused = true;
    }  
  
}

/* i dont even know how this works tbh i just put random stuff together 
(so dont ask me for an explanation) */
