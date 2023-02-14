const initialState = [
    {productId:"P001",productName:"pizza",image:"images/pizza.jpg", title:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",price:12,quantity:10},
    {productId:"P002",productName:"Hamburger",image:"images/Hamburger.jpg", title:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",price:13,quantity:0},
    {productId:"P003",productName:"cake",image:"images/cake.jpg", title:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",price:15,quantity:10}, 
    {productId:"P004",productName:"bread",image:"images/bread.jpg", title:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",price:11,quantity:10}
]
const listProduct = (state = initialState,action) =>{
    return state
}
export default listProduct