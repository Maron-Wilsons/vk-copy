import {
	Card,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from '@mui/material'
import React from 'react'
import { menu } from './dataMenu'
import { useHistory } from 'react-router-dom'

const Menu = () => {
	const history = useHistory()

	return (
		<Card
			variant='outlined'
			sx={{
				padding: 2,
				backgroundColor: '#F1F7FA',
				border: 'none',
				borderRadius: 3,
				marginTop: 5,
				marginBottom: 10,
			}}
		>
			<List>
				{menu.map(item => (
					<ListItem key={item.link} disablePadding>
						<ListItemButton onClick={() => history.push(item.link)}>
							<ListItemIcon
								sx={{
									minWidth: 36,
								}}
							>
								<item.icon />
							</ListItemIcon>
							<ListItemText primary={item.title} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Card>
	)
}

export default Menu
