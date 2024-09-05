import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { collection, getDocs, getDoc, updateDoc, doc } from 'firebase/firestore';

function AdminPanel() {
  const [users, setUsers] = useState([]);
  const [isUserAdmin, setIsUserAdmin] = useState(false);
  const [userMessage, setUserMessage] = useState(null);

  useEffect(() => {
    const getUsers = async () => {
      const usersSnapshot = await getDocs(collection(db, "users"));
        const userList = usersSnapshot.docs.map(doc => ({ id: doc.uid,
        ...doc.data()
      }));
      setUsers(userList);
    }
    getUsers();
  }, []);

  const handleMakeAdmin = async (userId) => {
    const userRef = doc(db, "users", userId);
    console.log(userId);
    const userEmail = await getDoc(userRef);
    await updateDoc(userRef, {
      role: "admin"
    });
    setUserMessage(`${userEmail.data().email} has been granted admin privileges.`);
    setIsUserAdmin(true);
  }

  return (
    <div>
      <h2>Admin Panel</h2>
      <h3>Registered Users</h3>
      <ul>
        {users.map(user => (
          <li key={user.uid}>
            {user.email} - Role: {user.role}
            <br/>
            <button onClick={() => handleMakeAdmin(user.uid)}>Grant Admin Privileges</button>
          </li>
        ))}
      </ul>
      {isUserAdmin === true && (
        <React.Fragment>
          {userMessage}
        </React.Fragment>
      )}
    </div>
  )
}

export default AdminPanel;