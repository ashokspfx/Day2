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
import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { PropertyPaneDropdown } from './components/PropertyPaneDropdown';
import { update, get } from '@microsoft/sp-lodash-subset';
import * as strings from 'CustomPropertyPaneDemoWebPartStrings';
import CustomPropertyPaneDemo from './components/CustomPropertyPaneDemo';
var CustomPropertyPaneDemoWebPart = /** @class */ (function (_super) {
    __extends(CustomPropertyPaneDemoWebPart, _super);
    function CustomPropertyPaneDemoWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomPropertyPaneDemoWebPart.prototype.render = function () {
        var element = React.createElement(CustomPropertyPaneDemo, {
            listName: this.properties.listName
        });
        ReactDom.render(element, this.domElement);
    };
    CustomPropertyPaneDemoWebPart.prototype.loadLists = function () {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve([{
                        key: 'sharedDocuments',
                        text: 'Shared Documents'
                    },
                    {
                        key: 'myDocuments',
                        text: 'My Documents'
                    }]);
            }, 2000);
        });
    };
    CustomPropertyPaneDemoWebPart.prototype.onListChange = function (propertyPath, newValue) {
        var oldValue = get(this.properties, propertyPath);
        // store new value in web part properties
        update(this.properties, propertyPath, function () { return newValue; });
        // refresh web part
        this.render();
    };
    CustomPropertyPaneDemoWebPart.prototype.onDispose = function () {
        ReactDom.unmountComponentAtNode(this.domElement);
    };
    Object.defineProperty(CustomPropertyPaneDemoWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    CustomPropertyPaneDemoWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: strings.PropertyPaneDescription
                    },
                    groups: [
                        {
                            groupName: strings.BasicGroupName,
                            groupFields: [
                                new PropertyPaneDropdown('listName', {
                                    label: strings.ListFieldLabel,
                                    loadOptions: this.loadLists.bind(this),
                                    onPropertyChange: this.onListChange.bind(this),
                                    selectedKey: this.properties.listName
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return CustomPropertyPaneDemoWebPart;
}(BaseClientSideWebPart));
export default CustomPropertyPaneDemoWebPart;
//# sourceMappingURL=CustomPropertyPaneDemoWebPart.js.map