let text = document.getElementById('text');
let treeLeft = document.getElementById('tree-left');
let treeRight = document.getElementById('tree-right');
let gateLeft = document.getElementById('gate-left');
let gateRight = document.getElementById('gate-right');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * 2.5 + 'px';
    treeLeft.style.marginTop = value * -1.5 + 'px';
    treeRight.style.marginTop = value * -1.5 + 'px';
    gateLeft.style.marginTop = value * 0.5 + 'px';
    gateRight.style.marginTop = value * 0.5 + 'px';
});