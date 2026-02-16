import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'dashboard',
    renderMode: RenderMode.Client,
  },
  {
    path: 'favorites',
    renderMode: RenderMode.Client,
  },
  {
    path: 'order-lists',
    renderMode: RenderMode.Client,
  },
  {
    path: 'team',
    renderMode: RenderMode.Client,
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
