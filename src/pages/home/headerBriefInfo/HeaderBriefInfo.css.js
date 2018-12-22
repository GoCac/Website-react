import {
    Color_Disable
} from './../../../config/Configuration'

export default {
    container: {
        height: '150px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start'
    },
    
    line_animation_start: {
        opacity: 0, 
        marginTop: "60px"
    },

    line_animation_end: {
        opacity: 1,
        marginTop: "0px"
    },
    
    textContainer: {//动画入场之前的布局
        marginTop: '60px',
        opacity: 0
    },
    text: {
        color: Color_Disable,
        fontWeight: '100',
        fontSize: '13px',
    }
}