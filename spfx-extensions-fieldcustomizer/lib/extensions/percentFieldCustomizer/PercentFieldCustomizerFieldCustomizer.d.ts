import { BaseFieldCustomizer, IFieldCustomizerCellEventParameters } from '@microsoft/sp-listview-extensibility';
/**
 * If your field customizer uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface IPercentFieldCustomizerFieldCustomizerProperties {
    sampleText?: string;
}
export default class PercentFieldCustomizerFieldCustomizer extends BaseFieldCustomizer<IPercentFieldCustomizerFieldCustomizerProperties> {
    onInit(): Promise<void>;
    onRenderCell(event: IFieldCustomizerCellEventParameters): void;
    onDisposeCell(event: IFieldCustomizerCellEventParameters): void;
}
