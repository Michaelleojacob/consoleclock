class Clock {
    constructor({ template }) {
        this.template = template;
    }
    render() {
        let date = new Date();
        let hours = date.getHours();
        let mins = date.getMinutes();
        let secs = date.getSeconds();
        if (hours < 10) hours = '0' + hours;
        if (mins < 10) mins = '0' + mins;
        if (secs < 10) secs = '0' + secs;
        let output = this.template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
        console.log(output);
    }
    stop() {
        clearInterval(this.timer);
    }
    start() {
        this.render();
        this.timer = setInterval(() => this.render(), 1000);
    }
}


let clock = new Clock({template: 'h:m:s'});
clock.start();