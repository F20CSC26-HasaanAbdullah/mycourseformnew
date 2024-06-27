import { Createform } from '@/components/createform'
import { Formwrapper } from '@/components/formwrapper'
import React from 'react'

const CourseCreateForm = () => {
  return (
    <div>
        <Formwrapper title='Course Form'>
            <Createform/>

        </Formwrapper>
    </div>
  )
}

export default CourseCreateForm