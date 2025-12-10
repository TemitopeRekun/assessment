import FeatureItem from "./FeatureItem";
import food1 from "../assets/food 1.jpg";
import food2 from "../assets/pet-bowl 1.png";
import food3 from "../assets/pet-food 1.png";
import food4 from "../assets/Frame 1171276495.png";
import food5 from "../assets/vet 1.png";
import paypal from "../assets/image 25.png";
import visa from "../assets/image 26.png";
import master from "../assets/image 27.png";
import apple from "../assets/image 28.png";
import google from "../assets/image 29.jpg";
import shield from "../assets/shield.svg";



const FoodSection = () => {

    const logos = [paypal, visa, master, apple, google];

	return (
		<section className="sectionWrapper flex flex-col items-center">
			<h1 className="text-[30px] md:text-4xl font-semibold tracking-tight text-center mb-16">
				What makes us different <br /> makes them stronger
			</h1>

			<div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
				<div className="space-y-8">
					<FeatureItem
						icon={food1}
						title="Real Food"
						description="Wholesome recipes for dogs with real meat and veggies."
					/>
					<FeatureItem
						icon={food2}
						title="Premium Ingredients"
						description="Elevating pet care with unmatched safety and quality."
					/>
				</div>

				<div className="flex justify-center">
					<img
						src={food4}
						alt="Product showcase"
						className="w-72 h-auto object-contain"
					/>
				</div>

				<div className="space-y-8">
					<FeatureItem
						icon={food3}
						title="Made Fresh"
						description="We prioritize maintaining the integrity of whole foods and nutrition."
					/>
					<FeatureItem
						icon={food5}
						title="Vet Developed"
						description="We raise the bar for dog nutrition, surpassing industry expectations."
					/>
				</div>
			</div>
			<div className="flex justify-center">
				<div className="bg-[#EE6F4B] rounded-lg w-sm md:w-lg mt-15 py-3 px-6 md:px-8 text-center">
					<h3 className="text-white font-semibold text-[14px] tracking-tight">
						Get your dog's healthy meal today!
					</h3>
				</div>
			</div>
			<div className="w-lg flex flex-col lg:flex-row items-center px-2 justify-between gap-3 mt-8">
				<div className="flex items-center gap-1">
					<img src={shield} alt="Shield icon" className="w-5 h-5" />
					<span className=" text-[13px] text-[#424153] tracking-tight">
						30-day money back guarantee
					</span>
				</div>

				<div className="flex flex-wrap justify-center lg:justify-end items-center gap-2">
					{logos.map((logo, index) => (
						<img
							key={index}
							src={logo}
							alt={`Partner logo ${index + 1}`}
							className="h-7 object-contain"
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default FoodSection;
