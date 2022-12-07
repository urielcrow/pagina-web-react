import { Suspense, lazy } from 'react';
import { Load } from '../../componets';

const HomeScreen = lazy(() => import('../../componets/home/HomeScreen'));
const TorneosScreen = lazy(() => import('../../componets/torneos/TorneosScreen'));

export const rutasAdministrador = [
    {
        path: '/inicio',
        element: (<Suspense fallback={<Load/>}> <HomeScreen /> </Suspense>)
    },
    {
        path: '/torneos',
        element: (<Suspense fallback={<Load/>}> <TorneosScreen /> </Suspense>)
    }
];

