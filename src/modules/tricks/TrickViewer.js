import React, { Component } from 'react'
import { StyleSheet, View, Text, ScrollView } from 'react-native'
import { Actions } from 'react-native-router-flux'
import LevelIcon from './LevelIcon'
import renderTrickItem from './TrickItem'

export default class TrickViewer extends Component {
  constructor(props){
    super(props)
  }

  render() {
    const { index, routes } = Actions.state

    let item = {
      level: "Beginner", 
      name: "Ascension 180", 
      score: 0.0,
			steps: ["CH","180","BT"]
    }

    if (routes[index].params && routes[index].params.trickItem) {
      item = routes[index].params.trickItem
    }

    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.titleText}>
              {item.name}
          </Text>
        </View>        
        <View style={styles.subtitle}>
          <View style={styles.level}>
            <LevelIcon level={item.level} />          
          </View>
          <View key={`Score_${item.name}`} style={styles.score}>
            <Text style={styles.scoreText}>
              {item.score}
            </Text>
          </View>
        </View>
        <View style={styles.stepGroup}>
          <View style={styles.stepGroupTitle}>
            <Text style={{fontSize: 18, color: '#999'}}>Steps:</Text>
          </View>
          <View style={styles.stepGroupItems}>
            <ScrollView>
              {
                item.steps.map((step) => (
                  <Text style={styles.stepText} key={`Step_${item.name}_${step}`}>
                    {step}
                  </Text>
                ))
              }
            </ScrollView>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginBottom: 10
  },
  title: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#669933'
  },
  subtitle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#006400'
  },
  stepGroup: {
    flex: 4, 
    flexDirection: 'row', 
    justifyContent: 'center',
    alignItems: 'stretch',
    margin: 20
  },
  stepGroupTitle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    margin: 10
  },
  stepGroupItems: {
    flex: 4, 
    flexDirection: 'row',
    alignItems: 'center'
  },
  level: {
    flex: 1,
    flexDirection: 'row', 
    justifyContent: 'center',
    alignItems: 'center'
  },
  score: {
    flex: 1,
    flexDirection: 'row', 
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleText: {
    padding: 10,
    fontSize: 28,
    color: '#FFF'
  },
  scoreText: {
    backgroundColor: '#eee8aa',
    width: 80,
    padding: 5,
    color: '#ff4500',
    fontSize: 20,
    textAlign: 'center'
  },
  stepText: {
    backgroundColor: '#008080',
    padding: 10,
    marginBottom: 5,
    fontSize: 18,
    color: '#fff',
    textAlign: 'center'
  }
})