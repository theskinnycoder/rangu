import { RanguContext, type RanguContextProps } from "@/context";
import * as React from "react";

interface RanguProviderProps
	extends React.PropsWithChildren<RanguContextProps> {}

const RanguProvider = (props: RanguProviderProps) => {
	const { value, onChange, children } = props;

	return (
		<RanguContext.Provider value={{ value, onChange }}>
			{children}
		</RanguContext.Provider>
	);
};

RanguProvider.displayName = "Rangu.Provider";

export { RanguProvider, type RanguProviderProps };
