// export function shouldUpdateScroll({
//   routerProps: { location },
//   getSavedScrollPosition,
// }) {

//   console.log(location.pathname)
//   const { pathname } = location
//   // list of routes for the scroll-to-top-hook
//   const scrollToTopRoutes = [`/leczenie/wybielanie/`, `/leczenie/implanty/`]
//   // if the new route is part of the list above, scroll to top (0, 0)
//   if (scrollToTopRoutes.indexOf(pathname) !== -1) {
//     console.log("ok")
//     window.scrollTo(0, 0)
//   }

//   return false
// }