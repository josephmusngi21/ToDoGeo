class Task {
    // title: string
    // description: string
    // completed: boolean
    // date: Date
    // time: string
    constructor(title, description, date, time) {
        this.title = title;
        this.description = description;
        this.date = date;
        this.time = time;
        this.completed = false;
    }

    completeTask() {
        this.completed = true;
    }

    getTimeRemaining() {
        let now = new Date();
        let timeRemaining = this.date - now;
        return timeRemaining;
    }

    toString() {
        // go grocery shopping: "don't forget milk!", 2021-03-10, 12:00:00 (completion:false)
        return this.title + ": \"" + this.description + "\", " + this.date + ", " + this.time + " (completion: " + this.completed + ")";
    }
}

export default Task;