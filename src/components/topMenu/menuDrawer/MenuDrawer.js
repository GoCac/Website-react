import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './MenuDrawer.css';
import UnderlineButton from './../../common/underlineButton/UnderlineButton';
import {
    Color_Theme_Red,
    Color_Theme_Green,
    Color_Theme_Blue
} from './../../../config/Configuration';

export default class MenuDrawer extends Component {
    static propTypes = {
        onWorkBtn: PropTypes.func,
        onAboutBtn: PropTypes.func,
        onBlogBtn: PropTypes.func,
        onContactBtn: PropTypes.func
    };

    _onWork() {
        if (this.props.onWorkBtn){
            this.props.onWorkBtn()
        }
    }

    _onAbout() {
        if (this.props.onAboutBtn){
            this.props.onAboutBtn()
        }
    }

    _onBlog() {
        if (this.props.onBlogBtn){
            this.props.onBlogBtn()
        }
    }

    _onContact() {
        if (this.props.onContactBtn){
            this.props.onContactBtn()
        }
    }

    render() {
        return (
            <div style={styles.container}>
                <div style={styles.btnVerticalSpace}/>
                <div style={styles.btnVerticalSpace}/>
                <div style={styles.btnVerticalSpace}/>
                <UnderlineButton
                    buttonTitle={"WORK"}
                    fontSize={'16px'}
                    underlineColor={Color_Theme_Green}
                    onClick={this._onWork.bind(this)}
                    navigateTo={'/work'}
                />
                <div style={styles.btnVerticalSpace}/>
                <UnderlineButton
                    buttonTitle={"ABOUT"}
                    fontSize={'16px'}
                    underlineColor={Color_Theme_Red}
                    onClick={this._onAbout.bind(this)}
                    navigateTo={'/about'}
                />
                <div style={styles.btnVerticalSpace}/>
                <UnderlineButton
                    buttonTitle={"BLOG"}
                    fontSize={'16px'}
                    underlineColor={Color_Theme_Blue}
                    onClick={this._onBlog.bind(this)}
                    navigateTo={'/blog'}
                />
                <div style={styles.btnVerticalSpace}/>
                <UnderlineButton
                    buttonTitle={"CONTACT"}
                    fontSize={'16px'}
                    onClick={this._onContact.bind(this)}
                    navigateTo={'/contact'}
                />
            </div>
        )
    }
}