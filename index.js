import React from 'react'
import BrowserHistory from 'react-router/lib/BrowserHistory'
import HashHistory from 'react-router/lib/HashHistory'
import Root from './Root'

const history = process.env.NODE_ENV === 'production' ? new HashHistory() : new BrowserHistory()

React.render(<Root history={history} />, document.getElementById('root'))
