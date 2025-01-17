import Locale from "../../common/locale";
import contribution from "../../../assets/images/contribution.png";
import mockwaveLogo from "../../../assets/images/mockwave.svg";

export default function Contribution() {
    return (
		<div className="z-40 bg-white md:mt-8 backdrop-blur-2xl transition-colors duration-500 pt-4 p-8 md:p-0">
			<div className="md:container md:mx-auto">
				<div className="text-center font-bold text-xl px-4 text-purple">
					<div className="flex justify-center">
						<img
							src={contribution}
							className="h-44"
							alt="Hasan ali haolader contribution"
						/>
					</div>
					<Locale label={"my_contribution"} />
				</div>

				<div className="md:grid md:grid-cols-3 md:gap-24 md:mt-5">
					<div className="p-8 md:p-14 bg1 border-1 rounded-lg ease-in duration-200  md:hover:cursor-pointer md:hover:-translate-y-1 md:hover:scale-110">
						<div className="flex justify-center">
							<img
								src={mockwaveLogo}
								className="mr-3 w-45 h-20"
								alt="MockWave by hasan ali haolader"
							/>
						</div>
						<div className="text-left">
							<div className="font-bold text-lg mt-8">
								<Locale label={'mockwave_heading'}/>
							</div>
							<div className="mt-4 line-clamp-5 md:line-clamp-none">
								<Locale label={'mockwave_details'}/>
							</div>
							<div className="text-center">
								<a href="https://mockwave.io">
									<button className="mt-4 p-2 border-1 text-black rounded-full hover:bg-purple hover:text-white">
										<Locale label={'visit'}/>
									</button>
								</a>
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>
	);
}
