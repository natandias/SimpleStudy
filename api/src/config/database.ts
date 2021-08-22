import * as dotenv from 'dotenv';
dotenv.config();

type DatabaseConfig = {
  type: 'mysql' | 'postgres';
  host: string;
  port: number;
  database: string;
  username: string;
  password: string;
};

export default (): DatabaseConfig => ({
  type: 'mysql',
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT),
  database: process.env.DATABASE_NAME,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
});
