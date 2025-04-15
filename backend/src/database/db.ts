import { Sequelize } from 'sequelize';
import { config } from '../config/config';
import { logger } from '../utils/logger';

const sequelize = new Sequelize(config.databaseUrl, {
  dialect: 'postgres',
  logging: (msg) => logger.info(msg)
});

export const initDB = async () => {
  try {
    await sequelize.authenticate();
    logger.info('Database connection established successfully.');
    // Here you could call sequelize.sync() if needed.
  } catch (error) {
    logger.error('Unable to connect to the database: ' + error);
    process.exit(1);
  }
};

export default sequelize;