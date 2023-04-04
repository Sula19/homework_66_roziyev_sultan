const container = document.getElementById('container');
for (let i = 1; i < 6; i++) {
    const div = document.createElement('div');
    div.className = 'element';
    div.textContent = `Element ${i}`;
    container.appendChild(div);
}
console.log(container);