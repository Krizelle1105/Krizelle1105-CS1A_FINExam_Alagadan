var groceryStack = [];

function peek() {
  if (groceryStack.length === 0) {
    console.log("The stack is empty.");
    return null;
  } else {
    return groceryStack[groceryStack.length - 1];
  }
}

function push(item) {
  groceryStack.push(item);
  console.log("Added to stack:", item);
  console.log("Current stack:", groceryStack);
  console.log("Current top item:", peek());
}

function pop() {
  if (groceryStack.length === 0) {
    console.log("The stack is empty. Cannot pop.");
  } else {
    var removedItem = groceryStack.pop();
    console.log("Removed from stack:", removedItem);
    console.log("Current stack:", groceryStack);
    console.log("Current top item:", peek());
  }
}

for (var i = 0; i < 5; i++) {
  var item = prompt("Enter grocery item " + (i + 1) + ":");
  push(item);
}

pop(); //remove the last added item
pop(); //remove another item