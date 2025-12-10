type FeatureItemProps = {
  icon: string;
  title: string;
  description: string;
};

export function FeatureItem({ icon, title, description }: Readonly<FeatureItemProps>) {
  return (
		<div className="flex items-start gap-4">
			<img src={icon} alt="" className="w-12 h-12" />

			<div>
				<h3 className=" text-[#161723] text-[15px] font-semibold tracking-tight text-lg">
					{title}
				</h3>

				<p className="text-[12px] leading-snug mt-1">
					{description}
				</p>
			</div>
		</div>
  );
}
export default FeatureItem;