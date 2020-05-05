import React, { Component } from 'react';
//dont forget to add flatlist in react native
import { StyleSheet, Text, View } from 'react-native';
import List from './components/List';
import Global from './components/Global';

class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //       refreshing: false
  //   }
  // }

  // refresh = async () => {
  //   this.setState({refreshing: false})
  //   }

  render() {
    return(
      <View style={styles.container}>
          {/* Main Title */}
          <View style={styles.titleSection}><Text style={styles.mainTitle}>DATA COVID 19 GLOBAL & INDONESIA</Text></View>

          {/* Global Title */}
          <View style={styles.globalSection}>
              <View style={styles.titleSection}><Text style={styles.subTitle}>GLOBAL</Text></View>
                  <Global />
          </View>

          {/* Local Title */}
          <View style={styles.localSection}>
            <View style={styles.titleSection}><Text style={styles.subTitle}>INDONESIA</Text></View>
              <List />
          </View>

          {/* Refresh */}
          {/* <FlatList
          refreshing = {this.state.refreshing}
          onRefresh={this.onRefresh}
          showsVerticalScrollIndicator={false}
        /> */}
      </View>
  )
  }
}

const styles = StyleSheet.create({
  container: {
      marginTop: 50,
      flex: 1,
  },

  globalBox: {
      height: 100,
      width: 100,
      backgroundColor: 'indianred',
      alignItems: 'center',
  },

  localBox: {
      height: 50,
      width: 100,
      backgroundColor: 'white',
  },

  mainTitle: {
      fontWeight: 'bold',
      fontSize: 21,
      marginBottom: 20,
  },

  subTitle: {
      marginTop: 10,
      fontWeight: 'bold',
      fontSize: 21,
      marginBottom: 20,
  },

  titleSection: {
      alignItems: 'center'
  },
  
  globalSection: {
      flex: 1,
      backgroundColor: 'lemonchiffon',
  },

  localSection: {
      flex: 3,
      backgroundColor: 'indianred',
  },
})

export default App;