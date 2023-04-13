import httpStatus from "http-status";
import { NextFunction, Request, Response } from "express";
import { ZodSchema } from "zod";

export default function validateSchemaMiddleware(schema: ZodSchema) {
  return (req: Request, res: Response, next: NextFunction) => {

    const validation = schema.safeParse(req.body);

    console.log(validation);

    if (!validation.success) {
      // const errors = validation.error.errors.
      //   map((error) => `${error.path} ${error.message}`)
      return res.status(httpStatus.UNPROCESSABLE_ENTITY).send({
        validation
      })
    }

    next();
  }
}