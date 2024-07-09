import { ICONS } from "@/icons";
import { cn } from "@/utils";
import * as React from "react";
import {
	OverlayArrow,
	Tooltip,
	type TooltipProps,
} from "react-aria-components";

interface RanguTooltipProps extends Omit<TooltipProps, "children"> {
	children: React.ReactNode;
}

const RanguTooltip = React.forwardRef<HTMLDivElement, RanguTooltipProps>(
	(props: RanguTooltipProps, forwardedRef) => {
		const { children, className, ...rest } = props;

		return (
			<Tooltip
				{...rest}
				ref={forwardedRef}
				className={cn(
					"rng-rounded-small rng-bg-dropdown-bg rng-text-text rng-max-w-40 rng-text-[11px] rng-tracking-tight rng-outline-none rng-forced-color-adjust-none rng-px-2.5 rng-py-1 rng-shadow-sm rng-z-50 rng-shadow-black rng-opacity-100 rng-bg-opacity-100",
					"rng-ring-[0.5px] rng-ring-border rng-mt-0.5",
					"rng-will-change-contents",
					className,
				)}
				placement="bottom"
			>
				{/* Tooltip Arrow */}
				<OverlayArrow>
					<ICONS.tooltipArrow />
				</OverlayArrow>

				{/* Tooltip Content */}
				{children}
			</Tooltip>
		);
	},
);

RanguTooltip.displayName = "Rangu.Tooltip";

export { RanguTooltip, type RanguTooltipProps };
