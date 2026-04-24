import { SubMenuItem } from './SubMenuItem';

export interface MenuItem {
	icon: React.ReactNode;
	label: string;
	color: string;
	pulseColor: string;
	subItems: SubMenuItem[];
	path?: string;
  }