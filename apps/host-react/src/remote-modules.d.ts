declare module 'dashboard_remote/DashboardApp' {
  const Component: React.ComponentType;
  export default Component;
}

declare module 'profile_remote/mount' {
  export function mount(el: HTMLElement): void;
}