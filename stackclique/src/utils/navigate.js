"use strict";

export function getURLPath() {
    const path = window.location.pathname;
    return path;
}

export function getURLSource() {
    const path = window.location.href;
    return path;
}
export function getURLOrigin() {
    const path = window.location.origin;
    return path;
}

export function getTheme(type = "primary") {
    switch (type) {
        case "primary":
            return "#7e0772";
        case "secondary":
            return "#13b351";
        case "accent":
            return "#efefef";
    }
}
