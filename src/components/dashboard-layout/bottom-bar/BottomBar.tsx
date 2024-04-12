import { MENU } from "../sidebar/menu.data";

import { BottomBarItem } from "./BottomBarItem";

export function BottomBar() {
  return (
    <div className="fixed flex gap-2 bottom-2 justify-center w-full z-40 ">
      {MENU.map((item) => (
        <div>
          <BottomBarItem item={item} key={item.link} />
        </div>
      ))}
    </div>
  );
}
