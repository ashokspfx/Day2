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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { override } from '@microsoft/decorators';
import { Log } from '@microsoft/sp-core-library';
import { BaseApplicationCustomizer, PlaceholderName } from '@microsoft/sp-application-base';
import * as strings from 'CustomHeaderFooterApplicationCustomizerStrings';
import styles from './CustomHeaderFooterApplicationCustomizer.module.scss';
import { escape } from '@microsoft/sp-lodash-subset';
var LOG_SOURCE = 'CustomHeaderFooterApplicationCustomizer';
/** A Custom Action which can be run during execution of a Client Side Application */
var CustomHeaderFooterApplicationCustomizer = (function (_super) {
    __extends(CustomHeaderFooterApplicationCustomizer, _super);
    function CustomHeaderFooterApplicationCustomizer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomHeaderFooterApplicationCustomizer.prototype.onInit = function () {
        Log.info(LOG_SOURCE, "Initialized " + strings.Title);
        // Added to handle possible changes on the existence of placeholders.
        this.context.placeholderProvider.changedEvent.add(this, this._renderPlaceHolders);
        // Call render method for generating the HTML elements.
        this._renderPlaceHolders();
        return Promise.resolve();
    };
    CustomHeaderFooterApplicationCustomizer.prototype._renderPlaceHolders = function () {
        console.log('HelloWorldApplicationCustomizer._renderPlaceHolders()');
        console.log('Available placeholders: ', this.context.placeholderProvider.placeholderNames.map(function (name) { return PlaceholderName[name]; }).join(', '));
        // Handling the top placeholder
        if (!this._topPlaceholder) {
            this._topPlaceholder =
                this.context.placeholderProvider.tryCreateContent(PlaceholderName.Top, { onDispose: this._onDispose });
            // The extension should not assume that the expected placeholder is available.
            if (!this._topPlaceholder) {
                console.error('The expected placeholder (Top) was not found.');
                return;
            }
            if (this.properties) {
                var topString = this.properties.Top;
                if (!topString) {
                    topString = '(Top property was not defined.)';
                }
                if (this._topPlaceholder.domElement) {
                    this._topPlaceholder.domElement.innerHTML = "\n            <div class=\"" + styles.app + "\">\n              <div class=\"ms-bgColor-themeDark ms-fontColor-white " + styles.top + "\">\n                <i class=\"ms-Icon ms-Icon--Info\" aria-hidden=\"true\"></i> " + escape(topString) + "\n              </div>\n            </div>";
                }
            }
        }
        // Handling the bottom placeholder
        if (!this._bottomPlaceholder) {
            this._bottomPlaceholder =
                this.context.placeholderProvider.tryCreateContent(PlaceholderName.Bottom, { onDispose: this._onDispose });
            // The extension should not assume that the expected placeholder is available.
            if (!this._bottomPlaceholder) {
                console.error('The expected placeholder (Bottom) was not found.');
                return;
            }
            if (this.properties) {
                var bottomString = this.properties.Bottom;
                if (!bottomString) {
                    bottomString = '(Bottom property was not defined.)';
                }
                if (this._bottomPlaceholder.domElement) {
                    this._bottomPlaceholder.domElement.innerHTML = "\n            <div class=\"" + styles.app + "\">\n              <div class=\"ms-bgColor-themeDark ms-fontColor-white " + styles.bottom + "\">\n                <i class=\"ms-Icon ms-Icon--Info\" aria-hidden=\"true\"></i> " + escape(bottomString) + "\n              </div>\n            </div>";
                }
            }
        }
    };
    CustomHeaderFooterApplicationCustomizer.prototype._onDispose = function () {
        console.log('[AlertApplicationCustomizer._onDispose] Disposed custom top and bottom placeholders.');
    };
    __decorate([
        override
    ], CustomHeaderFooterApplicationCustomizer.prototype, "onInit", null);
    return CustomHeaderFooterApplicationCustomizer;
}(BaseApplicationCustomizer));
export default CustomHeaderFooterApplicationCustomizer;
//# sourceMappingURL=CustomHeaderFooterApplicationCustomizer.js.map