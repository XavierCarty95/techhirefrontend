import React from 'react'

export default function Job(props) {
    console.log(props)
    return (
        <div>
           {props.job.name}
        </div>
    )
}
