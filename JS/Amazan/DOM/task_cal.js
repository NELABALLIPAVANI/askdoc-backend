

function calculator (){
    let inp1 = document.getElementById("input1").value
    let inp2 = document.getElementById("input2").value
    let operator = document.getElementById("select1").value
    let res = document.getElementById("result")

    let input1 = Number(inp1)
    let input2 = Number(inp2)
    let result =0
    if (operator == "addition"){
        result = input1 + input2
    }else if (operator == "subtraction") {
        result = input1 - input2
    }
    else if (operator == "multiplication") {
        result = input1 * input2
    }
    else if (operator == "division") {
        result = input1 / input2
    }

    console.log(result);
    res.innerHTML = `Result : ${result}`
}
