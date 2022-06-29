import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './components/routes/Routes'
import './index.css'

import * as firebase from 'firebase/app'
import { AuthProvider } from './components/providers/AuthProvider'

firebase.initializeApp({
	apiKey: '',
	authDomain: '',
	projectId: '',
	storageBucket: '',
	messagingSenderId: '',
	appId: '',
})

ReactDOM.render(
	<React.StrictMode>
		<AuthProvider>
			<Routes />
		</AuthProvider>
	</React.StrictMode>,
	document.getElementById('root')
)
