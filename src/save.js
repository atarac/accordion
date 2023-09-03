import { RichText, useBlockProps } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const blockProps = useBlockProps.save();

	return (
		<>
			<div { ...blockProps }>
				<RichText.Content
					tagName="h3"
					value={ attributes.content }
				/>
			</div>
			<div className={ attributes.accordionClass }>
				<RichText.Content
					tagName="p"
					value={ attributes.innerContent }
				/>
			</div>
		</>
	);
}
