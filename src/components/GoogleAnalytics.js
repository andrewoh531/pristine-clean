export default (category, action) => {
  if (window && window.gtag) {
    window.gtag(`event`, action, {
      'event_category': category
    })
  }
}
