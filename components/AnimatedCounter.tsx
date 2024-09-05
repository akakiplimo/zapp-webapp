"use client"
import React from 'react'
import CountUp from 'react-countup'


const AnimatedCounter = ({amount = 100}: {amount: number}) => {
  return (
    <div className="w-full">
        <CountUp 
        end={amount}
        decimal='.'
        prefix='A$'
        decimals={2}
        duration={2.75}
    />
    </div>
  )
}

export default AnimatedCounter