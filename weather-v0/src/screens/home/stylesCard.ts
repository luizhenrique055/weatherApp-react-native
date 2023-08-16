import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    card: {
        flex: 1,
        width: '100%',
        height: '100%',
        borderRadius: 20,
        marginStart: 2,
        marginEnd: 5,

        justifyContent: 'center',
    },

    conteudoInformativo: {
        flex: 1,
        height: '50%',
        fontWeight: '50%',
        alignSelf: 'flex-start',
        justifyContent: 'center',
        marginLeft: 15,
    },

    conteudoSemana: {
        flex: 1,
        justifyContent: 'center',
        marginLeft: '10%',
    },

    textoDoConteudoSemana: {
        alignSelf: 'center',
        margin: 0.2,
        color: '#fff',
    },

    textoDoConteudoInformativo: {
        alignSelf: 'flex-start',
        margin: 0.2,
        color: '#fff',
    },
})