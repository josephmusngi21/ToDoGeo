import Task from "./task";

describe("Task", () => {
  it("should create a task with the given properties", () => {
    const task = new Task(
      "Test Task",
      "This is a test task",
      new Date("2023-12-31"),
      "12:00:00"
    );

    console.log(task.toString());

    expect(task.title).toBe("Test Task");
    expect(task.description).toBe("This is a test task");
    expect(task.date).toEqual(new Date("2023-12-31"));
    expect(task.time).toBe("12:00:00");
    expect(task.completed).toBe(false);
  });

  it("should mark the task as completed", () => {

      
      const task = new Task(
          "Test Task",
          "This is a test task",
          new Date("2023-12-31"),
          "12:00:00"
        );

    console.log(task.toString());
    
    task.completeTask();
    expect(task.completed).toBe(true);
  });

  it("should return the correct time remaining", () => {
    console.log(task.toString());

    const futureDate = new Date(Date.now() + 1000 * 60 * 60); // 1 hour from now
    const task = new Task(
      "Test Task",
      "This is a test task",
      futureDate,
      "12:00:00"
    );
    const timeRemaining = task.getTimeRemaining();
    expect(timeRemaining).toBeLessThanOrEqual(1000 * 60 * 60);
  });
});
