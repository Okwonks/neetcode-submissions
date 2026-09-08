class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        // Initialise left counter eq 1 and right counter eq max(piles)
        // Initialise eatingSpeed eq right
        let left = 1, right = Math.max(...piles), eatingSpeed = right;
        // While left lt or eq right
        for(; left <= right;) {
            // Calculate current k (eating speed)
            const k = Math.floor((left + right) / 2);
            // Using k, calculate the total time spent eating
            let totalTime = 0;
            for(const pile of piles) {
                totalTime += Math.ceil(pile / k);
            }
            // If total time <= h
            if(totalTime <= h) {
                // eatingSpeed eq k
                eatingSpeed = k;
                // shift right pointer eq k -1
                right = k - 1;
            } else {
                // Otherwise shift left pointer k + 1
                left = k + 1;
            }
        }
        // Return eatingSpeed
        return eatingSpeed;
    }
}
