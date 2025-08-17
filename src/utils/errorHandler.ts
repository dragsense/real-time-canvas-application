export class AppError extends Error {
  public statusCode: number;
  public isOperational: boolean;

  constructor(message: string, statusCode = 500, isOperational = true) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    Error.captureStackTrace(this, this.constructor);
  }
}

export const handleError = (err: unknown) => {
  if (err instanceof AppError) {
    console.error(`Operational error: ${err.message}`);
  } else {
    console.error("Unexpected error:", err);
  }
};
