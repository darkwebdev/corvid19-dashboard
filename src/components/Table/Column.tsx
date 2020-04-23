import React, { CSSProperties, FC } from 'react';
import { TextAlignProperty } from 'csstype';

type ColumnProps = {
  className?: "sick" | "healthy" | "dead";
  align?: TextAlignProperty
}

export const Column: FC<ColumnProps> = ({ className, align, children }) => {
  const style: CSSProperties = {
    ...(align && { textAlign: align })
  };

  return <td className={className} style={style}>{children}</td>
};

type ColoredColumnProps = {
  align?: TextAlignProperty
}

export const SickColumn: FC<ColoredColumnProps> = ({ align, children }) =>
  <Column className="sick" align={align}>{children}</Column>;

export const HealhyColumn: FC<ColoredColumnProps> = ({ align, children }) =>
  <Column className="healthy" align={align}>{children}</Column>;

export const DeadColumn: FC<ColoredColumnProps> = ({ align, children }) =>
  <Column className="dead" align={align}>{children}</Column>;

type HeaderProps = ColumnProps & {
  colSpan?: number;
  width?: string | number;
}
export const HeaderColumn: FC<HeaderProps> = ({ className, align, width, colSpan, children }) => {
  const style: CSSProperties = {
    ...(align && { textAlign: align }),
    ...(width && { width })
  };
  return <th colSpan={colSpan} className={className} style={style}>{children}</th>;
};
