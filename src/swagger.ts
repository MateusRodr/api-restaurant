import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Express } from 'express';
import { ur } from 'zod/v4/locales';

const Options: swaggerJSDoc.Options = {
    definition: {
        openapi: '3.0.0',
        info:{
            title: 'Restaurant API',
            version: '1.0.0',
            description: 'API for managing restaurant products'
        },
        servers: [
            {
                url: 'http://localhost:3010',
            }
        ],
    },
    apis: ['./src/routes/*.ts'],
}

const swaggerSpec = swaggerJSDoc(Options);

export default function setupSwagger(app: Express) {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}