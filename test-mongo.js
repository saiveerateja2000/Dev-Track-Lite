const { MongoClient, ServerApiVersion } = require('mongodb');
// Using the password with @ encoded as %40
const uri = "mongodb+srv://saiveerateja:Alpha%401234@testcluster.kpzdgng.mongodb.net/?appName=TestCluster";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch (err) {
    console.error('Connection error:');
    console.error(err);
    process.exitCode = 1;
  } finally {
    try { await client.close(); } catch (e) {}
  }
}
run();
