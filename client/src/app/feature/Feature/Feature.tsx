import React from 'react';
import MainLayout from 'app/common/layouts/MainLayout';
import FeaturesRoutes from './FeatureRouters';

const Features: React.FC = () => (
  <MainLayout>
    <FeaturesRoutes />
  </MainLayout>
);
export default Features;