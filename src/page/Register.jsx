import { useState } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate, Link } from 'react-router-dom';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Registration Successful! Now Login.");
      navigate('/login'); 
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
      <div className="bg-slate-800 p-8 rounded-xl shadow-lg w-96 border border-slate-700">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <form onSubmit={handleRegister} className="space-y-4">
          <input 
            type="email" placeholder="Email" required 
            className="w-full p-3 bg-slate-900 border border-slate-700 rounded focus:border-purple-500 outline-none"
            value={email} onChange={(e) => setEmail(e.target.value)}
          />
          <input 
            type="password" placeholder="Password" required 
            className="w-full p-3 bg-slate-900 border border-slate-700 rounded focus:border-purple-500 outline-none"
            value={password} onChange={(e) => setPassword(e.target.value)}
          />
          <button className="w-full bg-purple-600 py-3 rounded font-bold hover:bg-purple-700 transition">Create Account</button>
        </form>
        <p className="mt-4 text-center text-sm text-slate-400">
          Already have an account? <Link to="/login" className="text-purple-400">Login Here</Link>
        </p>
      </div>
    </div>
  );
}
