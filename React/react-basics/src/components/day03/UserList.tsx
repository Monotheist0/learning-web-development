import { useState, useEffect } from "react";
interface User {
    id: number;
    name: string;
    email: string;
    website: string;
}

function UserList() {
    const [users, setUsers] = useState<User[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                const data = await response.json();
                setUsers(data);
                setIsLoading(false);
            } catch (er) {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);
    return (
        <div style={{ border: "2px solid blue", padding: "20px", margin: "20px" }}>
            <h2>User Directory (API Fetch)</h2>
            {isLoading ? (
                <p>Loading data...</p>
            ) : (
                <ul>
                    {users.map((user) => (
                        <li key={user.id}>
                            <strong>{user.name}</strong> - {user.email}
                            <br />
                            <small>{user.website}</small>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
export default UserList;
