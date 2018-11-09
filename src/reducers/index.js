import { combineReducers } from 'redux'
import rooms from './rooms'
import city from './city'
import message from './message'
import requests from './requests'

export default combineReducers({
  rooms,
  city,
  message,
  requests
})
