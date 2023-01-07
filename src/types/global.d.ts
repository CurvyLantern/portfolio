declare module '*.svg' {
	import type { ReactElement, SVGProps } from 'react';

	const content: (props: SVGProps<SVGElement>) => ReactElement;
	export default content;
}
declare module '*.mp4' {
	const value: string;
	export = value;
}

declare module '*.webm' {
	const value: string;
	export = value;
}

declare module '*.mov' {
	const value: string;
	export = value;
}

declare module '*.ogg' {
	const value: string;
	export = value;
}

declare module '*.swf' {
	const value: string;
	export = value;
}

declare module '*.ogv' {
	const value: string;
	export = value;
}
