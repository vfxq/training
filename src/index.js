import React from 'react'
import ReactDOM from 'react-dom'
import Root from './components/Root.js'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<Root />, document.getElementById('root'))
registerServiceWorker()
