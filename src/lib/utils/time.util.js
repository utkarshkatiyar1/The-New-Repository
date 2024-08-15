export function getTimeDifference(timestamp) {
    // Create a Date object for the current time
    const now = new Date();
    
    // Create a Date object for the specified timestamp
    const targetDate = new Date(timestamp);
    
    // Calculate the difference in milliseconds
    const diffInMs = now - targetDate;
    
    // Convert milliseconds to seconds, minutes, hours, and days
    const diffInSeconds = Math.floor(diffInMs / 1000);
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    const diffInHours = Math.floor(diffInMinutes / 60);
    const diffInDays = Math.floor(diffInHours / 24);
    
    // Format the result
    return {
        days: diffInDays,
        hours: diffInHours % 24,
        minutes: diffInMinutes % 60,
        seconds: diffInSeconds % 60
    };
}