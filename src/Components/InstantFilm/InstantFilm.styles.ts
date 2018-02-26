import { StyleSheet } from 'aphrodite';
import * as degreeFabric from '../../images/45-degree-fabric-light.png';

export const styles = StyleSheet.create({
    frame: {
        maxWidth: '320px',
        width: '320px',
        backgroundImage: `url(${degreeFabric})`,
        backgroundColor: 'black',
        display: 'flex',
        flexDirection: 'column',
    },
    image: {
        margin: '7px',
        backgroundColor: 'black',
    },
    textFrame: {
        background: 'white',
        justifySelf: 'flex-end',
        color: 'black',
    }
})