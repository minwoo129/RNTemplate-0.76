import React, {FC} from 'react';
import {BasicHeaderTemplateProps} from './types';
import CommonHeader from '@components/common/CommonHeader';
import HeaderTitle from '@components/common/HeaderTitle';

const BasicHeader: FC<BasicHeaderTemplateProps> = ({
  headerCustomStyle,
  titleTxtProps,
  title,
}) => {
  return (
    <CommonHeader
      customStyle={headerCustomStyle}
      center={
        <CommonHeader.ComponentsGrid dir="center">
          <HeaderTitle {...titleTxtProps}>{title}</HeaderTitle>
        </CommonHeader.ComponentsGrid>
      }
    />
  );
};

export default React.memo(BasicHeader);
