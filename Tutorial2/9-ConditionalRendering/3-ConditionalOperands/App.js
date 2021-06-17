import React, {useState} from 'react';

//JSX has to retrun an expression, so it is not possible to use the typical if/else syntax.
//However, we can short circuit operators and ternary operators to conditionally display
//inside of the jxs code, instead of coditional returning

const App = () => {
  const emptyText = ''
  const text = 'text'

  const firstVal1 = emptyText || 'hello'  //an empty string evaluates to false, so firstVal1 is just 'hello'
  const secondVal1 = emptyText && 'hello' //and secondVal1 is empty

  const firstVal2 = text || 'hello'  //any string evaluates to true, so firstVal2 is just 'k'
  const secondVal2 = text && 'hello' //and secondVal2 is hello


  //We can apply useState to change these values dynamically to show the conditional rendering
  const [isError, setIsError] = useState(false)
  const handleButton = () => {
    setIsError(!isError)
  }

  return (
    <>
      {/*if(true) console.log('Connot do this, will give error')*/} 

      <h1>Val1: {firstVal1}</h1>
      <h1>Val2: {secondVal1}</h1>

      <h1>Val1: {firstVal2}</h1>
      <h1>Val2: {secondVal2}</h1>

      {/*we can utilize short circuit operators in our jsx to conitionally render text or call functions*/}

      {/*using || operand to only print 'john doe' if text is false (or empty)*/} 
      <h1>{emptyText || 'john doe'}</h1>

      {/*using && operand to only print 'john doe' if text is true (or not empty)*/} 
      <h1>{text && 'john doe'}</h1>

      {/*using ! on text evaluates to false, so when using &&, nothing is returned*/} 
      <h1>{!text && 'john doe'}</h1>

      <button className = 'btn' onClick={handleButton}>Click me</button>
      {isError && <h1>Toggle this text with button</h1>}

      {/*We can also use a ternary operator in jsx*/ }
      {isError ? <p>True case</p> : <p>False case</p>}
    </>
  )
}

export default App;