import { IPost } from '../../../types'

export const initialPosts: IPost[] = [
	{
		author: {
			_id: 'wegfwe',
			avatar:
				'https://sasquatchchronicles.com/wp-content/uploads/2019/08/national-geographic.png',
			name: 'National Geographic',
		},
		content: 'Серебряная осень в Сибири. Снимал Евгений Иванов.',
		createdAt: '15 минут назад',
		images: [
			'https://i.natgeofe.com/n/092d7b43-e790-4ba1-9055-a317ae3baefa/18635.jpg?w=636&h=477',
			'https://i.natgeofe.com/n/78f154a9-4c13-47e4-b7c7-8c116334fbeb/33990.jpg?w=636&h=477',
			'https://wallpapershome.ru/images/pages/ico_h/144.jpg',
			'https://images.unsplash.com/photo-1617672564424-d1a4147943c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80',
			'https://wallpapercave.com/wp/VePT8No.jpg',
		],
	},
]
