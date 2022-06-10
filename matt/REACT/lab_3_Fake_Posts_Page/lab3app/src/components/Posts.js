const Posts = ({posts, inputvalue, ...props}) => {
    return (
        <div>
            <h1>POSTS</h1>
            <div>
                {/* {posts.map(post => <><h2 >{post.title}:</h2> <p>{post.body} user: {post.userId}</p></>)} */}
                <p>******************</p>
                {posts.filter(post => post.title.includes(inputvalue)).map(post => <><h2 >{post.title}:</h2> <p>{post.body} user: {post.userId}</p></>)}
            </div>
        </div>
    )
}

export default Posts