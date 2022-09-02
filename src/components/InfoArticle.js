const InfoArticle = ({ title, content }) => {
	return (
		<article>
			<h2 className="text-lg font-bold text-slate-600 pb-2 border-b">
				{title}
			</h2>
			<ul className="flex flex-col gap-1 mt-2">
				{content.map((item, index) => (
					<li
						key={index}
						className={`flex items-center justify-between text-slate-400 text-sm font-semibold`}
					>
						{item}
					</li>
				))}
			</ul>
		</article>
	);
};

export default InfoArticle;
