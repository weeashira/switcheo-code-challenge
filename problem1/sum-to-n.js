var sum_to_n_a = function (n) {
    var sum = 1
    while (n != 1) {
        sum += n
        n--
    }
    console.log(sum)
};

var sum_to_n_b = function (n) {
    var sum = 1
    for (let i = 2; i <= n; i++) {
        sum += i
    }
    console.log(sum)
};

var sum_to_n_c = function (n) {
    sum = n * (n + 1) / 2
    console.log(sum)
}

sum_to_n_a(5)
sum_to_n_b(5)
sum_to_n_c(5)