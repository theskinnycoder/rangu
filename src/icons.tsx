import { cn } from "@/utils";
import type { SVGProps } from "react";

export const ICONS = {
	tooltipArrow: (props: SVGProps<HTMLOrSVGElement>) => (
		<svg
			width={8}
			height={8}
			viewBox="0 0 8 8"
			className={cn(
				"rng-fill-dropdown-bg rng-rotate-180 rng-transform",
				props.className,
			)}
		>
			<path d="M0 0 L4 4 L8 0" />
		</svg>
	),
	checkMark: (props: SVGProps<HTMLOrSVGElement>) => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			strokeLinecap="round"
			strokeLinejoin="round"
			className={cn(
				"rng-absolute rng-left-1 rng-top-1/2 rng--translate-y-1/2 rng-text-text !rng-size-3 rng-shrink-0 rng-stroke-current rng-fill-none rng-stroke-[2.5]",
				props.className,
			)}
		>
			<path
				stroke="none"
				d="M0 0h24v24H0z"
				fill="none"
			/>
			<path d="M5 12l5 5l10 -10" />
		</svg>
	),
	chevronDown: (props: SVGProps<HTMLOrSVGElement>) => (
		<svg
			aria-hidden="true"
			xmlns="http://www.w3.org/2000/svg"
			width="8"
			height="7"
			viewBox="0 0 8 7"
			className={cn(
				"rng-inline-block rng-ml-1.5 rng-text-border rng-transition-all rng-duration-75 rng-ease-in-out",
				props.className,
			)}
		>
			<path
				fill="currentColor"
				fillOpacity="1"
				fillRule="evenodd"
				stroke="none"
				d="m3.646 5.354-3-3 .708-.708L4 4.293l2.646-2.647.708.708-3 3L4 5.707l-.354-.353z"
			></path>
		</svg>
	),
	eyeDropper: (props: SVGProps<HTMLOrSVGElement>) => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="15"
			height="15"
			viewBox="0 0 15 15"
			className={cn(props.className)}
		>
			<path
				fill="currentColor"
				fillOpacity="1"
				fillRule="nonzero"
				stroke="none"
				d="M14.122.688c-.8-.8-2-.8-2.8 0l-2.8 2.8-.8-.7c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l.7.7-5.8 5.8c-.4.4-1 1.9 0 2.9 1 1 2.5.4 2.9 0l5.8-5.8.7.7c.4.4 1 .4 1.4 0 .4-.4.4-1 0-1.4l-.7-.7 2.8-2.8c.8-.9.8-2.1 0-2.9zm-10.9 11.9h-1v-1l5.8-5.8 1 1c-.1 0-5.8 5.8-5.8 5.8z"
			></path>
		</svg>
	),
};
