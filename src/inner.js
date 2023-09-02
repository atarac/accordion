import { __ } from '@wordpress/i18n';
import { RichText } from '@wordpress/block-editor';

export function Inner ( { innerContent, setInnerContent, accordionClass }) {
  const onChangeContent = ( newContent ) => {
    setInnerContent( newContent );
  };

  return (
    <RichText
      tagName='p'
      className={ accordionClass }
      onChange={ onChangeContent }
      allowedFormats={ [ 'core/bold','core/italic' ] }
      value = { innerContent }
      placeholder={ __( 'Write your text...' ) }
    />
  );
};