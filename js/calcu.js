
calc = (num) => {
    var input = document.getElementById('display');
    var value = num.innerHTML;

    // evaluates the argument
    if (value == '=') {
        input.innerHTML = eval(input.innerHTML);
    }
    //All Clear
    else if (value == 'AC') {
        input.innerHTML = '';
    }
    //Delete
    else if (value == 'Del') {
        input.innerHTML = input.innerHTML.slice(0, -1);
    }
    else {
        input.innerHTML = `${input.innerHTML}${value}`
    }
}