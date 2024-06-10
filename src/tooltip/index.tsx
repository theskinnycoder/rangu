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
					"rounded-small bg-dropdown-bg text-text max-w-40 text-[11px] tracking-tight outline-none forced-color-adjust-none px-2.5 py-1 shadow-sm z-50 shadow-black opacity-100 bg-opacity-100",
					"ring-[0.5px] ring-border mt-0.5",
					className,
				)}
				placement="bottom"
			>
				<OverlayArrow>
					<svg
						width={8}
						height={8}
						viewBox="0 0 8 8"
						className="fill-dropdown-bg rotate-180 transform"
					>
						<path d="M0 0 L4 4 L8 0" />
					</svg>
				</OverlayArrow>
				{children}
			</Tooltip>
		);
	},
);

RanguTooltip.displayName = "Rangu.Tooltip";

export { RanguTooltip, type RanguTooltipProps };
