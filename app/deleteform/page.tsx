import { Deleteform } from '@/components/deleteform'
import { Formwrapper } from '@/components/formwrapper'
import React from 'react'

const Deletepage = () => {
    return (
        <div>
            <Formwrapper title='Delete Form'>
                <Deleteform />
            </Formwrapper>
        </div>
    )
}

export default Deletepage