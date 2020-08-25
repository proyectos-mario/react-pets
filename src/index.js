import React from 'react'
import ReactDOM from 'react-dom'

import { createStore } from 'redux'
import reducer from './reducers/reducers'
import App from './App'
import { Provider } from 'react-redux'

const formatIni={
}


const store=createStore(reducer,formatIni);


ReactDOM.render( <Provider store={store}>
    <App />
</Provider>,document.getElementById('app'));