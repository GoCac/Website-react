import React, {Component} from 'react';
import styles from './BlogItem.css';
import TitleItem from './../base/TitleItem'
import { Color_Theme_Blue } from './../../../../config/Configuration'

export default class BlogItem extends Component {
    render() {
        return (
            <TitleItem title='BLOG' color={Color_Theme_Blue}/>
        )
    }
}