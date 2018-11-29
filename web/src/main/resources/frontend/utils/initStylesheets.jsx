export default function initStylesheets(stylesheets) {
    stylesheets.forEach(element => {
        var link = document.createElement("link");
        link.href = `${window.contextPath}${element}`;
        link.rel = 'stylesheet';
        document.querySelector('head').appendChild(link);
    });
}

module.exports = initStylesheets;