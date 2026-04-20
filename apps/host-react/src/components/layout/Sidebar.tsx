import { NavLink } from 'react-router-dom';

const linkBaseStyle = {
  display: 'block',
  padding: '12px 14px',
  borderRadius: '10px',
  textDecoration: 'none',
  color: '#111827',
  fontWeight: 500,
  transition: 'all 0.2s ease',
};

function Sidebar() {
  return (
    <aside
      style={{
        width: 260,
        borderRight: '1px solid #e5e7eb',
        padding: 20,
        minHeight: '100vh',
        boxSizing: 'border-box',
        backgroundColor: '#ffffff',
      }}
    >
      <div style={{ marginBottom: 32 }}>
        <h2 style={{ margin: 0, fontSize: 22 }}>MF Demo</h2>
        <p style={{ marginTop: 8, color: '#6b7280', lineHeight: 1.5 }}>
          React host, React remote ve Vue remote örneği
        </p>
      </div>

      <nav style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        <NavLink
          to="/"
          style={({ isActive }) => ({
            ...linkBaseStyle,
            backgroundColor: isActive ? '#111827' : 'transparent',
            color: isActive ? '#ffffff' : '#111827',
          })}
        >
          Home
        </NavLink>

        <NavLink
          to="/dashboard"
          style={({ isActive }) => ({
            ...linkBaseStyle,
            backgroundColor: isActive ? '#111827' : 'transparent',
            color: isActive ? '#ffffff' : '#111827',
          })}
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/profile"
          style={({ isActive }) => ({
            ...linkBaseStyle,
            backgroundColor: isActive ? '#111827' : 'transparent',
            color: isActive ? '#ffffff' : '#111827',
          })}
        >
          Profile
        </NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;