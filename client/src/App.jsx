import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import WWriting from './pages/weekly-writings';
import PrevWriting from './pages/previous-writings';
import Contact from './pages/componets/contact';
import Home from './pages/Home';
import Iphone from './pages/Iphone';
import Read from './pages/readable-writings';
import Login from './pages/componets/login';
import OnLoad from './pages/componets/onload';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';


const uploadLink = createHttpLink({
  uri: '/graphql', // your GraphQL endpoint
  headers: {
    'x-apollo-operation-name': 'UploadWriting'
  }
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: uploadLink,
  cache: new InMemoryCache(),
});
// Custom Hook for Route Loading
const useRouteLoading = () => {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust loading duration as needed

    return () => clearTimeout(timer);
  }, [location.pathname]); // Trigger on route change

  return isLoading;
};

// Wrapper Component to Add Loading to Routes
const RouteLoaderWrapper = ({ children }) => {
  const isRouteLoading = useRouteLoading();

  // Use your existing OnLoad component for route loading
  if (isRouteLoading) {
    return <OnLoad />;
  }

  return children;
};

function App() {

  return (
  <ApolloProvider client = {client}>
    <Router>
      <RouteLoaderWrapper>
        <div className='page-container'>
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/writings" element={<WWriting />} />
              <Route path="/prevWriting" element={<PrevWriting />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Navigate to="/" />} />
              <Route path='/Iphone' element={<Iphone/>} />
              <Route path='/documents/:id' element={<Read/>} />
              <Route path='/login' element={<Login/>} />
            </Routes>
          </main>
        </div>
      </RouteLoaderWrapper>
    </Router>
</ApolloProvider>
  );
}

export default App;