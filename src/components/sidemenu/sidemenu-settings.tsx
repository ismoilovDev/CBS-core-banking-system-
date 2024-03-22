import { ClipboardList, ListTodo, Wallet } from "lucide-react";
import { Sidemenu } from "./sidemenu";

const nav_settings_links = [
   {
      title: 'Справочники',
      icon: <ClipboardList />,
      contents: [
         { content: 'Счета бизнеса', path: '/' },
         { content: 'Статьи операций', path: '/' },
         { content: 'Направления', path: '/' },
         { content: 'Контрагенты', path: '/' },
      ]
   },
   {
      title: 'Деньги',
      icon: <Wallet />,
      contents: [
         { content: 'Операции', path: '/' },
         { content: 'Импорт', path: '/' },
         { content: 'Правила', path: '/' },
         { content: 'Сверка', path: '/' },
      ]
   },
   {
      title: 'Планирование',
      icon: <ListTodo />,
      contents: [
         { content: 'Платежный календарь', path: '/' },
         { content: 'Бюджет ДДС', path: '/' },
         { content: 'Бюджет ДиР', path: '/' },
      ]
   },
]

export default function SidemenuSettings() {
   return (
      <div id="sidemenu-settings" className="sidemenu-links">
         {
            nav_settings_links.map(item => (
               <Sidemenu details={item} />
            ))
         }
      </div>
   )
}
