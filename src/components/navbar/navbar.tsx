import { SidemenuToggle } from "../ui/sidemenu-toggle";
import { ProfileSettings } from "../ui/profile";
import { ModeToggle } from "../ui/mode-toggle";
import { UserName } from "../ui/username";
import { Logo } from "../logo/logo";

export function Navbar() {
   return (
      <header className="fixed w-full top-0 left-0 h-16 border dark:border-sky-800 border-collapse dark:bg-gray-700">
         <div className="h-full flex justify-between items-center px-4">
            <div className="navbar-header flex basis-1/4 space-x-4 items-center">
               <SidemenuToggle />
               <Logo />
            </div>
            <div className="app-settings flex space-x-4 items-center">
               <UserName username="ismoilovabbos.me@gmail.com" />
               <ModeToggle />
               <ProfileSettings />
            </div>
         </div>
      </header>
   )
}