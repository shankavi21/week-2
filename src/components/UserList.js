import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

function UserList() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortKey, setSortKey] = useState(null);
  const [editUser, setEditUser] = useState(null);
  const [editData, setEditData] = useState({ name: "", email: "", phone: "" });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "users"));
      const userData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setUsers(userData);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  // Delete user
  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "users", id));
      setUsers(users.filter((user) => user.id !== id));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  // Start editing
  const handleEdit = (user) => {
    setEditUser(user.id);
    setEditData({ name: user.name, email: user.email, phone: user.phone });
  };

  // Save edit
  const handleSave = async () => {
    try {
      const userRef = doc(db, "users", editUser);
      await updateDoc(userRef, editData);
      setUsers(
        users.map((u) =>
          u.id === editUser ? { ...u, ...editData } : u
        )
      );
      setEditUser(null);
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  // Cancel edit
  const handleCancel = () => {
    setEditUser(null);
  };

  // Filtering
  const filteredUsers = users.filter((user) =>
    user.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sorting
  const sortBy = (key) => {
    let sorted = [...filteredUsers].sort((a, b) =>
      a[key]?.toLowerCase() > b[key]?.toLowerCase() ? 1 : -1
    );
    setUsers(sorted);
    setSortKey(key);
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Registered Users</h2>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by name"
        className="form-control mb-3"
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Table */}
      <table className="table table-bordered table-hover table-striped">
        <thead>
          <tr>
            <th onClick={() => sortBy("name")}>
              Name {sortKey === "name" && "↑"}
            </th>
            <th onClick={() => sortBy("email")}>
              Email {sortKey === "email" && "↑"}
            </th>
            <th onClick={() => sortBy("phone")}>
              Phone {sortKey === "phone" && "↑"}
            </th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <tr key={user.id}>
                {editUser === user.id ? (
                  <>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        value={editData.name}
                        onChange={(e) =>
                          setEditData({ ...editData, name: e.target.value })
                        }
                      />
                    </td>
                    <td>
                      <input
                        type="email"
                        className="form-control"
                        value={editData.email}
                        onChange={(e) =>
                          setEditData({ ...editData, email: e.target.value })
                        }
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        value={editData.phone}
                        onChange={(e) =>
                          setEditData({ ...editData, phone: e.target.value })
                        }
                      />
                    </td>
                    <td>
                      <button
                        className="btn btn-success btn-sm me-2"
                        onClick={handleSave}
                      >
                        Save
                      </button>
                      <button
                        className="btn btn-secondary btn-sm"
                        onClick={handleCancel}
                      >
                        Cancel
                      </button>
                    </td>
                  </>
                ) : (
                  <>
                    <td>{user.name || "N/A"}</td>
                    <td>{user.email || "N/A"}</td>
                    <td>{user.phone || "N/A"}</td>
                    <td>
                      <button
                        className="btn btn-warning btn-sm me-2"
                        onClick={() => handleEdit(user)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDelete(user.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </>
                )}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center">
                No users found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
