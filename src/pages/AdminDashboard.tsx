import React, { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

interface Mechanic {
  id: number;
  name: string;
  specialization: string;
  rating: number;
  experience: number;
  phone: string;
}

const AdminDashboard: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [mechanics, setMechanics] = useState<Mechanic[]>([]);

  // ✅ Fetch Users
  const fetchUsers = () => {
    fetch("http://localhost:8000/users")
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.error(err));
  };

  // ✅ Fetch Mechanics
  const fetchMechanics = () => {
    fetch("http://localhost:8000/mechanics")
      .then(res => res.json())
      .then(data => setMechanics(data))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchUsers();
    fetchMechanics();
  }, []);

  // ✅ DELETE USER
  const deleteUser = async (id: number) => {
    await fetch(`http://localhost:8000/users/${id}`, {
      method: "DELETE",
    });
    fetchUsers();
  };

  // ✅ DELETE MECHANIC
  const deleteMechanic = async (id: number) => {
    await fetch(`http://localhost:8000/mechanics/${id}`, {
      method: "DELETE",
    });
    fetchMechanics();
  };

  return (
    <div className="p-8">

      <h1 className="text-3xl font-bold mb-6">
        Welcome Admin, Sam
      </h1>

      {/* USERS TABLE */}
      <div className="bg-white p-6 rounded shadow mb-8">
        <h2 className="text-xl font-bold mb-4">Registered Users</h2>

        <table className="w-full border">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2">Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {users.map(u => (
              <tr key={u.id} className="text-center border-t">
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>{u.role}</td>
                <td>
                  <button
                    onClick={() => deleteUser(u.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MECHANICS TABLE */}
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-bold mb-4">Mechanics</h2>

        <table className="w-full border">
          <thead>
            <tr className="bg-gray-200">
              <th>Name</th>
              <th>Specialization</th>
              <th>Experience</th>
              <th>Rating</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {mechanics.map(m => (
              <tr key={m.id} className="text-center border-t">
                <td>{m.name}</td>
                <td>{m.specialization}</td>
                <td>{m.experience} yrs</td>
                <td>{m.rating}</td>
                <td>{m.phone}</td>
                <td>
                  <button
                    onClick={() => deleteMechanic(m.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default AdminDashboard;