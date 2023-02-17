import { Route, Routes } from 'react-router-dom';

import { Layout } from './layout';
import { Home, Crew, Technology, Destination, NotFound } from './pages';

export const paths = ['home', 'destination', 'crew', 'technology'] as const;
export type AppPaths = typeof paths[number];

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {['/', 'home'].map(path => (
          <Route key={path} path={path} element={<Home />} />
        ))}
        <Route path="destination" element={<Destination />} />
        <Route path="technology" element={<Technology />} />
        <Route path="crew" element={<Crew />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
