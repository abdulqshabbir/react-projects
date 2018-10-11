class NameForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }
        this.onFormChange = this.onFormChange.bind(this)
        this.onFormSubmit = this.onFormSubmit.bind(this)
    }

    onFormChange(event) {
        this.setState({value: event.target.value})
    }
    onFormSubmit(event) {
        alert('A name was submitted: ' + this.state.value)
        event.preventDefault();
    }
    render() {
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" name="myName" onChange={this.onFormChange} value={this.state.value}/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        ); 
    }
}

ReactDOM.render(<NameForm />, document.getElementById('app'))
