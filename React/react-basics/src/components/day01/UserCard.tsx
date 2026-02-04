interface UserCardProp {
  name: string;
  job: string;
}

function UserCard({ name, job }: UserCardProp) {
  return (
    <div
      className="card"
      style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}
    >
      <h1>{name}</h1>
      <p>{job}</p>
      <button>Contact</button>
    </div>
  );
}

export default UserCard;
