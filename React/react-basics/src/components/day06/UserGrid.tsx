import UserProfile from './UserProfile';

function UserGrid() {
  const users = [
    { name: 'Marcus Joker', role: 'architect', avatar: 'Felix' },
    { name: 'Sarah Code', role: 'frontend', avatar: 'Aneka' },
    { name: 'John Doe', role: 'backend', avatar: 'Jude' },
    { name: 'Emily Git', role: 'devops', avatar: 'Maria' },
  ];
  return (
    <div className="min-h-screen bg-gray-900 p-10">
      <h1 className="mb-8 text-center text-3xl font-bold text-white">
        Team Board
      </h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
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
