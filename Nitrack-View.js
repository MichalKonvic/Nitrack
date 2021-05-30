class view{
    HTML = ``;
    #CSS = {};
    jsCompileProperties = {
        "async": false,
        "crossorigin=": "use-credentials",
        "integrity=": "",
        "nomodule": false,
        "referrerpolicy=": "no-referrer-when-downgrade",
        "src=": "",
        "type=": "application/javascript"
    };
    #js = () => {

    };
    /**
     * @return {Boolean} true/false if html check passed
     */
    htmlCheck(){
        //html check
    }
    /**
     * @return {Boolean} true/false if css check passed
     */
    cssCheck(){
        //Css check
    }
    /**
     * Adds or changes element style.
     * @param {String} elementId 
     * @param {Object} styles !!!PUT EVERYTHING IN OBJECT INTO STRING!!!
     * @returns Updated css Object
     */
    newStyle(elementId,styles){
        this.#CSS[elementId] = styles;
        return this.#CSS;
    }
    /**
     * Removes element style
     * @param {String} elementId 
     * @returns Updated css Object or if element doesnt exist undefined
     */
    removeElementStyle(elementId){
        if (!this.#CSS[elementId] || elementId === undefined) {
            return undefined;
        }
        delete this.#CSS[elementId];
        return this.#CSS;
    }
    /**
     * 
     * @returns Current css object
     */
    getStyles(){
        return this.#CSS;
    }
    /**
     * JavaScript code that will be rendered with view
     * @param {*} jsCode 
     */
    setJS(jsCode){
        this.#js = jsCode();
    }
    jsCompile(){
        let properties = [];
        Object.keys(this.jsCompileProperties).forEach(property => {
            if (typeof this.jsCompileProperties[property] === "boolean") {
                properties.push(`${property}`);
            }else{
                properties.push(`${property}"${this.jsCompileProperties[property]}"`);
            }
        })
        properties.join(" ");
        HTML += `<script ${properties}>${this.#js}</script>`
    }
}

export default view;