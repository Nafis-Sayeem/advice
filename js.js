function whattodo(){
    fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then( data => createElement(data))
}

function createElement(data) {
    console.log(data)
    const newelement  = document.createElement('div');
    newelement.innerHTML = `
    
    <h3  class="body"> ${data.slip.advice} </h3>

    `
    const section = document.getElementById("section");
    section.appendChild(newelement)
}