export interface HomeState {
  navLinks: navLinksType[];
  loading: boolean;
  errors: string;
}

export type navLinksType = {
  id: number | string;
  name: string;
};
