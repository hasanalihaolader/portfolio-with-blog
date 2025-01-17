import { Link } from "react-router";
import Locale from "../components/common/locale";

export default function ArticleSummary() {
	return (
		<div>
			<title>PHP | Hasan Ali Haolader</title>
			<div className="z-40 bg-custom-gradient">
				<div className="container mx-auto grid grid-cols-1 gap-4 border-general">
					<div className="">
						<div class="absolute right-[28%] top-0 hidden h-[150px] w-[200px] rotate-12 rounded-3xl bg-gradient-to-l from-blue-600 to-sky-400 opacity-20 blur-3xl filter dark:block dark:opacity-30 lg:top-44 lg:-right-20 lg:h-72 lg:w-[350px] xl:h-80 xl:w-[500px]"></div>
						<div class="absolute bottom-44 -left-64 hidden h-[150px] w-[900px] -rotate-45 rounded-3xl bg-gradient-to-r from-violet-600 to-indigo-800 opacity-30 blur-3xl filter dark:block lg:bottom-24 lg:-left-20 lg:h-28 lg:w-[250px] lg:-rotate-12 lg:opacity-20 xl:h-40 xl:w-[400px]"></div>
						<div class="absolute left-[28%] top-28 hidden rotate-12 rounded-3xl bg-sky-800 opacity-90 blur-3xl filter dark:opacity-30 lg:h-32 lg:w-[450px] dark:lg:block xl:h-44 xl:w-[600px]"></div>
						<div class="absolute h-16 w-[280px] md:w-[600px] rotate-[-40deg] rounded-3xl bg-sky-400 opacity-10 blur-2xl filter dark:hidden lg:bottom-24 lg:-left-28 lg:h-12 lg:w-[600px] lg:opacity-30 lg:blur-2xl xl:-left-40 xl:h-4 xl:w-[700px] xl:opacity-100"></div>
						<div class="absolute h-14 w-[280px] md:w-[600px] rotate-[-40deg] rounded-3xl bg-purple-400 opacity-30 blur-2xl filter dark:hidden lg:bottom-20 lg:-left-28 lg:h-10 lg:w-[600px] lg:opacity-20 lg:blur-xl xl:-left-40 xl:h-2 xl:w-[800px] xl:opacity-100"></div>

						<div className="md:grid md:grid-cols-3">

							<div className="bg-white m-4 shadow-lg shadow-green-100 rounded-lg">
                                <div className="p-4 bg-purple text-white rounded-t-lg">
                                    এক নজরে পি এচ পি এর সবগুলো আর্টিকেল
                                </div>

                                <div className="px-8 py-4 text-purple">
                                    <ul className="list-decimal">
                                        <li><Link to="/article/id">ফ্যাক্টরি প্যাটার্ন</Link></li>
                                        <li><a href="#">Pair প্রোগ্রামিংয়ের জন্য AI টুলস : গিটহাব কো পাইলট vs কোডিয়াম</a></li>
                                        <li><a href="#">সফটওয়্যার ডেভেলপারদের জন্য এআই ( AI ) প্রম্পটিং ( prompting )</a></li>
                                    </ul>
                                </div>
                            </div>


							<div className="col-span-2">
								<div className="">

									<a href="https://hasanalihaolader.medium.com/%E0%A6%AB%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%95%E0%A7%8D%E0%A6%9F%E0%A6%B0%E0%A6%BF-%E0%A6%A1%E0%A6%BF%E0%A6%9C%E0%A6%BE%E0%A6%87%E0%A6%A8-%E0%A6%AA%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%9F%E0%A6%BE%E0%A6%B0%E0%A7%8D%E0%A6%A8-822ccfd7db3d">
										<div className="border-2 m-4 border-gray-100 bg-white shadow-gray-200 shadow-lg rounded-md  ease-in duration-200 z-10  hover:cursor-pointer hover:-translate-y-1 hover:scale-105">
											<div className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-3 p-8">
												<div className="md:col-span-2">
													<div className="text-lg font-bold md:py-4 text-left md:min-h-12">
														ফ্যাক্টরি প্যাটার্ন
													</div>
													<div className="md:min-h-28 line-clamp-3">
														ফ্যাক্টরি ডিজাইন প্যাটার্ন
														একটি ফীচার ইমপ্লিমেন্টেশন এর
														জন্য কীভাবে অবজেক্ট তৈরী
														করবেন সে ব্যাপারে বলে থাকে।
														যেখানে কোনো ক্লাস এর সরাসরি
														ইনস্ট্যান্স না তৈরি করে ও
														প্রয়োজনীয় অবজেক্ট তৈরি করা
														যায়। ফ্যাক্টরি প্যাটার্ন
														সাধারণত দুটি ভাগে বিভক্ত:
														এখানে আমরা ফ্যাক্টরি মেথড
														প্যাটার্ন নিয়ে বিস্তারিত
														আলোচনা করবো এবং দেখবো এটি
														আমাদের প্রজেক্টে কিভাবে
														সাহায্য করতে পারে। চলুন আগে
														একটা সমস্যা নিয়ে কথা বলি।
													</div>
												</div>
												<div className="row-start-1">
													<img
														src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*WAjnaOOHsbEKOBtmZJhPIg.gif"
														alt="ফ্যাক্টরি প্যাটার্ন - Hasan Ali Haolader"
													/>
												</div>
											</div>
										</div>
									</a>



									<a href="https://hasanalihaolader.medium.com/%E0%A6%AB%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%95%E0%A7%8D%E0%A6%9F%E0%A6%B0%E0%A6%BF-%E0%A6%A1%E0%A6%BF%E0%A6%9C%E0%A6%BE%E0%A6%87%E0%A6%A8-%E0%A6%AA%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%9F%E0%A6%BE%E0%A6%B0%E0%A7%8D%E0%A6%A8-822ccfd7db3d">
										<div className="border-2 m-4 border-gray-100 bg-white shadow-gray-200 shadow-lg rounded-md  ease-in duration-200 z-10  hover:cursor-pointer hover:-translate-y-1 hover:scale-105">
											<div className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-3 p-8">
												<div className="md:col-span-2">
													<div className="text-lg font-bold md:py-4 text-left md:min-h-12">
														Pair প্রোগ্রামিংয়ের জন্য AI টুলস
														: গিটহাব কো পাইলট vs কোডিয়াম
													</div>
													<div className="md:min-h-28 line-clamp-3">
														Pair প্রোগ্রামিং উইথ AI ব্যাপার
														টা কিছুদিন আগে আমাদের জন্য একটু
														কঠিন ছিল তার প্রধান কারণ ছিল AI
														এর এক্সেসসিবিলিটি । AI এর যত
														টুলস ছিল তার মোটামুটি সব গুলো
														ছিল পেইড যার কারণে আমাদের অনেকের
														ইচ্ছা থাকা সত্তে ও আমরা Pair
														প্রোগ্রামিংয়ের জন্য AI ব্যবহার
														করতে পারি নাই। কিন্তু এখন এটি
														মোটামুটি সহজ হয়ে দাঁড়িয়েছে। আজকে
														আমরা এইরকম একটা ফ্রি AI টুলস ও
														গিটহাব কো পাইলট সম্পর্কে জানার
														চেষ্টা করবো।
													</div>
												</div>
												<div className="row-start-1">
													<img
														src="https://miro.medium.com/v2/resize:fit:720/format:webp/0*oI29iGWSHYLdl7DR.png"
														alt="Pair প্রোগ্রামিংয়ের জন্য AI টুলস
														: গিটহাব কো পাইলট vs কোডিয়াম - Hasan Ali Haolader"
													/>
												</div>
											</div>
										</div>
									</a>


									<a href="https://hasanalihaolader.medium.com/%E0%A6%A1%E0%A7%87%E0%A6%AD%E0%A7%87%E0%A6%B2%E0%A6%AA%E0%A6%BE%E0%A6%B0%E0%A6%A6%E0%A7%87%E0%A6%B0-%E0%A6%9C%E0%A6%A8%E0%A7%8D%E0%A6%AF-%E0%A6%8F%E0%A6%86%E0%A6%87-ai-%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A6%AE%E0%A7%8D%E0%A6%AA%E0%A6%9F%E0%A6%BF%E0%A6%82-prompting-abb1c6f94caa">
										<div className="border-2 m-4 border-gray-100 bg-white shadow-gray-200 shadow-lg rounded-md  ease-in duration-200 z-10  hover:cursor-pointer hover:-translate-y-1 hover:scale-105">
											<div className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-3 p-8">
												<div className="md:col-span-2">
													<div className="text-lg font-bold md:py-4 text-left md:min-h-12">
														সফটওয়্যার ডেভেলপারদের জন্য এআই (
															AI ) প্রম্পটিং ( prompting )
													</div>
													<div className="md:min-h-28 line-clamp-3">
														আমরা আমাদের রেগুলার ডেভেলপমেন্ট
														এ AI কে ব্যাবহার করে আমরা আমাদের
														কাজের efficiency বাড়ানো ও
														ডেভেলপমেন্ট সময় কমিয়ে ফেলতে পারি
														। কিন্তু এই efficiency
														ডেভেলপমেন্ট সময় কতটুকু কমাবে
														সেটা নির্ভর করে আপনি AI কে দিয়ে
														ঠিক ঠাক ভাবে কাজ করাতে পারছেন
														কিনা তার উপর ।
													</div>
												</div>
												<div className="row-start-1">
													<img
														src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*ra3MyHf1TSbkVDqYtuYJZQ.png"
														alt="সফটওয়্যার ডেভেলপারদের জন্য এআই (
															AI ) প্রম্পটিং ( prompting ) - Hasan Ali Haolader"
													/>
												</div>
											</div>
										</div>
									</a>

								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
