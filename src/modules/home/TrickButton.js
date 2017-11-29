import React, { Component } from 'react'
import { Button } from 'react-native-elements'
import { Actions } from 'react-native-router-flux'

export default class TrickButton extends Component {
  constructor(props){
    super(props)
  }

  render() {

    const { level } = this.props

    let attrib = { title: 'ALL', iconName: 'trophy', color: '#006400' }

    switch (level) {
      case 'BEGINNER':
        attrib = { title: 'Beginner', iconName: 'trophy', color: '#cd853f' }
      break;
      case 'INTERMEDIATE':
        attrib = { title: 'Intermediate', iconName: 'trophy', color: '#808080' }
      break;
      case 'ADVANCED':
        attrib = { title: 'Advanced', iconName: 'trophy', color: '#ffd700' }
      break;
      case 'EXPERT':
        attrib = { title: 'Expert', iconName: 'diamond', color: '#ff0000' }
      break;
    }
    
    const buttonIcon = {
      name: attrib.iconName, 
      type: 'font-awesome'
    }
    
    const buttonStyle = {
      backgroundColor: attrib.color,
      borderRadius: 0 
    }

    const textStyle = {
      textAlign: 'center'
    }

    return (
      <Button
        raised title={attrib.title} icon={buttonIcon} 
        buttonStyle={buttonStyle} textStyle={textStyle}
        onPress={() => { Actions.trickList({ filter: level, color: attrib.color }) }}
      />
    )
  }
}
