function main() {
    // ACCESSING ALL THREE HAND ELEMENTS
    const secDiv = document.getElementById('second');
    const minDiv = document.getElementById('minute');
    const hourDiv = document.getElementById('hour');
    // GIVING A TIME INTERVEL - 1S
    setInterval(updateClock, 1000);
    // THE MAIN FUNTION FOR ALL HANDS
    function updateClock() {
        // ACCESSING DATE() FUNTION
        let date = new Date();
        // ACCESSING METHODS IN DATE OBJECT
        let sec = date.getSeconds() / 60;
        let min = ( sec + date.getMinutes() ) / 60;
        let hour = ( min + date.getHours() ) / 12;
        // EVERY 1S -ROTATING THE CLOCKS'S SECOND HAND
        secDiv.style.transform = "rotate(" + (sec * 360) + "deg)";
        // EVERY 1M -ROTATING THE CLOCKS'S MINUTE HAND
        minDiv.style.transform = "rotate(" + (min * 360) + "deg)";
        // EVERY 1H -ROTATING  THE  CLOCKS'S HOUR HAND
        hourDiv.style.transform = "rotate(" + (hour * 360) + "deg)";
    }
    updateClock();
}
