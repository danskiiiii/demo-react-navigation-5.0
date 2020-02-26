import { createRef } from 'react';
export const navigationRef = createRef();

export function navigate(name, params = {}) {
  navigationRef.current && navigationRef.current.navigate(name, params);
}

export function getCurrentRoute() {
  if (navigationRef.current) {
    let routeData = navigationRef.current.getRootState();
    while (routeData.routes) {
      routeData = routeData.routes[routeData.index].state
        ? routeData.routes[routeData.index].state
        : routeData.routes[routeData.index];
    }
    return routeData;
  }

  return null;
}
