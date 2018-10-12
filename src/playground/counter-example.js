// Main: Counter component
// Children: CountDisplay, Increment, Decrement, Reset

//take prop count from application - if no count provided...  - setup default prop value to 0

class CounterApplication extends React.Component {
    constructor(props) {
        super(props)
        this.onCounterIncrement = this.onCounterIncrement.bind(this)
        this.onCounterDecrement = this.onCounterDecrement.bind(this)
        this.onCounterReset = this.onCounterReset.bind(this)
        this.state = {//set-up default state value
            count: props.initialCount
        }; 
    }
    onCounterIncrement() {
       this.setState((prevState) => {
           return {
               count: prevState.count + 1
           }
       })
    }
    onCounterDecrement() {
        this.setState((prevState) => {
            console.log(this.state.count)
            return {
                count: prevState.count - 1
            }
        })
    }
    onCounterReset() {
        this.setState(() => {
            return {
                count: 0
            }
        })
    }

    render(){
        return (
            <div>
                <h1>Welcome to super-simple counter application!</h1>
                <p>Counter display is currently: {this.state.count}</p>
                <button onClick={this.onCounterIncrement}>+</button>
                <button onClick={this.onCounterDecrement}>-</button>
                <button onClick={this.onCounterReset}>reset</button>
            </div>
        );
    }
}

CounterApplication.defaultProps = {
    count: 0
};

//render final application;
const appLocation = document.getElementById('app')
ReactDOM.render(<CounterApplication initialCount={-110}/>, appLocation)

