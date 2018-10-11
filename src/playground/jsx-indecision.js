console.log('hello there') 
//JSX javascript XML format

"use strict";

const app = {
    title: 'My Indecision Application',
    subtitle: '',
    options: []
}

let numArray = [1, 1, 2, 3, 5, 8]

const renderOptions = () => {
    const appRoute = document.getElementById('app')
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options': 'no options'}</p>
            <button disabled={app.options.length === 0} onClick={handleMakeDecision}>What should I do?</button>
            <button onClick={removeAllOptions}>Remove All</button>
            <ol>
                {
                    app.options.map((option, index) => {
                        return <li key={index}>{option}</li> 
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoute)
}

function onFormSubmit (e) {
    e.preventDefault();
    const option = e.target.elements.option.value
    if (option) {
        app.options.push(option)
        e.target.elements.option.value = ''
        renderOptions()
    }
}

const handleMakeDecision = () => {
    const howManyOptionsDoIHave = Math.floor(Math.random() * app.options.length)
    const randomOption = app.options[howManyOptionsDoIHave]
    alert(randomOption)
}

const removeAllOptions = () => {
    app.options = [] 
    renderOptions()
}

renderOptions(); 

