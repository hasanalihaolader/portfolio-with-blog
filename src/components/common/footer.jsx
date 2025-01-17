import { Link } from "react-router";
import facebookLogo from "../../assets/images/facebook.svg";
import githubLogo from "../../assets/images/github.svg";
import mediumLogo from "../../assets/images/medium.svg";
import Locale from "./locale";

export default function footer() {
    return (
		<div className="z-40 bg-customPink mt-12 custom-garadient backdrop-blur-2xl transition-colors duration-500">
			<div className="md:container md:mx-auto p-10 md:p-0">
				<div className="md:grid md:grid-cols-2 md:pt-10 text-white">
					<div>
						<Link to="/contact">
							<Locale label={"footer_contact"} />
						</Link>
						<br></br>
						<a href="https://github.com/hasanalihaolader/portfolio-with-blog">
							<Locale label={"footer_download_template"} />{" "}
						</a>
					</div>


					<div className="md:text-right">
						<div className="pt-10 md:pt-0">
							<Locale label={"footer_follow"} />
						</div>
						<a href="https://web.facebook.com/hasanul.islam.718">
							<button className="">
								<img className="h-12" src={facebookLogo} />
							</button>
						</a>
						<a href="https://github.com/hasanalihaolader">
							<button>
								<img className="h-12" src={githubLogo} />
							</button>
						</a>
						<a href="https://hasanalihaolader.medium.com/">
							<button>
								<img className="h-12" src={mediumLogo} />
							</button>
						</a>

					</div>
				</div>
				<div className="text-white md:py-12">
					<div className="text-left">
						<Locale label={"footer_copyright"} />
					</div>
				</div>
			</div>
		</div>
	);
}
