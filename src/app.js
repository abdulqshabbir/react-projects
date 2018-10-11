class IndecisionApp extends React.Component {
    constructor(props) {
        super(props)
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handlePick = this.handlePick.bind(this) 
        this.handleAddOptionSubmit = this.handleAddOptionSubmit.bind(this)

        this.state = {
            options: [],
        };
    }

    render() {
        const title = 'Indecision Application' 
        const subtitle = 'Very cool subtitle'
            return (
            <div>
                <Header title={title} subtitle={subtitle}/> 
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                /> 
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                />
                <AddOption 
                    options = {this.state.options}
                    newOption = {this.state.newOption}
                    handleAddOptionSubmit = {this.handleAddOptionSubmit}
                />
            </div>
        );
    }

    handleDeleteOptions() {
        this.setState(() => {
            return {
                options: [] 
            };
        })
    }

    //handlePick - pass down to Action - setup onClick - randomly click an option and select it
    handlePick() {
        const howManyOptions = Math.floor(this.state.options.length*Math.random())
        alert(this.state.options[howManyOptions])
    }
    
    //handleAddOption - pass down to Add Option - setup onClick - add to options array - re-render components
    handleAddOptionSubmit(option) {
        if(!option) {
            return "Enter valid value to add item"
        } else if (this.state.options.indexOf(option) > -1) {
            return 'this option already exists'
        }
        this.setState((prevState) => {
            return {
                options: prevState.options.concat(option)
            };
        });
    }
}

class Header extends React.Component{
    render() {// mandatory. Returns JSX. 
        console.log(this.props)
        return (// Header is a class which inherits all methods/properties of React.Component and returns jsx
            <div>
                <h1>{this.props.title}</h1>
                <h3>{this.props.subtitle}</h3>
                <p>Put your life in the hands of a computer!</p>
            </div>
        );
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button 
                    onClick={this.props.handlePick}
                    disabled={!this.props.hasOptions}
                >
                    What should I do?
                </button>
            </div>
        );
    }
}

class Options extends React.Component {
    constructor(props) {
        super(props)
    }
    render(){
        return (
            <div>
                <button onClick={this.props.handleDeleteOptions}>
                    Remove Options
                </button>
                {
                    this.props.options.map((option) => <Option key={option} optionText={option}/>)
                }
            </div>
        ); 
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>{this.props.optionText}</div>
        ); 
    }
}

// option => 'option component here'

class AddOption extends React.Component {
    constructor(props) {
        super(props)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
            error: undefined 
        };
    }

    handleAddOption(e) {
        e.preventDefault(); 
        const option = e.target.elements.option.value;
        const error = this.props.handleAddOptionSubmit(option);
        this.setState(() => {
            return {
                error: error 
            }; 
        })
        
    }
    render(){
        return (
            <div>
            {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input 
                        type="text" 
                        name="option"
                    />
                    <button>Add option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))


//======================IMPORTANT REACT TAKEAWAYS==========================/
//1. React stores state in the parent component as an object
//2. Default state always has to be provided and all child components automatically render once
//3. Anytime state changes all children components re-render
//4. To change state you must call setState and RETURN the changed state as an OBJECT
//5. To pass state down to children, pass them as props
//6. To pass state changes from children upto the parent, invoke a FUNCTION that lives on the
    // parent component (and has been passed down to the child as a prop)
 