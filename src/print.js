import { convertToNonSense } from 'canvas-draw-edit'

export default function printMe(){
	const text = 'I get called from print.js and the webpack server with console open with newthing on my editor '
	console.log(convertToNonSense(text))
}