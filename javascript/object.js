// Create Clock class for getting current time and day

// Class constructor
function Clock(elementId) {
    this.elementId = elementId;
}

// Method to start the live clock display
Clock.prototype.start = function () {
    const element = document.getElementById(this.elementId);
    if (!element) {
        console.error("Clock element not found");
        return;
    }

    setInterval(() => {
        const today = new Date();
        const day = today.getDay();
        let hours = today.getHours();
        let minutes = today.getMinutes();
        const amPm = hours >= 12 ? 'PM' : 'AM';
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const dayName = daysOfWeek[day];

        // Convert to 12-hour time
        hours = hours % 12 || 12;

        // Format minutes with leading zero
        minutes = this.formatTime(minutes);

        // Output to element
        element.innerHTML = `${dayName} ${hours}:${minutes} ${amPm}`;
    }, 100);
};

// Helper function to add a leading zero to minutes if needed
Clock.prototype.formatTime = function (timeUnit) {
    return timeUnit < 10 ? '0' + timeUnit : timeUnit;
};


// Instance of Clock object
const clock = new Clock("clock");
clock.start();
