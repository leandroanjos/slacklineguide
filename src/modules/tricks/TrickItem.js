import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native'
import { Actions } from 'react-native-router-flux'
import LevelIcon from './LevelIcon'

const handlePress = (item) => {
  Actions.trickViewer({ trickItem: item })
}

export default renderTrickItem = ({item}) => (
  <TouchableHighlight onPress={() => handlePress(item)}>
    <View key={`Item_${item.name}`} style={styles.container}>    
      <View key={`Name_${item.name}`} style={styles.nameContainer}>
        <Text style={styles.titleText}>
            {item.name}
        </Text>
      </View>        
      <View key={`Score_${item.name}`} style={styles.scoreContainer}>
        <Text style={styles.scoreText}>
          {item.score}
        </Text>
      </View>
    </View>
  </TouchableHighlight>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginVertical: 2,
    marginHorizontal: 20
  },
  nameContainer: {
    flex: 4, 
    flexDirection: 'row', 
    justifyContent: 'flex-start',
    alignItems: 'stretch'
  },
  scoreContainer: {
    flex: 1,
    flexDirection: 'row', 
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleText: {
    padding: 10,
    fontSize: 18,
    color: '#ff0000'
  },
  scoreText: {
    flex:1, 
    flexDirection: 'row', 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee8aa',
    marginHorizontal: 5,
    padding: 5,
    color: '#ff4500',
    textAlign: 'center'
  }
})
