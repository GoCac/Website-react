import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './LineView.css';
import {
    Color_Disable
} from './../../../config/Configuration';

export default class LineView extends Component{

    static propTypes = {
        backgroundColor: PropTypes.string,
        width: PropTypes.string,
        height: PropTypes.string
    };

    static defaultProps = {
        backgroundColor: Color_Disable + '88',
        width: "60px",
        height: "7px"
    };

    _getLineStyles() {
        return Object.assign({}, styles.line, {
            backgroundColor: this.props.backgroundColor,
            width: this.props.width,
            height: this.props.height
        })
    }

    render() {
        return(
            <div style={this._getLineStyles()} />
        )
    }
}
