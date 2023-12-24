// src/pages/DirectoryPage.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styles from '../pages/DirectoryPage.module.css'

const DirectoryPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
      setUsers(response.data);
    });
  }, []);

  return (
    <div className="container">
    <div className={styles.header}>
      <h1 className={styles.headerTittle}>Directory</h1>
      <ul style={{padding: "10px"}}>
        {users.map((user) => (
          <li key={user.id} className={styles.list}>
            <Link to={`/profile/${user.id}`} className={styles.links}>
            Name :  {user.name} <span>  Posts: {Math.floor(Math.random() * 10)}  </span> 
            </Link>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default DirectoryPage;
