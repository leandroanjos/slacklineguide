import React from 'react'
import { Router, Stack, Scene, Reducer } from 'react-native-router-flux'
import Home from './modules/home/Home'
import TrickHome from './modules/tricks/Home'
import TrickViewer from './modules/tricks/TrickViewer'

const reducerCreate = params => {
  const defaultReducer = Reducer(params)
  return (state, action) => {
      console.log("ACTION:", action)
      return defaultReducer(state, action)
  }
}

export default Routers = () => (
  <Router createReducer={reducerCreate} sceneStyle={{ backgroundColor: '#fff' }} >
    <Stack key="root">
      <Scene key="home" component={Home} hideNavBar={true} />
      <Scene key="trickList" component={TrickHome} title="Trickline List"/>    
      <Scene key="trickViewer" component={TrickViewer} title="Trick Details"/>      
    </Stack>
  </Router>
)
