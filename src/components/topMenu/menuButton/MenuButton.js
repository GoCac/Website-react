import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './MenuButton.css';
import {VelocityComponent} from 'velocity-react'

export const ButtonState = {
    NORMAL: 0,
    SELECTED: 1
};
Object.freeze(ButtonState);

export default class MenuButton extends Component{
    static propTypes = {
        width: PropTypes.string,
        height: PropTypes.string,
        onOpen: PropTypes.func,
        onClose: PropTypes.func,
        style: PropTypes.object,
        buttonState: PropTypes.number
    };

    static defaultProps = {
        width: '50px',
        height: '50px',
        buttonState: ButtonState.NORMAL
    };

    constructor(props) {
        super(props);
        this.state = {
            selected: false
        };
    }


    componentWillReceiveProps(nextProps) {
        const {buttonState} = nextProps;

        let selected;
        switch (buttonState){
            case ButtonState.NORMAL:
                selected = false;
                break;
            case ButtonState.SELECTED:
                selected = true;
                break;
            default:
                selected = false;
        }
        this.setState({
            selected: selected
        })
    }

    _onOpen() {
        if(this.props.onOpen){
            this.props.onOpen()
        }
        this.setState({
            selected: true
        })
    }

    _onClose() {
        if(this.props.onClose){
            this.props.onClose()
        }
        this.setState({
            selected: false
        })
    }

    _onClick() {
        this.state.selected ? this._onClose() : this._onOpen()
    }

    _getContainerStyle(){
        return Object.assign({}, styles.container, this.props.style)
    }

    render() {
        let firstLineAnimation;
        let secondLineAnimation;
        let thirdLineAnimation;
        const duration = 100;
        if (this.state.selected) {
            firstLineAnimation = {
                duration: duration,
                animation: {
                    rotateZ: 45,
                    marginBottom: '-2px'
                },
                easing: 'ease-out'
            };

            secondLineAnimation = {
                duration: duration,
                animation: {
                    rotateZ: 45
                },
                easing: 'ease-out'
            };

            thirdLineAnimation = {
                duration: duration,
                animation: {
                    rotateZ: -45,
                    marginTop: '-2px'
                },
                easing: 'ease-out'
            };
        } else {
            firstLineAnimation = {
                duration: duration,
                animation: {
                    rotateZ: 0,
                    marginBottom: '5px'
                },
                easing: 'ease-out'
            };

            secondLineAnimation = {
                duration: duration,
                animation: {
                    rotateZ: 0
                },
                easing: 'ease-out'
            };

            thirdLineAnimation = {
                duration: duration,
                animation: {
                    rotateZ: 0,
                    marginTop: '5px'
                },
                easing: 'ease-out'
            };
        }

        return(
            <div
                    style={this._getContainerStyle()}
                    onClick={this._onClick.bind(this)}
                >
                <VelocityComponent {...firstLineAnimation}>
                    <div style={styles.line}/>
                </VelocityComponent>
                <VelocityComponent {...secondLineAnimation}>
                    <div style={styles.line}/>
                </VelocityComponent>
                <VelocityComponent {...thirdLineAnimation}>
                    <div style={styles.line}/>
                </VelocityComponent>
            </div>
        )
    }
}