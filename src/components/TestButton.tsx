import React from 'react'

export const TestButton = (): React.ReactElement => {
  return (
    <button
      onClick={() => {
        window.alert('With typescript and Jest')
      }}
    >
      Test Button
    </button>
  )
}
