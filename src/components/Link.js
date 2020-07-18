import React from 'react';

const Link = ({ className, href, children }) => {
  const onClick = (event) => {
    if (event.metaKey || event.ctrlKey) {
      return; // ctrl-key opens in a new tab
    }

    event.preventDefault(); // prevent reloading
    window.history.pushState({}, '', href); // update URL
    
    // communicate the changes
    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  };

  return (
    <a onClick={onClick} className={className} href={href}>
      {children}
    </a>
  );
};

export default Link;