import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeCinfig/routeConfig';

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Загрузка...</div>}>
      <Routes>
        {Object.values(routeConfig).map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
