import React, { useLayoutEffect } from 'react';
import { useMainHeader } from '../../contexts/MainHeaderContext';
import PharmacyNavigation from '../PharmacyNavigation';

export default function PharmacyComponent() {
  const { dispatch } = useMainHeader();
  useLayoutEffect(() => {
    dispatch({
      type: 'change_title',
      payload: {
        title: '',
      },
    });
  }, [dispatch]);
  return <PharmacyNavigation />;
}
