import { LogoutButton } from "../sidebar/LogoutButton";

import { GlobalLoader } from "./GlobalLoader";
import styles from "./Header.module.scss";
import { Profile } from "./profile/Profile";

export function Header() {
  return (
    <header>
      <GlobalLoader />
      <Profile />
      <div className={styles.logout}>
        <LogoutButton />
      </div>
    </header>
  );
}
