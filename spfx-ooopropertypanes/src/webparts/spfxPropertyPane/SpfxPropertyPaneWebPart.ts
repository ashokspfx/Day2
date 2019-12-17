import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField,  // Textbox
  PropertyPaneCheckbox,   // Checkbox
  PropertyPaneLabel,      // Label
  PropertyPaneLink,       // Link
  PropertyPaneSlider,     // Slider
  PropertyPaneToggle,     // Toggle
  PropertyPaneDropdown    // Dropdown
} from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './SpfxPropertyPaneWebPart.module.scss';
import * as strings from 'SpfxPropertyPaneWebPartStrings';

export interface ISpfxPropertyPaneWebPartProps {
  name: string;
  description: string;
  Slider:string;
  Toggle:string;
  dropdowm:string;
  checkbox:string;
  URL:string;
  textbox:string;
}

export default class SpfxPropertyPaneWebPart extends BaseClientSideWebPart<ISpfxPropertyPaneWebPartProps> {

  public render(): void {
    this.domElement.innerHTML = `
      <div class="${ styles.spfxPropertyPane }">
        <div class="${ styles.container }">
          <div class="${ styles.row }">
            <div class="${ styles.column }">
              <span class="${ styles.title }">Welcome to SharePoint!</span>
              <p class="${ styles.subTitle }">Customize SharePoint experiences using Web Parts.</p>
              <p class="${ styles.description }">Name: ${escape(this.properties.name)}</p>
              <p class="${ styles.description }">Description: ${escape(this.properties.description)}</p>

              <p class="${ styles.description }">Slider: ${escape(this.properties.Slider)}</p>
              <p class="${ styles.description }">Toggle: ${escape(this.properties.Toggle)}</p>
              <p class="${ styles.description }">dropdowm: ${escape(this.properties.dropdowm)}</p>
              <p class="${ styles.description }">checkbox: ${escape(this.properties.checkbox)}</p>

              <p class="${ styles.description }">URL: ${escape(this.properties.URL)}</p>
              <p class="${ styles.description }">textbox: ${escape(this.properties.textbox)}</p>
              <a href="https://aka.ms/spfx" class="${ styles.button }">
                <span class="${ styles.label }">Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>`;
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected textBoxValidationMethod(value: string): string {
    if (value.length < 10) 
    {
      return "Name should be at least 10 characters!"; 
    }
    else 
    { 
      return ""; 
    }
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        { //Page 1
          header: {
            description: "Page 1 – Name and Description"
          },
          groups: [
            {
              groupName: "Group one",
              groupFields: [
                PropertyPaneTextField('name', {
                  label: "Name",
                  multiline: false,
                  resizable: false,
                  onGetErrorMessage: this.textBoxValidationMethod,
                  errorMessage: "This is the error message",
                  deferredValidationTime: 5000,
                  placeholder: "Please enter name","description": "Name property field"
                }),
                PropertyPaneTextField('description', {
                  label: "Description",
                  multiline: true,
                  resizable: true,
                  placeholder: "Please enter description","description": "Description property field"
                })
              ]
            }
          ]
        },
        { //Page 2
          header: {
            description: "Page 2 – Slider and Dropdown"
          },
          groups: [
            {
              groupName: "Group one",
              groupFields: [
                PropertyPaneSlider('Slider', {
                  label:'Slider',min:1,max:10
                }),
                PropertyPaneToggle('Toggle', {
                label: 'Slider'
                })
              ]
            },
            {
              groupName: "Group Two",
              groupFields: [
                PropertyPaneDropdown('dropdowm', {
                  label:'Drop Down',
                  options: [
                    { key: 'Item1', text: 'Item 1' },
                    { key: 'Item2', text: 'Item 2' },
                    { key: 'Item3', text: 'Item 3' }
                  ]
                }),
                PropertyPaneCheckbox('checkbox',
                  { text: 'Yes/No'})
              ]
            }
          ]
        },
        { //Page 3
          header: {
            description: "Page 3 - URL and Label"
          },
          groups: [
            {
              groupName: "Group One",
              groupFields: [
                PropertyPaneLink('URL',
                { text:"Microsoft", href:'http://www.microsoft.com',target:'_blank'}),
                 PropertyPaneLabel('label',
                { text:'Please enter designation',required:true}),
                 PropertyPaneTextField('textbox',{})
              ]
            }
          ]
        }
      ]
    };
  }
}
