import React, { useState } from 'react'
import "../style.css"

const Accordion = ({ items }) => {

    const [activeIndex, setActiveIndex] = useState(null);

    const setActiveDiv = (index) => {
        if (index === activeIndex) {
            setActiveIndex(null)

        } else {
            setActiveIndex(index)
        }
    }

    const renderItem = items.map((item, index) => {

        const active = index === activeIndex ? "active" : "";

        return (
            <React.Fragment key={item.title + item.content}>
                <div className={`title ${active}`} onClick={() => setActiveDiv(index)}>
                    <i className='dropdown icon' ></i>
                    {item.title}
                </div>
                <div className={`content ${active}`}>
                    <p> {item.content}</p>
                </div>
            </React.Fragment>
        )
    });

    return (
        <div className='ui styled accordion' >
            {renderItem}
        </div>
    )
}

export default Accordion;
