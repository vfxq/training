import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import AdminPage from './routes/Admin'


class App extends Component {
    render() {

        return (
            <div>
                <h2>Hello world</h2>
                <Route path='/admin' component={AdminPage} />
            </div>
        )
    }
}

export default App