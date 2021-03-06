import Ember from 'ember'
const {
  Component,
  assign,
  getOwner
} = Ember

export function registerMockComponent (context, name = 'mock-component', opts = {}) {
  const owner = getOwner(context)
  const options = assign({ tagName: 'dummy' }, opts)
  const mockComponent = Component.extend(options)

  unregisterMockComponent(context)
  owner.register(`component:${name}`, mockComponent)
}

export function unregisterMockComponent (context, name = 'mock-component') {
  const owner = getOwner(context)

  if (owner.resolveRegistration(`component:${name}`)) {
    owner.unregister(`component:${name}`)
  }
}
