import React from 'react';
import { Link } from 'gatsby';
import Layout from '../layout/Layout';
import Button from '../components/Button/Button';

const AboutPage = () => (
  <Layout>
    <h1>Hello people, this is a about page</h1>
    <Button as={Link} to="/">
      Go back
    </Button>
  </Layout>
);
export default AboutPage;
