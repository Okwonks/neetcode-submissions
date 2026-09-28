class Node {
    constructor(key, value) {
        this.key = key;
        this.val = value;
        this.next = null;
        this.prev = null;
    } 
}

class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        // Store the capacity supplied
        this.capacity = capacity;
        // Initialise a map (storing pointers)
        this.cache = new Map();
        // Initialise start and end pionters which will be doubly linked
        this.old = new Node(0, 0);
        this.new = new Node(0, 0);
        // Update initial pointers
        this.old.next = this.new;
        this.new.prev = this.old;
    }

    // Two helper functions: insert and remove
    // >> insert manipulates the pointers of either new or recently added value
    insert(node) {
        let prev = this.new.prev, next = this.new;
        prev.next = node;
        next.prev = node;
        node.next = next, node.prev = prev;
    }
    // >> remove "destroys" the link to a node being removed
    remove(node) {
        let prev = node.prev;
        let next = node.next;
        prev.next = next;
        next.prev = prev;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        // Check if key is in map
        // if not return -1
        if(!this.cache.has(key)) return -1;
        // Use remove to unlink the found node (moving to be most recent)
        this.remove(this.cache.get(key));
        // Use insert to add it to the "top"
        this.insert(this.cache.get(key));
        // return the value of the node
        return this.cache.get(key).val;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        // Check if the key exits
        // if the key exists, remove it from the the map
        if(this.cache.has(key)) {
            this.remove(this.cache.get(key));
        }
        // Use insert to add the key/value pair
        this.cache.set(key, new Node(key, value));
        this.insert(this.cache.get(key));
        // if the capacity is at max
        if(this.cache.size > this.capacity) {
            // remove LRU which eq the pointer to the old node
            let lru = this.old.next;
            // Use remove helper to unlink the LRU from the list
            this.remove(lru);
            this.cache.delete(lru.key);
        }
    }
}
