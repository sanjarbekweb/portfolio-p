// components
import ProjectCard from './ProjectCard'

const works = [
	{
		imgSrc: '/images/project-1.jpg',
		title: 'Text-to-img-platform',
		tags: ['AI', 'Development'],
		projectLink: 'https://github.com/sanjarbekweb/text-to-img-platform',
	},
	{
		imgSrc: '/images/project-2.jpg',
		title: 'Real time chat app',
		tags: ['API', 'Socket','Backend'],
		projectLink: 'https://github.com/sanjarbekweb/real-time-chat-app',
	},
	{
		imgSrc: '/images/project-3.jpg',
		title: 'Weather App',
		tags: ['Development', 'API'],
		projectLink: 'https://github.com/sanjarbekweb/weather-app',
	},
	{
		imgSrc: '/images/project-4.jpg',
		title: 'Dictionary App',
		tags: ['Api','Development'],
		projectLink: 'https://github.com/sanjarbekweb/dictionary-app',
	},
	{
		imgSrc: '/images/project-5.jpg',
		title: 'Quiz App',
		tags: ['Fullstack','Development'],
		projectLink: 'https://github.com/sanjarbekweb/quiz-app-full',
	},
	{
		imgSrc: '/images/project-6.jpg',
		title: 'Authorization App',
		tags: ['Fullstack', 'Development'],
		projectLink: 'https://github.com/sanjarbekweb/auth-fullstack',
	},
		{
		imgSrc: '/images/project-6.jpg',
		title: 'Zentry',
		tags: ['Frontend', 'GSAP'],
		projectLink: 'https://zentry-clone-lilac.vercel.app/',
	}
]

const Work = () => {
	return (
		<section id='work' className="section">
			<div className="container">
				<h2 className="headline-2 mb-8 reveal-up">
					My portfolio highlights
				</h2>

				<div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
					{works.map(({imgSrc, title, tags, projectLink}, key) => (
						<ProjectCard 
							key={key}
							imgSrc={imgSrc}
							title={title}
							tags={tags}
							projectLink={projectLink}
							classes='reveal-up'
						/>
					))}
				</div>
			</div>
		</section>
	)
}

export default Work
