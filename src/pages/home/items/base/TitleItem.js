import React, { Component } from 'react';
import styles from './TitleItem.css';
import PropTypes from 'prop-types';
import LineView from './../../../../components/common/lineView/LineView';
import { VelocityComponent } from 'velocity-react';
import Plx from 'react-plx';

export default class TitleItem extends Component {
    static propTypes = {
        title: PropTypes.string,
        color: PropTypes.string
    };

    _getContainerStyles() {
        if (window.innerWidth > window.innerHeight) {
            return styles.container_pc
        } else {
            return styles.container_ph
        }
    }

    _getBGContainerStyles() {
        if (window.innerWidth > window.innerHeight) {
            return styles.bgContainer_pc
        } else {
            return styles.bgContainer_ph
        }
    }

    _getBGTextContainerStyles() {
        if (window.innerWidth > window.innerHeight) {
            return styles.backgroudTextContainer_pc
        } else {
            return styles.backgroudTextContainer_ph
        }
    }

    _getBGTextStyles() {
        if (window.innerWidth > window.innerHeight) {
            return Object.assign({}, styles.backgroudText_pc, { color: this.props.color })
        } else {
            return Object.assign({}, styles.backgroudText_ph, { color: this.props.color })
        }
    }

    render() {
        var textStyle = Object.assign({}, styles.text, { color: this.props.color });

        // An array of parallax effects to be applied - see below for detail
        const parallaxData = [
            {
                start: 'self',
                end: '10000',
                properties: [
                    {
                        startValue: 1,
                        endValue: 1000,
                        property: 'translateY',
                    },
                ],
            },
        ];

        return (
            <div style={this._getContainerStyles()}>
                <div>
                    <VelocityComponent
                        runOnMount
                        delay={1000}
                        duration={400}
                        easing={'ease-out'}
                        animation={styles.line_animation_end}
                    >
                        <div style={styles.line_animation_start}>
                            <LineView />
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


                <div style={this._getBGContainerStyles()}>
                    <Plx
                        parallaxData={parallaxData}
                    >
                        <VelocityComponent
                            runOnMount
                            delay={2000}
                            duration={400}
                            easing={'ease-out'}
                            animation={{ opacity: 0.15 }}
                        >
                            <div style={this._getBGTextContainerStyles()}>
                                <a style={this._getBGTextStyles()}>{this.props.title[0]}</a>
                            </div>
                        </VelocityComponent>
                    </Plx>
                </div>
            </div>
        )
    }
}