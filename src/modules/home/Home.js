import React, { Component } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Button } from 'react-native-elements'
import { Actions } from 'react-native-router-flux'
import TrickButton from './TrickButton'

export default class Home extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header} >
          <Text style={styles.headerTitle}>SlackLine</Text>
          <Text style={styles.headerSubtitle}>Trick List</Text>
        </View>
        <View style={styles.content} >
          <TrickButton level='ALL' />
          <TrickButton level='BEGINNER' />
          <TrickButton level='INTERMEDIATE' />
          <TrickButton level='ADVANCED' />
          <TrickButton level='EXPERT' />
        </View>
        <View style={styles.footer} >
          <Text>Developed by Leandro Anjos</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 3, 
    flexDirection: 'column', 
    alignItems: 'stretch',
    justifyContent: 'center'
  },
  header: {
    flex: 4, 
    flexDirection: 'column', 
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red'
  },
  headerTitle: {
    fontSize: 32
  },
  headerSubtitle: {
    fontSize: 28
  },
  content: {
    padding: 20,
    flex: 7, 
    flexDirection: 'column', 
    alignItems: 'stretch',
    justifyContent: 'space-between'
  },
  footer: {
    flex: 2, 
    flexDirection: 'row', 
    alignItems: 'flex-end',
    justifyContent: 'center'
  }
})