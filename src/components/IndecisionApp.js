import React from 'react'
import AddOption from './AddOption'
import Action from './Action'
import Header from './Header'
import Options from './Options'
import OptionModal from './OptionModal'

export default class IndecisionApp extends React.Component {
    constructor(props) {
        super(props)
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handlePick = this.handlePick.bind(this) 
        this.handleAddOptionSubmit = this.handleAddOptionSubmit.bind(this)
        this.handleDeleteOption = this.handleDeleteOption.bind(this)
        this.clearModal = this.clearModal.bind(this)
        this.state = {
            options: [],
            selectedOption: undefined
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
                <OptionModal 
                    selectedOption={this.state.selectedOption}
                    clearModal={this.clearModal}
                />
            </div>
        );
    }

    clearModal() {
        this.setState(() => {
            return {
                selectedOption: undefined
            };
        })
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
        this.setState(() => {
            return {
                selectedOption: this.state.options[howManyOptions]
            }; 
        })
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