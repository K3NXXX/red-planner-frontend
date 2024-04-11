import type { PropsWithChildren } from "react";

import styles from "./DashboardLayout.module.scss";
import { BottomBar } from "./bottom-bar/BottomBar";
import { Header } from "./header/Header";
import { Sidebar } from "./sidebar/Sidebar";

export default function DashboardLayout({
  children,
}: PropsWithChildren<unknown>) {
  return (
    <>
      <div className={styles.pc}>
        <Sidebar />
        <main className="p-big-layout overflow-x-hidden max-h-screen relative">
          <Header />
          {children}
        </main>
      </div>
      <div className={styles.phone}>
        <BottomBar />
        <main className="p-big-layout overflow-x-hidden max-h-screen relative">
          <Header />
          {children}
        </main>
      </div>
    </>
  );
}
