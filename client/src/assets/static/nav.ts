export interface NavItem {
  label: string;
  path: string;
  external?: boolean;
}

export const navItems: NavItem[] = [
  { label: "home", path: "/home" },
  { label: "blog", path: "/blog" },
  { label: "daylog", path: "/daylog" },
  { label: "about", path: "/about" },
  { label: "guest", path: "/guest" },
  { label: "git", path: "https://github.com/jtwjs", external: true },
];
