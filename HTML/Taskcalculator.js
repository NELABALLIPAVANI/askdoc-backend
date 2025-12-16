

let res = document.getElementById("result")

function num(a){
    res.value += a
}
function cal(){
    res.value = eval(res.value)
}
function rem(){
    res.value = ""
}
function rem1(){
      if (res.value.length > 0) {
        res.value = res.value.slice(0, -1);
    }
}