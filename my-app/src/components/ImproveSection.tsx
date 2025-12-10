import image from "../assets/Rectangle 8.png";

const ImproveSection = () => {
	return (
		<section className="sectionWrapper flex flex-col md:flex-row gap-13 justify-between items-center">
			<div className="max-w-md">
				<img src={image} className="w-[590px]" alt="" />
			</div>
			<div className="max-w-[360px]">
				<h1 className="text-[30px] text-[#161723] mb-2">
					Improve overall gastrointestinal health for better nutrient
					absorption
				</h1>
				<p className="text-justify mb-6">
					Through rigorous scientific studies and consultations with
					veterinarians, we have created a breakthrough formula exclusively
					tailored to combat the health challenges prevalent in dogs. A
					staggering 91% of our customers have reported significant
					improvements in their dogs' health after incorporating our
					product into their diet.
				</p>
			</div>
		</section>
	);
};

export default ImproveSection;
