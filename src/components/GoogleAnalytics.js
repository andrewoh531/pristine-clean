
export default (category, action) => {
    if (window && window.ga) {
        window.ga(`send`, `event`, category, action);
    }
}
