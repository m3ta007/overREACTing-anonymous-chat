import React from 'react'
import PropTypes from 'prop-types'

function Typing({ from, message }) {
  return (
    <>
      <div className="message-data">
        <span className="message-data-name">
          <i
            role="img"
            aria-label="Online Now"
            className="fa fa-circle online"></i>
          {from.name}
        </span>
        <span className="message-data-time">{message.time}</span>
      </div>
      <div>{from.name} is typing a message...</div>
    </>
  )
}

Typing.propTypes = {
  from: PropTypes.shape({
    name: PropTypes.string,
  }),
  message: PropTypes.shape({
    id: PropTypes.string,
    from: PropTypes.shape({
      name: PropTypes.string,
    }),
    type: PropTypes.string,
    time: PropTypes.string,
    text: PropTypes.string,
  }),
}

export default Typing
