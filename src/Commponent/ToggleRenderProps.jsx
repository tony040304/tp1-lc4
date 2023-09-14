import React, { useState } from 'react'

const ToggleRenderProps = ({ children }) => {
    const [isOn, setisOn] = useState(false)

    const ToggleVisivility = () => {
        setisOn((prevVis) => !prevVis)
    }

  return (
    <div>
        <button onClick={ToggleVisivility}>Toggle</button>
        {isOn && children}
    </div>
  )
}

export default ToggleRenderProps