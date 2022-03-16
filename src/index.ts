// Imports the Google Cloud client library
import { Datastore } from "@google-cloud/datastore";

// Creates a client
const datastore = new Datastore();

async function run() {
  // The kind for the new entity
  const kind = "Task";

  // The name/ID for the new entity
  const name = "sampletask1";

  // The Cloud Datastore key for the new entity
  const taskKey = datastore.key([kind, name]);

  // Prepares the new entity
  // const task = {
  //   key: taskKey,
  //   data: {
  //     description: "Buy milk",
  //   },
  // };

  // Saves the entity
  //   const [result] = await datastore.save(task);
  //   console.debug(result.mutationResults);

  const [entity] = await datastore.get(taskKey);
  console.debug(entity);

  //   const [response] = await datastore.delete(taskKey);
  //
}

run();
