class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if(!this.keyStore.has(key)) {
            this.keyStore.set(key, []);
        }
        this.keyStore.get(key).push([timestamp, value]);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        const record = this.keyStore.get(key);
        if(!record) return '';

        let res = '', left = 0, right = record.length - 1;
        for(; left <= right;) {
            const mid = Math.floor((left + right) / 2);
            const [time, value] = record[mid];
            if(time <= timestamp) {
                res = value;
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return res;
    }
}
