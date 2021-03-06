import { Request, Response } from "express";
import { SuggestClientUseCase } from "./SuggestClientUseCase";

export class SuggestClientController {
  constructor(
    private suggestClientUseCase: SuggestClientUseCase
  ) {}

  async handle(request: Request, response: Response) {
    const { q } = request.query;

    const user_id = request.user.id;
    
    try {
      const clients = await this.suggestClientUseCase.execute({ user_id: String(user_id), q: String(q) || ''});

      return response.status(200).send({clients})
    } catch (error) {
      console.log(`Error >> ${error}`);
      return response.status(400).json({
        message: 'Unexpected error'
      })
    }
  }
}