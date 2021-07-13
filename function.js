
function Clock({ template }) {
    let timer;
    function render() {
        let date = new Date();
        let hours = date.getHours();
        let mins = date.getMinutes();
        let secs = date.getSeconds();
        if (hours < 10) hours = '0' + hours;
        if (mins < 10) mins = '0' + mins;
        if (secs < 10) secs = '0' + secs;
        let output = template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
        console.log(output);
    }
    this.stop = function() {
        clearInterval(timer);
    };

    this.start = function() {
        render();
        timer = setInterval(render, 1000);
    };
}

let clock = new Clock({template: 'h:m:s'});
clock.start();
