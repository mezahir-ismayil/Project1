// let h1 = document.querySelector("h1");
// let span = document.querySelector("span");
// let btn1 = document.getElementById("btn1");
// let btn2 = document.getElementById("btn2");
// let btn3 = document.getElementById("btn3");
// let btn4 = document.getElementById("btn4");
// let btn5 = document.getElementById("btn5");
// let btn6 = document.getElementById("btn6");
// let btn7 = document.getElementById("btn7");
// let num = 0;
// btn1.addEventListener("click", ()=>{
//     // span.innerHTML = `<span>${num++}</span>`; 
//     span.innerHTML = ++num;
// })
// btn2.addEventListener("click", ()=>{ 
//     span.innerHTML = --num;
// })
// btn3.addEventListener("click", ()=>{ 
//     span.innerHTML = num+=5;
// })
// btn4.addEventListener("click", ()=>{ 
//     span.innerHTML = num-=5;
// })
// btn5.addEventListener("click", ()=>{ 
//     // span.innerHTML = num-=5;
//     let r1 = Math.floor(Math.random()*255);
//     let r2 = Math.floor(Math.random()*255);
//     let r3 = Math.floor(Math.random()*255);
//     // return `rgb(${r1}, ${r2}, ${r3})`;
//     span.style.color = `rgb(${r1}, ${r2}, ${r3})`;
// })
// let pix = 36;
// btn6.addEventListener("click", ()=>{ 
//     span.style.fontSize = `${pix++}px` ;
// })
// btn7.addEventListener("click", ()=>{ 
//     span.style.fontSize = `${--pix}px` ;
// })

let input = document.querySelector("input");
let txtarea = document.querySelector("textarea");
let btn = document.querySelector("button");
// let select = document.querySelector("select");
btn.addEventListener("click", (e)=> {
    e.preventDefault();
    console.log(input.value);
    console.log(txtarea.value);
    input.value = "";
    txtarea.value = "";
    // input.value = "";
})

// input.addEventListener("keyup", ()=> {
//     console.log(input.value);
// })

