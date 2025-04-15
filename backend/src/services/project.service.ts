import { Project } from '../models/project.model';

export class ProjectService {
  static async createProject(ownerId: number, name: string, description: string, code: string) {
    const project = await Project.create({ ownerId, name, description, code });
    return project;
  }

  static async getProjectsByOwner(ownerId: number) {
    return await Project.findAll({ where: { ownerId } });
  }

  static async updateProject(projectId: number, data: Partial<{ name: string; description: string; code: string }>) {
    const project = await Project.findByPk(projectId);
    if (!project) throw new Error('Project not found');
    await project.update(data);
    return project;
  }

  static async deleteProject(projectId: number) {
    const project = await Project.findByPk(projectId);
    if (!project) throw new Error('Project not found');
    await project.destroy();
    return { message: 'Project deleted successfully' };
  }
}