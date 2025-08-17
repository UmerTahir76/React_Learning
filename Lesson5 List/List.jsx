
function List() {

    const fruits = [{id: 1, name:"apple", calories: 95},
                    {id: 2, name:"orange", calories: 85}, 
                    {id: 3, name:"banana", calories: 175}, 
                    {id: 4, name:"cocnut", calories: 65}, 
                    {id: 5, name:"pineapple", calories: 55}];

    // fruits.sort((a,b)=> a.name.localeCompare(b.name));    ALPHABETICAL
    // fruits.sort((a,b)=> b.name.localeCompare(a.name));     REVERSE ALPHABETICAL
    // fruits.sort((a,b)=> a.calories - b.calories);          CALORIES ASC

    const lowCalFruits = fruits.filter(fruit => fruit)
           

    const listItems = fruits.map(fruit => <li key={fruit.id}> 
                                                            {fruit.name}: &nbsp; 
                                                            <b>{fruit.calories}</b> </li>)

    return(<ol> {listItems} </ol>);
}
export default List;