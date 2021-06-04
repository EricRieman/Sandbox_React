// Mapping components
// most data you will end up rendering on a page comes from an http call 
// that will return some json data to you

import React from "react"
import {Joke} from "./Joke";
import {myData} from "./myData";

function App() {

    // lets first look at the array map, which takes a function that will be applied to each member of the array, then return a new array
    const nums = [1, 2, 3, 4, 5];
    const doubled = nums.map( function (num) {
        return num * 2;
    });
    console.log(nums);
    console.log(doubled);

    // other useful methods for this are reduce, filter, sort, every, some, find, findIndex

    // Now, we can use an array of data, and apply each element to a component. 
    // We can simplify this to one line by using the ES6 arrow function
    const MyDataComponents = myData.map( data => <Joke question = {data.info1} punchLine = {data.info2} />)

    // The above line will produce an error because react requires a unique 'key' prop on repeated components
    // Typically, data will come with an id that can be used for this purpose, as shown below:
    const MyDataComponents2 = myData.map( data => <Joke key = {data.id} question = {data.info1} punchLine = {data.info2} />)

    // Then, jsx allows us to input an array of compoments as follows:
    return (
        <div>
            {MyDataComponents},
            {MyDataComponents2}
        </div>
    )
}

export default App;