const {Writings, User} = require('../models/index')
const { GraphQLUpload } = require('graphql-upload');
const { Buffer } = require('buffer');

const resolvers = {

    Upload: GraphQLUpload,

    Query: {
        getAllUser: async () => {
            const user = await User.find()
            return user
          },

          getWritings: async () => {
            try {
              const writings = await Writings.find();
              if (!writings || writings.length === 0) {
                return []; // Return an empty array if no writings are found
              }
              // Convert the base64 content back to its original formatting
              return writings;
            } catch (error) {
              throw new Error(error.message);
            }
          },
          getWriting: async (_, { id }) => {
            try {
              const writing = await Writings.findById(id);
              if (writing) {
                // Convert the base64 content back to its original formatting
                return writing;
              } else {
                throw new Error('Writing not found');
              }
            } catch (error) {
              throw new Error(error.message);
            }
        },

    },
    Mutation: {
        uploadTextFile: async (_, { base64File }) => {
            try {
              // Extract data from the base64 string
              const base64Data = base64File.replace(/^data:text\/plain;base64,/, '');
              const buffer = Buffer.from(base64Data, 'base64');
      
              // Assuming you have a Writing model
              const newWriting = new Writings({
                filename: `uploaded-file-${Date.now()}.txt`, // Example filename
                data: buffer.toString('base64'), // Store file data as a Buffer
                contentType: 'text/plain', // Specify the content type
                content: buffer.toString('utf8'), // Convert buffer to string for content field
                title: 'Untitled', // Default title
                chapter: '1', // Default chapter
              });
      
              await newWriting.save();
      
              return {
                success: true,
                message: 'Text file uploaded successfully!',
                file: newWriting,
              };
            } catch (error) {
              return {
                success: false,
                message: error.message,
              };
            }
          },
          addUser: async (parent, {username, email, password}) => {
            const user = await User.create({username, email, password});
            const token = signToken(user);
    
            return {token, user};
        },
        login: async (parent, {username, email, password}) => {
            const user = await User.findOne({ $or: [{ username: username }, { email: email }] });
            if (!user) {
              throw AuthenticationError;
            }  
            
            const correctPw = await user.isCorrectPassword(password);
    
            if (!correctPw) {
                throw AuthenticationError
              }
              const token = signToken(user);
              return {token, user} 
    
        }
        },
};

module.exports = resolvers;