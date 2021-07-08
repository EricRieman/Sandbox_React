import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';

const App = () => {
  const[questions, setQuestions] = useState(data)

  return (
    <main>
      <div className="container">
        <h3>Questions and Answers about login</h3>
        <section className="info">
          {questions.map((question) => <SingleQuestion key={question.id} {...question}/> )}
        </section>
        <div className='underline' />
      </div>
    </main>
  )
}

export default App;
