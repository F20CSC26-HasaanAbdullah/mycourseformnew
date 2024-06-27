import { Formwrapper } from '@/components/formwrapper'
import { Updateform } from '@/components/updateform'
import React from 'react'

const Updatepage = () => {
  return (
    <div>
        <Formwrapper title='Update Form'>
            <Updateform/>
        </Formwrapper>
    </div>
  )
}

export default Updatepage