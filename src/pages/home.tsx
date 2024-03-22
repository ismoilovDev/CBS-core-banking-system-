import { showNotification } from "@/components/notification/notification";
import { Button } from "@/components/ui/button";

export default function Home() {
   const click = () => {
      showNotification({
         title: 'Home',
         type: 'success',
         message: 'Hi',
         location: 'bottom-right',
         duration: 3500
      })
   }
   return (
      <div>
         <Button onClick={click}>Notify</Button>
      </div>
   )
}
