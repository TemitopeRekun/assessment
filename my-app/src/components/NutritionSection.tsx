type KeyPointProps = {
	percentage: string;
	description: string;
	isLast?: boolean;
};

type NutritionSectionProps = {
	illustration: string;
	keyPoints: Omit<KeyPointProps, "isLast">[];
};

function KeyPoint({
	percentage,
	description,
	isLast,
}: Readonly<KeyPointProps>) {
	return (
		<div
			className={`flex justify-center items-center gap-5 ${
				!isLast ? "pb-2 border-b border-gray-200" : ""
			}`}>
			<div>
				<p className="text-[23px] font-bold text-[#EE6F4B]">{percentage}</p>
			</div>
			<p className="text-[12px] text-[#424153] leading-relaxed">
				{description}
			</p>
		</div>
	);
}

export default function NutritionSection({
	illustration,
	keyPoints,
}: Readonly<NutritionSectionProps>) {
	return (
		<section className="sectionWrapper">
			<div className="flex flex-col-reverse lg:flex-row items-center gap-30">
				<div className="flex-1 max-w-sm md:max-w-xl">
					<h1 className="text-[30px] text-[#161723] mb-4">
						Nutrition is the foundation for longer, healthier lives in
						dogs.
					</h1>
					<p className="text-[12px] leading-relaxed mb-10 text-justify max-w-prose">
						Invest in your dog's future with our scientifically formulated
						superfood-powered supplements. Give them the nutrition they
						deserve and watch them thrive with vitality, energy, and the
						joy of a longer, healthier life.
					</p>
					<h4 className="text-[13px] text-[#161723] font-semibold mb-3">
						Key Points:
					</h4>

					<div className="mb-8 space-y-2">
						{keyPoints.map((point, index) => (
							<KeyPoint
								key={index}
								percentage={point.percentage}
								description={point.description}
								isLast={index === keyPoints.length - 1}
							/>
						))}
					</div>

					<button className="bg-[#EE6F4B] text-white text-[12px] w-full py-2 px-6 rounded-lg hover:bg-opacity-90 transition">
						Give your furry friend the gift of wholesome nutrition
					</button>
				</div>

				<div className="flex-1 flex justify-center max-w-[300px]">
					<img
						src={illustration}
						alt="Nutrition illustration"
						className="w-[430px] max-w-md object-contain"
					/>
				</div>
			</div>
		</section>
	);
}
