import React, { CSSProperties, FC } from 'react';
import { Color, TextAlignProperty } from 'csstype';
import { colors } from '../../const';

type ColumnProps = {
  color?: Color;
  align?: TextAlignProperty
}

export const Column: FC<ColumnProps> = ({ color, align, children }) => {
  const style: CSSProperties = {
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
export const HeaderColumn: FC<HeaderProps> = ({ color, align, width, colSpan, children }) => {
  const style: CSSProperties = {
    ...(color && { background: color }),
    ...(align && { textAlign: align }),
    ...(width && { width })
  };
  return <th colSpan={colSpan} style={style}>{children}</th>;
};
