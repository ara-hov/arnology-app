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

export type testimonialsType = {
  id?: number | string;
  info: string;
  name: string;
  profession: string;
};

export type worksType = {
  id?: string;
  title: string;
  info: string;
  img: string;
};

export interface SelectType {
  value: string;
  label: any | ReactNode;
}

export interface ApproachType {
  title: string;
  content: Array<string>;
}

export interface AboutWorksDataType {
  img: ReactNode;
  result: number;
  text: string;
}

export interface CareerPositionType {
  profesion: string;
  location: string;
  id: string;
}

export interface CareerOfferType {
  icon: ReactNode;
  title: string;
  desc: string;
  id: string;
}

export interface CareerValueType {
  icon: ReactNode;
  title: string;
  desc: string;
  id: string;
}

export interface ICareerMorePositionType {
  title: string;
  desc: Array<string>;
  id: string;
}
