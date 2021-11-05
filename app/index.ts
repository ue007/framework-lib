import * as sdk from '../src/index';
import App from './app';
import './style.css';
declare global {
	interface Window {
		sdk: unknown;
		app: unknown;
	}
}

// test incore
window.sdk = sdk;
console.log(sdk);

// test application
const app = new App({
	id: 'id'
});

window.app = app;

// test mock api
fetch('/api/user')
	.then((res) => res.json())
	.catch((error) => console.error('Error:', error))
	.then((response) => console.log('Success:', response));

fetch('/api/sceneData', { method: 'POST' }).then((res) => {
	res.json().then((response) => {
		console.log('Success:', response);
	});
});
