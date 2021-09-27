import template from "./preloader.pug";


/**
 *
 *
 * @export
 * @class Preloader
 */
 export class Preloader {
    constructor({el}) {
        this.el = el;

      this.initEvents();
  
    }
    render() {        
            this.el.innerHTML = template();
       }

       

     initEvents() {
       // var svgDocument = document.querySelector('.js-preloader object').contentDocument;
       // svgDocument.getElementById("js-svg__el1").addEventListener("svgHover", function() {alert('ok')})
       this.el.addEventListener("mouseover", this._mouseover.bind(this));
       this.el.addEventListener("mouseout", this._mouseout.bind(this));
     
     }
      
     _mouseover(event) {
        let item = event.target;
        switch(item.dataset.action){
            case("objAction"):
     
            this._trigger('over');
            break;
            
      
        }
        
     }

     _mouseout(event) {
         let item = event.target;
         switch(item.dataset.action){
            case("objAction"):
             this._trigger('out');
            break;
            
      
        }
        
    }

    _trigger(eveName, eveData) {
        let newEve = new CustomEvent(eveName, {detail: eveData});
        this.el.dispatchEvent(newEve);
    }
 
        


        /**
         * Subscribe on Events
         * @param {string} eveName
         * @param {Function} callback
         */
        addEventListener(eveName, callback) {
            this.el.addEventListener(eveName, callback);
        }

        changeText(arr) {
         
            
            var cur_txt = -1;

            setInterval(function() {
                document.getElementById('svg__text').innerHTML = arr[(++cur_txt) % arr.length];
            }, 1000);
        }
        

 
}