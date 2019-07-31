var arr = [], i, j;

for (i = 0; i < 24; i++) {
    for (j = 0; j < 2; j++) {
        arr.push(i + ':' + (j === 0 ? "00" : "30"));
    }
}

var d = new Date(),
    h = d.getHours(),
    m = 30 * Math.floor(d.getMinutes() / 30),
    stamp = h + ":" + (m === 0 ? "00" : m);

const period = (props) => {
    var pos = arr.indexOf(stamp);
    return pos;
}

export default period;