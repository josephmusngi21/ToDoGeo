class Task {
    // title: string
    // description: string
    // completed: boolean
    // date: Date
    constructor(title, description, date) {
        this.title = title;
        this.description = description;
        this.date = date;
        this.completed = false;
    }

    completeTask() {
        this.completed = true;
    }

    getDate() {
        return this.date;
    }
    
    getTask() {
        return this.title;
    }

    getDescription() {
        return this.description;
    }

    getTimeRemainingString() { 
        // 1 day, 2hr, 3m, 4s
        let timeRemaining = this.date - Date.now();
        let days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        let hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
        return days + " days, " + hours + " hr, " + minutes + " m, " + seconds + " s";
    }

    toString() {
        // go grocery shopping: "don't forget milk!", 2021-03-10, 12:00:00 (completion:false)
        return this.title + ": \"" + this.description + "\", " + this.date + ", " + this.time + " (completion: " + this.completed + ")";
    }
}

export default Task;