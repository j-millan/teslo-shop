import Link from "next/link";

import styles from "./NotFoundPage.module.css";
import Image from "next/image";

interface NotFoundPageProps {
  redirectRoute?: string;
  redirectMessage?: string;
  message?: string;
}

export const NotFoundPage = ({
  redirectRoute = "/",
  redirectMessage = "Back to Home",
  message = `We couldn't find that page!`,
}: NotFoundPageProps) => {
  return (
    <div className={styles.notFoundPage}>
      <div className={styles.message}>
        <h2 className={styles.title}>404</h2>
        {message ? <span>{message}</span> : null}
        <Link href={redirectRoute}>{redirectMessage}</Link>
      </div>

      <div className={styles.image}>
        <Image
          src="/images/starman_750x750.png"
          alt="404"
          width={450}
          height={450}
        ></Image>
      </div>
    </div>
  );
};
