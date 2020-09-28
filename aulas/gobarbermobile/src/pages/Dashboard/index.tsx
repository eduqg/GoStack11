import React from 'react';
import { View, Button } from 'react-native';
import { useAuth } from '../../hooks/auth';
import { Container } from './styles';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();
  return <Container />;
};

export default Dashboard;
