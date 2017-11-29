import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

const icons = {
  LEVEL_BEGINNER: 
    <Icon.Button name="trophy" backgroundColor="#FFF" color="#cd853f">Beginner</Icon.Button>,
  LEVEL_INTERMEDIATE:
    <Icon.Button name="trophy" backgroundColor="#FFF" color="#808080">Intermediate</Icon.Button>,
  LEVEL_ADVANCED:
    <Icon.Button name="trophy" backgroundColor="#FFF" color="#ffd700">Advanced</Icon.Button>,
  LEVEL_EXPERT:
    <Icon.Button name="diamond" backgroundColor="#FFF" color="#ff0000">Expert</Icon.Button>
}

export default icons