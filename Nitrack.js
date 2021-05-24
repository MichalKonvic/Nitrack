/*
    Created by MichalKonvic
    Nitrack is the next ui library
*/


    class eventEmitter extends NITRACK{
        /**
         * 
         * @param {string} eventName 
         * @param {*} listener 
         */
        addEventListener(eventName,listener){
            
        }
    }
    class NITRACK {
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