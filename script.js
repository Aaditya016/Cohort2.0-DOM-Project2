let arr = [
    'Success is not final; failure is not fatal: It is the courage to continue that counts.',
    'The best way to get started is to quit talking and begin doing.',
    "Believe you can and you're halfway there.",
    "Opportunities don't happen, you create them.",
    "It always seems impossible until it's done.",
    "The only way to do great work is to love what you do.",
    "Either you run the day, or the day runs you"
]

let btn = document.querySelector('button');
let main = document.querySelector('main');




btn.addEventListener('click', function(){
    let h1 = document.createElement('h1');
    let a = Math.floor(Math.random()*arr.length);
    let left = Math.random()*100;
    let top = Math.random()*100;
    let rotate = Math.random()*360;
    let scl = Math.random()*2;

    let c1 = Math.floor(Math.random()*256);
    let c2 = Math.floor(Math.random()*256);
    let c3 = Math.floor(Math.random()*256);

    

    h1.innerHTML = arr[a];
    h1.style.color = 'white';
    h1.style.position = 'absolute';
    h1.style.left = left+'%';
    h1.style.top = top+'%';
    h1.style.rotate = rotate+'deg';
    h1.style.scale = scl;
    h1.style.color = `rgb(${c1}, ${c2}, ${c3})`;

    main.appendChild(h1);
    
    
})