import React, { CSSProperties, FC } from 'react';
import { Color, TextAlignProperty } from 'csstype';
import { colors } from '../../const';

type ColumnProps = {
  sticky?: boolean;
  color?: Color;
  align?: TextAlignProperty
}

const stickyCss: CSSProperties = {
  position: 'sticky',
  left: 0,
  background: '#fff'
};

export const Column: FC<ColumnProps> = ({ sticky = false, color, align, children }) => {
  const style: CSSProperties = {
    border: '1px solid #fff',
    ...(sticky && stickyCss),
    ...(color && { background: color }),
    ...(align && { textAlign: align })
  };

  return <td style={style}>{children}</td>
};

type ColoredColumnProps = {
  align?: TextAlignProperty
}

export const SickColumn: FC<ColoredColumnProps> = ({ align, children }) =>
  <Column color={colors.sickLight} align={align}>{children}</Column>;

export const HealhyColumn: FC<ColoredColumnProps> = ({ align, children }) =>
  <Column color={colors.healthyLight} align={align}>{children}</Column>;

export const DeadColumn: FC<ColoredColumnProps> = ({ align, children }) =>
  <Column color={colors.deadLight} align={align}>{children}</Column>;

type HeaderProps = ColumnProps & {
  colSpan?: number;
  width?: string | number;
}
export const HeaderColumn: FC<HeaderProps> = ({ sticky = false, color, align, width, colSpan, children }) => {
  const style: CSSProperties = {
    border: '1px solid #fff',
    ...(sticky && stickyCss),
    ...(color && { background: color }),
    ...(align && { textAlign: align }),
    ...(width && { width })
  };
  return <th colSpan={colSpan} style={style}>{children}</th>;
};
