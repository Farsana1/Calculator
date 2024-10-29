function appendValue(num) {
    equate.value += num
}
function clear1() {
    equate.value = ''
}
function back() {
    equate.value = equate.value.slice(0, -1)
}
function equals() {
    try {
        equate.value = eval(equate.value)
        if (equate.value == 'undefined') {
            equate.value = 'error'

            setTimeout(() => {
                equate.value = ''
            }, 1000);
        }
    }
    catch {
        equate.value = 'error'
        setTimeout(() => {
            equate.value = ''
        }, 1000);
    }
}