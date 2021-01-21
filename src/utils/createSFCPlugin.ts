import { App } from 'vue'

export function createSFCPlugin<Component extends { name: string }> (component: Component) {
  return {
    ...component,
    install (app: App) {
      app.component(component.name, component)
    }
  }
}
