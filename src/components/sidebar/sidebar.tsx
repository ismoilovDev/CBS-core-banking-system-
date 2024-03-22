import SidemenuNav from "../sidemenu/sidemenu-nav"
import SidemenuSettings from "../sidemenu/sidemenu-settings"

export function Sidebar() {
   return (
      <div id="sidebar-wrap" className="sidebar-wrap fixed left-0 top-16 border dark:border-sky-800 border-collapse">
         <div id="sidebar" className="sidebar">
            <SidemenuNav />
            <SidemenuSettings />
         </div>
      </div>
   )
}