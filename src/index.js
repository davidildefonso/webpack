import './style.css'
import myImage from './my_image.png'
import Data from './data.xml'
import Notes from './data.csv'
import toml from './data.toml'
import yaml from './data.yaml'
import json5 from './data.json5'

console.log(toml.owner.name, toml.title)
console.log(yaml.owner.name, yaml.title)
console.log(json5.owner.name, json5.title)

const getComponent = async () => {
	const  { convertToNonSense } = await import('canvas-draw-edit')
	const  { revealText } = await import('./otherModule.js')
	const  { default: printMe } = await import('./print.js')

	const element = document.createElement("div")
	element.classList.add('bg', 'text-white')

	const encryptedText = document.createElement('span')
	encryptedText.innerText = convertToNonSense('Hello World!')
	encryptedText.id = 'encrypted-text'
	element.appendChild(encryptedText)

	const img = document.createElement('img')
	img.src = myImage
	img.classList.add('custom-image')
	element.appendChild(img)

	const box = document.createElement("div")
	box.classList.add('box-with-bg-image')
	element.appendChild(box)

	const button = document.createElement('button')
	button.onclick = printMe
	button.innerText = "Click me and check the console"
	element.appendChild(button)

	console.log(Data, Notes)

	const revealBtn = document.createElement('button')
	revealBtn.classList.add('reveal-button')
	revealBtn.onclick = () => revealText('encrypted-text')
	revealBtn.innerText = "CLICK ME TO REVEAL THE MESSAGE ABOVE" 
	element.appendChild(revealBtn)

	return element;
}

getComponent()
	.then((element) => {
		document.body.appendChild(element)
	})

