import { TopMenu, SideMenu } from "@/shared";
import styles from "./page.module.css";

const ShopLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className={styles.layout}>
      <TopMenu />
      <SideMenu />
      <div className={styles.content}>{children}</div>
    </main>
  );
};

export default ShopLayout;
