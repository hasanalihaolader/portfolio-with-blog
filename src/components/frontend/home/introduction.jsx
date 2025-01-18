import logo from "../../../assets/images/logo.png";
import experience from "../../../assets/images/experience.png";
import Locale from "../../common/locale";
import Skills from "../../common/skills";

export default function Introduction() {
	return (
		<div className="z-40 bg-slate-50/60 backdrop-blur-2xl transition-colors duration-500 bg-custom-gradient">
			<div className="p-8 md:p-0 md:container md:mx-auto md:grid md:grid-cols-3 md:gap-8 md:border-general">
				<div className="relative col-span-1 flex justify-center items-center">
					<img
						src={experience}
						alt="Experience Background"
						className="absolute  animate-spin-slow logo w-10/12 md:w-12/12"
					/>
					<img
						src={logo}
						alt="Logo"
						className="z-10 relative logo "
					/>
				</div>

				<div className="col-span-2 z-20 relative">
					<div className="">
						<div className="text-lg">
							<span>
								<Locale label={"intro_greeting"} />{" "}
								<span className="text-purple text-3xl">
									<Locale label={"intro_name"} />{" "}
								</span>
							</span>

							<br />
							<br />
							<div className="">
								<Locale label={"intro"} />{" "}
							</div>

							<Skills />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
