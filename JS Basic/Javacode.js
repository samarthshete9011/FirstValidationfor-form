function readvalues() {
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
        return [num1, num2];
}
function multiplyBy() {
        var values = readvalues();
        document.getElementById("result").innerHTML = values[0] * values[1];
}

function divideBy() {
        var values = readvalues();
        document.getElementById("result").innerHTML =values[0] / values[1];
}
function additionBy() {
        var values = readvalues();

        console.log(typeof (num1))

        document.getElementById("result").innerHTML = +values[0] + +values[1];
}
function subtractionBy() {
        var values = readvalues();
        document.getElementById("result").innerHTML = values[0] - values[1];
}

