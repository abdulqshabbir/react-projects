import React from 'react'

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

export default Options