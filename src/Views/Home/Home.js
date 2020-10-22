import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, SafeAreaView, ScrollView, Dimensions } from 'react-native';

// Components
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";

// UI
import CardBorderLeft from "../../UI/CardBorderLeft";

export default class Home extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <SafeAreaView style={ styles.container }>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <CardBorderLeft
                        title='Carreras realizadas'
                        description='10'
                        icon='car-sport-sharp'
                        borderColor='#2A80DB'
                    />
                    <CardBorderLeft
                        title='Distancia recorrida'
                        description='7 Km.'
                        icon='ios-map'
                        borderColor='#69CB39'
                    />
                    <CardBorderLeft
                        title='Monto acumulado'
                        description='340 Bs.'
                        icon='ios-cash-outline'
                        borderColor='#E44F42'
                    />
                    <LineChart
                        data={{
                            labels: ["Lun", "Mar", "Mie", "Jue", "Vie", "Sáb", "Dom"],
                            datasets: [
                                {
                                data: [
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100
                                ]
                                }
                            ]
                        }}
                        width={Dimensions.get("window").width-20} // from react-native
                        height={180}
                        yAxisLabel="Bs."
                        // yAxisSuffix="k"
                        yAxisInterval={1} // optional, defaults to 1
                        chartConfig={{
                            backgroundColor: "#EAEAEA",
                            backgroundGradientFrom: "#156095",
                            backgroundGradientTo: "#3E97D5",
                            decimalPlaces: 1, // optional, defaults to 2dp
                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            labelColor: (opacity = 0.5) => `rgba(255, 255, 255, ${opacity})`,
                            style: {
                                borderRadius: 10
                            },
                            propsForDots: {
                                r: "6",
                                strokeWidth: "2",
                                stroke: "#2A65A9"
                            }
                        }}
                        bezier
                        style={{
                            marginVertical: 8,
                            borderRadius: 10
                        }}
                    />
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // flexDirection: 'row',
        // justifyContent: 'center',
        // alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 10
    }
});