export default {
    container_pc: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        height: '100vw'
    },
    container_ph: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        height: '120vh',
    },
    line_animation_start: {
        opacity: 0, 
        marginTop: "60px"
    },

    line_animation_end: {
        opacity: 1,
        marginTop: "0px"
    },
    
    text_animation_start: {//动画入场之前的布局
        marginTop: '60px',
        opacity: 0
    },

    text_animation_end: {//动画入场之后的布局
        marginTop: '20px',
        opacity: 1
    },

    text: {
        fontWeight: 'Blod',
        fontSize: '50px'
    },

    bgContainer_pc: {
        position: 'relative',
        top: '-30%',
        left: '-10%'
    },
    bgContainer_ph: {
        position: 'relative',
        top: '-30%',
        left: '-40%'
    },

    backgroudTextContainer_pc: {
        opacity: 0,//初始动画
        textOverflow: 'clip',
        overflow: 'hidden',
        width: '100vw',
        height: '100vw'
    },
    backgroudTextContainer_ph: {
        opacity: 0,//初始动画
        textOverflow: 'clip',
        overflow: 'hidden',
        width: '100vw',
        height: '120vh'
    },

    backgroudText_pc: {
        fontWeight: 'Blod',
        fontSize: '100vw'
    },

    backgroudText_ph: {
        fontWeight: 'Blod',
        fontSize: '120vh'
    }
}