var groceryList = [{name:'hfhg', price:20 , quantity: 2}]
var total= 0

// Create a function that adds to groceryList:
const addToGroceryList = (item) => {
// code in here
groceryList.push(item)
}

addToGroceryList({name:'Pap', price:20 , quantity: 1})

//output: groceryList must be [{name:'hfhg', price:20 , quantity: 2} , {name:'Pap', price:20 , quantity: 1}]


// Create a function that removes items based on index groceryList:
function removeBasedOnIndex(index){
    // code in here
    console.log('groceryList11111', groceryList)

   return groceryList.splice(index, 1)

}
console.log(removeBasedOnIndex(0))
console.log('groceryList22222', groceryList)
// output: groceryList must be [{name:'Pop', price:20 , quantity: 1}]


// Create a function to calculate the total price of items based on price and quantity:
const calculateTotal = () =>{
// code in here
groceryList.forEach(item => {
    total += item.price * item.quantity
})
return total
}

// // function must return 20
console.log(calculateTotal())


// console.log(groceryList)