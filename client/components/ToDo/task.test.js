import Task from "./task";

describe("Task", () => {
  it("should create a task with the given properties", () => {
    const task = new Task(
      "Test Task",
      "This is a test task",
      new Date("2023-12-31")
    );

    expect(task.title).toBe("Test Task");
    expect(task.description).toBe("This is a test task");
    expect(task.date).toEqual(new Date("2023-12-31"));
    expect(task.completed).toBe(false);
  });

  it("should mark the task as completed", () => {
    const task = new Task(
      "Test Task",
      "This is a test task",
      new Date("2023-12-31")
    );

    task.completeTask();
    expect(task.completed).toBe(true);
  });

  it("should return the correct time remaining", () => {
    const futureDate = new Date(Date.now() + 1000 * 60 * 60); // 1 hour from now
    const task = new Task(
      "Test Task",
      "This is a test task",
      futureDate
    );
    const timeRemaining = task.getTimeRemaining();
    expect(timeRemaining).toBeLessThanOrEqual(1000 * 60 * 60);
  });

  it("should return the correct time remaining string", () => {
    const futureDate = new Date(Date.now() + // now + 
        (1000 * 60 * 60 * 24) * 3 + // 3 days
        (1000 * 60 * 60) * 4 +      // 4 hours 
        (1000 * 60) * 2 +           // 2 minutes 
        (1000) * 45                 // 45 seconds
        );
    const task = new Task(
        "Test Task",
        "This is a test task",
        futureDate
    );
    const timeRemainingString = task.getTimeRemainingString();
    expect(timeRemainingString).toBe("3 days, 4 hr, 2 m, 45 s");
  });

  it("should return the correct string representation", () => {
    const task = new Task(
      "Test Task",
      "This is a test task",
      new Date("2023-12-31")
    );
    const taskString = task.toString();
    expect(taskString).toBe('Test Task: "This is a test task", Sun Dec 31 2023 00:00:00 GMT+0000 (Coordinated Universal Time) (completion: false)');
  });
});
