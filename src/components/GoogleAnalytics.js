export default (category, action) => {
  if (window && window.ga) {
    window.ga(`send`, `event`, {
      eventCategory: category,
      eventAction: action,
    })
  }
}
