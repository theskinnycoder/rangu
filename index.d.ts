interface ColorSelectionOptions {
	signal?: AbortSignal;
}

interface ColorSelectionResult {
	sRGBHex: string;
}

interface EyeDropper {
	open: (options?: ColorSelectionOptions) => Promise<ColorSelectionResult>;
}

interface EyeDropperConstructor {
	new (): EyeDropper;
}

declare const EyeDropper: EyeDropperConstructor;
