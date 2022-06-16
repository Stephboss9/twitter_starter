import * as React from "react"
import AvatarIcon from "../AvatarIcon/AvatarIcon"

export default function TweetInput(props) {

  let handleOnFocus = ()=> {
    document.querySelector("textarea").classList.add("expanded")
  }

  let handleOnBlur = () => {
    if (props.value.length === 0){
      document.querySelector("textarea").classList.remove("expanded")
    }
  }

  return (
    <div className="tweet-textarea">
      <AvatarIcon />

      <textarea name="new-tweet-input" type="text" placeholder="What's Happening?" value = {props.value} onBlur = {handleOnBlur} 
      onFocus = {handleOnFocus} onChange = {props.handleOnChange}></textarea>

      <SmileIcon />
    </div>
  )
}

export const SmileIcon = () => <i className="fas fa-smile"></i>
export const ImageIcon = () => <i className="fas fa-image"></i>
