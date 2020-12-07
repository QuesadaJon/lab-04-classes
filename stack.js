//stack
//push to a stack. It puts an item on the top of the stack
//pop from a stack. It removes the top item from the stack
//Linting steps
//strip away everything but the brackets
//iterate through all the brackets
//*if we see an opening bracket push to the stack
//*if we see a closing bracket pop from the stack and compare
//we're going to use a stack to check all brackets

// **removing characters from argument
// **using stack correctly
class Stack {
    #stack;

    constructor() {
        this.#stack = []
        this.count = 0
        this.map = {
            '(': ')',
            '[': ']',
            '{': '}'
        }
    }
    //put item on top of stack EVERY TIME IT SEES (, {, [ it pushes onto the stack
    push(str) {
        this.#stack[this.count] = str
        console.log(`${str} added to ${this.count}`)
        this.count += 1
        return this.count - 1
    }
    //take item off top of stack and return that item EVERY TIME IT SEES ), }, ] it pops off of the stack
    pop() {

    }
    //look at item on top of stack
    peek() {

    }

}
const stack = new Stack()

module.exports = Stack;