import * as d3 from "d3";

export interface Scale {
	financetime: (
		d3_scale_linear?: typeof d3.scaleLinear,
		d3_time?: typeof d3,
		d3_bisect?: typeof d3.bisect,
		techan_util_rebindCallback?: (target: unknown, source: unknown, postSetCallback: () => void) => void,
		scale_widen?: (widening: number, width: number) => (d: number, i: number, array: []) => number,
		techan_scale_zoomable?: () => (linear: Scale, zoomed: () => void, domainLimit: unknown, clamp: unknown) => number
	) => typeof d3.bisect | typeof d3.scaleLinear,
	plot: unknown
}