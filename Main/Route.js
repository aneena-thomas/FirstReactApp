import React from 'react';
import{
  StackNavigator
} from 'react-navigation';
import Login from './Login.js'
import Home from './Home.js'

const Route = StackNavigator({
  Login:{screen:Login},
  Home:{screen:Home},
})


export default Route
