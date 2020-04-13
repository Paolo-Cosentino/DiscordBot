exports.roll = function(x) {
    if (x < 1 || x > 10)
        return "Waaaaaaay to many di.";

    let rolls = [];
    let sum = 0;

    for(let i = 0; i < x; i++) {
        let num = Math.floor(Math.random() * 6) + 1;
        sum += num;
        rolls.push(num);
    }
    return rolls.join("\t|\t") + "\t=\t" + sum;
};
