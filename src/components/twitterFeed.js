import React from "react"

const TwitterFeed = () => {
  return (
    <div>
      <h3>Twitter Feed</h3>
      <a
        class="twitter-timeline"
        data-width="400"
        data-height="600"
        data-dnt="true"
        data-theme="light"
        href="https://twitter.com/MikeTyson?ref_src=twsrc%5Etfw"
      >
        Tweets by MikeTyson
      </a>
    </div>
  )
}

export default TwitterFeed
