interface Project {
  id: number;
  name: string;
  description: string;
}

interface ProjectListProps {
  projects: Project[];
}

export default function ProjectList({ projects }: ProjectListProps) {
  return (
    <ul>
      {projects.map((project) => (
        <li key={project.id}>
          <strong>{project.name}</strong> - {project.description}
        </li>
      ))}
    </ul>
  );
}