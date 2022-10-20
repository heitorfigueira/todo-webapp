export interface ICentralFormTemplate{
  title: string,
  subtitle: string,
  fields: Field[],
  submitText?: string
}

export interface Field {
  name: string,
  valueField: string,
  controlConfig: ControlConfig,
  icon?: string
  enableVisibility?: {
    hide: boolean
  }
}

export interface ControlConfig {
  [key: string]: any
}
