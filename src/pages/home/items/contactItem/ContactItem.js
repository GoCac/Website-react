import React, {Component} from 'react';
import styles from './ContactItem.css';
import TitleItem from './../base/TitleItem'
import { Color_Theme_Black } from './../../../../config/Configuration'

export default class ContactItem extends Component {
    render() {
        return (
            <TitleItem title='CONTACT' color={Color_Theme_Black}/>
        )
    }
}