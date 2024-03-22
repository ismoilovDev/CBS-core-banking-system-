import { ReactNode } from "react"
import { Link } from "react-router-dom"
import {
   Accordion,
   AccordionContent,
   AccordionItem,
   AccordionTrigger,
} from "@/components/ui/accordion"

type Link = {
   content: string,
   path: string
}

type PropsType = {
   title: string,
   icon: ReactNode
   contents: Link[]
}

export function Sidemenu({ details }: { details: PropsType }) {
   return (
      <Accordion type="single" collapsible className="w-full">
         <AccordionItem value="item-1">
            <AccordionTrigger>
               <div className="flex space-x-2">
                  <span className="flex items-center">
                     {details.icon}
                  </span>
                  <span className="block">
                     {details.title}
                  </span>
               </div>
            </AccordionTrigger>
            <AccordionContent>
               <ul>
                  {details.contents.map((link, index) => (
                     <li className="my-1" key={index}>
                        <Link to={link.path}>{link.content}</Link>
                     </li>
                  ))}
               </ul>
            </AccordionContent>
         </AccordionItem>
      </Accordion>
   )
}
