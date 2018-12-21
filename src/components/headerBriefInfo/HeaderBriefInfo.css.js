import {
    Color_Disable
} from './../../config/Configuration'

export default {
    container: {
        height: '150px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start'
    },
    lineContainer: {//动画入场之前的布局
        marginTop: '60px',
        opacity: 0
    },
    textContainer: {//动画入场之前的布局
        marginTop: '60px',
        opacity: 0
    },
    text: {
        color: Color_Disable,
        fontWeight: '100',
        fontSize: '12px',
    }
}