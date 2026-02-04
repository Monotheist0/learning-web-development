import { useState, useEffect } from 'react';

interface Post {
  id: number;
  title: string;
  body: string;
  likes: number;
}
function FinalDashboard() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [searchText, setSearchText] = useState('');
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newBody, setNewBody] = useState('');

  useEffect(() => {
    const initialPosts = [
      {
        id: 1,
        title: 'React is Amazing',
        body: 'I just learned Tailwind and it is changing my life.',
        likes: 5,
      },
      {
        id: 2,
        title: 'Why use TypeScript?',
        body: 'Because it catches bugs before I run the code!',
        likes: 12,
      },
      {
        id: 3,
        title: 'Day 7 Complete',
        body: 'Ready to start the T3 Stack journey.',
        likes: 8,
      },
    ];
    setTimeout(() => setPosts(initialPosts), 0);
  }, []);
  const handleAddPost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle || !newBody) return;
    const newPost: Post = {
      id: Date.now(),
      title: newTitle,
      body: newBody,
      likes: 0,
    };

    setPosts([newPost, ...posts]);
    setNewTitle('');
    setNewBody('');
    setIsFormOpen(false);
  };
  const handleDelete = (id: number) => {
    setPosts(posts.filter((post) => post.id !== id));
  };
  const handleLike = (id: number) => {
    setPosts(
      posts.map((post) =>
        post.id === id ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchText.toLowerCase()) ||
      post.body.toLowerCase().includes(searchText.toLowerCase())
  );
  return (
    <div className="min-h-screen bg-gray-900 p-8 text-white">
      <div className="mx-auto mb-10 flex max-w-4xl items-center justify-between">
        <h1 className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-3xl font-bold text-transparent">
          DevSocial
        </h1>
        <input
          type="text"
          placeholder="🔍 Search topics..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="w-64 rounded-full border border-gray-700 bg-gray-800 px-4 py-2 transition focus:border-blue-500 focus:outline-none"
        />
        <button
          onClick={() => setIsFormOpen(!isFormOpen)}
          className="rounded-lg bg-blue-600 px-6 py-2 font-bold shadow-lg transition hover:bg-blue-500"
        >
          {isFormOpen ? 'Close Form' : '+ New Post'}
        </button>
      </div>
      {isFormOpen && (
        <div className="animate-fade-in mx-auto mb-10 max-w-xl rounded-xl border border-gray-700 bg-gray-800 p-6 shadow-2xl">
          <h2 className="mb-4 text-xl font-bold text-gray-200">
            Create a Post
          </h2>
          <form onSubmit={handleAddPost} className="space-y-4">
            <input
              type="text"
              placeholder="Title"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              className="w-full rounded-lg border border-gray-700 bg-gray-900 p-3 outline-none focus:border-blue-500"
            />
            <textarea
              placeholder="What are you thinking?"
              value={newBody}
              onChange={(e) => setNewBody(e.target.value)}
              className="h-24 w-full rounded-lg border border-gray-700 bg-gray-900 p-3 outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              className="w-full rounded-lg bg-green-600 py-3 font-bold transition hover:bg-green-500"
            >
              Publish
            </button>
          </form>
        </div>
      )}
      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
        {filteredPosts.map((post) => (
          <div
            key={post.id}
            className="rounded-xl border border-gray-700 bg-gray-800 p-6 transition duration-300 hover:border-gray-500"
          >
            <div className="flex items-start justify-between">
              <h3 className="mb-2 text-xl font-bold text-blue-400">
                {post.title}
              </h3>
              <button
                onClick={() => handleDelete(post.id)}
                className="text-sm text-gray-500 hover:text-red-500"
              >
                🗑️
              </button>
            </div>
            <p className="mb-4 text-gray-300">{post.body}</p>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => handleLike(post.id)}
                className="text-gray-400 transition hover:text-pink-500"
              >
                ❤️ {post.likes}
              </button>
            </div>
          </div>
        ))}

        {filteredPosts.length === 0 && (
          <p className="col-span-2 text-center text-gray-500">
            No posts found.
          </p>
        )}
      </div>
    </div>
  );
}
export default FinalDashboard;
