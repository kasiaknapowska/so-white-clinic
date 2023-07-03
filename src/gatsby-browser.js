export const shouldUpdateScroll = ({ routerProps }) => {
    const hasAnchor = !!routerProps.location.hash; // (ie. /#features)
  
    return hasAnchor
  }