import React from 'react'

function Link({ children, path, className }) {

    const onClick = (event) => {

        if (event.ctrlKey || event.metaKey) {
            return;
        }

        event.preventDefault();
        window.history.pushState({}, '', path);

        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    }
    return (
        <a onClick={onClick} href={path} className={className} >
            {children}
        </a>
    )
}

export default Link;
