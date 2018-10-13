import React from 'react'

export default class AddOption extends React.Component {
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
            
                {this.state.error && <p className="add-option--error">{this.state.error}</p>}

                <form onSubmit={this.handleAddOption}>
                    <div className="input-form">
                        <input
                            class="input-form__text"
                            type="text" 
                            name="option"
                        />                    
                    <button className="button small-button">Add option</button>
                    </div>    
                </form>
            </div>
        );
    }
}