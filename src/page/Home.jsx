import { auth } from '../firebase';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Home() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        navigate('/login'); 
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center">
      <div className="text-center p-10 bg-slate-800 rounded-2xl border border-slate-700 shadow-2xl">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          Welcome!
        </h1>
        <p className="text-xl text-slate-300 mb-8">
          You are logged in as: <span className="text-purple-400 font-mono">{user?.email}</span>
        </p>
        <button 
          onClick={() => signOut(auth)}
          className="px-8 py-3 bg-red-500 hover:bg-red-600 rounded font-bold transition shadow-lg shadow-red-500/20"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
