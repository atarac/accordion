import { __ } from '@wordpress/i18n';
import { RichText } from '@wordpress/block-editor';

export function Inner ( { innerContent, setInnerContent, accordionClass }) {
  const onChangeInnerContent = ( newInnerContent ) => {
    setInnerContent( newInnerContent );
  };

  return (
    <RichText
      tagName='p'
      className={ accordionClass }
      onChange={ onChangeInnerContent }
      allowedFormats={ [ 'core/bold','core/italic' ] }
      value = { innerContent }
      placeholder={ __( 'Write your text...' ) }
    />
  );
};