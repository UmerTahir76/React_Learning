// onChange = event handler used primarily with form elements
//           ex. <input>, <textarea>, <radio>,<select>
//             triggers a function everytime the value of input changes

import React, {useState} from "react";

function MyComponent() {

    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState();
    const [comment, setComment] = useState();
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] =useState();

    function handleChangeName(event){
        setName(event.target.value);
    }
    function handleQuantityChange(event){
        setQuantity(event.target.value);
    }
    function handleCommentChange(event){
        setComment(event.target.value);
    }
    function handlePaymentChange(event){
        setPayment(event.target.value);
    }
    function handleShipping(event) {
        setShipping(event.target.value);
    }

    return(<div>
                <input value={name} onChange={handleChangeName}/>
                <p>Name: {name}</p>

                <input value={quantity} onChange={handleQuantityChange} type="number"/>
                <p>Quantity: {quantity}</p>

                <textarea value={quantity} onChange={handleCommentChange} type="number"
                placeholder="Enter deleivery instructions"/>
                <p>Comment: {comment}</p>

                <select value={payment} onChange={handlePaymentChange}>
                    <option value= "">Select an option</option>
                    <option value= "Visa">Visa</option>
                    <option value= "Mastercard">Mastercard</option>
                    <option value= "GiftCard">GiftCard</option>
                </select>
                <p>Payment: {payment}</p>

                <label>
                    <input type="radio" value="Pick Up"
                           checked ={shipping === "Pick Up"}
                           onChange={handleShipping}/>
                    Pick Up
                </label><br/>
                <label>
                    <input type="radio" value="Delivery"
                           checked ={shipping === "Delivery"}
                           onChange={handleShipping}/>
                    Delivery               
                </label>
                <p>Shipping: {shipping}</p>
            </div>);

}
export default MyComponent