import { Request, Response, NextFunction } from 'express';
import { ProjectService } from '../services/project.service';

export class ProjectController {
  static async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, description, code } = req.body;
      const ownerId = (req as any).user.id;
      const project = await ProjectService.createProject(ownerId, name, description, code);
      res.status(201).json(project);
    } catch (err) {
      next(err);
    }
  }

  static async list(req: Request, res: Response, next: NextFunction) {
    try {
      const ownerId = (req as any).user.id;
      const projects = await ProjectService.getProjectsByOwner(ownerId);
      res.status(200).json(projects);
    } catch (err) {
      next(err);
    }
  }

  static async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { projectId } = req.params;
      const data = req.body;
      const project = await ProjectService.updateProject(Number(projectId), data);
      res.status(200).json(project);
    } catch (err) {
      next(err);
    }
  }

  static async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const { projectId } = req.params;
      const result = await ProjectService.deleteProject(Number(projectId));
      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  }
}