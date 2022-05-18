import { returnSense } from 'canvas-draw-edit'

export const revealText = (elementId) => {
	const element = document.getElementById(elementId)
	const decrypted = returnSense(element.innerText)
	element.innerText = decrypted
}


