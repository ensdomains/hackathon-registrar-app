import React from 'react'
import styled from '@emotion/styled'

const MessageContainer = styled('div')`
  font-family: Overpass;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 16px;
  color: #ffffff;
  text-align: center;
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  span {
    margin-left: 10px;
  }
`

const icons = {
  REGISTERED: (
    <svg width="17" height="17" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7.232 9.5939l-1.6806-1.623a.8173.8173 0 0 0-1.1557.0202l-.202.2092a.8173.8173 0 0 0 .0201 1.1557l2.32 2.2403a.8152.8152 0 0 0 .6252.2274.8169.8169 0 0 0 .7802-.214l4.8578-4.8578a.8173.8173 0 0 0 0-1.1558l-.2057-.2057a.8173.8173 0 0 0-1.1558 0L7.232 9.5939zM8.5 17C3.8056 17 0 13.1944 0 8.5S3.8056 0 8.5 0 17 3.8056 17 8.5 13.1944 17 8.5 17z"
        fill="#FFF"
        fill-rule="evenodd"
      />
    </svg>
  ),
  UNAVAILABLE: (
    <svg width="19" height="17" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9.2456 5.0302c.5001-.1232 1.021.1232 1.2294.5954.0625.1643.1042.3285.1042.5133-.0209.5133-.0625 1.047-.1042 1.5604-.0417.8007-.1042 1.622-.1459 2.4227-.0208.2669-.0208.2874-.0208.5543-.0208.4312-.3542.7597-.7918.7597-.4376 0-.771-.308-.7918-.7391-.0625-1.2525-.1458-2.2996-.2083-3.552-.0209-.3285-.0417-.657-.0625-1.006-.0209-.5133.2917-.965.7917-1.1087m.271 9.4444c-.5835 0-1.0627-.4722-1.0627-1.047 0-.575.4792-1.0472 1.0626-1.0472.5834 0 1.0627.4723 1.0418 1.0677.0209.5543-.4792 1.0265-1.0418 1.0265M2.849 17h13.2936c2.1878 0 3.563-2.3611 2.4795-4.209L11.9544 1.4168c-1.0835-1.889-3.834-1.889-4.9174 0L.3694 12.791C-.6933 14.6594.661 17 2.8489 17"
        fill="#FFF"
        fill-rule="evenodd"
      />
    </svg>
  )
}

function Message({ message, page }) {
  const icon = icons[page]
  console.log(page)
  return (
    <MessageContainer>
      {icon}
      <span>{message}</span>
    </MessageContainer>
  )
}
export default Message
