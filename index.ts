import { config } from 'dotenv';
import { app } from './configureExpress';
import { BaseEntity } from 'typeorm';
import { createTypeORMConn } from './src/utils/createTypeORMConnection';
config();

const PORT = process.env.PORT || 4000;

async function main(): Promise<void> {
  const connection = await createTypeORMConn();
  BaseEntity.useConnection(connection);

  app.listen(PORT, () => {
    console.log(`server is in ${process.env.NODE_ENV} mode`);
    console.log(`server is running on PORT ${PORT} `);
  });
}

main();
