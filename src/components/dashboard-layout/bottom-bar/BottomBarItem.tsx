import Link from "next/link";

import { IMenuItem } from "@/components/dashboard-layout/sidebar/menu.interface";

export function BottomBarItem({ item }: { item: IMenuItem }) {
  return (
    <div>
      <Link
        href={item.link}
        className="flex gap-2.5 items-center py-1.5 mt-2 px-layout
			  transition-colors hover:bg-border rounded-lg border border-border"
      >
        <item.icon size={50} />
      </Link>
    </div>
  );
}
