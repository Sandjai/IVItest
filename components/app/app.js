import {Preloader} from "../preloader/preloader.js";
import './app.sass'; 


class App {
    constructor({el}) {
        this.el = el;
        this.preloader = new Preloader ({
            el: el.querySelector('.js-preloader')
        })


        this.preloader.render();

        this.preloader.addEventListener("over", () => this.onHover(true));
        this.preloader.addEventListener("out", () => this.onHover(false));

        this.preloader.changeText(['3','2','1','Go!']);
        
  

   
    }

    onHover(x) {
      
        if (x) {
            this.el.classList.add("onHover");
            
            return;
        }
        if (!x) {
            this.el.classList.remove("onHover");
           
        }

    };


}

window.App = App;