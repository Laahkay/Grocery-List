var groceryList = [{name:'hfhg', price:20 , quantity: 2}]
var total= 0

// Create a function that adds to groceryList:
const addToGroceryList = (groceryList) => {
// code in here
groceryList.name = "{Pap";
groceryList.price = 20
groceryList.quantity = '1}'
}
addToGroceryList(groceryList)
// addToGroceryList({name:'Pap', price:20 , quantity: 1})

//output: groceryList must be [{name:'hfhg', price:20 , quantity: 2} , {name:'Pap', price:20 , quantity: 1}]


// Create a function that removes items based on index groceryList:
removeBasedOnIndex =(groceryList) =>{
 // code in here
 for (var groceryList = 0 ; groceryList < 1; groceryList++){
console.log(groceryList[1])
 }
}

removeBasedOnIndex(0)
// output: groceryList must be [{name:'Pop', price:20 , quantity: 1}]


// Create a function to calculate the total price of items based on price and quantity:
const calculateTotal = () =>{
// code in here
groceryList.forEach(item => {
    total += item.price 
})
return total
}

// function must return 20
console.log(calculateTotal())


console.log(groceryList)