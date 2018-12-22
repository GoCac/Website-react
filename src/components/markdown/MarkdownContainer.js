import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Showdown from 'showdown';
import {VelocityComponent} from 'velocity-react'
import LineView from './../common/lineView/LineView'
import styles from './MarkdownContainer.css';
import './markdown.css';

export default class MarkdownContainer extends Component {

    static propTypes = {
        filePath: PropTypes.string 
    };

    state = {
        markdown: "读取中..."
    }

    componentWillMount() {
        fetch(this.props.filePath)
            .then(response => {
            return response.text()
            })
            .then(text => {
            setTimeout(function() {
                var converter = new Showdown.Converter()
                converter.setFlavor('github')
                this.setState({
                    markdown: converter.makeHtml(text)
                });
            }.bind(this), 1000);
            })
    }

    getMarkdownText() {
        const markdown = this.state.markdown;
        return { __html: markdown };
    }

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
                    easing={'ease-in-out'}
                    animation={styles.markdown_animation_end}
                >
                    <div style={styles.markdown_animation_start}>
                        <div dangerouslySetInnerHTML={this.getMarkdownText()} />
                    </div>
                </VelocityComponent>
            </div>
        )
    }
}