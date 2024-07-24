"use client"
// components/withAuth.tsx
import { useEffect, ComponentType } from 'react';

const withAuth = <P extends object>(WrappedComponent: ComponentType<P>) => {
  const ComponentWithAuth = (props: P) => {
    

    useEffect(() => {
      const token = localStorage.getItem('token');
      if (!token) {
        
      }

      console.log('Token:', token);
    }, [WrappedComponent]);

    return <WrappedComponent {...props} />;
  };

  return ComponentWithAuth;
};

export default withAuth;
