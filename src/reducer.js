export const initialState = {
    cart: [],
};

//Selector:

export const getCartTotal = (cart) => 
    cart?.reduce((amount, item)=> amount + item.price, 0);
       

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case "ADD_TO_CART":
            return{
                ...state,
                cart: [...state.cart, action.item],
            };
            case 'REMOVE_FROM_CART':
                let index=state.cart.findIndex((cartItem)=>cartItem.id===action.id);
                let newcart=[...state.cart];
                if(index>=0){
                       
                    newcart.splice(index,1);

                }else{
                     console.warn("Your Cart is Empty");           
                }
                
                
                return{
                ...state,
                cart:newcart,
                };        
                    default:
            return state;
    }

};

export default reducer;


