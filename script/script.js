var answer = document.getElementById("answer");
function buttonPush(obj){
    var activeBtn = obj.innerHTML;
    //calculate
    if(activeBtn == "="){
        answer.innerHTML = eval(answer.innerHTML);
    //clear
    } else if(activeBtn == "CLEAR"){
        answer.innerHTML = "0";
    //concatenate number/operand
    } else if(activeBtn == "DEL"){
       answer.innerHTML = answer.innerHTML.slice(0, -1)
    }
    else{
        if(answer.innerHTML == "0"){
            answer.innerHTML = activeBtn;
        }else{
            answer.innerHTML += activeBtn;
        }
    }
    console.log(activeBtn);
}