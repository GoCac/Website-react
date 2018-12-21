import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './UnderlineButton.css';
import { VelocityComponent } from 'velocity-react';
import { Color_Theme_Black } from './../../../config/Configuration'

export default class UnderlineButton extends Component {
    /**
     * 属性的type类型
     */
    static propTypes = {
        buttonTitle: PropTypes.string,
        fontSize: PropTypes.string,
        titleColor: PropTypes.string,
        underlineColor: PropTypes.string,
        onClick: PropTypes.func
    };

    /**
     * 属性的默认值
     */
    static defaultProps = {
        buttonTitle: 'Button',
        fontSize: '12px',
        titleColor: Color_Theme_Black,
        underlineColor: Color_Theme_Black,
        onClick: (() => { alert('没有设置onClick') })
    };

    constructor(props) {
        super(props);
        this.state = {
            showUnderline: false
        }
    }

    _onMouseEnter() {
        this.setState({
            showUnderline: true
        })
    }

    _onMouseLeave() {
        this.setState({
            showUnderline: false
        })
    }

    _getButtonStyles() {
        return Object.assign({}, styles.button, {
            color: this.props.titleColor,
            fontSize: this.props.fontSize
        });
    }

    _getUnderlineStyles() {
        return Object.assign({}, styles.underline, {backgroundColor: this.props.underlineColor});
    }

    render() {
        let animationProps;
        if (this.state.showUnderline) {
            animationProps = {
                duration: 250,
                animation: {
                    width: '100%',
                    opacity: 1
                },
                easing: 'ease-out'
            };
        } else {
            animationProps = {
                duration: 200,
                animation: {
                    width: 0,
                    opacity: 0
                },
                easing: 'ease-in'
            }
        }
        return(
            <div>
                <button
                    style={this._getButtonStyles()}
                    onClick={this.props.onClick}
                    onMouseEnter={this._onMouseEnter.bind(this)}
                    onMouseLeave={this._onMouseLeave.bind(this)}
                >
                    {this.props.buttonTitle}
                    <VelocityComponent {...animationProps}>
                        <div style={this._getUnderlineStyles()} />
                    </VelocityComponent>
                </button>
            </div>
        )
    }
}
