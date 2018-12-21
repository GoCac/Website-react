import React from 'react';
import ReactDOM from 'react-dom';
import {VelocityComponent} from 'velocity-react';
import styles from './index.css.js'
import TopMenu from './components/topMenu/TopMenu';
import HeaderBriefInfo from './components/headerBriefInfo/HeaderBriefInfo';

class TextDemo extends React.Component {
    render() {
        const text = 'Launching an App is a complicated and subtle process and the ramifications on launch times of different App design patterns are often non-obvious. Come learn what happens in the time between when an App begins launching and when the main() function gets control and how that time relates to the code and structure of your App. Learn about the inner details of the dynamic loader, dyld, and best practices for structuring your code to perform at its best from the very start.\n'
        return (
            <div style={{backgroundColor: '#fff'}}>
              <div>
                  {text}
              </div>
            </div>
        )
    }
}
// ========================================

ReactDOM.render(
<div style={styles.body}>
    <div style={styles.headerContainer}>
        <div style={styles.menuContainer}>
            <TopMenu/>
        </div>
        <HeaderBriefInfo/>
    </div>
    <VelocityComponent
        runOnMount
        delay={1400}
        duration={400}
        easing={'ease-in-out'}
        animation={{opacity: 1, marginTop: "0px"}}
    >
        <div style={{opacity: 0, marginTop: "60px"}}>
            <TextDemo />
            <TextDemo />
            <TextDemo />
            <TextDemo />
            <TextDemo />
            <TextDemo />
            <TextDemo />
            <TextDemo />
            <TextDemo />
            <TextDemo />
            <TextDemo />
            <TextDemo />
            <TextDemo />
            <TextDemo />
            <TextDemo />
            <TextDemo />
        </div>
    </VelocityComponent>)
  {/*<MarkdownExample />*/}
</div>,
  document.getElementById('root')
);