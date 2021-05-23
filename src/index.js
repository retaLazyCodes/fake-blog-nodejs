import '@babel/polyfill'
import app from './app'

const port = process.env.PORT ? process.env.PORT : 8081

async function main() {
    await app.listen(port);
    console.log('Server on port: ' + port);
}

main();