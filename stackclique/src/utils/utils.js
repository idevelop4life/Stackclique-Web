"use strict";

export function filterSearch(keyword, array) {
    if (!array) return false;
    return array?.filter((item) => {
        return keyword.split(/\s+/).some((word) => {
            return item.name.toLowerCase().includes(word.toLowerCase());
        });
    });
}

export function timestampGroup(date) {
    const curDate = new Date();
    const msgDate = new Date(date);
    const diffDate = curDate - msgDate;
    const wkms = 7 * 24 * 60 * 60 * 1000;
    const yesterday = 2 * 24 * 60 * 60 * 1000;
    const today = 24 * 60 * 60 * 1000;

    switch (true) {
        case diffDate > wkms:
            return getDateText(msgDate);
        case diffDate <= wkms && diffDate > yesterday:
            return getDayOfWeek(msgDate);
        case yesterday >= diffDate && diffDate > today:
            return "Yesterday";
        case diffDate <= today:
            return "Today";
        default:
            return "Invalid Date";
    }
}

export function getMonth(date) {
    switch (new Date(date).getMonth()) {
        case 0:
            return "January";
        case 1:
            return "February";
        case 2:
            return "March";
        case 3:
            return "April";
        case 4:
            return "May";
        case 5:
            return "June";
        case 6:
            return "July";
        case 7:
            return "August";
        case 8:
            return "September";
        case 9:
            return "October";
        case 10:
            return "November";
        case 11:
            return "December";
    }
}

export function getDayOfWeek(date) {
    switch (new Date(date).getDay()) {
        case 0:
            return "Sunday";
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
    }
}

export function getDateText(date) {
    const dd = new Date(date).getDate();
    const mm = getMonth(date);
    const yyyy = new Date(date).getFullYear();
    return `${dd} ${mm} ${yyyy}`;
}

export function dateToTimestamp(date) {
    return new Date(date).toISOString();
}

export function timeOfDay(date) {
    const time = new Date(date);
    const hr = time.getHours();
    const min = time.getMinutes();
    const meridiam = hr <= 12 ? "am" : "pm";
    const clockHr = hr <= 12 ? hr : hr - 12;
    return `${clockHr}:${min <= 9 ? "0" + min : min} ${meridiam}`;
}

export function shortText(text, length = 30, out="") {
    if (text.length > length) {
        return text.slice(0, length)+out;
    } else {
        return text;
    }
}

export function getDateFromTimestamp(date) {
    return date.slice(0, 10);
}

export function timeGrouping(arr) {
    const existingGrp = new Set();
    const objGroup = new Object();
    const grouped = arr.reduce((_, item) => {
        const commonStamp = getDateFromTimestamp(item.timestamp);
        if (commonStamp === item.timestamp.slice(0, 10)) {
            if (!objGroup[commonStamp] && !existingGrp.has(commonStamp)) {
                objGroup[commonStamp] = new Array();
                existingGrp.add(commonStamp);
            }
            objGroup[commonStamp].push(item);
        }
        return objGroup;
    }, []);
    const output = Object.entries(grouped).map((item) => {
        sortByTime(item[1]);
        return item;
    });
    return sortByDate(output);
}

export function getReply(id, data) {
    if ((id, data)) {
        const output = data.filter((item) => {
            return item.id === id ? true : false;
        });
        return output[0];
    } else {
        return null;
    }
}

export function sortByTime(data) {
    return data.sort((a, b) => {
        const vA = getTimeMilliSeconds(a.timestamp);
        const vB = getTimeMilliSeconds(b.timestamp);
        return vA - vB;
    });
}

export function sortByDate(data) {
    return data.sort((a, b) => {
        const vA = getTimeMilliSeconds(a[0]);
        const vB = getTimeMilliSeconds(b[0]);
        return vA - vB;
    });
}

export function getTimeMilliSeconds(date) {
    return new Date(date).getTime();
}

export function getCurrentTimestamp() {
    return new Date().toISOString();
}

// @desc: For testing purposes
export function randomTimestamp(start) {
    const startTime = new Date(start).getTime();
    const endTime = new Date().getTime();
    const randTime = new Date(
        startTime + Math.random() * (endTime - startTime),
    );

    return randTime.toISOString();
}
export function randomIdNumber() {
    return Date.now().toString(16) + Math.random().toString(16).substr(2);
}
