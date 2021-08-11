import  {useState,useEffect} from 'react'
let day = new Date()
let day1 = new Date()
day= day.getTimezoneOffset()
day1 =day1.getHours();

export default function Home() {

    return(
        <>
        {day} {day1}
        </>
    )
}