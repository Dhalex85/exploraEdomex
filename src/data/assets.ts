/** Public assets always resolve against Vite's configured deployment base. */
export const asset = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;

export const set = (files: Array<{ file: string; w: number }>) =>
  files.map(({ file, w }) => `${asset(file)} ${w}w`).join(", ");
