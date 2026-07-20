import React from 'react'
import Options from './components/Options'

export default function Question({ question }) {
    return (
        <div>
            <h4>{question.question}</h4>
          <Options/>
        </div>
    )
}
