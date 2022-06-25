import { useState, useEffect } from "reactn";
import axios from "axios";

const Fakeposts = () => {
	const [posts, setPosts] = useState([]);
	useEffect(() => {
		axios
			.get("https://jsonplaceholder.typicode.com/posts")
			.then((res) => setPosts(res.data));
	}, []);
	return (
		<div className="bg-teal-100">
			<div className="flex flex-col items-center p-1">
				<h1 className="text-3xl font-bold text-center">Fakeposts</h1>
				<h2 className="text-xs font-bold text-center">Posts: {posts.length}</h2>
				<ul className="flex flex-col items-center ">
					{posts.map((post) => (
						<li
							key={post.id}
							className="flex flex-col items-center border-2 border-black w-1/2 m-2 p-1 hover:border-red-500"
						>
							<p className="text-xs">
								UserId: {post.userId} - PostId: {post.id}
							</p>

							<h2 className="text-2xl font-bold">{post.title}</h2>
							<p className="">{post.body}</p>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Fakeposts;
