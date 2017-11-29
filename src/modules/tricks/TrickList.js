import React, { Component } from 'react'
import { StyleSheet, FlatList, View, Text } from 'react-native'
import { Actions } from 'react-native-router-flux'
import LevelIcon from './LevelIcon'
import renderTrickItem from './TrickItem'

export default class TrickList extends Component {
  constructor(props){
    super(props)
  }

  render() {
    const { tricks } = this.props
    const { index, routes } = Actions.state

    let filter = 'ALL'
    let filteredData = tricks
    let color = 'red'
    if (routes[index].params && routes[index].params.filter) {
      filter = routes[index].params.filter.toUpperCase()
      color = routes[index].params.color
      if (filter !== 'ALL') {
        filteredData = filteredData.filter((item)=> {
          return item.level.toUpperCase() === filter
        })
      }
    }

    return (
      <View style={styles.container}>
        <View style={{backgroundColor: color }}>
          <Text style={styles.filterText}>{filter}</Text>
        </View>
        <View style={{backgroundColor: color}}>
          <FlatList
            data={filteredData}
            renderItem={renderTrickItem}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginVertical: 10,
    marginHorizontal: 20
  },
  filterText: {
    fontSize: 22,
    margin: 10
  }
})
