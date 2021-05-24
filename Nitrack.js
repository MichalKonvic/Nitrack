/*
    Created by MichalKonvic
    Nitrack is the next ui library
*/


    class eventEmitter extends Nitrack{
        /**
         * 
         * @param {string} eventName 
         * @param {*} listener 
         */
        addEventListener(eventName,listener){
            
        }
    }
    class Nitrack {
        constructor(){
            
        }
        /**
         * @param {string} HTML Content 
         * @param {*} ID targetElement 
         * @summary Renders content
        */
        Render(content,targetElement){
            document.getElementById(targetElement).innerHTML = content;
        }
    }