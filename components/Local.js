import React from 'react';
import {View, Text, FlatList, Image, StyleSheet} from 'react-native';

class List extends React.Component {
    constructor() {
        super();
        this.state = {
            victims: [],
            refreshing: false
        }
    }

    renderItem = ({item}) => (
    <View style={{height: 75, flexDirection: 'row', justifyContent: 'space-evenly'}}>
    <View style={[styles.box, {backgroundColor: 'burlywood', width: 220}]}>
        {/* Province */}
        <Text style={styles.text, {fontWeight: 'bold'}}>{item.provinsi}</Text>
    </View>
    <View style={[styles.box, {backgroundColor: 'lemonchiffon'}]}>
        {/* Infected */}
        <Text style={styles.text}>{item.kasusPosi}</Text>
    </View>
    <View style={[styles.box, {backgroundColor: 'lightcoral'}]}>
        {/* Recovered */}
        <Text style={styles.text}>{item.kasusSemb}</Text>
    </View>
    <View style={[styles.box, {backgroundColor: 'indianred'}]}>
        {/* Deaths */}
        <Text style={styles.text}>{item.kasusMeni}</Text>
    </View>
    
</View>

    )

    onRefresh = () => {
        this.getDataApi();
    }

    componentDidMount = () => {
        this.getDataApi();
    }

    getDataApi = async () => {
        const response = await fetch('https://indonesia-covid-19.mathdro.id/api/provinsi');
        const json = await response.json();
        this.setState({victims: json.data, refreshing: false})
    }

    render() {
        return(
            <View>
                <FlatList
                    data = {this.state.victims}
                    keyExtractor = {item => item.fid.toString()}
                    data = {this.state.victims}
                    renderItem = {this.renderItem} 
                    refreshing = {this.state.refreshing}
                    onRefresh={this.onRefresh}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    box: {
        height: 50,
        width: 60,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },

    text: {
        fontSize: 12,
    },
})


export default List;