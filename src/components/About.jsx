const aboutItems = [
	{
		label: 'Project done',
		number: 10
	},
	{
		label: 'Years of experience',
		number: 1
	}
];

const About = () => {
	return (
		<section
			id='about'
			className='section'
		>
			<div className="container">
				<div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
					<p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
						Welcome! I’m Sanjarbek, a passionate full-stack developer who brings ideas to life from concept to code. I specialize in building fast, secure, and scalable web applications that look stunning on the surface and perform flawlessly under the hood.
						<br />
						With a blend of creativity, technical depth, and problem-solving discipline, I craft digital experiences that don’t just work — they feel right.
					</p>
					<div className="flex flex-wrap items-center gap-4 md:gap-7 ">
						{
							aboutItems.map(({ label, number }, key) => (
								<div key={key} >
									<div className='flex items-center md:mb-2'>
										<span className="text-2xl font-semibold md:text-4xl ">{number}</span>
										<span className="text-sky-400 font-semibold md:text-3xl">+</span>
									</div>
									<p className="text-sm text-zinc-400">{label}</p>
								</div>
							))
						}

						<img
							src="/images/iconMeDark.png"
							alt="logo"
							width={30}
							height={30}
							className='ml-auto md:w-[40px] md:h-[40px] rounded-lg'
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default About
