import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import CreateReactClass from 'create-react-class';
import ReactDOM from 'react-dom';
import Home from './pages/home/Home'

const About = CreateReactClass({
    render() {
        return <h3>About</h3>
    }
})

const Blog = CreateReactClass({
    render() {
        return (
            <h2>Blog</h2>
        )
    }
})

const Work = CreateReactClass({
    render() {
        return <h3>Work</h3>
    }
})

const Contact = CreateReactClass({
    render() {
        return <h3>Contact</h3>
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
