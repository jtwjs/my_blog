export interface navItemInterface {
  label: string;
  path: string;
  external?: boolean;
}

export const navItems: navItemInterface[] = [
  { label: "home", path: "/home" },
  { label: "blog", path: "/blog" },
  { label: "calendar", path: "/calendar" },
  { label: "guest", path: "/guest" },
  { label: "git", path: "https://github.com/jtwjs", external: true },
];
