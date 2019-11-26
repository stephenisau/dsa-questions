var MinStack = function() {
    this.stack = [];
    this.min = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stack.push(x);
    if (this.min.length === 0) {
        this.min.push(x);
    }
    else {
        this.min.push(Math.min(this.min[this.min.length - 1], x));
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if (this.stack.length > 0) {
        this.stack.pop();
        this.min.pop();
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    if (this.stack.length > 0) {
        return this.stack[this.stack.length - 1]
    }
    return null;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    if (this.min.length !== 0) {
        return this.min[this.min.length - 1];
    }
    return null
};
