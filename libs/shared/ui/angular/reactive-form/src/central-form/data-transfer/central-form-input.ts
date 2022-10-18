export interface ICentralFormTemplate{
  title: string,
  subtitle: string,
  fields: Field[]
}

export interface Field {
  name: string,
  valueField: string,
  controlConfig: ControlConfig
}

export interface ControlConfig {
  [key: string]: any
}
