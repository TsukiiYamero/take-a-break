import { Popup } from '@/popup';
import { Route, Routes } from 'react-router';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Popup />} />
    </Routes>
  );
};
