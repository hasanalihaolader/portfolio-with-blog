import React, { useState, useEffect } from "react";

import profile from "../assets/images/profile.png";
import aws from "../assets/images/certification/aws.png";
import zendPhp from "../assets/images/certification/zendPhp.png";
import bsLogo from "../assets/images/workExperience/bsLogo.png";
import doctimeLogo from "../assets/images/workExperience/doctime.png";
import tmssIctLogo from "../assets/images/workExperience/tmss_ict.png";
import techbeeoLogo from "../assets/images/workExperience/techbeeo.png";
import Locale from "../components/common/locale";
import Skills from "../components/common/skills";

export default function About() {

	return (
		<div>
			 <title>About | Hasan Ali Haolader</title>
			<div className="z-40 bg-slate-50/60 backdrop-blur-2xl transition-colors duration-500 bg-custom-gradient">
				<div className="md:container md:mx-auto md:grid md:grid-cols-1 md:gap-4 border-general">
					<div className="md:grid md:grid-cols-12 mt-10 md:mt-0">

						<div className="md:col-span-2 flex justify-center md:justify-start">
							<img
								className="h-32 w-32 rounded-full md:h-56 md:w-52 md:rounded-lg shadow-purple-300 shadow-lg"
								src={profile}
								alt="Hasan ali haolader"
							/>
						</div>

						<div className="p-8 md:p-none md:col-span-10">
							<Skills />

							<div>
								<div className="text-base text-green font-bold mt-8">
									<Locale label={"about_open_source_contribution"} /> {" "}
								</div>
								<div>
									<ul>
										<li>
											<a href="https://github.com/proengsoft/laravel-jsvalidation">
												proengsoft/laravel-jsvalidation
											</a>
										</li>
										<li>
											<a href="https://erpnext.com/">
												ErpNext
											</a>
										</li>
									</ul>
								</div>
							</div>

							<div>
								<div className="text-base text-customPink font-bold mt-8">
									<Locale label={"about_certification"} /> {" "}
								</div>
								<div className="flex">
									<a href="https://www.credly.com/badges/41369e56-6956-436f-b50d-289d3d24f0ab/linked_in_profile">
										<img
											className="h-32 p-4 shadow-lg"
											src={aws}
											alt="hasan ali haolader aws certification"
											srcset=""
										/>
									</a>
									<img
										className="h-32 ml-8 p-4 shadow-lg"
										src={zendPhp}
										alt="hasan ali haolader zend certification"
										srcset=""
									/>
								</div>
							</div>

							<div>
								<div className="text-base text-customPink font-bold mt-8">
									<Locale label={"about_work_experience"} /> {" "}
								</div>
							</div>

							<div className="">
								<div className="relative">
									<div className="absolute left-3.5 top-6 bottom-6 w-px bg-gray-300"></div>
									<div className="space-y-8">
										<div
											key="1"
											className="flex items-start space-x-4 relative "
											style={{
												animationDelay: `${1 * 1.5}s`, // Delay for sequential activation
											}}
										>
											<div className="relative z-10">
												<div className="w-8 h-8 rounded-full flex items-center text-gray-500 justify-center border-2 bg-white glowing-border">
													💼
												</div>
											</div>

											<div className="flex-grow">
												<h3 className="text-gray-800 font-semibold pt-4">
													<img
														className="h-16"
														src={bsLogo}
														alt="Brain station logo - hasan ali haolader"
														srcset=""
													/>
												</h3>
												<p className="text-sm text-gray-500">
													Senior software engineer -
													2.7 years
												</p>
												<p className="text-sm text-gray-500">
													Stack: PHP, Laravel, MySQL,
													Redis, Docker, Rabbit MQ,
													ELK 2022-Present Vue js,
													tailwind, Jenkins, Unix
												</p>
												<div>
													<p className="text-sm font-bold">
														Project: Grameenphone
														Digital Recharge
													</p>
													<div className="text-sm pl-8">
														<ul className="list-disc">
															<li>
																Implemented
																recommendation
																feature, solved
																performance
																challenge,
																Refactoring &
																introduced
																existing
																codebase
															</li>
															<li>
																Project manager
																discussions with
																Grameenphone
																choices and
																designed &
																developed API
																with
																Grameenphone API
																Gateway team,
																MYGP team,
																operations team,
																DBA team.
															</li>
															<li>
																User experience
																, Identify &
																Prioritize
																performance leak
																codebase.
															</li>
															<li>
																Built
																grameenphone
																digital recharge
																system replace
																old on which is
																2x time faster
																old one,
																refactoring
																complex campaign
																logic its
																improved
																performance 1.2s
																to 300 ms
															</li>
														</ul>
													</div>
												</div>
											</div>
										</div>

										<div
											key="1"
											className={`flex items-start space-x-4 relative`}
											style={{
												animation: `glowing 1.5s ease-in-out ${
													1 * 1.5
												}s forwards`, // Sequential delay for glowing effect
											}}
										>
											<div className="relative z-10">
												<div className="w-8 h-8 rounded-full flex items-center text-gray-500 justify-center border-2 bg-white">
													3
												</div>
											</div>

											<div className="flex-grow">
												<h3 className="text-gray-800 font-semibold pt-4">
													<img
														className="h-10"
														src={doctimeLogo}
														alt="Doctime logo - hasan ali haolader"
														srcset=""
													/>
												</h3>
												<p className="text-sm text-gray-500">
													Lead engineer - 1 years
												</p>
												<p className="text-sm text-gray-500">
													Stack: PHP, Laravel, MySQL,
													Redis, AWS( EC2, RDS, Cloud
													watch, ELK, Nginx) 2021-2022
													Lumen, Github actions,
													webpack, unix
												</p>
												<div>
													<p className="text-sm font-bold">
														Project: Online Medical
														Service Provider
													</p>
													<div className="text-sm pl-8">
														<ul className="list-disc">
															<li>
																Execution to
																implement
																recommendation
																feature, solved
																performance
																challenge,
																solved deadlock
																situation,
																optimize DB
																structure
															</li>
															<li>
																Business analyst
																discusses
																Doctime choices
																and distributed
																Tasks in
																developer and
																guides them to
																implement
																doctime choices
															</li>
															<li>
																Prioritize and
																identify culprit
																code for
																deadlock
																situation,
																Performance
																optimize for
																database
																operation, user
																experience with
																IOS and android
																development
																team.
															</li>
															<li>
																Introduce agile
																practices,
																application
																should convert
																single page
																application for
																better user
																experience
															</li>
															<li>
																Optimize video
																call performance
																it should be
																clear and
																transparent
																audio
																transmission in
																3g mobile data
																service
															</li>
															<li>
																Implemented
																agile as regular
																habit practice,
																Solved DB leak
																query, Solved
																leak of db
																architecture.
															</li>
															<li>
																Identify and
																solved culprit
																code for
																deadlock
																situation ,
																Build single
																page application
																using vue js
															</li>
														</ul>
													</div>
												</div>
											</div>
										</div>

										<div
											key="2"
											className={`flex items-start space-x-4 relative`}
											style={{
												animation: `glowing 1.5s ease-in-out ${
													1 * 1.5
												}s forwards`, // Sequential delay for glowing effect
											}}
										>
											<div className="relative z-10">
												<div className="w-8 h-8 rounded-full flex items-center text-gray-500 justify-center border-2 bg-white">
													2
												</div>
											</div>

											<div className="flex-grow">
												<h3 className="text-gray-800 font-semibold pt-4">
													<img
														className="h-10"
														src={tmssIctLogo}
														alt="TMSS ICT LTD logo - hasan ali haolader"
														srcset=""
													/>
												</h3>
												<p className="text-sm text-gray-500">
													Asst.software engineer To Lead engineer - 5 years
												</p>
												<p className="text-sm text-gray-500">
													Stack: PHP, Laravel, C, MySQL, Redis, vue js, Docker, Linode, Digital ocean, unix
												</p>
												<div>
													<p className="text-sm font-bold">
														Project: Mikrof ( Microfinance application )
													</p>
													<div className="text-sm pl-8">
														<ul className="list-disc">
															<li>
															Implement Microfinance application for Bangladesh 3rd largest NGO TMSS which is serving minimum 4
TPS for 900 branch offices, 225 area office, 56 zone office, 8 operations office, 1 head of
account and HR in microfinance applicatio
															</li>
															<li>
															Business analyst discussions with TMSS choices and developed Microfinance part there have several modul
															( Loan, savings, member, Employees.. ), developed 106 reports for reporting with much complex logic.
															</li>
															<li>
															Built PHP extension using c for loan schedule logic thereby eliminating scalability and performance issue,
Build Docker, CI/CD github action thereby automating our development process, Implemented MIS feature
using PHP, Laravel
															</li>
														</ul>
													</div>
												</div>
											</div>
										</div>

										<div
											key="1"
											className={`flex items-start space-x-4 relative`}
											style={{
												animation: `glowing 1.5s ease-in-out ${
													1 * 1.5
												}s forwards`, // Sequential delay for glowing effect
											}}
										>
											<div className="relative z-10">
												<div className="w-8 h-8 rounded-full flex items-center text-gray-500 justify-center border-2 bg-white">
													1
												</div>
											</div>

											<div className="flex-grow">
												<h3 className="text-gray-800 font-semibold pt-4">
													<img
														className="h-16 w-28 rounded-lg shadow-lg"
														src={techbeeoLogo}
														alt="Techbeeo logo - hasan ali haolader"
														srcset=""
													/>
												</h3>
												<p className="text-sm text-gray-500">
													Asst. programmer - 1 years
												</p>
												<p className="text-sm text-gray-500">
													Stack: Python, Javascript, Jquery, Erpnext, Unix
												</p>
												<div>
													<p className="text-sm font-bold">
														Project: ERPNEXT
													</p>
													<div className="text-sm pl-8">
														<ul className="list-disc">
															<li>
															Customized & Implement Open source ERP which is called ERPNEXT
															</li>
															<li>
															Discussions about Techbeeo client choices and design & developed Techbeeo client choice
															</li>
															<li>
															Build HR & asset management module & implement this module 2 Techebeeo client, configure web serv
															configuration for run erpnext applicatin
															</li>

														</ul>
													</div>
												</div>
											</div>
										</div>

									</div>
								</div>
							</div>

						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
