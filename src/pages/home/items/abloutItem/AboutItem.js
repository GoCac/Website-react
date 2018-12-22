import React, {Component} from 'react';
import styles from './AboutItem.css';
import TitleItem from './../base/TitleItem'
import { Color_Theme_Red } from './../../../../config/Configuration'

export default class AboutItem extends Component {
    render() {
        return (
            <TitleItem title='ABOUT' color={Color_Theme_Red}/>
        )
    }
}