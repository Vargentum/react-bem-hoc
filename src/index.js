import BemHelper from './bemHelper'
import React, {Component as RComponent, PropTypes as PT} from 'react'

export default function BemHOC (Component, name='') {
  return class extends RComponent {
    static defaultProps = {
      className: '', 
      mod: '', 
      bemConfig: {}
    }
    render() {
      const {className, mod, bemConfig, ...props} = this.props

      const cls = new BemHelper({
        name,
        stringMods: mod,
        stringClasses: className,
        ...bemConfig
      }).toString()

      return <Component 
                {...props} 
                className={cls}
                blockName={name} />
    }
  }
}
