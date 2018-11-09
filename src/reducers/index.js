import { combineReducers } from 'redux'
import rooms from './rooms'
import city from './city'
import messageId from './messageId'
import requests from './requests'

export default combineReducers({
  rooms,
  city,
  messageId,
  requests
})
