declare interface IModalDialogCommandSetStrings {
  Command1: string;
  Command2: string;
}

declare module 'ModalDialogCommandSetStrings' {
  const strings: IModalDialogCommandSetStrings;
  export = strings;
}
