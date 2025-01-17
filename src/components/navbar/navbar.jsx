import { Avatar, Dropdown, Navbar } from "flowbite-react";
import Locale from "../common/locale";
import { NavLink } from "react-router";


export default function NavbarUI() {

	return (
		<>
			<div className="sticky top-0 z-40 bg-slate-50/60 backdrop-blur-2xl transition-colors duration-500">
				<div className="md:container md:mx-auto md:grid md:grid-cols-3 md:gap-4 border-general">
					<div className="col-start-3">
						<Navbar fluid rounded className="bg-purple items-left p-4 text-black md:text-white">
							<Navbar.Toggle />

							<Navbar.Collapse className="">
								<NavLink
									to="/"
									className="text-base text-center bg-white p-2 md:p-0 md:bg-transparent md:text-left"
								>
									🏠 <Locale label="home" />
								</NavLink>

								<NavLink
									to="/about"
									className="text-base text-center bg-white p-2 md:p-0 md:bg-transparent md:text-left"
								>
									<Locale label={"about"} />
								</NavLink>


								<Dropdown
									arrowIcon={true}
									inline
									label={<Locale label={"blog"} />}
									className="nav-dropdown text-center"
								>
									<span className="block text-sm navbar-header">
										Programming language
									</span>
										<NavLink
											to="/article-summary/php"
											className="text-black bg-customGray flex justify-center py-1 border-b-1"
										>
												<Locale label={'navbar_php'}/>
										</NavLink>

										<NavLink
											to="/article-summary/php"
											className="text-black bg-customGray flex justify-center py-1 border-b-1"
										>
											<Locale label={'navbar_js'}/>
										</NavLink>

										<NavLink
											to="/article-summary/php"
											className="text-black bg-customGray flex justify-center py-1"
										>
											<Locale label={'navbar_oop'}/>
										</NavLink>

									<span className="block text-sm navbar-header">
										Software engineering
									</span>
										<NavLink
												to="/article-summary/php"
												className="text-black bg-customGray flex justify-center py-1 border-b-1"
										>
											<Locale label={'navbar_design_pattern'}/>
										</NavLink>


								</Dropdown>
							</Navbar.Collapse>
						</Navbar>
					</div>
				</div>
			</div>

		</>
	);
}
