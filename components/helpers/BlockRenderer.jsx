import { ComponentContentTypes } from 'lib/constants'

import { LandingHero } from "components/landing"
import { Split } from "components/global"

const BlockRenderer = ({ block }) => {
  // array style blocks
  if (Array.isArray(block)) {
    return (
      <>
        {block.map((b) => (
          <BlockRenderer key={`block-${b.sys.id}`} block={b} />
        ))}
      </>
    );
  }

  const contentTypeId = block.sys.contentType?.sys.id;
  const Component = ContentTypeMap[contentTypeId];

  if (!Component) {
    console.warn(`${contentTypeId} can not be handled`);
    return null;
  }

  const { id } = block.sys;

  const componentProps = {
    ...block,
    parent: block.parent,
  };

  return <Component key={`${contentTypeId}-${id}`} {...componentProps} />;
};

// map the components to constants
const ContentTypeMap = {
  [ComponentContentTypes.LandingHero]: LandingHero,
  [ComponentContentTypes.Split]: Split,
};

export default BlockRenderer