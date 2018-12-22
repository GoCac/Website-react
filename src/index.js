import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import CreateReactClass from 'create-react-class';
import ReactDOM from 'react-dom';
import Home from './pages/home/Home'

import styles from './pages/home/Home.css.js'
import MarkdownContainer from './components/markdownContainer/MarkdownContainer'
import TopMenu from './components/topMenu/TopMenu';

const About = CreateReactClass({
    render() {
        return <div style={styles.body}>
                    <div style={styles.headerContainer}>
                        <div style={styles.menuContainer}>
                            <TopMenu/>
                        </div>
                    </div>
                    <div style={styles.itemsContainer}>
                        <MarkdownContainer filePath={require('./README的副本.md')}/>
                    </div>
        </div>
    }
})

const Blog = CreateReactClass({
    render() {
        return <div style={styles.body}>
                    <div style={styles.headerContainer}>
                        <div style={styles.menuContainer}>
                            <TopMenu/>
                        </div>
                    </div>
                    <div style={styles.itemsContainer}>
                        <MarkdownContainer filePath={require('./README的副本.md')}/>
                    </div>
        </div>
    }
})

const Work = CreateReactClass({
    render() {
        return <div style={styles.body}>
                    <div style={styles.headerContainer}>
                        <div style={styles.menuContainer}>
                            <TopMenu/>
                        </div>
                    </div>
                    <div style={styles.itemsContainer}>
                        <MarkdownContainer filePath={require('./README的副本.md')}/>
                    </div>
        </div>
    }
})

const Contact = CreateReactClass({
    render() {
        return <div style={styles.body}>
                    <div style={styles.headerContainer}>
                        <div style={styles.menuContainer}>
                            <TopMenu/>
                        </div>
                    </div>
                    <div style={styles.itemsContainer}>
                        <MarkdownContainer filePath={require('./README的副本.md')}/>
                    </div>
        </div>
    }
})


ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/blog" component={Blog} />
            <Route path="/work" component={Work} />
            <Route path="/contact" component={Contact} />
        </div>
    </BrowserRouter>,
    document.getElementById('root')
);
