function foo() {
    return performance.now();
}

function bar(selectors_) {
    const selectors = [];
    if (Array.isArray(selectors_)) {
        selectors.push(...selectors_);
    } else {
        selectors.push(selectors_);
    }
    const result = {};
    selectors.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        result[selector] = elements.length;
    });
    return result;
}

async function baz(selectors) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(bar(selectors));
        }, 3000);
    })
}