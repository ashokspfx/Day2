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
import { BaseListViewCommandSet } from '@microsoft/sp-listview-extensibility';
import { Dialog } from '@microsoft/sp-dialog';
import * as strings from 'ModalDialogCommandSetStrings';
var LOG_SOURCE = 'ModalDialogCommandSet';
var ModalDialogCommandSet = (function (_super) {
    __extends(ModalDialogCommandSet, _super);
    function ModalDialogCommandSet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModalDialogCommandSet.prototype.onInit = function () {
        Log.info(LOG_SOURCE, 'Initialized ModalDialogCommandSet');
        return Promise.resolve();
    };
    ModalDialogCommandSet.prototype.onListViewUpdated = function (event) {
        var compareOneCommand = this.tryGetCommand('COMMAND_1');
        if (compareOneCommand) {
            // This command should be hidden unless exactly one row is selected.
            compareOneCommand.visible = event.selectedRows.length === 1;
        }
    };
    ModalDialogCommandSet.prototype.onExecute = function (event) {
        switch (event.itemId) {
            case 'COMMAND_1':
                Dialog.alert("Clicked " + this.properties.sampleTextOne);
                break;
            case 'COMMAND_2':
                Dialog.prompt("Clicked " + strings.Command2 + ". Enter something to alert:").then(function (value) {
                    Dialog.alert(value);
                });
                break;
            default:
                throw new Error('Unknown command');
        }
    };
    __decorate([
        override
    ], ModalDialogCommandSet.prototype, "onInit", null);
    __decorate([
        override
    ], ModalDialogCommandSet.prototype, "onListViewUpdated", null);
    __decorate([
        override
    ], ModalDialogCommandSet.prototype, "onExecute", null);
    return ModalDialogCommandSet;
}(BaseListViewCommandSet));
export default ModalDialogCommandSet;
//# sourceMappingURL=ModalDialogCommandSet.js.map