import React, { Component } from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import icons from '../../utils/icons'

export default class LevelIcon extends Component {
  constructor(props){
    super(props)
  }

  renderIcon = (level) => {
    return icons['LEVEL_' + level.toUpperCase()]
  }

  render() {
    const { level, renderIcon } = this.props

    return (
      <View>
        {
          this.renderIcon(level)
        }
      </View>
    )
  }
}
