import {makeStyles } from '@material-ui/core/styles'

export default makeStyles(() => ({
    root: {
        maxwidth: '100%'
    },
    media: {
        height : 0,
        paddingTop : '65%',
    },
    cardActions: {
        display : 'flex',
        justifyContent: 'flex-end',
    },
    cardContent: {
        display : 'flex',
        justifyContent: 'space-between',
    },
    buttons: {
        display: 'flex',
        alignItems: 'center',
      }

}));