import Introduction from "../components/frontend/home/introduction";
import RecentArticle from "../components/frontend/home/recentArticle";
import Contribution from "../components/frontend/home/contribution";

export default function Home() {
	return (
		<div>
			<Introduction/>
			<RecentArticle/>
			<Contribution/>
		</div>
	);
}
