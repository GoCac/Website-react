import React, {Component} from 'react';
import styles from './HeaderBriefInfo.css';
import LineView from './../common/lineView/LineView';
import {VelocityComponent} from 'velocity-react';

export default class HeaderBriefInfo extends Component {
    render() {
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
                    animation={{opacity: 1, marginTop: '20px'}}
                >
                    <div style={styles.textContainer}>
                        <a style={styles.text}>Online portfolio and blog of </a>
                        <em style={{fontSize: '14px'}}>Youhao Gong</em>
                        <a style={styles.text}>,</a>
                        <br/>
                        <a style={styles.text}>a Shanghai based software engineer.</a>
                    </div>
                </VelocityComponent>
            </div>
        )
    }
}