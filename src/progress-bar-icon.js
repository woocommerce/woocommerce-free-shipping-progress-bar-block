/**
 * External dependencies
 */
import { Path, SVG } from '@wordpress/components';

export default function ProgressBarIcon() {
	return (
		<svg
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			preserveAspectRatio="xMidYMid meet"
			viewBox="0 0 20 20"
			width="20"
			height="20"
		>
			<defs>
				<path
					d="M18.73 7.5C18.88 7.5 19 7.62 19 7.77C19 8.91 19 12.09 19 13.23C19 13.38 18.88 13.5 18.73 13.5C15.19 13.5 4.81 13.5 1.27 13.5C1.12 13.5 1 13.38 1 13.23C1 12.09 1 8.91 1 7.77C1 7.62 1.12 7.5 1.27 7.5C4.81 7.5 15.19 7.5 18.73 7.5Z"
					id="a3HIePHoOc"
				></path>
				<mask
					id="maskb1IBID9s4E"
					x="-1"
					y="5.5"
					width="22"
					height="10"
					maskUnits="userSpaceOnUse"
				>
					<rect
						x="-1"
						y="5.5"
						width="22"
						height="10"
						fill="white"
					></rect>
					<use xlinkHref="#a3HIePHoOc" opacity="1" fill="black"></use>
				</mask>
				<path
					d="M2 8.5L14 8.5L14 12.5L2 12.5L2 8.5Z"
					id="e2OKmT2GNc"
				></path>
			</defs>
			<g>
				<g>
					<g>
						<use
							xlinkHref="#a3HIePHoOc"
							opacity="1"
							fill="#96588a"
							fillOpacity="0"
						></use>
						<g mask="url(#maskb1IBID9s4E)">
							<use
								xlinkHref="#a3HIePHoOc"
								opacity="1"
								fillOpacity="0"
								stroke="#96588a"
								strokeWidth="2"
								strokeOpacity="1"
							></use>
						</g>
					</g>
					<g>
						<use
							xlinkHref="#e2OKmT2GNc"
							opacity="1"
							fill="#96588b"
							fillOpacity="1"
						></use>
						<g>
							<use
								xlinkHref="#e2OKmT2GNc"
								opacity="1"
								fillOpacity="0"
								stroke="#84fa15"
								strokeWidth="0"
								strokeOpacity="1"
							></use>
						</g>
					</g>
				</g>
			</g>
		</svg>
	);
}
