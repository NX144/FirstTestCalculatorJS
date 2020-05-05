let outputNumbers = document.querySelector('.output'),
    counterInsert = "";

function insertElem(num) {
    // counterInsert += num;
    // let counterInsertCheck = counterInsert.split("");
    // console.log(counterInsertCheck);
    // let counterLength = counterInsertCheck.length;
    // counterLength = counterLength - 1;
    // if( counterInsertCheck[counterLength] == "+" ||
    //     counterInsertCheck[counterLength] == "-" ||
    //     counterInsertCheck[counterLength] == "*" ||
    //     counterInsertCheck[counterLength] == "/") {
    //     counterLength = counterLength - 2;
    //     if( counterInsertCheck[counterLength] == "+" ||
    //         counterInsertCheck[counterLength] == "-" ||
    //         counterInsertCheck[counterLength] == "*" ||
    //         counterInsertCheck[counterLength] == "/") {
    //         counterLength = counterLength - 1;
    //         outputNumbers.focus();
    //         counterInsertCheck.pop();
    //         outputNumbers.value += counterInsertCheck[counterLength];
    //     } else {
    //         outputNumbers.value += num;
    //     }
    // } else {
        outputNumbers.focus();
        outputNumbers.value += num;
    //}
}

function clearInput() {
    outputNumbers.value = "";
}

function clearOneElem() {
    let outputMinus = outputNumbers.value;
    let outputMinus2 = outputMinus.substring(0, outputMinus.length-1);
    outputNumbers.value = outputMinus2;
    // console.log(outputMinus);
}

function mathOperation() {
    let splitNum = outputNumbers.value.split("");
    splitNum.forEach(function(item) {
        if (isNaN(parseFloat(item))
            && item != "+"
            && item != "-"
            && item != "*"
            && item != "/"
            && item != "("
            && item != ")") {
            // console.log("BAN");
            outputNumbers.value = "Error";
        } else {
            // console.log("GOOD");
            // console.log(outputNumbers.value);
        }
    });
    if(outputNumbers.value == "Error") {
        outputNumbers.value = "Error";
    } else {
        let og = eval(outputNumbers.value);
        if (og == Infinity) {
            outputNumbers.value = "";
        } else {
            // console.log("-------------------");
            // console.log(outputNumbers.value);
            // console.log(og);
            outputNumbers.value = og;
        }
    }
}
document.addEventListener('keydown', function(event) {
    if(event.code === "Enter") {
        return mathOperation();
    }
});