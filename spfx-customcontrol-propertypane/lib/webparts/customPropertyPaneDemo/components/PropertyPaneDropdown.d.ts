import { IPropertyPaneField, PropertyPaneFieldType } from '@microsoft/sp-webpart-base';
import { IPropertyPaneDropdownProps } from './IPropertyPaneDropdownProps';
import { IPropertyPaneDropdownInternalProps } from './IPropertyPaneDropdownInternalProps';
export declare class PropertyPaneDropdown implements IPropertyPaneField<IPropertyPaneDropdownProps> {
    type: PropertyPaneFieldType;
    targetProperty: string;
    properties: IPropertyPaneDropdownInternalProps;
    private elem;
    constructor(targetProperty: string, properties: IPropertyPaneDropdownProps);
    render(): void;
    private onRender(elem);
    private onChanged(option, index?);
}
