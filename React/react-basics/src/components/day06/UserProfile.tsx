interface UserProfileProps {
    name: string;
    role: string;
    avatar: string;
}

function UserProfile({ name, role, avatar }: UserProfileProps) {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-2xl shadow-xl w-full transition hover:scale-105 duration-300">
                <div className="flex item-center gap-4">
                    <img
                        src={`https://api.dicebear.com/9.x/avataaars/svg?seed=${avatar}`}
                        alt="Avatar"
                        className="w-16 h-16 rounded-full border-2 border-blue-500"
                    />
                    <div>
                        <h2 className="text-xl font-bold text-gray-800">{name}</h2>
                        <p className="text-gray-500 text-sm">@{role}</p>
                    </div>
                </div>
                <p className="mt-4 text-gray-600">Crazy TailWind</p>
                <button className="w-full mt-6 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                    Follow Me
                </button>
            </div>
        </div>
    );
}

export default UserProfile;
