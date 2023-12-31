const { app } = require('@azure/functions');

app.http('*', {
    methods: ['GET', 'POST', 'PUT'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);

        // Check if the URL contains "api/subscription"
        if (request.url.includes('api/subscription')) {
            return { status: 200, body: 'OK 2' };
        } else {
            return { status: 404, body: 'Not Found' };
        }
    }
});
