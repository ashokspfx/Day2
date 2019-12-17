var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, PropertyPaneTextField, // Textbox
PropertyPaneCheckbox, // Checkbox
PropertyPaneLabel, // Label
PropertyPaneLink, // Link
PropertyPaneSlider, // Slider
PropertyPaneToggle, // Toggle
PropertyPaneDropdown // Dropdown
 } from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';
import styles from './SpfxPropertyPaneWebPart.module.scss';
var SpfxPropertyPaneWebPart = (function (_super) {
    __extends(SpfxPropertyPaneWebPart, _super);
    function SpfxPropertyPaneWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SpfxPropertyPaneWebPart.prototype.render = function () {
        this.domElement.innerHTML = "\n      <div class=\"" + styles.spfxPropertyPane + "\">\n        <div class=\"" + styles.container + "\">\n          <div class=\"" + styles.row + "\">\n            <div class=\"" + styles.column + "\">\n              <span class=\"" + styles.title + "\">Welcome to SharePoint!</span>\n              <p class=\"" + styles.subTitle + "\">Customize SharePoint experiences using Web Parts.</p>\n              <p class=\"" + styles.description + "\">Name: " + escape(this.properties.name) + "</p>\n              <p class=\"" + styles.description + "\">Description: " + escape(this.properties.description) + "</p>\n\n              <p class=\"" + styles.description + "\">Slider: " + escape(this.properties.Slider) + "</p>\n              <p class=\"" + styles.description + "\">Toggle: " + escape(this.properties.Toggle) + "</p>\n              <p class=\"" + styles.description + "\">dropdowm: " + escape(this.properties.dropdowm) + "</p>\n              <p class=\"" + styles.description + "\">checkbox: " + escape(this.properties.checkbox) + "</p>\n\n              <p class=\"" + styles.description + "\">URL: " + escape(this.properties.URL) + "</p>\n              <p class=\"" + styles.description + "\">textbox: " + escape(this.properties.textbox) + "</p>\n              <a href=\"https://aka.ms/spfx\" class=\"" + styles.button + "\">\n                <span class=\"" + styles.label + "\">Learn more</span>\n              </a>\n            </div>\n          </div>\n        </div>\n      </div>";
    };
    Object.defineProperty(SpfxPropertyPaneWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    SpfxPropertyPaneWebPart.prototype.textBoxValidationMethod = function (value) {
        if (value.length < 10) {
            return "Name should be at least 10 characters!";
        }
        else {
            return "";
        }
    };
    SpfxPropertyPaneWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
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
                                    placeholder: "Please enter name", "description": "Name property field"
                                }),
                                PropertyPaneTextField('description', {
                                    label: "Description",
                                    multiline: true,
                                    resizable: true,
                                    placeholder: "Please enter description", "description": "Description property field"
                                })
                            ]
                        }
                    ]
                },
                {
                    header: {
                        description: "Page 2 – Slider and Dropdown"
                    },
                    groups: [
                        {
                            groupName: "Group one",
                            groupFields: [
                                PropertyPaneSlider('Slider', {
                                    label: 'Slider', min: 1, max: 10
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
                                    label: 'Drop Down',
                                    options: [
                                        { key: 'Item1', text: 'Item 1' },
                                        { key: 'Item2', text: 'Item 2' },
                                        { key: 'Item3', text: 'Item 3' }
                                    ]
                                }),
                                PropertyPaneCheckbox('checkbox', { text: 'Yes/No' })
                            ]
                        }
                    ]
                },
                {
                    header: {
                        description: "Page 3 - URL and Label"
                    },
                    groups: [
                        {
                            groupName: "Group One",
                            groupFields: [
                                PropertyPaneLink('URL', { text: "Microsoft", href: 'http://www.microsoft.com', target: '_blank' }),
                                PropertyPaneLabel('label', { text: 'Please enter designation', required: true }),
                                PropertyPaneTextField('textbox', {})
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return SpfxPropertyPaneWebPart;
}(BaseClientSideWebPart));
export default SpfxPropertyPaneWebPart;

//# sourceMappingURL=SpfxPropertyPaneWebPart.js.map
