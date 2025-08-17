function Food() {
// we need to add {} in return to add js code but outside we dont ned it

    const Food1 ="Orange"
    const Food2 = "Mango"


    return(

        <ul>
            <li>Apple</li>
            <li>{Food1}</li>
            <li>{Food2.toUpperCase()}</li>
        </ul>
    );
}
export default Food;