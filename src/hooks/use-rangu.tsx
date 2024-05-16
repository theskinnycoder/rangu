import { RanguContext } from "@/context";
import * as React from "react";

const useRangu = () => {
	const context = React.useContext(RanguContext);

	if (!context) {
		throw new Error(
			"All Rangu components must be used within a Rangu.ColorPicker component.",
		);
	}

	const { outputFormat, value, onChange } = context;

	return {
		outputFormat,
		value,
		onChange,
	};
};

export { useRangu };
