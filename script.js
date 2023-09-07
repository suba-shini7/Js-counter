var plus=document.querySelector("#plus");
var minus=document.querySelector("#minus");
var result=document.querySelector("#result");
var counter=0;
result.innerHTML=counter;
var plusFn= ()=>{
    counter++;
    // console.log(counter.value);
    result.innerHTML=counter;
}
var minusFn= ()=>{
    counter--; 
    // console.log(counter.value);
    result.innerHTML=counter;
}
plus.addEventListener("click",plusFn)

minus.addEventListener("click",minusFn)
