function calculate(op) {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("result").innerText = "الرجاء إدخال رقمين";
        return;
    }

    switch (op) {
        case 'add':
            result = num1 + num2;
            break;
        case 'sub':
            result = num1 - num2;
            break;
        case 'mul':
            result = num1 * num2;
            break;
        case 'div':
            if (num2 === 0) {
                document.getElementById("result").innerText = "لا يمكن القسمة على صفر";
                return;
            }
            result = num1 / num2;
            break;
    }

    document.getElementById("result").innerText = "النتيجة: " + result;
}
