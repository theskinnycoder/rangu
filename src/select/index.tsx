import { cn } from "@/utils";
import {
	Button,
	ListBox,
	ListBoxItem,
	Popover,
	Select,
	SelectValue,
	type ListBoxItemProps,
	type SelectProps,
} from "react-aria-components";

interface RanguSelectProps<T extends object>
	extends Omit<SelectProps<T>, "children"> {
	items?: Iterable<T>;
	children: React.ReactNode | ((item: T) => React.ReactNode);
}

const RanguSelect = <T extends object>(props: RanguSelectProps<T>) => {
	const { className, children, items, ...rest } = props;

	return (
		<Select {...rest}>
			<Button
				className={cn(
					"text-text rounded-small border border-transparent text-[11px] font-medium hover:border-border outline-none h-7 inline-flex items-center group/select-btn w-16",
					"focus-visible:ring-2 focus-visible:ring-accent",
					className,
				)}
			>
				<SelectValue />
				<svg
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					width="8"
					height="7"
					viewBox="0 0 8 7"
					className={cn(
						"inline-block ml-1.5 group-hover/select-btn:ml-3 group-hover/select-btn:text-text text-border transition-all duration-75 ease-in-out",
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
			</Button>
			<Popover
				offset={0}
				className={cn(
					"outline outline-border rounded-small overflow-hidden outline-1 shadow-md shadow-dropdown-bg",
				)}
			>
				<ListBox
					items={items}
					className={cn("bg-dropdown-bg py-1 text-text min-w-20 text-[11px]")}
				>
					{children}
				</ListBox>
			</Popover>
		</Select>
	);
};

RanguSelect.displayName = "Rangu.Select";

interface RanguSelectItemProps<T extends object>
	extends Omit<ListBoxItemProps<T>, "children"> {
	children: React.ReactNode;
}

const RanguSelectItem = <T extends object>(props: RanguSelectItemProps<T>) => {
	const { className, children, ...rest } = props;

	return (
		<ListBoxItem
			{...rest}
			className={cn(
				"py-1 outline-none focus:bg-accent cursor-default pl-5 relative",
				className,
			)}
		>
			{({ isFocused, isSelected }) => (
				<div className={cn("px-1 text-[11px]", isFocused && "bg-accent")}>
					{/* Check Mark Icon */}
					{isSelected && (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							strokeLinecap="round"
							strokeLinejoin="round"
							className={cn(
								"absolute left-1 top-1/2 -translate-y-1/2 text-text !size-3 shrink-0 stroke-current fill-none stroke-[2.5]",
							)}
						>
							<path
								stroke="none"
								d="M0 0h24v24H0z"
								fill="none"
							/>
							<path d="M5 12l5 5l10 -10" />
						</svg>
					)}

					{children}
				</div>
			)}
		</ListBoxItem>
	);
};

RanguSelectItem.displayName = "Rangu.SelectItem";

export { RanguSelect, RanguSelectItem, type RanguSelectProps };
