import SideBar from '../components/sideBar';
import Map from '../components/Map/Map';
import styles from './AppLayout.module.css';
import User from '../components/User';
import ProtectRoute from './ProtectRoute';
function AppLayout() {
  return (
    <ProtectRoute>
      <div className={styles.app}>
        <SideBar />
        <Map />
        <User />
      </div>
    </ProtectRoute>
  );
}

export default AppLayout;
