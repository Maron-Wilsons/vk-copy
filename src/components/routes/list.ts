import Auth from '../pages/auth/Auth'
import Friends from '../pages/friends/Friends'
import Home from '../pages/home/Home'
import Conversation from '../pages/messages/Conversation'
import Messages from '../pages/messages/Messages'
import Profile from '../pages/profile/Profile'

export const routes = [
	{
		path: '/',
		exact: true,
		component: Home,
		auth: true,
	},
	{
		path: '/profile',
		exact: false,
		component: Profile,
		auth: true,
	},
	{
		path: '/messages',
		exact: true,
		component: Messages,
		auth: true,
	},
	{
		path: '/message/:id',
		exact: false,
		component: Conversation,
		auth: true,
	},
	{
		path: '/fiends/:id',
		exact: false,
		component: Friends,
		auth: true,
	},
	{
		path: '/auth',
		exact: true,
		component: Auth,
		auth: false,
	},
]
