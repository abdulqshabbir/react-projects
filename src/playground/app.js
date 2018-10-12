class IndecisionApp extends React.Component {
    constructor(props) {
        super(props)
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handlePick = this.handlePick.bind(this) 
        this.handleAddOptionSubmit = this.handleAddOptionSubmit.bind(this)
        this.handleDeleteOption = this.handleDeleteOption.bind(this)
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
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption 
                    options = {this.state.options}
                    newOption = {this.state.newOption}
                    handleAddOptionSubmit = {this.handleAddOptionSubmit}
                />
            </div>
        );
    }

    componentDidMount() {
        try{
            if (localStorage.getItem('options')) {
                const optionsFromLastVisit = JSON.parse(localStorage.getItem('options'))
                this.setState(() => {
                    return {
                        options: optionsFromLastVisit
                    };
                }); 
            }
        }   catch(e) {
            //do nothing - set default array
        }
        console.log('fetching data!')
    }

    componentDidUpdate(prevProps, prevState) {
        //anytime state or props change
        if(prevState.options.length !== this.state.options.length) {
            localStorage.setItem('options', JSON.stringify(this.state.options))
            console.log('saving data to local storage!')
        }
    }

    componentWillUnmount() {
        console.log('component will unmount')
    }

    handleDeleteOptions() {
        this.setState(() => ({options: []}));
    }

    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => {
            return {
                options: prevState.options.filter((option) => {
                    return optionToRemove!== option
                })
            };
        }); 
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

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h3>{props.subtitle}</h3>
            <p>Put your life in the hands of a computer!</p>
        </div>
    ); 
};

Header.defaultProps = {
    title: 'Some default Title'
}; 

const Action = (props) => {
    return (
        <div>
            <button 
                onClick={props.handlePick}
                disabled={!props.hasOptions}
            >
                What should I do?
            </button>
        </div>
    );
};

const Options = (props) => {
    return(
        <div>
            {props.options.length === 0 && <p>Please add an option to get started!</p>}
            <button onClick={props.handleDeleteOptions}>
                Remove Options
            </button>
                {
                    props.options.map(
                        (option) => 
                            <Option 
                                key={option}
                                optionText={option}
                                handleDeleteOption={props.handleDeleteOption}
                            />
                    )
                }
        </div>
    ); 
}; 

const Option = (props) => {
    return(
        <div>
            {props.optionText}
            <button 
                onClick={(e) => {
                    props.handleDeleteOption(props.optionText);
                }}
            >        
                remove
            </button>
        </div>
    ); 
}; 

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
        this.setState(() => ({error: error}))
        if(!error) {
            e.target.elements.option.value = '';
        }
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

ReactDOM.render(< IndecisionApp />, document.getElementById('app'))

// stateless functional component



//======================IMPORTANT REACT TAKEAWAYS==========================/
//1. React stores state in the parent component as an object
//2. Default state always has to be provided and all child components automatically render once
//3. Anytime state changes all children components re-render
//4. To change state you must call setState and RETURN the changed state as an OBJECT
//5. To pass state down to children, pass them as props
//6. To pass state changes from children upto the parent, invoke a FUNCTION that lives on the
    // parent component (and has been passed down to the child as a prop)
//7. Stateless functional components can be used to simplify simple stateless components

 