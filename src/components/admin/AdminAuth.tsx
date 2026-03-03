import { useEffect, useState } from 'react';
import AdminPanel from './AdminPanel';

export default function AdminAuth() {
  const [authed, setAuthed] = useState<boolean>(false);
  const [user, setUser] = useState<string>('');
  const [pass, setPass] = useState<string>('');
  const [error, setError] = useState<string>('');

  const ENV_USER = import.meta.env.VITE_ADMIN_USER || '';
  const ENV_PASS = import.meta.env.VITE_ADMIN_PASS || '';

  useEffect(() => {
    const s = sessionStorage.getItem('yots_admin_authed');
    if (s === 'true') setAuthed(true);
  }, []);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!ENV_USER || !ENV_PASS) {
      setError('Admin credentials are not configured. Please set VITE_ADMIN_USER and VITE_ADMIN_PASS.');
      return;
    }
    if (user === ENV_USER && pass === ENV_PASS) {
      sessionStorage.setItem('yots_admin_authed', 'true');
      setAuthed(true);
    } else {
      setError('Invalid username or password');
    }
  };

  const logout = () => {
    sessionStorage.removeItem('yots_admin_authed');
    setAuthed(false);
  };

  if (authed) {
    return (
      <div>
        <div className="yots-container flex justify-end py-2">
          <button
            onClick={logout}
            className="px-3 py-1 border border-white/30 rounded-sm text-sm hover:bg-white hover:text-black"
          >
            Logout
          </button>
        </div>
        <AdminPanel />
      </div>
    );
  }

  return (
    <section className="yots-section bg-[#0a0a0a]">
      <div className="yots-container max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Admin Login</h2>
        <form onSubmit={onSubmit} className="space-y-3">
          <div>
            <label className="block text-sm text-white/70 mb-1">Username</label>
            <input
              value={user}
              onChange={(e) => setUser(e.target.value)}
              className="w-full bg-black text-white border border-white/20 rounded-sm p-2"
              autoComplete="username"
            />
          </div>
          <div>
            <label className="block text-sm text-white/70 mb-1">Password</label>
            <input
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              type="password"
              className="w-full bg-black text-white border border-white/20 rounded-sm p-2"
              autoComplete="current-password"
            />
          </div>
          {error && <div className="text-red-400 text-sm">{error}</div>}
          <button
            type="submit"
            className="px-4 py-2 border border-white/30 rounded-sm hover:bg-white hover:text-black"
          >
            Login
          </button>
        </form>
        {!ENV_USER || !ENV_PASS ? (
          <p className="text-white/60 text-sm mt-3">
            Tip: set VITE_ADMIN_USER and VITE_ADMIN_PASS in .env.local on your host.
          </p>
        ) : null}
      </div>
    </section>
  );
}
