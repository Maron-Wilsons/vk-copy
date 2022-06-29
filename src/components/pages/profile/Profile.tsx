import { Avatar } from '@mui/material'
import React, { FC } from 'react'
import { useAuth } from '../../providers/useAuth'
import Card from '../../ui/Card'

const Profile: FC = () => {
	const { user } = useAuth()

	return (
		<Card>
			<Avatar src={user?.avatar}></Avatar>
			<h1>{user?.name}</h1>
		</Card>
	)
}

export default Profile
