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
import { Dropdown } from 'office-ui-fabric-react/lib/components/Dropdown';
import { Spinner } from 'office-ui-fabric-react/lib/components/Spinner';
var ListDropdown = /** @class */ (function (_super) {
    __extends(ListDropdown, _super);
    function ListDropdown(props, state) {
        var _this = _super.call(this, props) || this;
        _this.selectedKey = props.selectedKey;
        _this.state = {
            loading: false,
            options: undefined,
            error: undefined
        };
        return _this;
    }
    ListDropdown.prototype.componentDidMount = function () {
        this.loadOptions();
    };
    ListDropdown.prototype.componentDidUpdate = function (prevProps, prevState) {
        if (this.props.disabled !== prevProps.disabled ||
            this.props.stateKey !== prevProps.stateKey) {
            this.loadOptions();
        }
    };
    ListDropdown.prototype.loadOptions = function () {
        var _this = this;
        this.setState({
            loading: true,
            error: undefined,
            options: undefined
        });
        this.props.loadOptions()
            .then(function (options) {
            _this.setState({
                loading: false,
                error: undefined,
                options: options
            });
        }, function (error) {
            _this.setState(function (prevState, props) {
                prevState.loading = false;
                prevState.error = error;
                return prevState;
            });
        });
    };
    ListDropdown.prototype.render = function () {
        var loading = this.state.loading ? React.createElement("div", null,
            React.createElement(Spinner, { label: 'Loading options...' })) : React.createElement("div", null);
        var error = this.state.error !== undefined ? React.createElement("div", { className: 'ms-TextField-errorMessage ms-u-slideDownIn20' },
            "Error while loading items: ",
            this.state.error) : React.createElement("div", null);
        return (React.createElement("div", null,
            React.createElement(Dropdown, { label: this.props.label, disabled: this.props.disabled || this.state.loading || this.state.error !== undefined, onChanged: this.onChanged.bind(this), selectedKey: this.selectedKey, options: this.state.options }),
            loading,
            error));
    };
    ListDropdown.prototype.onChanged = function (option, index) {
        this.selectedKey = option.key;
        // reset previously selected options
        var options = this.state.options;
        options.forEach(function (o) {
            if (o.key !== option.key) {
                o.selected = false;
            }
        });
        this.setState(function (prevState, props) {
            prevState.options = options;
            return prevState;
        });
        if (this.props.onChanged) {
            this.props.onChanged(option, index);
        }
    };
    return ListDropdown;
}(React.Component));
export default ListDropdown;
//# sourceMappingURL=ListDropdown.js.map