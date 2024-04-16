/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as RootImport } from './routes/_root'
import { Route as AuthImport } from './routes/_auth'

// Create Virtual Routes

const ProfileLazyImport = createFileRoute('/profile')()
const RootIndexLazyImport = createFileRoute('/_root/')()
const RootSupportLazyImport = createFileRoute('/_root/support')()
const RootForbusinessLazyImport = createFileRoute('/_root/forbusiness')()
const RootCoworkingsLazyImport = createFileRoute('/_root/coworkings')()
const AuthSignupLazyImport = createFileRoute('/_auth/signup')()
const AuthLoginLazyImport = createFileRoute('/_auth/login')()

// Create/Update Routes

const ProfileLazyRoute = ProfileLazyImport.update({
  path: '/profile',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/profile.lazy').then((d) => d.Route))

const RootRoute = RootImport.update({
  id: '/_root',
  getParentRoute: () => rootRoute,
} as any)

const AuthRoute = AuthImport.update({
  id: '/_auth',
  getParentRoute: () => rootRoute,
} as any)

const RootIndexLazyRoute = RootIndexLazyImport.update({
  path: '/',
  getParentRoute: () => RootRoute,
} as any).lazy(() => import('./routes/_root/index.lazy').then((d) => d.Route))

const RootSupportLazyRoute = RootSupportLazyImport.update({
  path: '/support',
  getParentRoute: () => RootRoute,
} as any).lazy(() => import('./routes/_root/support.lazy').then((d) => d.Route))

const RootForbusinessLazyRoute = RootForbusinessLazyImport.update({
  path: '/forbusiness',
  getParentRoute: () => RootRoute,
} as any).lazy(() =>
  import('./routes/_root/forbusiness.lazy').then((d) => d.Route),
)

const RootCoworkingsLazyRoute = RootCoworkingsLazyImport.update({
  path: '/coworkings',
  getParentRoute: () => RootRoute,
} as any).lazy(() =>
  import('./routes/_root/coworkings.lazy').then((d) => d.Route),
)

const AuthSignupLazyRoute = AuthSignupLazyImport.update({
  path: '/signup',
  getParentRoute: () => AuthRoute,
} as any).lazy(() => import('./routes/_auth/signup.lazy').then((d) => d.Route))

const AuthLoginLazyRoute = AuthLoginLazyImport.update({
  path: '/login',
  getParentRoute: () => AuthRoute,
} as any).lazy(() => import('./routes/_auth/login.lazy').then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_auth': {
      preLoaderRoute: typeof AuthImport
      parentRoute: typeof rootRoute
    }
    '/_root': {
      preLoaderRoute: typeof RootImport
      parentRoute: typeof rootRoute
    }
    '/profile': {
      preLoaderRoute: typeof ProfileLazyImport
      parentRoute: typeof rootRoute
    }
    '/_auth/login': {
      preLoaderRoute: typeof AuthLoginLazyImport
      parentRoute: typeof AuthImport
    }
    '/_auth/signup': {
      preLoaderRoute: typeof AuthSignupLazyImport
      parentRoute: typeof AuthImport
    }
    '/_root/coworkings': {
      preLoaderRoute: typeof RootCoworkingsLazyImport
      parentRoute: typeof RootImport
    }
    '/_root/forbusiness': {
      preLoaderRoute: typeof RootForbusinessLazyImport
      parentRoute: typeof RootImport
    }
    '/_root/support': {
      preLoaderRoute: typeof RootSupportLazyImport
      parentRoute: typeof RootImport
    }
    '/_root/': {
      preLoaderRoute: typeof RootIndexLazyImport
      parentRoute: typeof RootImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  AuthRoute.addChildren([AuthLoginLazyRoute, AuthSignupLazyRoute]),
  RootRoute.addChildren([
    RootCoworkingsLazyRoute,
    RootForbusinessLazyRoute,
    RootSupportLazyRoute,
    RootIndexLazyRoute,
  ]),
  ProfileLazyRoute,
])

/* prettier-ignore-end */
