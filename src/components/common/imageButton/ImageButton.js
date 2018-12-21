import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './ImageButton.css';

export default class ImageButton extends Component{

    static propTypes = {
        imgSrc: PropTypes.object,
        title: PropTypes.string,
        imageStyle: PropTypes.object,
        textStyle: PropTypes.object,
        style: PropTypes.object
    };

    static defaultProps = {

    };

    _getButtonStyle() {
        return Object.assign({}, styles.button, this.props.style);
    }

    _getImageStyle() {
        return Object.assign({}, styles.image, this.props.imageStyle);
    }

    _getTextStyle() {
        return Object.assign({}, styles.text, this.props.textStyle);
    }

    render() {
        return(
            <div>
                <button style={this._getButtonStyle()}>
                    {
                        this.props.imgSrc ? (
                            <img
                                src={this.props.imgSrc}
                                style={this._getImageStyle()}
                            />) : null
                    }
                    {
                        this.props.title ? (
                            <a style={this._getTextStyle()}>
                                {this.props.title}
                            </a>
                        ) : null
                    }
                </button>
            </div>
        )
    }
}