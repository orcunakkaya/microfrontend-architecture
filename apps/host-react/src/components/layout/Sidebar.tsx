import { NavLink } from 'react-router-dom';

const linkBaseStyle = {
  display: 'block',
  padding: '10px 12px',
  borderRadius: '8px',
  textDecoration: 'none',
  color: '#111827',
  fontWeight: 500,
};

function Sidebar() {
  return (
    <aside
      style={{
        width: 240,
        borderRight: '1px solid #e5e7eb',
        padding: 16,
        minHeight: '100vh',
        boxSizing: 'border-box',
      }}
    >
      <h2 style={{ marginTop: 0 }}>MF Demo</h2>

      <nav style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <NavLink
          to="/"
          style={({ isActive }) => ({
            ...linkBaseStyle,
            backgroundColor: isActive ? '#e5e7eb' : 'transparent',
          })}
        >
          Home
        </NavLink>

        <NavLink
          to="/dashboard"
          style={({ isActive }) => ({
            ...linkBaseStyle,
            backgroundColor: isActive ? '#e5e7eb' : 'transparent',
          })}
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/profile"
          style={({ isActive }) => ({
            ...linkBaseStyle,
            backgroundColor: isActive ? '#e5e7eb' : 'transparent',
          })}
        >
          Profile
        </NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;