import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
const { describe, it } = global;
import bemHelper from '../bemHelper'
import BemHOC from '../index'


describe(`BemHOC`, () => {
  // SETUP:
  const cmpBaseClass = 'Cmp'
  const Cmp = ({children, ...attrs}) => <div {...attrs}>{children}</div>
  const BemCmp = BemHOC(Cmp, cmpBaseClass)
  const modifiersSet = [
    cmpBaseClass,
    `${cmpBaseClass}--foo`,
    `${cmpBaseClass}--bar`,
    `${cmpBaseClass}--baz`
  ]

  const isClsExist = (enzymeWrapper) => (...classes) => 
    classes.forEach(cls => expect(enzymeWrapper.hasClass(cls)).to.be.true)

  // TESTS:

  it(`should provide a base class after wrapping a Component`, () => {
    isClsExist(shallow(<BemCmp />))(cmpBaseClass)
  })

  it(`should provide correct modifier if "mod" property is set up`, () => {
    isClsExist(shallow(<BemCmp mod="foo" />))(
      cmpBaseClass,
      `${cmpBaseClass}--foo`
    )
  })

  it(`should provide several modifiers`, () => {
    isClsExist(shallow(<BemCmp mod="foo,bar,baz" />))(...modifiersSet)
  })
  it(`should ignore spaces between modifier names`, () => {
    isClsExist(shallow(<BemCmp mod=" foo, bar, baz " />))(...modifiersSet)
  })

})