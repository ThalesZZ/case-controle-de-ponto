import React from "react";

interface UseToggle {
	active: boolean;
	enable: () => void;
	disable: () => void;
	toggle: () => void;
}

export function useToggle(initialValue: boolean = false): UseToggle {
	const [active, setActive] = React.useState<boolean>(initialValue);
	const enable = () => setActive(() => true);
	const disable = () => setActive(() => false);
	const toggle = () => setActive((curr) => !curr);

	return { active, enable, disable, toggle };
}
