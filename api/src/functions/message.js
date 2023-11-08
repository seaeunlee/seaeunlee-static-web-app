const { app } = require('@azure/functions');

app.http('message', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);

        if (request.url.includes('api/subscriptions')) {
            document.write('<h1>200 OK</h1>');
        } else {
            document.write('<h1>404 Not Found</h1>');
        }

        const name = request.query.get('name') || await request.text() || 'world';

        return { body: `Hello, ${name}!` };
    }
});
