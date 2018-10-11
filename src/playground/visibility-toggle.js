//Visibility Component
class Visibility extends React.Component {
    constructor(props) {
        super(props)
        this.handleToggle = this.handleToggle.bind(this)
        this.state = {
            visibility: false
        };
    }
    handleToggle(e) {
        e.preventDefault();
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        })
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggle}>{this.state.visibility ? 'Hide Details!': 'Show Details!'}</button>
                {this.state.visibility && <p>Show Hidden Details!</p>}
            </div>
        ); 
    }
}

ReactDOM.render(<Visibility />, document.getElementById('app'))
// let isHidden = true; 

// function handleToggle() {
//     isHidden = !isHidden
//     renderVisibilityComponent();
// }

// const renderVisibilityComponent = () => {
//     const visibilityCompmonent = (
//         <div>
//             <h3>Visibility Toggle</h3>
//             <button onClick={handleToggle}>{isHidden? 'Show Details': 'Hide Details'}</button>
//             {
//                 !isHidden && 
//                 <p>
//                     Show me the details!
//                 </p>
//             }
//         </div>
//     );
//     ReactDOM.render(visibilityCompmonent, document.getElementById('app'))
// }

// renderVisibilityComponent()