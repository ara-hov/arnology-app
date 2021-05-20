import { ReactNode } from 'react';

export interface HomeContainerTabProps {
  technologies: technologiesType[];
}

export type technologiesType = {
  id?: number | string;
  title?: string;
  desc: descType[];
};

export type descType = {
  id: string | number;
  imgSrc: ReactNode;
  info: string;
};

export interface ServicesProps {
  services: servicesType[];
}

export type servicesType = {
  id?: string;
  title: string;
  desc: string;
};
