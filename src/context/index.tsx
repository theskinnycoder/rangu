import * as React from "react";
import { type Color, type ColorFormat } from "react-aria-components";

interface RanguContextProps {
	value: Color;
	onChange: (value: Color) => void;
}

const RanguContext = React.createContext<RanguContextProps | null>(null);

export { RanguContext, type RanguContextProps };
