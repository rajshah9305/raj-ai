import { DataTypes, Model } from 'sequelize';
import sequelize from '../database/db';

export interface IProjectAttributes {
  id?: number;
  name: string;
  description: string;
  ownerId: number;
  code: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export class Project extends Model<IProjectAttributes> implements IProjectAttributes {
  public id!: number;
  public name!: string;
  public description!: string;
  public ownerId!: number;
  public code!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Project.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT, allowNull: false },
    ownerId: { type: DataTypes.INTEGER, allowNull: false },
    code: { type: DataTypes.TEXT, allowNull: false }
  },
  {
    tableName: 'projects',
    sequelize
  }
);