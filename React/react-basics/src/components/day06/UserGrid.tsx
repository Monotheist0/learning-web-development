import UserProfile from "./UserProfile";

function UserGrid() {
    const users = [
        { name: "Marcus Joker", role: "architect", avatar: "Felix" },
        { name: "Sarah Code", role: "frontend", avatar: "Aneka" },
        { name: "John Doe", role: "backend", avatar: "Jude" },
        { name: "Emily Git", role: "devops", avatar: "Maria" },
    ];
    return (
        <div className="p-10 bg-gray-900 min-h-screen">
            <h1 className="text-3xl font-bold text-white mb-8 text-center">Team Board</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {users.map((user, index) => (
                    <UserProfile
                        key={index}
                        name={user.name}
                        role={user.role}
                        avatar={user.avatar}
                    />
                ))}
            </div>
        </div>
    );
}

export default UserGrid;
