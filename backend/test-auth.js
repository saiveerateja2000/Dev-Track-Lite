const { MongoMemoryServer } = require('mongodb-memory-server');
const { spawn } = require('child_process');
const axios = require('axios');
const path = require('path');

function waitForServer(url, timeout = 10000) {
  const start = Date.now();
  return new Promise((resolve, reject) => {
    const attempt = async () => {
      try {
        await axios.get(url, { timeout: 1000 });
        return resolve();
      } catch (e) {
        if (Date.now() - start > timeout) return reject(new Error('Server did not start in time'));
        setTimeout(attempt, 500);
      }
    };
    attempt();
  });
}

async function run() {
  const mongod = await MongoMemoryServer.create();
  const mongoUri = mongod.getUri();
  const PORT = 5002;
  console.log('Memory MongoDB URI:', mongoUri);

  const serverProc = spawn('node', ['server.js'], {
    cwd: path.resolve(__dirname),
    env: Object.assign({}, process.env, { MONGODB_URI: mongoUri, PORT: String(PORT) }),
    stdio: ['ignore', 'pipe', 'pipe']
  });

  serverProc.stdout.on('data', (d) => process.stdout.write(`[server] ${d}`));
  serverProc.stderr.on('data', (d) => process.stderr.write(`[server err] ${d}`));

  const baseUrl = `http://localhost:${PORT}`;
  try {
    await waitForServer(baseUrl, 15000);
  } catch (err) {
    console.error('Server failed to start:', err.message);
    serverProc.kill();
    await mongod.stop();
    process.exit(1);
  }

  try {
    // Signup
    const email = `test-${Date.now()}@example.com`;
    console.log('Trying signup for', email);
    const signup = await axios.post(`${baseUrl}/api/auth/signup`, {
      name: 'Test User',
      email,
      password: 'pass123',
      confirmPassword: 'pass123'
    }, { timeout: 5000 });
    console.log('Signup response:', signup.data);

    // Login
    const login = await axios.post(`${baseUrl}/api/auth/login`, {
      email,
      password: 'pass123'
    }, { timeout: 5000 });
    console.log('Login response:', login.data);
  } catch (err) {
    console.error('Request error:');
    if (err.response) {
      console.error('Status:', err.response.status);
      console.error('Data:', err.response.data);
    } else {
      console.error(err.message);
    }
  } finally {
    serverProc.kill();
    await mongod.stop();
  }
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
