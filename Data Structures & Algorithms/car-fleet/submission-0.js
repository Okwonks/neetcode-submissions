class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const n = position.length;
        const cars = Array(n);
        for(let i = 0; i < n; i ++) {
            cars[i] = [position[i], speed[i]];
        }
        cars.sort((a, b) => a[0] - b[0]);

        const stack = [];
        for(let i = n - 1; i >= 0; i--) {
            const [pos, sp] = cars[i];
            stack.push((target - pos) / sp);
            if(stack.length >= 2 && stack[stack.length - 1] <= stack[stack.length - 2]) {
                stack.pop();
            }
        }
        return stack.length;
    }
}
