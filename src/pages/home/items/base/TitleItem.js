import React, {Component} from 'react';
import styles from './TitleItem.css';
import PropTypes from 'prop-types';
import LineView from './../../../../components/common/lineView/LineView';
import {VelocityComponent} from 'velocity-react';

export default class TitleItem extends Component {
    static propTypes = {
        title: PropTypes.string,
        color: PropTypes.string
    };

    render() {
        var textStyle = Object.assign({}, styles.text, {color: this.props.color})
        return (
            <div style={styles.container}>
                <VelocityComponent
                    runOnMount
                    delay={1000}
                    duration={400}
                    easing={'ease-out'}
                    animation={styles.line_animation_end}
                >
                    <div style={styles.line_animation_start}>
                        <LineView/>
                    </div>
                </VelocityComponent>

                <VelocityComponent
                    runOnMount
                    delay={1150}
                    duration={600}
                    easing={'ease-out'}
                    animation={styles.text_animation_end}
                >
                    <div style={styles.text_animation_start}>
                        <a style={textStyle}>{this.props.title}</a>
                    </div>
                </VelocityComponent>
            </div>
        )
    }
}