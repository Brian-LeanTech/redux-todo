import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './redux/reducers'
import App from './components/App'

// import fetchMock from './api'

// const api = new fetchMock()
// api.saveMock({
//     rute: 'otra ruta',
//     res: 'otra res',
//     title: 'otro title'
// })

let store = createStore(
    todoApp,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
