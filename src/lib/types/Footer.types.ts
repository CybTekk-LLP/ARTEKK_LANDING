export interface IFooterI18n {
	copyrightLabel: string;
	productLabel: string;
}
export interface IFooterContent {
	navigationOptions: ISingleOption[];
	bottomOptions: ISubOption[];
	appStoreLink: string;
	googlePlayLink: string;
}

interface ISingleOption {
	name: string;
	subOptions: ISubOption[];
	icons?: boolean;
}

interface ISubOption {
	name?: string;
	url: string;
	iconSrc?: string;
	blank?: string;
}
