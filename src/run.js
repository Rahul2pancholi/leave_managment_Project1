
const Hapi = require('@hapi/hapi');

const init = async () => {

    const server = Hapi.server({
        port: 8080,
        host: 'localhost'
    });

    server.route({
        method: 'GET',
        path: '/',
        handler: (request, responce) => {

            return 'Hello World!';
        }
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

init();