import { ICONS } from "@/icons";
import { cn } from "@/utils";
import {
	Button,
	ListBox,
	ListBoxItem,
	type ListBoxItemProps,
	Popover,
	Select,
	type SelectProps,
	SelectValue,
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
			{({ isOpen }) => (
				<>
					{/* Select Trigger */}
					<Button
						className={cn(
							"rng-text-text rng-rounded-small rng-border rng-border-transparent rng-text-[11px] rng-font-medium hover:rng-border-border rng-outline-none rng-h-7 rng-inline-flex rng-items-center rng-w-16 rng-group/select-btn",
							"focus-visible:rng-ring-2 focus-visible:rng-ring-accent",
							{
								"rng-ring-2 rng-ring-accent": isOpen,
							},
							className,
						)}
					>
						<SelectValue />

						{/* Chevron Down Icon */}
						<ICONS.chevronDown
							className={cn(
								"group-hover/select-btn:rng-ml-3 group-hover/select-btn:rng-text-text",
								"group-focus-visible/select-btn:rng-ml-3 group-focus-visible/select-btn:rng-text-text",
								{
									"rng-ml-3 rng-text-text": isOpen,
								},
							)}
						/>
					</Button>

					{/* Select Items */}
					<Popover
						className={cn(
							"rng-outline rng-outline-border rng-rounded-small rng-overflow-hidden rng-outline-1 rng-shadow-md rng-shadow-dropdown-bg",
						)}
					>
						<ListBox
							items={items}
							className={cn(
								"rng-bg-dropdown-bg rng-py-1 rng-text-text rng-min-w-20 rng-text-[11px]",
							)}
						>
							{children}
						</ListBox>
					</Popover>
				</>
			)}
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
				"rng-py-1 rng-outline-none focus:rng-bg-accent rng-cursor-default rng-pl-5 rng-relative",
				className,
			)}
		>
			{({ isFocused, isSelected }) => (
				<div
					className={cn(
						"rng-px-1 rng-text-[11px]",
						isFocused && "rng-bg-accent",
					)}
				>
					{/* Check Mark Icon */}
					{isSelected && <ICONS.checkMark />}

					{children}
				</div>
			)}
		</ListBoxItem>
	);
};

RanguSelectItem.displayName = "Rangu.SelectItem";

export { RanguSelect, RanguSelectItem, type RanguSelectProps };
