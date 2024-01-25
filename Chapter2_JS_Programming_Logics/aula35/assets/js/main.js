// Array of objects representing HTML elements with their tag and text content
const elements = [
    { tag: 'p', text: 'Phrase 1' },
    { tag: 'div', text: 'Phrase 2' },
    { tag: 'footer', text: 'Phrase 3' },
    { tag: 'section', text: 'Phrase 4' },
]

// Selecting an HTML element with the class 'container' from the DOM
const container = document.querySelector('.container');
const div = document.createElement('div');

// Loop through the elements array to create and append HTML elements to the container
for (let i = 0; i < elements.length; i++) {
    const element = document.createElement(elements[i].tag);
    element.innerHTML += elements[i].text
    div.appendChild(element);
}

// Alternative approach using destructuring and a separate variable for element creation
for (let i = 0; i < elements.length; i++) {
    // Destructure 'tag' and 'text' properties from the current element
    let { tag, text } = elements[i];
    let createElement = document.createElement(tag);
    let createText = document.createTextNode(text);
    //createElement.innerText += text;
    createElement.appendChild(createText);
    div.appendChild(createElement);
}

container.appendChild(div);
