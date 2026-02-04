interface UserProfileProps {
  name: string;
  role: string;
  avatar: string;
}

function UserProfile({ name, role, avatar }: UserProfileProps) {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="w-full rounded-2xl bg-white p-8 shadow-xl transition duration-300 hover:scale-105">
        <div className="item-center flex gap-4">
          <img
            src={`https://api.dicebear.com/9.x/avataaars/svg?seed=${avatar}`}
            alt="Avatar"
            className="h-16 w-16 rounded-full border-2 border-blue-500"
          />
          <div>
            <h2 className="text-xl font-bold text-gray-800">{name}</h2>
            <p className="text-sm text-gray-500">@{role}</p>
          </div>
        </div>
        <p className="mt-4 text-gray-600">Crazy TailWind</p>
        <button className="mt-6 w-full rounded-lg bg-blue-600 py-2 text-white transition hover:bg-blue-700">
          Follow Me
        </button>
      </div>
    </div>
  );
}

export default UserProfile;
