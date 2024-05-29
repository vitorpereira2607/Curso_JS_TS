import React from 'react'
import { NewsLetterContainer, NewsLetterInput, NewsLetterTitle } from './styled'
export const NewsLetter = () => {
    return (
        <NewsLetterContainer>
            <NewsLetterTitle>RECEIVE THE MOST EXCITING NEWS AND PROMOTIONS.</NewsLetterTitle>
                <NewsLetterInput placeholder="Insert your email here..."></NewsLetterInput>
        </NewsLetterContainer>
    )
}
