import * as React from "react"
import TweetInput from "./TweetInput"
import { useEffect } from "react"
import "./TweetBox.css"


export default function TweetBox(props) {
  let disabled = (props.tweetText.length === 0 || props.tweetText.length > 140)
  let handleOnTweetTextChange = (event) => {
    props.setTweetText(event.target.value)
  }


  
  let handleOnSubmit = () => {
  let newTweet = {
    name: props.userProfile.name, 
    handle: props.userProfile.handle,
    text: props.tweetText,
    likes: 0,
    retweets:0,
    comments:0,
    id:props.tweets.length,
  }
  props.setTweets(current => [...current, newTweet])
  props.setTweetText("")
}


  return (
    <div className="tweet-box">
      <TweetInput value = {props.tweetText} handleOnChange = {handleOnTweetTextChange} />

      <div className="tweet-box-footer">
        <TweetBoxIcons />
        <TweetCharacterCount tweetText = {props.tweetText} />
        
        <TweetSubmitButton handleOnSubmit = {handleOnSubmit} disabled = {disabled}/>

      </div>
    </div>
  )
}

export function TweetBoxIcons() {
  return (
    <div className="tweet-box-icons">
      <i className="fas fa-image"></i>
      <i className="icon-gif">GIF</i>
      <i className="far fa-chart-bar"></i>
      <i className="fas fa-map-marker-alt"></i>
    </div>
  )
}

export function TweetCharacterCount(props) {
  let characters_count = 140 - props.tweetText.length

  useEffect(() => {
   if (characters_count < 0){document.querySelector(".tweet-length").classList.add("red")}
   else {
    document.querySelector(".tweet-length").classList.remove("red")
   }
  })
 
  return <span className="tweet-length">{props.tweetText.length != 0 && characters_count}</span>
}

export function TweetSubmitButton(props) {
  
  return (
    <div className="tweet-submit">
      <i className="fas fa-plus-circle"></i>
      <button onClick = {props.handleOnSubmit} disabled = {props.disabled} className="tweet-submit-button" >Tweet</button>
    </div>
  )
}
