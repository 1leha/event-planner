import { ReactComponent as AppLogo } from './icons/logo.svg';
import { ReactComponent as AppBackground } from './icons/bg.svg';
import { ReactComponent as NoImage } from './icons/noImg.svg';

import { ReactComponent as ArrowBackIcon } from './icons/arrow-back.svg';
import { ReactComponent as ArrowMenuIcon } from './icons/arrow-menu.svg';

import { ReactComponent as CevronCalendarIcon } from './icons/chevron-calendar.svg';
import { ReactComponent as CevronPagginationIcon } from './icons/chevron-pagg.svg';
import { ReactComponent as CevronTextFieldIcon } from './icons/chevron-text-field.svg';

import { ReactComponent as CrossIcon } from './icons/cross-text-field.svg';
import { ReactComponent as PlusIcon } from './icons/plus.svg';
import { ReactComponent as SearchIcon } from './icons/search.svg';

import { ReactComponent as FilterIcon } from './icons/filters.svg';
import { ReactComponent as SortByIcon } from './icons/sortBy.svg';

interface IIcons {
  [key: string]: React.ComponentType<any>;
}

export const SVG: IIcons = {
  AppLogo,
  AppBackground,
  NoImage,
  ArrowBackIcon,
  ArrowMenuIcon,
  CevronCalendarIcon,
  CevronPagginationIcon,
  CevronTextFieldIcon,
  CrossIcon,
  PlusIcon,
  SearchIcon,
  FilterIcon,
  SortByIcon,
};
