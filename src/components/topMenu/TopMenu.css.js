export default {
    container: {
        width: '100%',
        maxWidth: '1200px',
        minWidth: '300px',
        backgroundColor: 'transparent',

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    horizontalContainer: {
        zIndex: '2',
        width: '100%',
        backgroundColor: 'transparent',

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    image: {
        height: '80px',
        opacity: 0 //入场动画前透明
    },
    btnContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        opacity: 0 //入场动画前透明
    },
    btnHorizontalSpace: {
        width: "30px"
    }
};