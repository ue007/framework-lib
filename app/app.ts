import './style.css';

export type AppOptionType = { id: string };

/**
 * App主入口
 *
 * @classdesc
 *
 * @example
 *  let app = new App({
 *
 * });
 * @class
 * @category
 * @extends {maptalks.CanvasLayer}
 * @param {AppOptionType} options - options defined in [options]{@link App#options}
 */
export default class App {
	_options: AppOptionType;

	constructor(options: AppOptionType) {
		this._options = options;
	}
}
