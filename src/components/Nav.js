import { Outlet } from 'react-router-dom';

const Nav = () => {
  const links = [
    { path: '/', text: 'Home' },
    { path: 'about', text: 'About' },
    { path: 'profile', text: 'Profile' },
    { path: 'login', text: 'Login' },
  ];
  return (
    <>
      <div className="wrapper">
        <ul>
          {links.map((link) => (
            <li key={link.text}>
              <a href={link.path}>{link.text}</a>
            </li>
          ))}
        </ul>
      </div>
      <Outlet />
    </>
  );
};
export default Nav;
