import React, { FC, useState } from 'react';

type Tab = {
  text: string;
  onClick: () => void;
}
type TabsProps = {
  tabs: Tab[];
}
const Tabs: FC<TabsProps> = ({ tabs}) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return <nav>
    {tabs.map(({ text, onClick }, i) =>
      <button
        onClick={() => { onClick(); setActiveIndex(i); }}
        style={{
          ...(activeIndex === i && { fontWeight: 'bold', textDecoration: 'underline' }),
          marginRight: '1em',
          marginBottom: '1em',
          padding: '0.5em 1em',
          border: '1px solid',
          background: 'none',
          cursor: 'pointer',
          fontSize: '0.8rem'
        }}
      >{text}</button>
    )}
  </nav>;
};

export default Tabs;
