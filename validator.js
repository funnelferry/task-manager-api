class Validator {
    static validateTask(task) {
      if (task.hasOwnProperty("title") && task.title.trim() !== "" &&
          task.hasOwnProperty("description") && task.description.trim() !== "" &&
          task.hasOwnProperty("completed") && typeof task.completed === "boolean") {
        return {
          "status": true,
          "message": "Task is valid"
        };
      }
      return {
        "status": false,
        "message": "Task is invalid"
      };
    }
  }
  
  module.exports = Validator;
  