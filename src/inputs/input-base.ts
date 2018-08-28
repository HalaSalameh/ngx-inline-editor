import { InlineBaseConfig } from "../types/inline-configs";
import { Renderer, ElementRef, OnInit, Injector, OnChanges, DoCheck, AfterContentInit, AfterViewInit, AfterViewChecked, AfterContentChecked, OnDestroy, ChangeDetectorRef } from "@angular/core";
import { Subscription } from "rxjs";
import { InlineEditorError } from "../types/inline-editor-error.interface";
import { InlineEditorState } from "../types/inline-editor-state.class";
import { InlineEditorService } from "../inline-editor.service";
import { OnUpdateConfig } from "../types/lifecycles.interface";
import { InputRegexTestable, InputLengthTestable } from "../types/testable-inputs.interface";
export declare class InputBase implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, OnUpdateConfig {
    protected injector: Injector;
    constructor(injector: Injector);
    state: InlineEditorState;
    value: any;
    inputRef: ElementRef;
    config: InlineBaseConfig;
    service: InlineEditorService;
    inputElement: HTMLInputElement;
    isNumeric: boolean;
    isRegexTestable: boolean;
    isLengthTestable: boolean;
    protected renderer: Renderer;
    protected cd: ChangeDetectorRef;
    protected subscriptions: {
        [key: string]: Subscription;
    };
    ngOnChanges(): void;
    ngOnInit(): void;
    ngDoCheck(): void;
    ngAfterContentInit(): void;
    ngAfterContentChecked(): void;
    ngAfterViewInit(): void;
    ngAfterViewChecked(): void;
    ngOnDestroy(): void;
    onUpdateConfig(newConfig: InlineBaseConfig): void;
    save(): void;
    cancel(): void;
    onEnter(event: Event): void;
    onEscape(event: Event): void;
    onBlur(event: Event): void;
    onClick(event: Event): void;
    onKeyPress(event: Event): void;
    onFocus(event: Event): void;
    checkValue(): InlineEditorError[];
    showText(): string;
    focus(): void;
    select(): void;
    protected updateState(newState: InlineEditorState): void;
    protected isEmpty(value: any): boolean;
    protected canTestRegex(config: any): config is InputRegexTestable;
    protected canTestLength(config: any): config is InputLengthTestable;
}
