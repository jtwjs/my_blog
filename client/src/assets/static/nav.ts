export interface NavMenu {
  label: string;
  path: string;
}

export const navItems: NavMenu[] = [
  { label: "home", path: "/home" },
  { label: "blog", path: "/blog" },
  { label: "daylog", path: "/daylog" },
  { label: "projects", path: "/projects" },
  { label: "about", path: "/about" },
];
