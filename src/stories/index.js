import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { withInfo } from '@storybook/addon-info'
import {
  withKnobs,
  text,
  boolean,
  number,
  select,
} from '@storybook/addon-knobs'
import { withNotes } from '@storybook/addon-notes'
import { Button } from '../Components/Button'

storiesOf('Button', module).addDecorator(withKnobs)
  .add('Standard Button', () => (
    <Button
      kind={select('kind', ['primary', 'secondary', 'warning'], 'primary')}
      ghost={boolean('ghost', false)}
    >
      Hello Button
    </Button>
  ))
