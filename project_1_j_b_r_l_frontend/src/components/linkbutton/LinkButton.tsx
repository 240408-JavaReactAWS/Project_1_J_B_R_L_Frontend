import React from 'react'
import { Link } from 'react-router-dom'

interface ILinkButtonProps {
    link: string
}
function LinkButton(props: ILinkButtonProps) {
  return (
    <a href={props.link} target='_blank' rel='noopener'><button>Play now!</button></a>
  )
}

export default LinkButton
