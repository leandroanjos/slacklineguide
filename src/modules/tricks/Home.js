import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import TrickList from './TrickList'
import store from './../../data/store'

export default class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      filter: { 
        level: 'All',
        startStep: 'All',
        text: ''
      },
      levels : ['All', 'Beginner', 'Intermediate', 'Advanced', 'Expert'],
    }
  }

  render() {
    return (
      <View style={styles.container} >
        <TrickList tricks={store.tricks} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    flexDirection: 'row', 
    alignItems: 'stretch'
  }
})