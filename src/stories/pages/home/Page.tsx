import { ThemeType } from 'types/enums/enum';
import React from 'react';
import { Button } from 'components/Button/Button';

import { Header } from 'components/Header/Header';
import './page.scss';

type User = {
  name: string;
};

export const Page: React.VFC = () => {
  const [user, setUser] = React.useState<User>();

  return (
    <article>
      <Header
        colorTheme={ThemeType.DARK}
      />
      <Button gradient label='GET IN TOUCH' />
    </article>
  );
};
