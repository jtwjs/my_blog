interface navItemInterface {
  label: string;
  link: string;
  external?: boolean;
}

export const navItems: navItemInterface[] = [
  { label: "home", link: "/" },
  { label: "blog", link: "/blog" },
  { label: "calendar", link: "/calendar" },
  { label: "guest", link: "/guest" },
  { label: "git", link: "https://github.com/jtwjs", external: true },
];
