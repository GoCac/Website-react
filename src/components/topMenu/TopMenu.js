import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styles from './TopMenu.css';
import {VelocityComponent} from 'velocity-react'
import UnderlineButton from './../common/underlineButton/UnderlineButton';
import MenuButton, {ButtonState} from './menuButton/MenuButton';
import MenuDrawer from './menuDrawer/MenuDrawer';
import {
    Color_Theme_Red,
    Color_Theme_Green,
    Color_Theme_Blue
} from './../../config/Configuration';

export default class TopMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            screenWidth: 560,
            showDrawer: false
        };
    }

    componentDidMount() {
        this._updateWindowDimensions();
        window.addEventListener('resize', this._updateWindowDimensions.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this._updateWindowDimensions);
    }

    _updateWindowDimensions() {
        this.setState({screenWidth: window.innerWidth});
    }

    _onMenuButtonOpen() {
        this.setState({
            showDrawer: true
        })
    }

    _onMenuButtonClose() {
        this.setState({
            showDrawer: false
        })
    }

    _onWork() {
        this._onMenuButtonClose()
    }

    _onAbout() {
        this._onMenuButtonClose()
    }

    _onBlog() {
        this._onMenuButtonClose()
    }

    _onContact() {
        this._onMenuButtonClose()
    }

    render() {
        let drawerAnimation;
        if (this.state.showDrawer) {
            drawerAnimation = {
                duration: 500,
                animation: {
                    marginTop: ['0px', [250, 0]],// 随便调的数值 参照 http://www.mrfront.com/docs/velocity.js/option.html#J_Easing
                    opacity: 1
                },
                easing: 'ease-out'
            }
        } else {
            drawerAnimation = {
                duration: 200,
                animation: {
                    marginTop: '-448px',
                    opacity: 0
                },
                easing: 'linear'
            }
        }

        return (
            <div style={styles.container}>
                {
                    this.state.screenWidth < 560 ? (
                        <VelocityComponent {...drawerAnimation}>
                            <MenuDrawer
                                onWorkBtn={this._onWork.bind(this)}
                                onAboutBtn={this._onAbout.bind(this)}
                                onBlogBtn={this._onBlog.bind(this)}
                                onContactBtn={this._onContact.bind(this)}
                            />
                        </VelocityComponent>) : null
                }
                <div style={styles.horizontalContainer}>

                    <Link to="/">
                        <VelocityComponent
                            runOnMount
                            delay={2200}
                            duration={700}
                            easing={'ease-in-out'}
                            animation={{opacity: 1}}
                        >
                                <img
                                    src={require('./../../assets/top_menu_icon.png')}
                                    alt={''}
                                    style={styles.image}
                                />
                        </VelocityComponent>
                    </Link>
                    {
                        this.state.screenWidth >= 560 ? (
                            <VelocityComponent
                                runOnMount
                                duration={1000}
                                easing={'ease-in-out'}
                                animation={{opacity: 1}}
                            >
                                <div style={styles.btnContainer}>
                                    <UnderlineButton
                                        buttonTitle={"WORK"}
                                        underlineColor={Color_Theme_Green}
                                        onClick={this._onWork.bind(this)}
                                        navigateTo={'/work'}
                                    />
                                    <div style={styles.btnHorizontalSpace}/>
                                    <UnderlineButton
                                        buttonTitle={"ABOUT"}
                                        underlineColor={Color_Theme_Red}
                                        onClick={this._onAbout.bind(this)}
                                        navigateTo={'/about'}
                                    />
                                    <div style={styles.btnHorizontalSpace}/>
                                    <UnderlineButton
                                        buttonTitle={"BLOG"}
                                        underlineColor={Color_Theme_Blue}
                                        onClick={this._onBlog.bind(this)}
                                        navigateTo={'/blog'}
                                    />
                                    <div style={styles.btnHorizontalSpace}/>
                                    <UnderlineButton
                                        buttonTitle={"CONTACT"}
                                        onClick={this._onContact.bind(this)}
                                        navigateTo={'/contact'}
                                    />
                                </div>
                            </VelocityComponent>) : (
                            <VelocityComponent
                                runOnMount
                                duration={1000}
                                easing={'ease-in-out'}
                                animation={{opacity: 1}}
                            >
                                <div style={{zIndex: '2', opacity: 0}}>
                                    <MenuButton
                                        buttonState={this.state.showDrawer ? ButtonState.SELECTED : ButtonState.NORMAL}
                                        onOpen={this._onMenuButtonOpen.bind(this)}
                                        onClose={this._onMenuButtonClose.bind(this)}
                                    />
                                </div>
                            </VelocityComponent>)
                    }
                </div>
            </div>
        )
    }
}