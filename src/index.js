import React from 'react';
import ReactDOM from 'react-dom';
import Marked from 'marked';
// import highlightjs from 'highlight.js';
// import './index.css';
// import './default.css';
import styles from './index.css.js'
import TopMenu from './components/topMenu/TopMenu';
import HeaderBriefInfo from './components/headerBriefInfo/HeaderBriefInfo';

// highlightjs.initHighlightingOnLoad()
//
// // Create your custom renderer.
// const renderer = new Marked.Renderer();
// renderer.code = (code, language) => {
//   // Check whether the given language is valid for highlight.js.
//   const validLang = !!(language && highlightjs.getLanguage(language));
//   // Highlight only if the language is valid.
//   const highlighted = validLang ? highlightjs.highlight(language, code).value : code;
//   // Render the highlighted code with `hljs` class.
//
//   return `<pre><code class="hljs ${language}">${highlighted}</code></pre>`;
// };

// Set the renderer to marked.
// Marked.setOptions({ renderer });

// class MarkdownExample extends React.Component {
//   state = {
//     markdown: "读取中..."
//   }
//   componentWillMount() {
//     const readmePath = require("./README.md");
//     fetch(readmePath)
//       .then(response => {
//         return response.text()
//       })
//       .then(text => {
//         setTimeout(function() {
//           this.setState({
//             markdown: Marked(text)
//             });
//         }.bind(this), 1400);
//       })
//   }
//
//   getMarkdownText() {
//     const markdown = this.state.markdown;
//     return { __html: markdown };
//   }
//
//   render() {
//     return (
//         <div style={{backgroundColor: '#fff'}}>
//             <div dangerouslySetInnerHTML={this.getMarkdownText()} />
//         </div>
//     )
//   }
// }

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
  {/*<MarkdownExample />*/}
</div>,
  document.getElementById('root')
);