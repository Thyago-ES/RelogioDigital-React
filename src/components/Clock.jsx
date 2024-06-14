import { useEffect, useState } from "react";
import { ClockContainer } from "./styles/Clock";

import Visor from "./Visor";

export function Clock() {
	const [time, setTime] = useState(new Date());

	useEffect(() => {
		const interval = setInterval(() => {
			setTime(() => new Date());
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	const formatTimeUnit = (unit) => {
		return unit < 10 ? `0${unit}` : unit;
	};

	const hours = formatTimeUnit(time.getHours());
	const minutes = formatTimeUnit(time.getMinutes());
	const seconds = formatTimeUnit(time.getSeconds());

	return (
		<ClockContainer>
			<Visor time={hours} />
			<Visor time={minutes} />
			<Visor time={seconds} />
		</ClockContainer>
	);
}
