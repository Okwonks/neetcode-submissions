class MinStack {
    constructor() {
        this.values = [];
        this.minValues = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        let min = val;
        if(this.minValues.length) {
            min = Math.min(min, this.minValues[this.minValues.length - 1]);
        }
        this.values.push(val);
        this.minValues.push(min);
    }

    /**
     * @return {void}
     */
    pop() {
        this.values.pop();
        this.minValues.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.values[this.values.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minValues[this.minValues.length - 1]; 
    }
}
