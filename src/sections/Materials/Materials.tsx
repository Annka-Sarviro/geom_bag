'use client';

import useBreakpoints from '@/hooks/useBreakpoints';

import MaterialsCardMobile from '@/components/common/MaterialsCardMobile';
import MaterialsList from '@/components/materials/MaterialsList';
import Title from '@/components/typography/Title/';

import d from '@/data/materials.json';
import { MaterialProps } from './Materials.props';

const Materials = ({ data }: MaterialProps) => {
  const { less768px } = useBreakpoints();

  return (
    <div className="materials">
      <Title tag="h2" className="hidden">
        {d.title}
      </Title>
      {less768px ? <MaterialsCardMobile data={d.cards} /> : <MaterialsList data={d.cards} />}
    </div>
  );
};

export default Materials;
