import React from 'react';
import ReactDOM from 'react-dom';
import styles from './index.css.js';
import TopMenu from './components/topMenu/TopMenu';
import HeaderBriefInfo from './components/headerBriefInfo/HeaderBriefInfo';
import MarkdownContainer from './components/markdown/MarkdownContainer';

ReactDOM.render(
    <div style={styles.body}>
        <div style={styles.headerContainer}>
            <div style={styles.menuContainer}>
                <TopMenu/>
            </div>
            <HeaderBriefInfo/>
        </div>
        <MarkdownContainer filePath={require('./README的副本.md')}/>
    </div>,
    document.getElementById('root')
);