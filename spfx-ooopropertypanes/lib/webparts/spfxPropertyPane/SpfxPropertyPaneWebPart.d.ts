import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, IPropertyPaneConfiguration } from '@microsoft/sp-webpart-base';
export interface ISpfxPropertyPaneWebPartProps {
    name: string;
    description: string;
    Slider: string;
    Toggle: string;
    dropdowm: string;
    checkbox: string;
    URL: string;
    textbox: string;
}
export default class SpfxPropertyPaneWebPart extends BaseClientSideWebPart<ISpfxPropertyPaneWebPartProps> {
    render(): void;
    protected readonly dataVersion: Version;
    protected textBoxValidationMethod(value: string): string;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
