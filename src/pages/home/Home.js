import React, {Component} from 'react';
import styles from './Home.css.js';
import TopMenu from './../../components/topMenu/TopMenu';
import HeaderBriefInfo from './headerBriefInfo/HeaderBriefInfo';
import WorkItem from './items/workItem/WorkItem';
import BlogItem from './items/blogItem/BlogItem';
import AboutItem from './items/abloutItem/AboutItem';
import ContactItem from './items/contactItem/ContactItem';

export default class Home extends Component {
    render() {
        return <div style={styles.body}>
                    <div style={styles.headerContainer}>
                        <div style={styles.menuContainer}>
                            <TopMenu/>
                        </div>
                        <HeaderBriefInfo/>
                    </div>
                    <div style={styles.itemsContainer}>
                        <WorkItem/>
                        <BlogItem/>
                        <AboutItem/>
                        <ContactItem/>
                    </div>
                    {/* <MarkdownContainer filePath={require('./README的副本.md')}/> */}
                </div>
    }
}