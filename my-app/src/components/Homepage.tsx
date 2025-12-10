import NutritionSection from "./NutritionSection";
import FoodSection from "./FoodSection";
import illustration from "../assets/Rectangle 15.png";
import ImproveSection from "./ImproveSection";
import DigestiveSection from "./DigestiveSection";

const Homepage = () => {
	const nutritionKeyPoints = [
		{
			percentage: "97%",
			description:
				"Dogs choose our dog food over leading brands because of its real functional ingredients and delicious flavor.",
		},
		{
			percentage: "84%",
			description:
				"Our dog food provides superior nutrition and a patented probiotic for optimal nutrient absorption.",
		},
		{
			percentage: "92%",
			description:
				"Our dog food's high protein and fat digestibility contribute to ideal stool quality.",
		},
	];

	return (
		<>
			<FoodSection />
			<NutritionSection
				illustration={illustration}
				keyPoints={nutritionKeyPoints}
			/>
			<ImproveSection />
			<DigestiveSection />
		</>
	);
};

export default Homepage;
