import { __ } from '@wordpress/i18n';
import { useBlockProps,RichText } from '@wordpress/block-editor';
import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
// import { Inner } from './inner';
import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const blockProps = useBlockProps();
	const onChangeContent = ( newContent ) => {
		setAttributes( { content:newContent } )
	};
	const [ showInner, setShowInner ] = useState( false );
	const toggleInner = () => {
		setShowInner( !showInner );
	};
	const [ accordionClass, setAcordionClass] = useState('accordion-inner-exit-done');
	const updateAccorionClass = ( status ) => {
		if( status === 'entered' ) {
			setAcordionClass('accordion-inner-enter-done');
		} else if( status === 'exited') {
			setAcordionClass('accordion-inner-exit-done');
		};
	};

	return (
		<>
			<div onClick={ toggleInner }>
				<RichText
					{ ...blockProps }
					tagName='p'
					onChange={ onChangeContent }
					allowedFormats={ [ 'core/bold', 'core/italic' ] }
					value={ attributes.content }
					placeholder={ __( 'Write your text...' ) }
				/>
			</div>
			{/* <CSSTransition
				in={ showInner }
				timeout={ 500 }
				classNames="accordion-inner"
				onEntered={ () => updateAccorionClass('entered') }
				onExited={ () => updateAccorionClass('exited') }
			>
				<Inner
					innerContent={ attributes.innerContent }
					setInnerContent={ onChangeInnerContent }
					accordionClass={ accordionClass }
				/>
			</CSSTransition> */}
		</>
	);
};