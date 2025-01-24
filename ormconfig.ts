// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config({ path: '../.env' });

import type { ConnectionOptions } from 'typeorm';

/**
 *
 *  This file should be used for migrations & seeds only.
 *
 */

console.log(
  `TypeORM is configured to connect to: ${process.env.DB_NAME}, NODE_ENV=${process.env.NODE_ENV}`,
);

const isProduction = process.env.NODE_ENV === 'production';

const config: Array<ConnectionOptions> = [
  {
    type: 'postgres',
    entities: isProduction
      ? [__dirname + '/dist/src/**/entities/*.entity.js']
      : [__dirname + '/src/**/entities/*.entity.ts'],

    database: process.env.TYPEORM_DATABASE,
    logging: true,
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    host: process.env.TYPEORM_HOST ?? 'localhost',
    synchronize: false,
    migrationsRun: true,
    migrationsTableName: 'migrations',
    migrations: isProduction
      ? [__dirname + '/dist/src/migrations/*.js']
      : [__dirname + '/src/migrations/*.ts'],
  },
];

export default config;
