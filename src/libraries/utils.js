function convertSecondstoValidFormat(time) {

    let dateObj = new Date(time * 1000);
    const minutes = dateObj.getUTCMinutes();
    const seconds = dateObj.getSeconds();

    const timeString = minutes.toString().padStart(2, '0')
        + ':' + seconds.toString().padStart(2, '0');

    return timeString;
}

export {
    convertSecondstoValidFormat
};