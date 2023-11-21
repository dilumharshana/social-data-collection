import {
  connectDatabase,
  connectFirebase
} from "./services/database-service.js";


export const initializeApp = async () => {
  // we can perform application initializing tasks here

  //get db connections, load master data from database, etc..

  await connectFirebase();
  await connectDatabase();

  console.log(`Server started on PORT : http://${process.env.port}`);
};
