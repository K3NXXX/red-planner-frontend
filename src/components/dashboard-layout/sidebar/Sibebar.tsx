import { GanttChartSquare } from "lucide-react";
import Link from "next/link";

import { COLORS } from "@/constants/color.constants";

import { DASHBOARD_PAGES } from "@/config/pages-url.config";

import { LogoutButton } from "./LogoutButton";
import { MenuItem } from "./MenuItem";
import { MENU } from "./menu.data";

export function Sibebar() {
  return (
    <aside
      className="border-r border-r-border h-full bg-sidebar flex
      flex-col justify-between "
    >
      <div>
        <Link
          href={DASHBOARD_PAGES.HOME}
          className="flex items-center gap-2.5 p-layout border-b border-b-border"
          draggable={false}
        >
          <GanttChartSquare color={COLORS.primary} size={30} />
          <span className="text-2xl font-bold relavite">RED Planner</span>
        </Link>
        <div className="p-3 relative pt-10">
          <LogoutButton />
          {MENU.map((item) => (
            <MenuItem item={item} key={item.link} />
          ))}
        </div>
      </div>
      <footer className="text-xs opacity-40 font-normal text-center p-layout">
        2024 &copy; All rights reserved
      </footer>
    </aside>
  );
}
