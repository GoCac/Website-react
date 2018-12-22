import React from 'react';
import ReactDOM from 'react-dom';
import {VelocityComponent} from 'velocity-react';
import styles from './index.css.js'
import TopMenu from './components/topMenu/TopMenu';
import HeaderBriefInfo from './components/headerBriefInfo/HeaderBriefInfo';
import './markdown.css';

import Showdown from 'showdown';

class MarkdownExample extends React.Component {
  state = {
    markdown: "读取中..."
  }
  componentWillMount() {
    const readmePath = require("./README的副本.md");
    fetch(readmePath)
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
        }.bind(this), 1400);
      })
  }

  getMarkdownText() {
    const markdown = this.state.markdown;
    return { __html: markdown };
  }

  render() {
    return (
        <div style={{backgroundColor: '#fff'}}>
            <div 
                dangerouslySetInnerHTML={this.getMarkdownText()} 
            />
        </div>
    )
  }
}

ReactDOM.render(
<div style={styles.body}>
    <div style={styles.headerContainer}>
        <div style={styles.menuContainer}>
            <TopMenu/>
        </div>
        <HeaderBriefInfo/>
    </div>

    <div style={{width: '100%', maxWidth: '1200px', wordWrap:"break-word"}}>
        <VelocityComponent
            runOnMount
            delay={1400}
            duration={400}
            easing={'ease-in-out'}
            animation={{opacity: 1, marginTop: "0px"}}
        >
            <div style={{opacity: 0, marginTop: "60px"}}>
                <MarkdownExample />
            </div>
        </VelocityComponent>
    </div>
</div>,
  document.getElementById('root')
);