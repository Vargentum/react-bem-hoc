import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import BemHOC from '../index'

const BemifiedButton = BemHOC('button', 'Button')
const label = 'Click to see attached classes'

storiesOf('BemHOC', module)
  .add('without mods', () => (
    <BemifiedButton onClick={action('Button')}>{label}</BemifiedButton>
  ))
  .add('one mod', () => (
    <BemifiedButton onClick={action('Button Button--foo')} mod="foo">{label}</BemifiedButton>
  ))
  .add('several mods', () => (
    <BemifiedButton 
      onClick={action('Button Button--foo Button--bar Button--baz')} 
      mod="foo, bar, baz">{label}</BemifiedButton>
  ))
  .add('several mods with classes', () => (
    <BemifiedButton 
      onClick={action('Button Button--foo Button--bar Button--baz oof rab zab')} 
      mod="foo, bar, baz"
      className="oof rab zab">{label}</BemifiedButton>
  ))
