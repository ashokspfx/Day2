/// <reference types="react" />
import * as React from 'react';
import { IListDropdownProps } from './IListDropdownProps';
import { IListDropdownState } from './IListDropdownState';
export default class ListDropdown extends React.Component<IListDropdownProps, IListDropdownState> {
    private selectedKey;
    constructor(props: IListDropdownProps, state: IListDropdownState);
    componentDidMount(): void;
    componentDidUpdate(prevProps: IListDropdownProps, prevState: IListDropdownState): void;
    private loadOptions();
    render(): JSX.Element;
    private onChanged(option, index?);
}
