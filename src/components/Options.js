import React from 'react'

const Options = (props) => {
    return(
        <div>
            <div className="widget-header">
                <h3 className="widget-header__title">Your Options</h3>
                    <button 
                        class="button button--link"
                        onClick={props.handleDeleteOptions}
                    >
                        Remove Options
                    </button>
            </div>
            <div className="widget-header widget-header__no-options">
                {props.options.length === 0 && <p>Please add an option to get started!</p>}
            </div>
                {
                    props.options.map(
                        (option, index) => 
                            <Option 
                                key={option}
                                optionText={option}
                                handleDeleteOption={props.handleDeleteOption}
                                count={index + 1}
                            />
                    )
                }

        </div>
    ); 
};

const Option = (props) => {
    return(
        <div className="option">
            {props.count}.{props.optionText}
            <button className="button button--link" 
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