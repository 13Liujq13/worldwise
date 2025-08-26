import styles from './SideBar.module.css';
import Logo from './Logo';

function SideBar() {
  return (
    <div className={styles.sideBar}>
      <Logo />
    </div>
  );
}

export default SideBar;
