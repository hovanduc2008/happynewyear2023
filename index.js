
const countDate = new Date('jan 22, 2023 00:00:00').getTime();
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const app = {
    playMusic: function () {
        music.play();
    },
    newYear: function () {
        const now = new Date().getTime();
        
        gap = countDate - now;
    
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;
        
        const d = Math.floor(gap / day)
        const h = Math.floor((gap%day)/hour)
        const m = Math.floor((gap%hour)/minute)
        const s = Math.floor((gap%minute)/second)
    
        $('.d').innerHTML = d;
        $('.h').innerHTML = h;
        $('.m').innerHTML = m;
        $('.s').innerHTML = s;
        return h;
    },
    setWidth: function () {
        if(screen.width <= 940) {
            $('.logo').innerHTML = `
            <p>HAPPY NEW YEAR</p>
            <p>2023</p>
            `;
        }
    }
    ,
    setBgForTime: function () {
        let h = this.newYear();
            if(h >= 19 && h <= 24 || h >= 0 && h <= 5){
                $(".bg-body").style.backgroundImage = "linear-gradient(#03031b,#101020 ,  rgb(92, 92, 92))";
            }
            else {
                $(".bg-body").style.backgroundImage = "linear-gradient(rgb(0, 119, 255), rgb(136, 217, 255), rgb(212, 255, 219))"
            
            }
    },
    handelEvent: function() {
        setInterval(this.newYear, 1000);
    }
    ,
    start: function() {
        this.setWidth();
        this.setBgForTime();
        this.handelEvent();
    }
}

app.start();