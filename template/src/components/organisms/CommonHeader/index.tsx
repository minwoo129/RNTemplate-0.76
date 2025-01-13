import React, {ReactNode} from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';

interface CommonHeaderProps {
  customStyle?: StyleProp<ViewStyle>;
  left?: ReactNode;
  center?: ReactNode;
  right?: ReactNode;
}

interface HeaderSectionGridProps {
  dir: 'left' | 'center' | 'right';
  visible: boolean;
  children?: ReactNode;
}

interface ComponentsGridProps {
  dir: 'left' | 'center' | 'right';
  customStyle?: StyleProp<ViewStyle>;
  children?: ReactNode;
}

// =================================================================================================
type convertVisibleStatusArgs = {
  dir: 'left' | 'center' | 'right';
  left?: ReactNode;
  center?: ReactNode;
  right?: ReactNode;
};

const convertVisibleStatus = ({
  dir,
  left,
  center,
  right,
}: convertVisibleStatusArgs) => {
  let visible = false;
  if (dir === 'left') {
    if (left) {
      return true;
    }
    if (center && right) {
      return true;
    }
  }
  if (dir === 'center') {
    return center ? true : false;
  }
  if (dir === 'right') {
    if (right) {
      return true;
    }
    if (center && left) {
      return true;
    }
  }
  return visible;
};
// =================================================================================================

const CommonHeader = ({
  customStyle,
  left,
  center,
  right,
}: CommonHeaderProps) => {
  const visibleLeft = convertVisibleStatus({dir: 'left', left, center, right});
  const visibleCenter = convertVisibleStatus({
    dir: 'center',
    left,
    center,
    right,
  });
  const visibleRight = convertVisibleStatus({
    dir: 'right',
    left,
    center,
    right,
  });
  return (
    <View style={[styles.container, customStyle]}>
      <HeaderSectionGrid dir="left" visible={visibleLeft}>
        {left}
      </HeaderSectionGrid>
      <HeaderSectionGrid dir="center" visible={visibleCenter}>
        {center}
      </HeaderSectionGrid>
      <HeaderSectionGrid dir="right" visible={visibleRight}>
        {right}
      </HeaderSectionGrid>
    </View>
  );
};

const HeaderSectionGrid = ({
  dir,
  visible,
  children,
}: HeaderSectionGridProps) => {
  let styles: StyleProp<ViewStyle> = [sectionStyles.container];
  if (dir === 'left') {
    styles.push({paddingLeft: 16});
  } else if (dir === 'center') {
    styles.push({});
  } else if (dir === 'right') {
    styles.push({paddingRight: 16});
  }

  if (!visible) {
    return null;
  }
  return <View style={styles}>{children}</View>;
};

CommonHeader.ComponentsGrid = ({
  dir,
  customStyle,
  children,
}: ComponentsGridProps) => {
  let styles: StyleProp<ViewStyle> = [sectionStyles.grid, customStyle];
  if (dir === 'left') {
    styles.push({justifyContent: 'flex-start'});
  } else if (dir === 'center') {
    styles.push({justifyContent: 'center'});
  } else if (dir === 'right') {
    styles.push({justifyContent: 'flex-end'});
  }

  return <View style={styles}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 48,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
const sectionStyles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
  },
  grid: {
    flex: 1,
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default CommonHeader;
