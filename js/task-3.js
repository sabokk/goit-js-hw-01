function getElementWidth(content, padding, border) {
    const num1 = parseFloat(content);
    const num2 = parseFloat(padding);
    const num3 = parseFloat(border);
    const getElementWidth = num1 + num2*2 + num3*2;

    return getElementWidth;
}
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
