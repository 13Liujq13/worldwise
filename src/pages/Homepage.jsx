import styles from './Homepage.module.css';
import { Link } from 'react-router-dom';
import PageNav from '../components/pageNav';

export default function Homepage() {
  return (
    <main className={styles.homepage}>
      <PageNav />
      <section>
        <h1>
          你游历世界
          <br />
          WorldWise 会追踪您的冒险经历
        </h1>
        <h2>
          一张世界地图
          <br />
          追踪你的足迹 走遍你能想到的每一座城市
          <br />
          永远铭记你的精彩经历 并向你的朋友们展示你是如何游历世界的
        </h2>
        <Link to="/login" className="cta">
          现在开始追踪你的足迹
        </Link>
      </section>
    </main>
  );
}
