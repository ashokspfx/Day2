import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { IPropertyPaneConfiguration } from '@microsoft/sp-property-pane';
export interface ICustomPropertyPaneDemoWebPartProps {
    listName: string;
}
export default class CustomPropertyPaneDemoWebPart extends BaseClientSideWebPart<ICustomPropertyPaneDemoWebPartProps> {
    render(): void;
    private loadLists();
    private onListChange(propertyPath, newValue);
    protected onDispose(): void;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
