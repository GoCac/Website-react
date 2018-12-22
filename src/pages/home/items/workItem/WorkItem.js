import React, {Component} from 'react';
import styles from './WorkItem.css';
import TitleItem from './../base/TitleItem'
import { Color_Theme_Green } from './../../../../config/Configuration'

export default class WorkItem extends Component {
    render() {
        return (
            <TitleItem title='WORK' color={Color_Theme_Green}/>
        )
    }
}