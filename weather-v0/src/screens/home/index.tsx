import { View, Text, ImageBackground } from "react-native";

import { styles } from "./styles";
import Card from "./Card";

export default function Home() {

    const srcImageBackground = { uri: 'https://i.pinimg.com/originals/c5/76/e7/c576e746ac29d0e64711d37a81befc72.jpg' };

    return (
        <View style={styles.containerMain}>
            <View style={styles.containerInformacoesPrincipais}>
                <ImageBackground source={srcImageBackground} resizeMode="cover" style={styles.backgroundImage}>
                    <View style={styles.parteDeCima}>
                        <View style={styles.agrupamentoTexto}>
                            <Text style={styles.textoDiaMes}>
                                13 Agosto, {""}
                            </Text>
                            <Text style={styles.textoDiaSemana}>
                                Domingo
                            </Text>
                        </View>
                    </View>
                    <View style={styles.parteDoMeio}>
                        <Text style={styles.textoTemperatura}>
                            29ºC
                        </Text>
                    </View>
                    <View style={styles.parteDeBaixo}>

                    </View>
                </ImageBackground>
            </View>
            <View style={styles.containerInformacoesClima}>
                <Card name="cardInformacoes" />
                <Card name="cardInformacoes" />
                <Card name="cardInformacoes" />
            </View>
            <View style={styles.containerDiasSemana}>
                <Card name="cardSemana" />
                <Card name="cardSemana" />
                <Card name="cardSemana" />
                <Card name="cardSemana" />
                <Card name="cardSemana" />

            </View>
        </View>
    );
}