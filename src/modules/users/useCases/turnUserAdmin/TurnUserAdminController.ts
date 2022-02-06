import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    // Complete aqui
    try {
      const { user_id } = request.params;
      const id = user_id.toString();
      const user = this.turnUserAdminUseCase.execute({ user_id: id });

      return response.status(201).json(user);
    } catch (err) {
      return response.status(404).json({ err: err.message });
    }
  }
}

export { TurnUserAdminController };
