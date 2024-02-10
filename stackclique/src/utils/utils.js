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
        case yesterday >= diffDate:
            return "Yesterday";
        case today >= diffDate:
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

export function getDateText(date) {
    const dd = new Date(date).getDay();
    const mm = new Date(date).getMonth();
    const yyyy = new Date(date).getFullYear();
    return `${dd + 1} ${getMonth(mm)} ${yyyy}`;
}

export function timeOfDay(date) {
    const time = new Date(date);
    const hr = time.getHours();
    const min = time.getMinutes();
    const meridiam = hr <= 12 ? "am" : "pm";
    const clockHr = hr <= 12 ? hr : hr - 12;
    return `${clockHr}:${min <= 9 ? "0" + min : min} ${meridiam}`;
}

export function shortText(text, length = 30) {
    if (text.length > length) {
        return text.slice(0, length);
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

// @desc: For testing purposes
export function randomTimestamp(start) {
    const startTime = new Date(start).getTime();
    const endTime = new Date().getTime();
    const randTime = new Date(
        startTime + Math.random() * (endTime - startTime),
    );

    return randTime.toISOString();
}

// export function timeGrouping(arr) {
//     return arr.reduce((groups, item) => {
//         const objGroup = {};
//         const commonStamp = getDateFromTimestamp(item.timestamp);
//         if (commonStamp) {
//             !objGroup[commonStamp]
//                 ? (objGroup[commonStamp] = new Array())
//                 : null;
//             objGroup[commonStamp].push(item);
//         }
//         groups.push(objGroup);
//         return groups;
//     }, []);
//     // return new Array(group);
// }
