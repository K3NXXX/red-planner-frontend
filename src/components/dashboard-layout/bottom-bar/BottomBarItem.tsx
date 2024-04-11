import Link from "next/link";

import { IMenuItem } from "@/components/dashboard-layout/sidebar/menu.interface";

import styles from "./BottomBar.module.scss";

export function BottomBarItem({ item }: { item: IMenuItem }) {
  return (
    <div>
      <Link href={item.link} className={styles.link}>
        <div className={styles.pcSize}>
          <item.icon size={50} />
        </div>
        <div className={styles.phoneSize}>
          <item.icon size={30} />
        </div>
      </Link>
    </div>
  );
}
