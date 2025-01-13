import React, {FC} from 'react';
import {BasicWithBackHeaderTemplateProps} from './types';
import CommonHeader from '@organisms/CommonHeader';
import HeaderTitle from '@atoms/HeaderTitle';
import BackArrowButton from '@atoms/BackArrowButton';

const BasicWithBackHeaderTemplate: FC<BasicWithBackHeaderTemplateProps> = ({
  headerCustomStyle,
  titleTxtProps,
  title,
  onPressBack,
  backButtonProps,
}) => {
  return (
    <CommonHeader
      customStyle={headerCustomStyle}
      left={
        <CommonHeader.ComponentsGrid dir="left">
          <BackArrowButton {...backButtonProps} onPress={onPressBack} />
        </CommonHeader.ComponentsGrid>
      }
      center={
        <CommonHeader.ComponentsGrid dir="center">
          <HeaderTitle {...titleTxtProps}>{title}</HeaderTitle>
        </CommonHeader.ComponentsGrid>
      }
    />
  );
};

export default React.memo(BasicWithBackHeaderTemplate);
