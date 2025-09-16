import { NavLink } from 'react-router-dom';
import styles from './pageNav.module.css';
import Logo from './Logo';
function PageNav() {
  return (
    <nav className={styles.nav}>
      <NavLink to="/">
        <Logo />
      </NavLink>
      <ul>
        <li>
          <NavLink to="/product">产品</NavLink>
        </li>
        <li>
          <NavLink to="/pricing">定价</NavLink>
        </li>
        <li>
          <NavLink to="/login" className={styles.ctaLink}>
            登录
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
