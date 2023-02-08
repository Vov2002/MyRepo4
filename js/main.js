

//Задание 1
let btn = document.querySelector('.btn')
let out = document.querySelector('.out')
let a = 'Вывод'
btn.onclick = () =>{
    let e = a
    out.innerHTML = e

}
//Задание 2
let plus = document.querySelector('.plus')
let minus = document.querySelector('.minus')
let umnzh = document.querySelector('.umnozhenie')
let del = document.querySelector('.Delenie')
plus.onclick = () =>{
    let num1 = Number(document.querySelector('.num1').value);
    let num2 = Number(document.querySelector('.num2').value);
    let result = document.querySelector('.result');
     let r = num1 + num2
     result.innerHTML = r
    console.log(num2)
}
minus.onclick = () =>{
    let num1 = Number(document.querySelector('.num1').value);
    let num2 = Number(document.querySelector('.num2').value);
    let result = document.querySelector('.result');
    let r2 = num1 - num2
    result.innerHTML = r2
    console.log(num2)
}
umnzh.onclick = () =>{
    let num1 = Number(document.querySelector('.num1').value);
    let num2 = Number(document.querySelector('.num2').value);
    let result = document.querySelector('.result');
    let r3 = num1 * num2
    result.innerHTML = r3
    console.log(num2)
}
del.onclick = () =>{
    let num1 = Number(document.querySelector('.num1').value);
    let num2 = Number(document.querySelector('.num2').value);
    let result = document.querySelector('.result');
    let r4 = num1 / num2
    result.innerHTML = r4
    console.log(num2)
}