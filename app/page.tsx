'use client';

import { useState } from 'react';
import { createUser } from './actions/users';

export default function Home() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    await createUser(name, email, password);
    alert('User Created!');
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Create User</h1>
      <input className="border p-2" placeholder="Name" onChange={(e) => setName(e.target.value)} />
      <input className="border p-2" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input className="border p-2" placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
      <button className="bg-blue-500 text-white px-4 py-2" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}
