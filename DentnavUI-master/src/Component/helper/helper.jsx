function detectMob() {
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];

    return toMatch.some((toMatchItem) => {
        // console.log("in helper",navigator.userAgent.match(toMatchItem));
        return navigator.userAgent.match(toMatchItem);
    });
}

export default detectMob;