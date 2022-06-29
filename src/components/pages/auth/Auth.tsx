import { Alert, Button, ButtonGroup, Grid, TextField } from '@mui/material'
import React, { FC, SyntheticEvent, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { IUserData } from './types'
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	updateProfile,
} from 'firebase/auth'
import { useAuth } from '../../providers/useAuth'

const Auth: FC = () => {
	const { ga, user } = useAuth()

	const [isRegForm, setIsRegForm] = useState(false)
	const [userData, setUserData] = useState<IUserData>({
		email: '',
		password: '',
		name: '',
	} as IUserData)

	const [error, setError] = useState('')

	const handleLogin = async (e: SyntheticEvent<HTMLFormElement>) => {
		e.preventDefault()

		if (isRegForm) {
			try {
				const res = await createUserWithEmailAndPassword(
					ga,
					userData.email,
					userData.password
				)

				await updateProfile(res.user, {
					displayName: userData.name,
				})
			} catch (error: any) {
				error.message && setError(error.message)
			}
		} else {
			try {
				await signInWithEmailAndPassword(ga, userData.email, userData.password)
			} catch (error: any) {
				error.message && setError(error.message)
			}
		}

		setUserData({
			email: '',
			password: '',
			name: '',
		})
	}

	const history = useHistory()

	useEffect(() => {
		if (user) history.push('/')
		// eslint-disable-next-line
	}, [user])

	return (
		<>
			{error && (
				<Alert severity='error' style={{ marginBottom: 20 }}>
					{error}
				</Alert>
			)}
			<Grid display='flex' justifyContent='center' alignItems='center'>
				<form onSubmit={handleLogin}>
					<TextField
						label='Name'
						variant='outlined'
						value={userData.name}
						onChange={e => setUserData({ ...userData, name: e.target.value })}
						sx={{ display: 'block', marginBottom: 3 }}
					/>

					<TextField
						type='email'
						label='Email'
						variant='outlined'
						value={userData.email}
						onChange={e => setUserData({ ...userData, email: e.target.value })}
						sx={{ display: 'block', marginBottom: 3 }}
						required
					/>
					<TextField
						type='password'
						label='Password'
						variant='outlined'
						value={userData.password}
						onChange={e =>
							setUserData({ ...userData, password: e.target.value })
						}
						sx={{ display: 'block', marginBottom: 3 }}
						required
					/>
					<ButtonGroup variant='outlined'>
						<Button type='submit' onClick={() => setIsRegForm(false)}>
							Auth
						</Button>
						<Button type='submit' onClick={() => setIsRegForm(true)}>
							Register
						</Button>
					</ButtonGroup>
				</form>
			</Grid>
		</>
	)
}

export default Auth
