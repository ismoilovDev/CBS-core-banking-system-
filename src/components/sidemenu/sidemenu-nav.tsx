import { BetweenVerticalEnd, Briefcase, Contact, ListTodo, SquareUser, Wallet } from "lucide-react";
import { Sidemenu } from "./sidemenu";

const nav_links = [
   {
      title: 'Mijozlar',
      icon: <Contact />,
      contents: [
         { content: 'Физическое лица', path: '/physical-clients' },
         { content: 'Юридическое лица', path: '/legal-clients' },
         { content: 'Проверка по спискам легализации', path: '/clients-checker-for-legals' },
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
   {
      title: 'Зарплаты',
      icon: <SquareUser />,
      contents: [
         { content: 'Ведомость месяца', path: '/' },
         { content: 'Сводная ведомость', path: '/' },
         { content: 'Справочник сотрудников', path: '/' },
      ]
   },
   {
      title: 'Сделки',
      icon: <Briefcase />,
      contents: [
         { content: 'Учет сделок', path: '/' },
         { content: 'Каталог услуг', path: '/' },
         { content: 'Склад товаров', path: '/' },
         { content: 'Рентабельность', path: '/' },
      ]
   },
   {
      title: 'Инструменты учета',
      icon: <BetweenVerticalEnd />,
      contents: [
         { content: 'Обязательства', path: '/' },
         { content: 'Кредиты', path: '/' },
         { content: 'Налоги', path: '/' },
         { content: 'Имущество', path: '/' },
      ]
   }
]

export default function SidemenuNav() {
   return (
      <div id="sidemenu-nav" className="sidemenu-links">
         {
            nav_links.map(nav_link => (
               <Sidemenu details={nav_link} />
            ))
         }
      </div>
   )
}
