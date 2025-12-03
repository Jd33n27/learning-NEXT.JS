interface User {
  id: number;
  firstName: string;
  lastName: string;
}

export default async function ServerExample() {
  const res = await fetch("https://dummyjson.com/users", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }

  const data = await res.json();
  const users: User[] = data.users;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Server Component Users</h2>
      <ul className="space-y-1 text-black text-2xl glass-card">
        {users.map((u) => (
          <li key={u.id}>
            {u.firstName}
            {u.lastName}
          </li>
        ))}
      </ul>
    </div>
  );
}
