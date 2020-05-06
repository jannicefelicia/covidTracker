import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';

class Global extends Component {
    constructor(){
        super();
        this.state = {
            infected: '',
            recovered: '',
            deaths: '',
        }

    }

    componentDidMount = () => {
        this.getDataApi();
    }
        
    getDataApi = async () => {
        const response = await fetch('https://covid19.mathdro.id/api');
        const json = await response.json();
        this.setState({infected: json.confirmed.value, recovered: json.recovered.value, deaths: json.deaths.value})
    }

    render(){
        return(
            <View style={{height: 75, flexDirection: 'row', justifyContent: 'space-evenly'}}>
                <View style={[styles.box, {backgroundColor: 'lemonchiffon'}]}>
                    <Text style={styles.text, {fontWeight: 'bold'}}>Infected</Text>
                    <Text style={styles.text}>{this.state.infected}</Text>
                </View>
                <View style={[styles.box, {backgroundColor: 'lightcoral'}]}>
                    <Text style={styles.text, {fontWeight: 'bold'}}>Recovered</Text>
                    <Text style={styles.text}>{this.state.recovered}</Text>
                </View>
                <View style={[styles.box, {backgroundColor: 'indianred'}]}>
                    <Text style={styles.text, {fontWeight: 'bold'}}>Deaths</Text>
                    <Text style={styles.text}>{this.state.deaths}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    box: {
        height: 100,
        width: 120,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 16,
        
    }
})

export default Global;