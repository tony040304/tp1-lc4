import React, { Component } from 'react'

const Toglee = (WrappedComponent) => {
    return class Toglee extends Component {
        constructor(props){
            super(props);
            this.state = {
                isOn: false,
            };
        }

        TogleeVisibility = () => {
            this.setState((prevState) => ({
                isOn: !prevState.isOn,
            }));
        }

        render() {
            return (
                <div>
                    <WrappedComponent isOn={this.state.isOn}
                     TogleeVisibility={this.TogleeVisibility}
                      {...this.props} />

                </div>
            )
        }
    }

}

export default Toglee