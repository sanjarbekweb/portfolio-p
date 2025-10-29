// components
import SkillCard from './SkillCard'

const skillItem = [
	{
		imgSrc: '/images/next.jpg',
		label: 'Next',
		desc: 'Framework',
	},
	{
		imgSrc: '/images/css3.svg',
		label: 'CSS',
		desc: 'User Interface',
	},
	{
		imgSrc: '/images/javascript.svg',
		label: 'JavaScript',
		desc: 'Interaction',
	},
	{
		imgSrc: '/images/nodejs.svg',
		label: 'NodeJS',
		desc: 'Web Server',
	},
	{
		imgSrc: '/images/expressjs.svg',
		label: 'ExpressJS',
		desc: 'Node Framework',
	},
	{
		imgSrc: '/images/mongodb.svg',
		label: 'MongoDB',
		desc: 'Database',
	},
	{
		imgSrc: '/images/postgresql.png',
		label: 'PostgreSQL',
		desc: 'Database',
	},
	{
		imgSrc: '/images/react.svg',
		label: 'React',
		desc: 'Library',
	},
	{
		imgSrc: '/images/vitejs.svg',
		label: 'Vite',
		desc: 'Tool',
	},
	{
		imgSrc: '/images/tailwindcss.svg',
		label: 'TailwindCSS',
		desc: 'User Interface',
	},
	{
		imgSrc: '/images/bootstrap.png',
		label: 'Bootstrap',
		desc: 'User Interface',
	},
]

const Skill = () => {
	return (
		<section className='section'>
			<div className='container'>
				<div className="w-full">
					<h2 className='headline-2 reveal-up'>Essential Tools I use</h2>

					<p className='text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up'>
						Discover the powerful tools and technologies I use to create
						exceptional, high-performing websites & applications.
					</p>
				</div>


				<div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]" data-aos="fade-up">
					{
						skillItem.map(({ imgSrc, label, desc }, key) => (
							<SkillCard
								key={key}
								imgSrc={imgSrc}
								label={label}
								desc={desc}
								classes='reveal-up'
							/>
						))
					}
				</div>
			</div>
		</section>
	)
}

export default Skill
