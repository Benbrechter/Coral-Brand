const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const fs = require('fs');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const { graphqlUploadExpress } = require('graphql-upload');
const connectDB = require('./config/connections');

// Import GraphQL schemas and resolvers
const typeDefs = require('./schemas/typeDefs');
const resolvers = require('./schemas/resolvers');

const app = express();
const PORT = process.env.PORT || 3001;

// Create uploads folder if it doesn't exist
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir);
    console.log('Uploads directory created at:', uploadsDir);
}

// Connect to MongoDB
connectDB();

// Create Apollo Server
const server = new ApolloServer({
    typeDefs,
    resolvers,
    formatError: (error) => {
        console.error('GraphQL Error:', error);
        return error;
    }
});

async function startServer() {
    // Start Apollo Server
    await server.start();

    // Middleware
    app.use(cors());
    app.use(morgan('dev'));

    // GraphQL Upload middleware
    app.use(graphqlUploadExpress({ maxFileSize: 20 * 1024 * 1024, maxFiles: 1 }));

    // GraphQL endpoint
    app.use('/graphql', 
        express.json(),
        expressMiddleware(server, {
            context: async ({ req }) => {
                // Optional: Add authentication context
                return { req };
            }
        })
    );

    // Serve uploaded files statically
    app.use('/uploads', express.static(uploadsDir));

    // Add error logging for unhandled promises
    process.on('unhandledRejection', (error) => {
        console.error('Unhandled Rejection:', error);
    });

    // Start the server
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
        console.log(`Uploads directory: ${uploadsDir}`);
        console.log(`GraphQL endpoint: http://localhost:${PORT}/graphql`);
    });
}

// Start the server
startServer().catch(console.error);