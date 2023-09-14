import React from 'react'

const Togleetip = ({ children, text }) => {
  return (
    <div style={{ display: 'inline', position: 'relative' }}>
        {children}
        <div className="tooltip">
            <span className="tooltiptext">{text}</span>
        </div>
    </div>
  )
}

export default Togleetip