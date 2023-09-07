declare module '*.module.css' {
  interface IClassNames {
    [classes: string]: string
  }
  const classes: IClassNames
  export = classes
}
