import React from 'react'
import ReactDOM from 'react-dom'
import IndecisionApp from './components/IndecisionApp'

ReactDOM.render(< IndecisionApp />, document.getElementById('app'))

//======================IMPORTANT REACT TAKEAWAYS==========================/
//1. React stores state in the parent component as an object
//2. Default state always has to be provided and all child components automatically render once
//3. Anytime state changes all children components re-render
//4. To change state you must call setState and RETURN the changed state as an OBJECT
//5. To pass state down to children, pass them as props
//6. To pass state changes from children upto the parent, invoke a FUNCTION that lives on the
    // parent component (and has been passed down to the child as a prop)
//7. Stateless functional components can be used to simplify simple stateless components

 