// @ts-nocheck
import React from 'react';
import { ApplyPluginsType, dynamic } from '/root/src/v2board-user/node_modules/umi/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';
import LoadingComponent from '@/components/Loading';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'layouts__index' */'@/layouts/index.tsx'), loading: LoadingComponent}),
    "routes": [
      {
        "path": "/404",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__404' */'@/pages/404.tsx'), loading: LoadingComponent})
      },
      {
        "path": "/dashboard",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__dashboard__index' */'@/pages/dashboard/index.tsx'), loading: LoadingComponent})
      },
      {
        "path": "/forget",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__forget__index' */'@/pages/forget/index.tsx'), loading: LoadingComponent})
      },
      {
        "path": "/",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__index' */'@/pages/index.tsx'), loading: LoadingComponent})
      },
      {
        "path": "/invite",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__invite__index' */'@/pages/invite/index.tsx'), loading: LoadingComponent})
      },
      {
        "path": "/knowledge",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__knowledge__index' */'@/pages/knowledge/index.tsx'), loading: LoadingComponent})
      },
      {
        "path": "/login",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__login__index' */'@/pages/login/index.tsx'), loading: LoadingComponent})
      },
      {
        "path": "/order",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__order__index' */'@/pages/order/index.tsx'), loading: LoadingComponent})
      },
      {
        "path": "/order/:id",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__order__id' */'@/pages/order/[id].tsx'), loading: LoadingComponent})
      },
      {
        "path": "/plan",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__plan__index' */'@/pages/plan/index.tsx'), loading: LoadingComponent})
      },
      {
        "path": "/plan/:id",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__plan__id' */'@/pages/plan/[id].tsx'), loading: LoadingComponent})
      },
      {
        "path": "/profile",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__profile__index' */'@/pages/profile/index.tsx'), loading: LoadingComponent})
      },
      {
        "path": "/register",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__register__index' */'@/pages/register/index.tsx'), loading: LoadingComponent})
      },
      {
        "path": "/subscribe",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__subscribe__index' */'@/pages/subscribe/index.tsx'), loading: LoadingComponent})
      },
      {
        "path": "/ticket",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__ticket__index' */'@/pages/ticket/index.tsx'), loading: LoadingComponent})
      },
      {
        "path": "/ticket/:id",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__ticket__id' */'@/pages/ticket/[id].tsx'), loading: LoadingComponent})
      },
      {
        "path": "/traffic",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__traffic__index' */'@/pages/traffic/index.tsx'), loading: LoadingComponent})
      },
      {
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__404' */'@/pages/404.tsx'), loading: LoadingComponent})
      }
    ]
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
