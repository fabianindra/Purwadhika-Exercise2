'use client'

import axios from "axios";
import { useState, useEffect } from "react";
import '../globals.css';

interface RandomUser {
  picture: {
    large: string
  }
  name: {
    first: string;
    last: string;
  };
  email: string;
  location: {
    city: string;
  };
}

const fetchRandomUsers = async () => {
  try {
    const response = await axios.get('https://randomuser.me/api/?results=4');
    return response.data.results;
  } catch (error) {
    throw new Error('Something Went Wrong.');
  }
};

const RandomUserCard = ({ user }: { user: RandomUser }) => (
  <div className="random-user-card">
    <img src={user.picture.large} className="user-image" />
    <div className="user-details">
      <p><strong>Name:</strong> {user.name.first} {user.name.last}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>City:</strong> {user.location.city}</p>
    </div>
  </div>
);

export default function RandomUserPage() {
  const [randomUsers, setRandomUsers] = useState<RandomUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const users = await fetchRandomUsers();
        setRandomUsers(users);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="random-user-container">
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="grid-container">
          {randomUsers.map((user) => (
            <RandomUserCard key={user.email} user={user} />
          ))}
        </div>
      )}
    </div>
  );
};
