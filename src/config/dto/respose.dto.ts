export class ApiResponse<T> {
  success: boolean;
  data?: T;
  message: string;
  error?: string; // Add the error field

  constructor(success: boolean, data: T, message: string, error?: string) {
    this.success = success;
    this.data = data;
    this.message = message;
    this.error = error; // Assign the error
  }
}
