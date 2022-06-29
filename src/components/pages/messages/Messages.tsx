import React, { FC, MouseEvent, useEffect, useState } from 'react'
import { IMessage } from '../../../types'
import { useAuth } from '../../providers/useAuth'
import { onSnapshot, collection, addDoc } from 'firebase/firestore'
import {
	Alert,
	Divider,
	Fab,
	Grid,
	TextField,
	List,
	ListItem,
	ListItemText,
	Avatar,
} from '@mui/material'
import { Send as SendIcon } from '@mui/icons-material'
import Card from '../../ui/Card'

const Messages: FC = () => {
	const { user, db } = useAuth()

	const [error, setError] = useState('')
	const [message, setMessage] = useState('')
	const [messages, setMessages] = useState<IMessage[]>([])

	useEffect(() => {
		const unsub = onSnapshot(collection(db, 'messages'), doc => {
			const array: IMessage[] = []
			doc.forEach((d: any) => {
				array.push(d.data())
			})
			setMessages(array)
		})

		return () => {
			unsub()
		}
	}, [])

	const addMessageHandler = async (e: MouseEvent<HTMLButtonElement>) => {
		try {
			await addDoc(collection(db, 'messages'), {
				user,
				message,
			})
		} catch (e: any) {
			setError(e)
		}
		setMessage('')
	}

	return (
		<>
			{error && (
				<Alert severity='error' style={{ marginBottom: 20 }}>
					{error}
				</Alert>
			)}
			<Card>
				<List style={{ height: '65vh', overflowY: 'auto' }}>
					{messages.map((msg, idx) => (
						<ListItem key={idx}>
							<Grid
								container
								sx={msg.user._id === user?._id ? { textAlign: 'right' } : {}}
							>
								<Grid
									display='flex'
									justifyContent={
										msg.user._id === user?._id ? 'flex-end' : 'flex-start'
									}
									item
									xs={12}
								>
									<Avatar src={msg.user.avatar} />
								</Grid>
								<Grid item xs={12}>
									<ListItemText
										style={
											msg.user._id === user?._id ? { color: '#1976d2' } : {}
										}
										primary={msg.message}
									/>
								</Grid>
								<Grid item xs={12}>
									<ListItemText secondary={msg.user.name} />
								</Grid>
							</Grid>
						</ListItem>
					))}
				</List>
				<Divider />
				<Grid container style={{ padding: '20px' }}>
					<Grid item xs={11}>
						<TextField
							id='outlined-basic-email'
							label='Type Something'
							fullWidth
							onChange={e => setMessage(e.target.value)}
							value={message}
						/>
					</Grid>
					<Grid item xs={1} alignItems='right'>
						<Fab color='primary' onClick={addMessageHandler}>
							<SendIcon />
						</Fab>
					</Grid>
				</Grid>
			</Card>
		</>
	)
}

export default Messages
