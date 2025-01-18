import Locale from "./locale";

export default function Skills() {
	return (
		<div>


			<div>
				<div className="">
					<div className="flex inline-block">
						<span>
							<div className="text-purple mt-4 font-bold">
								<Locale label={"intro_label_of_skills"} />{" "}
							</div>
							<div className="text-sm">
								<table>
									<tbody>
										<tr className="border-b md:border-none">
											<td className="w-40 font-bold">
												Language
											</td>
											<td className="p-2 md:p-0">:</td>
											<td className="pb-2 md:pb-0">PHP Node JS</td>
										</tr>

										<tr className="border-b md:border-none">
											<td className="w-40 font-bold">
												Frameworks
											</td>
											<td className="p-2 md:p-0">:</td>
											<td className="pb-2 md:pb-0">Laravel, Lumen, slim, express</td>
										</tr>

										<tr className="border-b md:border-none">
											<td className="w-40 font-bold">
												Databases & Storage
											</td>
											<td className="p-2 md:p-0">:</td>
											<td className="pb-2 md:pb-0">MySQL, Redis</td>
										</tr>

										<tr className="border-b md:border-none">
											<td className="w-40 font-bold">
												Version Control
											</td>
											<td className="p-2 md:p-0">:</td>
											<td className="pb-2 md:pb-0">
												Git with Smart Git Flow; used with
												Bitbucket, GitHub, Gitlab
											</td>
										</tr>

										<tr className="border-b md:border-none">
											<td className="w-40 font-bold">
												Frontend Development
											</td>
											<td className="p-2 md:p-0">:</td>
											<td className="pb-2 md:pb-0">
												HTML, CSS, Bootstrap, Javascript,
												Jquery, Tailwind, Vue.js
											</td>
										</tr>

										<tr className="border-b md:border-none">
											<td className="w-40 font-bold">
												CI/CD
											</td>
											<td className="p-2 md:p-0">:</td>
											<td className="pb-2 md:pb-0">Jenkins, GitHub Actions</td>
										</tr>

										<tr className="border-b md:border-none">
											<td className="w-40 font-bold">
												Others
											</td>
											<td className="p-2 md:p-0">:</td>
											<td className="pb-2 md:pb-0">
												Docker, Webpack, Yarn, OAuth, JWT,
												RabbitMQ
											</td>
										</tr>

										<tr className="border-b md:border-none">
											<td className="w-40 font-bold">
												Code Testing Tools
											</td>
											<td className="p-2 md:p-0">:</td>
											<td className="pb-2 md:pb-0">PHPUnit</td>
										</tr>

										<tr className="border-b md:border-none">
											<td className="w-40 font-bold">CLI</td>
											<td className="p-2 md:p-0">:</td>
											<td className="pb-2 md:pb-0">
												Fluent in Unix Terminal (bash, zsh)
											</td>
										</tr>

										<tr className="border-b md:border-none">
											<td className="w-40 font-bold">
												Cloud Technologies
											</td>
											<td className="p-2 md:p-0">:</td>
											<td className="pb-2 md:pb-0">
												Amazon AWS, Digital Ocean, Linode
											</td>
										</tr>

										<tr className="border-b md:border-none">
											<td className="w-40 font-bold">
												SCRUM/Agile
											</td>
											<td className="p-2 md:p-0">:</td>
											<td className="pb-2 md:pb-0">
												practicing SCRUM methodology at work
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}
