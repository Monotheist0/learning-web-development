import { useState, useEffect } from "react";
import type { FormEvent } from "react";
import PostCard from "./PostCard";
import type { Post } from "./PostCard";

function MainDashboard() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchText, setSearchText] = useState("");
    const [newTitle, setNewTitle] = useState("");
    const [newBody, setNewBody] = useState("");

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch(
                    `https://jsonplaceholder.typicode.com/posts?_limit=10`,
                );
                const data = await response.json();
                setPosts(data);
                setIsLoading(false);
            } catch (error) {
                console.error("Failed to fetch", error);
                setIsLoading(false);
            }
        };
        fetchPosts();
    }, []);
    const filteredPosts = posts.filter(
        (post) =>
            post.title.toLowerCase().includes(searchText.toLowerCase()) ||
            post.body.toLowerCase().includes(searchText.toLowerCase()),
    );
    const handleAddPost = (e: FormEvent) => {
        e.preventDefault();
        if (!newTitle || !newBody) return;
        const newPost: Post = {
            id: Date.now(),
            title: newTitle,
            body: newBody,
        };
        setPosts([newPost, ...posts]); //New ones to the top
        setNewTitle("");
        setNewBody("");
    };

    return (
        <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
            <h1>📢 SimpleSocial Feed</h1>
            <input
                type="text"
                placeholder="🔍 Search posts..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                style={{ width: "100%", padding: "10px", marginBottom: "20px" }}
            />
            <form
                onSubmit={handleAddPost}
                style={{ marginBottom: "30px", border: "1px dashed gray", padding: "15px" }}
            >
                <h3>Create New Post</h3>
                <input
                    type="text"
                    placeholder="Title"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    style={{ width: "100%", marginBottom: "5px", padding: "8px" }}
                />
                <textarea
                    placeholder="What's on your mind?"
                    value={newBody}
                    onChange={(e) => setNewBody(e.target.value)}
                    style={{ width: "100%", marginBottom: "5px", padding: "8px", height: "60px" }}
                />
                <button
                    type="submit"
                    style={{
                        width: "100%",
                        padding: "10px",
                        backgroundColor: "orange",
                        border: "none",
                        color: "black",
                        fontWeight: "bold",
                    }}
                >
                    Post
                </button>
            </form>
            {isLoading ? (
                <p>Loading feed...</p>
            ) : (
                <div>
                    <p style={{ textAlign: "right", color: "gray" }}>
                        Showing {filteredPosts.length} posts
                    </p>
                    {filteredPosts.map((post) => (
                        <PostCard key={post.id} post={post} />
                    ))}

                    {filteredPosts.length === 0 && <p>No posts found.</p>}
                </div>
            )}
        </div>
    );
}

export default MainDashboard;
