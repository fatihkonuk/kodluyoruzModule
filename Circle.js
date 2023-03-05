const circleArea = (r) => {
    const pi = Math.PI;
    const area = pi * Math.pow(r,2);
    return area;
}

const circleCircumference  = (r) => {
    const pi = Math.PI;
    const circumference = 2 * pi * r;
    return circumference;
}

module.exports = {
    circleArea,
    circleCircumference
}