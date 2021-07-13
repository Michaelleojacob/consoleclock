(function(){
    let timer;
    const clock = {
        init: function(){
            this.cacheDom();
            this.makeStopbtn();
            this.makeStartBtn();
            this.start();
        },
        cacheDom: function(){
            this.body = document.querySelector("body");
        },
        makeStopbtn: function(){
            const stopbtn = document.createElement('button');
            stopbtn.classList.add("stopbtn");
            stopbtn.textContent = "start";
            this.body.append(stopbtn);
            stopbtn.addEventListener('click', clock.start);
        },
        makeStartBtn: function(){
            const startbtn = document.createElement('button');
            startbtn.classList.add("startbtn");
            startbtn.textContent = "stop";
            this.body.append(startbtn);
            startbtn.addEventListener('click', clock.stop);
        },
        defineClock: function(){
            this.date = new Date();
            this.hours = this.date.getHours();
            this.mins = this.date.getMinutes();
            this.secs = this.date.getSeconds();
            if(this.hours < 10) hours = '0' + this.hours;
            if(this.mins<10) mins = '0' + this.mins;
            if(this.secs<10) this.secs = '0' + this.secs;
            console.log(`${this.hours}:${this.mins}:${this.secs}`);
        },
        start: function(){
            clock.defineClock();
            timer = setInterval(clock.defineClock, 1000);
        },
        stop: function(){
            clearInterval(timer)
        }
    }
    clock.init();
})();