import { Layout } from 'components/common/Layout';
import { CreateEvent } from 'pages/CreateEvent';
import { EditEvent } from 'pages/EditEvent';
import { EventDetails } from 'pages/EventDetails';
import { Main } from 'pages/Main';

export const routes = [
  {
    path: '/',
    element: <Layout />,
    // loader: ,
    children: [
      { path: '/', element: <Main /> },
      { path: 'create', element: <CreateEvent /> },
      { path: ':eventId/edit', element: <EditEvent /> },
      { path: ':eventId', element: <EventDetails /> },
    ],
  },
];
