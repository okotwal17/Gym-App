import React from 'react'
import SectionWrapper from './SectionWrapper.Jsx'
import ExerciseCard from './ExerciseCard'

export default function Workout(props) {
    const {workout}=props
  return (
    <SectionWrapper id={'workout'} header={"welcome to"} title={['The', 'DANGER ', 'zone']}>
        <div className='flex flex-col gap-4 py-10'>
            {workout.map((exercise,i)=>{
                return (
                  <ExerciseCard i={i} exercise={exercise} key={i}></ExerciseCard>
                )
            })}
        </div>
    </SectionWrapper>
  )
}
