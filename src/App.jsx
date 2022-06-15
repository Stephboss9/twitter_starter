import * as React from "react"
import Feed from "./components/Feed/Feed"
import Navbar from "./components/Navbar/Navbar"
import UserProfile from "./components/UserProfile/UserProfile"
import Advertisements from "./components/Advertisements/Advertisements"
import { useState } from "react"
import { codepathUserProfile, firstTweet, navLinks } from "./constants"

export default function App() {
const [userProfile, setUserProfile] = useState(codepathUserProfile)
const [tweets, setTweets] = useState([firstTweet])
const [tweetText, setTweetText] = useState("")
const [disabled, setDisabled] = useState(false)
  return (
    <div className="app">
      <Navbar navLinks = {navLinks}/>
      <main>
        <UserProfile userProfile = {userProfile}/>
        <Feed userProfile = {userProfile} tweets = {tweets} setTweets = {setTweets} tweetText = {tweetText} setTweetText = {setTweetText}
        disabled = {disabled} setDisabled = {setDisabled}/>
        <Advertisements />
      </main>
    </div>
  )
}
