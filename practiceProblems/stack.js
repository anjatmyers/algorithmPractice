// creating a stack data structure
// an array but we make it an object so we can control the methods that are ran on it 
class Stack {
constructor(){
    this.data = [];
}

pop(){
    return this.data.pop();
}

peek(){
    return this.data[this.data.length -1]
}
// shows us the last item entered into the array 

push(el){
    return this.data.push(el);
}

length(){
    return this.data.length;
}

}

let stack = new Stack();

stack.push(1);
console.log(stack.peek())
// returns last item entered 1

stack.push(11)
stack.push(12)
stack.push(13)
stack.push(14)
stack.pop()
console.log(stack.peek())
// returns 13
console.log(stack.length())