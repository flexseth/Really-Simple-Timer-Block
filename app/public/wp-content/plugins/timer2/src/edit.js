/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

// @see https://github.com/WordPress/gutenberg/tree/trunk/packages/components/src/button-group
import { Button, ButtonGroup } from '@wordpress/components';

import { useEffect } from '@wordpress/element';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */

export default function Edit({attributes, setAttributes}) {

	const handleTimer = e => {

		// for now just switches timer with useEffect
		const timerAction = 
			e.target.className.includes('start-timer') ? 'start' : 
			e.target.className.includes('pause-timer') ? 'pause' : 
			e.target.className.includes('record-timer') ? 'record' : null // unfinished
		setAttributes({timerAction})	// sets local variable to attributes
		console.log('timerAction: ', attributes.timerAction, 'From attributes.')	
		// watch for timerAction to change

		// console.log(props.attributes.timer)

		switch (timerAction) {
					
			case 'start':
				console.log("Attributes [inside 'start' timer action]: ", {attributes})
				alert('starting timer')

				// const timer = props.attributes.timer
				
				// This is the first time we've created this timer block.
				{ !attributes.timer 
					setAttributes({timer: 0})
					console.log("Initial timer set to 0. ")
				}

				setInterval( () => {
					console.log("Attributes [inside setInterval]: ", {attributes})
					let timer = attributes.timer++
					setAttributes( timer, timer + 1 ) 
					console.log(attributes.timer)
				}, 1000)

				break
			}
	}
	
	// handle changes when the buttons are clicked
	useEffect(() => {
		
	}),[handleTimer]

	return (
		
		<ButtonGroup {...useBlockProps()}> 
			<Button variant="primary" onClick={handleTimer} className="start-timer">Start Timer</Button>
			<Button variant="primary" onClick={handleTimer} className="pause-timer">Pause Timer</Button>
			<Button variant="primary" onClick={handleTimer} className="record-timer">Record Timer</Button>
		</ButtonGroup>

	);
}
