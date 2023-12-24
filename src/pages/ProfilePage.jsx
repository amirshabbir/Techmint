// ProfilePage.js

import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from '../pages/ProfilePage.module.css'

const ProfilePage = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [clockTime, setClockTime] = useState(new Date().toLocaleTimeString());
  const [clockRunning, setClockRunning] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch user details by ID from API
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(response => response.json())
      .then(data => setUser(data));

    // Fetch posts by user ID from API
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then(response => response.json())
      .then(data => setPosts(data));
  }, [userId]);

  useEffect(() => {
    // Update clock every second
    const intervalId = setInterval(() => {
      if (clockRunning) {
        setClockTime(new Date().toLocaleTimeString());
      }
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, [clockRunning]);

  const toggleClock = () => {
    setClockRunning(!clockRunning);
  };

  return (
    <div className="container">



      <div className={styles.ProfilePageContect}>
        {user && (
          <div>
            <div className={styles.header}>
              <Link to="/" className={styles.backBtn}>Back</Link>
              {/* Clock section */}

              <div>
                <span className={styles.TimeShow}>{clockTime}</span>
                <button className={styles.TimeShowBtn} onClick={toggleClock}>{clockRunning ? 'Pause' : 'Start'}</button>
              </div>

            </div>



            <h1 className={styles.ProfileTittle}>Profile Page</h1>



            {/* User details section */}
            <div className={styles.userDetails}>
              {/* <h2>User Details</h2> */}
              <div className={styles.detailsContainer}>
                <div className={`${styles.leftDetails} ${styles.details}`}>
                  <div className={styles.userDetail}>
                    <span>{user.name}</span>
                  </div>
                  <div className={styles.userDetail}>
                    <span className={styles.username}>{user.username}</span>
                    <span>{user.company.catchPhrase}</span>
                  </div>
                  {/* <div className={styles.userDetail}>
        <span>Catch Phrase: {user.company.catchPhrase}</span>
      </div> */}
                </div>
                <div className={`${styles.rightDetails} ${styles.details}`}>
                  <div className={styles.userDetail}>
                    <span>Address: {user.address.city}, {user.address.street}</span>
                  </div>
                  <div className={styles.userDetail}>
                    <span className={styles.username}>{user.email}</span>
                    <span>{user.phone}</span>
                  </div>
                  {/* <div className={styles.userDetail}>
        <span>Phone: {user.phone}</span>
      </div> */}
                </div>
              </div>
            </div>


            {/* Posts section */}
            <div className={styles.postsContainer}>
              {posts.map(post => (
                <div key={post.id} className={styles.post}>
                  <h3>{post.title}</h3>
                  <p>{post.body}</p>
                </div>
              ))}
            </div>


  
          </div>
        )}
      </div>



    </div>
  );
}

export default ProfilePage;
