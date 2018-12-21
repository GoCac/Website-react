export default {
    container: {
        zIndex: '1',
        position: 'absolute',

        opacity: '0', //初始状态透明，否则会有个闪现的 bug

        width: '100%',
        height: '380px',
        backgroundColor: "white",
        boxShadow: `0px 3px 3px #AAAAAA33`,

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnVerticalSpace: {
        height: "20px"
    }
}