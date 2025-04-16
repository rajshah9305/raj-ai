import { Request, Response, NextFunction } from 'express';
import { AIService } from '../services/ai.service';

export class AIController {
  static async generate(req: Request, res: Response, next: NextFunction) {
    try {
      const { prompt } = req.body;
      if (!prompt) {
        return res.status(400).json({ error: 'Prompt is required' });
      }
      const code = await AIService.generateCode(prompt);
      res.status(200).json({ code });
    } catch (err) {
      next(err);
    }
  }
}