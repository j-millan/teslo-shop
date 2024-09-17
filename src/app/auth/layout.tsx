import styles from "./page.module.css";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className={styles.layout}>
      {children}
    </main>
  );
};

export default AuthLayout;