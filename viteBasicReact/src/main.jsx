import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React  from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'

function Test()
{
  return(
    <h2> hello users!</h2>
  )
}

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)


//this is not working because here we are not defining our custom render method we are 
// using react element render method and it is execting some key value format 

// const reactElement = {
//     type : 'a',
//     props : {
//         href : 'https://google.com',
//         target : '_blank'
//     }, 
//     children : 'click me to visit google'
// }


const reactElement = React.createElement(
  'a',
  {href : 'https://google.com',target : '_blank'},
  'Click me to visit google'
)

// Explanation:
// The React.createElement function signature is:
// React.createElement(type, props, ...children)

// You can pass multiple children as separate arguments
// Each child can be:
// A string
// A variable
// Another element

const name = "Diya";    //variable
const boldName = React.createElement('b', null, name);  //another element

const mixedElement = React.createElement(
  'div',
  null,
  'Welcome ',
  boldName,
  '! Have a great day.'
);


ReactDOM.createRoot(document.getElementById('root')).render(
    mixedElement //anotherElement  // reactElement // <Test /> // <App />
)
