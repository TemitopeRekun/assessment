import image from "../assets/Rectangle 7.png";

const DigestiveSection = () => {
	return (
		<section className="sectionWrapper flex flex-col-reverse md:flex-row gap-8 justify-between items-center">
			<div className="flex-1 w-full max-w-sm md:max-w-md">
				<h1 className="text-2xl md:text-[30px] text-[#161723] mb-4 leading-tight">
					Prebiotics nourish the beneficial gut bacteria, supporting
					digestive health
				</h1>
				<p className="text-justify">
					Our dog food formula contains carefully selected prebiotics that
					work in harmony with the gut microbiota, providing the necessary
					nutrients for the growth and maintenance of beneficial bacteria,
					ultimately supporting digestive health.
				</p>
			</div>
			<div className="flex-1 w-full max-w-md">
				<img
					src={image}
					className="w-full h-auto object-cover rounded-lg"
					alt="Digestive health"
				/>
			</div>
		</section>
	);
};

export default DigestiveSection;
