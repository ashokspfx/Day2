import * as React from 'react';
import * as ReactDom from 'react-dom';
import { PropertyPaneFieldType } from '@microsoft/sp-webpart-base';
import ListDropdown from './ListDropdown';
var PropertyPaneDropdown = /** @class */ (function () {
    function PropertyPaneDropdown(targetProperty, properties) {
        this.type = PropertyPaneFieldType.Custom;
        this.targetProperty = targetProperty;
        this.properties = {
            key: properties.label,
            label: properties.label,
            loadOptions: properties.loadOptions,
            onPropertyChange: properties.onPropertyChange,
            selectedKey: properties.selectedKey,
            disabled: properties.disabled,
            onRender: this.onRender.bind(this)
        };
    }
    PropertyPaneDropdown.prototype.render = function () {
        if (!this.elem) {
            return;
        }
        this.onRender(this.elem);
    };
    PropertyPaneDropdown.prototype.onRender = function (elem) {
        if (!this.elem) {
            this.elem = elem;
        }
        var element = React.createElement(ListDropdown, {
            label: this.properties.label,
            loadOptions: this.properties.loadOptions,
            onChanged: this.onChanged.bind(this),
            selectedKey: this.properties.selectedKey,
            disabled: this.properties.disabled,
            // required to allow the component to be re-rendered by calling this.render() externally
            stateKey: new Date().toString()
        });
        ReactDom.render(element, elem);
    };
    PropertyPaneDropdown.prototype.onChanged = function (option, index) {
        this.properties.onPropertyChange(this.targetProperty, option.key);
    };
    return PropertyPaneDropdown;
}());
export { PropertyPaneDropdown };
//# sourceMappingURL=PropertyPaneDropdown.js.map