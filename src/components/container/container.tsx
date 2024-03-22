import React, { memo } from 'react'

type PropsType = {
   children: React.ReactNode
}

export const Container = memo(({ children }: PropsType) => {
   return (
      <div id='app-conatiner'>
         {children}
      </div>
   )
})
