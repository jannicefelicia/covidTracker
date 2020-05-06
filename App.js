import React, { Component } from 'react';
//dont forget to add flatlist in react native
import { StyleSheet, Text, View } from 'react-native';
import Local from './components/Local';
import Global from './components/Global';

class App extends Component {
    render() {
    return(
      <View style={styles.container}>
          {/* Main Title */}
          <View style={styles.titleSection, {marginTop: 50}}><Text style={styles.title}>DATA COVID 19 GLOBAL & INDONESIA</Text></View>

          {/* Global Title */}
          <View style={styles.globalSection}>
              <View style={styles.titleSection}><Text style={styles.title}>Global</Text></View>
                  <Global />
          </View>

          {/* Local Title */}
          <View style={styles.localSection}>
            <View style={styles.titleSection}><Text style={styles.title}>Indonesia</Text></View>
              <Local />
          </View>
      </View>
  )
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: 'blanchedalmond'
  },

  title: {
      fontWeight: 'bold',
      fontSize: 19,
      marginBottom: 20,
      fontFamily: 'serif'
  },

  titleSection: {
      alignItems: 'center',
      marginTop: 10
  },
  
  globalSection: {
      flex: 1,
  },

  localSection: {
      flex: 3,
  },
})

export default App;