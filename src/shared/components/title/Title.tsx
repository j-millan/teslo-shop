import { titleFont } from "@/config/fonts";
import styles from "./Title.module.css";

interface TitleProps {
  title: string;
  subtitle?: string;
}

export const Title = ({ title, subtitle }: TitleProps) => {
  return (
    <div className={styles.title}>
      <h1 className={titleFont.className}>{title}</h1>
      <h3>{subtitle}</h3>
    </div>
  );
};
