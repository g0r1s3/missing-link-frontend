// AUTO-GENERATED FILE. Do not edit manually.
export const components = {
  Button: {
    props: {
      disabled: {
        type: "boolean",
        required: false,
      },
      form: {
        type: "string",
        required: false,
      },
      formAction: {
        type: "string | ((formData: FormData) => void | Promise<void>)",
        required: false,
      },
      formEncType: {
        type: "string",
        required: false,
      },
      formMethod: {
        type: "string",
        required: false,
      },
      formNoValidate: {
        type: "boolean",
        required: false,
      },
      formTarget: {
        type: "string",
        required: false,
      },
      name: {
        type: "string",
        required: false,
      },
      type: {
        type: "enum",
        required: false,
      },
      value: {
        type: "string | number | readonly string[]",
        required: false,
      },
      defaultChecked: {
        type: "boolean",
        required: false,
      },
      defaultValue: {
        type: "string | number | readonly string[]",
        required: false,
      },
      suppressContentEditableWarning: {
        type: "boolean",
        required: false,
      },
      suppressHydrationWarning: {
        type: "boolean",
        required: false,
      },
      accessKey: {
        type: "string",
        required: false,
      },
      autoCapitalize: {
        type: '"off" | "none" | "on" | "sentences" | "words" | "characters" | (string & {})',
        required: false,
      },
      autoFocus: {
        type: "boolean",
        required: false,
      },
      className: {
        type: "string",
        required: false,
      },
      contentEditable: {
        type: 'Booleanish | "inherit" | "plaintext-only"',
        required: false,
      },
      contextMenu: {
        type: "string",
        required: false,
      },
      dir: {
        type: "string",
        required: false,
      },
      draggable: {
        type: "Booleanish",
        required: false,
      },
      enterKeyHint: {
        type: "enum",
        required: false,
      },
      hidden: {
        type: "boolean",
        required: false,
      },
      id: {
        type: "string",
        required: false,
      },
      lang: {
        type: "string",
        required: false,
      },
      nonce: {
        type: "string",
        required: false,
      },
      slot: {
        type: "string",
        required: false,
      },
      spellCheck: {
        type: "Booleanish",
        required: false,
      },
      style: {
        type: "CSSProperties",
        required: false,
      },
      tabIndex: {
        type: "number",
        required: false,
      },
      title: {
        type: "string",
        required: false,
      },
      translate: {
        type: "enum",
        required: false,
      },
      radioGroup: {
        type: "string",
        required: false,
      },
      role: {
        type: "AriaRole",
        required: false,
      },
      about: {
        type: "string",
        required: false,
      },
      content: {
        type: "string",
        required: false,
      },
      datatype: {
        type: "string",
        required: false,
      },
      inlist: {
        type: "any",
        required: false,
      },
      prefix: {
        type: "string",
        required: false,
      },
      property: {
        type: "string",
        required: false,
      },
      rel: {
        type: "string",
        required: false,
      },
      resource: {
        type: "string",
        required: false,
      },
      rev: {
        type: "string",
        required: false,
      },
      typeof: {
        type: "string",
        required: false,
      },
      vocab: {
        type: "string",
        required: false,
      },
      autoCorrect: {
        type: "string",
        required: false,
      },
      autoSave: {
        type: "string",
        required: false,
      },
      color: {
        type: "string",
        required: false,
      },
      itemProp: {
        type: "string",
        required: false,
      },
      itemScope: {
        type: "boolean",
        required: false,
      },
      itemType: {
        type: "string",
        required: false,
      },
      itemID: {
        type: "string",
        required: false,
      },
      itemRef: {
        type: "string",
        required: false,
      },
      results: {
        type: "number",
        required: false,
      },
      security: {
        type: "string",
        required: false,
      },
      unselectable: {
        type: "enum",
        required: false,
      },
      popover: {
        type: "enum",
        required: false,
      },
      popoverTargetAction: {
        type: "enum",
        required: false,
      },
      popoverTarget: {
        type: "string",
        required: false,
      },
      inert: {
        type: "boolean",
        required: false,
        description:
          "@see https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/inert",
      },
      inputMode: {
        type: "enum",
        required: false,
        description:
          "Hints at the type of data that might be entered by the user while editing the element or its contents\n@see {@link https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute}",
      },
      is: {
        type: "string",
        required: false,
        description:
          "Specify that a standard HTML element should behave like a defined custom built-in element\n@see {@link https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is}",
      },
      exportparts: {
        type: "string",
        required: false,
        description:
          "@see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/exportparts}",
      },
      part: {
        type: "string",
        required: false,
        description:
          "@see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/part}",
      },
      "aria-activedescendant": {
        type: "string",
        required: false,
        description:
          "Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.",
      },
      "aria-atomic": {
        type: "Booleanish",
        required: false,
        description:
          "Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.",
      },
      "aria-autocomplete": {
        type: "enum",
        required: false,
        description:
          "Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be\npresented if they are made.",
      },
      "aria-braillelabel": {
        type: "string",
        required: false,
        description:
          "Defines a string value that labels the current element, which is intended to be converted into Braille.\n@see aria-label.",
      },
      "aria-brailleroledescription": {
        type: "string",
        required: false,
        description:
          "Defines a human-readable, author-localized abbreviated description for the role of an element, which is intended to be converted into Braille.\n@see aria-roledescription.",
      },
      "aria-busy": {
        type: "Booleanish",
        required: false,
      },
      "aria-checked": {
        type: 'boolean | "true" | "false" | "mixed"',
        required: false,
        description:
          'Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.\n@see aria-pressed\n@see aria-selected.',
      },
      "aria-colcount": {
        type: "number",
        required: false,
        description:
          "Defines the total number of columns in a table, grid, or treegrid.\n@see aria-colindex.",
      },
      "aria-colindex": {
        type: "number",
        required: false,
        description:
          "Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.\n@see aria-colcount\n@see aria-colspan.",
      },
      "aria-colindextext": {
        type: "string",
        required: false,
        description:
          "Defines a human readable text alternative of aria-colindex.\n@see aria-rowindextext.",
      },
      "aria-colspan": {
        type: "number",
        required: false,
        description:
          "Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.\n@see aria-colindex\n@see aria-rowspan.",
      },
      "aria-controls": {
        type: "string",
        required: false,
        description:
          "Identifies the element (or elements) whose contents or presence are controlled by the current element.\n@see aria-owns.",
      },
      "aria-current": {
        type: 'boolean | "true" | "false" | "page" | "step" | "location" | "date" | "time"',
        required: false,
        description:
          "Indicates the element that represents the current item within a container or set of related elements.",
      },
      "aria-describedby": {
        type: "string",
        required: false,
        description:
          "Identifies the element (or elements) that describes the object.\n@see aria-labelledby",
      },
      "aria-description": {
        type: "string",
        required: false,
        description:
          "Defines a string value that describes or annotates the current element.\n@see related aria-describedby.",
      },
      "aria-details": {
        type: "string",
        required: false,
        description:
          "Identifies the element that provides a detailed, extended description for the object.\n@see aria-describedby.",
      },
      "aria-disabled": {
        type: "Booleanish",
        required: false,
        description:
          "Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.\n@see aria-hidden\n@see aria-readonly.",
      },
      "aria-dropeffect": {
        type: "enum",
        required: false,
        description:
          "Indicates what functions can be performed when a dragged object is released on the drop target.\n@deprecated in ARIA 1.1",
      },
      "aria-errormessage": {
        type: "string",
        required: false,
        description:
          "Identifies the element that provides an error message for the object.\n@see aria-invalid\n@see aria-describedby.",
      },
      "aria-expanded": {
        type: "Booleanish",
        required: false,
        description:
          "Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.",
      },
      "aria-flowto": {
        type: "string",
        required: false,
        description:
          "Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,\nallows assistive technology to override the general default of reading in document source order.",
      },
      "aria-grabbed": {
        type: "Booleanish",
        required: false,
        description:
          'Indicates an element\'s "grabbed" state in a drag-and-drop operation.\n@deprecated in ARIA 1.1',
      },
      "aria-haspopup": {
        type: 'boolean | "true" | "false" | "dialog" | "grid" | "listbox" | "menu" | "tree"',
        required: false,
        description:
          "Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.",
      },
      "aria-hidden": {
        type: "Booleanish",
        required: false,
        description:
          "Indicates whether the element is exposed to an accessibility API.\n@see aria-disabled.",
      },
      "aria-invalid": {
        type: 'boolean | "true" | "false" | "grammar" | "spelling"',
        required: false,
        description:
          "Indicates the entered value does not conform to the format expected by the application.\n@see aria-errormessage.",
      },
      "aria-keyshortcuts": {
        type: "string",
        required: false,
        description:
          "Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.",
      },
      "aria-label": {
        type: "string",
        required: false,
        description:
          "Defines a string value that labels the current element.\n@see aria-labelledby.",
      },
      "aria-labelledby": {
        type: "string",
        required: false,
        description:
          "Identifies the element (or elements) that labels the current element.\n@see aria-describedby.",
      },
      "aria-level": {
        type: "number",
        required: false,
        description:
          "Defines the hierarchical level of an element within a structure.",
      },
      "aria-live": {
        type: "enum",
        required: false,
        description:
          "Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.",
      },
      "aria-modal": {
        type: "Booleanish",
        required: false,
        description: "Indicates whether an element is modal when displayed.",
      },
      "aria-multiline": {
        type: "Booleanish",
        required: false,
        description:
          "Indicates whether a text box accepts multiple lines of input or only a single line.",
      },
      "aria-multiselectable": {
        type: "Booleanish",
        required: false,
        description:
          "Indicates that the user may select more than one item from the current selectable descendants.",
      },
      "aria-orientation": {
        type: "enum",
        required: false,
        description:
          "Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.",
      },
      "aria-owns": {
        type: "string",
        required: false,
        description:
          "Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship\nbetween DOM elements where the DOM hierarchy cannot be used to represent the relationship.\n@see aria-controls.",
      },
      "aria-placeholder": {
        type: "string",
        required: false,
        description:
          "Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.\nA hint could be a sample value or a brief description of the expected format.",
      },
      "aria-posinset": {
        type: "number",
        required: false,
        description:
          "Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.\n@see aria-setsize.",
      },
      "aria-pressed": {
        type: 'boolean | "true" | "false" | "mixed"',
        required: false,
        description:
          'Indicates the current "pressed" state of toggle buttons.\n@see aria-checked\n@see aria-selected.',
      },
      "aria-readonly": {
        type: "Booleanish",
        required: false,
        description:
          "Indicates that the element is not editable, but is otherwise operable.\n@see aria-disabled.",
      },
      "aria-relevant": {
        type: "enum",
        required: false,
        description:
          "Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.\n@see aria-atomic.",
      },
      "aria-required": {
        type: "Booleanish",
        required: false,
        description:
          "Indicates that user input is required on the element before a form may be submitted.",
      },
      "aria-roledescription": {
        type: "string",
        required: false,
        description:
          "Defines a human-readable, author-localized description for the role of an element.",
      },
      "aria-rowcount": {
        type: "number",
        required: false,
        description:
          "Defines the total number of rows in a table, grid, or treegrid.\n@see aria-rowindex.",
      },
      "aria-rowindex": {
        type: "number",
        required: false,
        description:
          "Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.\n@see aria-rowcount\n@see aria-rowspan.",
      },
      "aria-rowindextext": {
        type: "string",
        required: false,
        description:
          "Defines a human readable text alternative of aria-rowindex.\n@see aria-colindextext.",
      },
      "aria-rowspan": {
        type: "number",
        required: false,
        description:
          "Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.\n@see aria-rowindex\n@see aria-colspan.",
      },
      "aria-selected": {
        type: "Booleanish",
        required: false,
        description:
          'Indicates the current "selected" state of various widgets.\n@see aria-checked\n@see aria-pressed.',
      },
      "aria-setsize": {
        type: "number",
        required: false,
        description:
          "Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.\n@see aria-posinset.",
      },
      "aria-sort": {
        type: "enum",
        required: false,
        description:
          "Indicates if items in a table or grid are sorted in ascending or descending order.",
      },
      "aria-valuemax": {
        type: "number",
        required: false,
        description: "Defines the maximum allowed value for a range widget.",
      },
      "aria-valuemin": {
        type: "number",
        required: false,
        description: "Defines the minimum allowed value for a range widget.",
      },
      "aria-valuenow": {
        type: "number",
        required: false,
        description:
          "Defines the current value for a range widget.\n@see aria-valuetext.",
      },
      "aria-valuetext": {
        type: "string",
        required: false,
        description:
          "Defines the human readable text alternative of aria-valuenow for a range widget.",
      },
      children: {
        type: "ReactNode",
        required: false,
      },
      dangerouslySetInnerHTML: {
        type: "{ __html: string | TrustedHTML; }",
        required: false,
      },
      onCopy: {
        type: "ClipboardEventHandler<HTMLButtonElement>",
        required: false,
      },
      onCopyCapture: {
        type: "ClipboardEventHandler<HTMLButtonElement>",
        required: false,
      },
      onCut: {
        type: "ClipboardEventHandler<HTMLButtonElement>",
        required: false,
      },
      onCutCapture: {
        type: "ClipboardEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPaste: {
        type: "ClipboardEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPasteCapture: {
        type: "ClipboardEventHandler<HTMLButtonElement>",
        required: false,
      },
      onCompositionEnd: {
        type: "CompositionEventHandler<HTMLButtonElement>",
        required: false,
      },
      onCompositionEndCapture: {
        type: "CompositionEventHandler<HTMLButtonElement>",
        required: false,
      },
      onCompositionStart: {
        type: "CompositionEventHandler<HTMLButtonElement>",
        required: false,
      },
      onCompositionStartCapture: {
        type: "CompositionEventHandler<HTMLButtonElement>",
        required: false,
      },
      onCompositionUpdate: {
        type: "CompositionEventHandler<HTMLButtonElement>",
        required: false,
      },
      onCompositionUpdateCapture: {
        type: "CompositionEventHandler<HTMLButtonElement>",
        required: false,
      },
      onFocus: {
        type: "FocusEventHandler<HTMLButtonElement>",
        required: false,
      },
      onFocusCapture: {
        type: "FocusEventHandler<HTMLButtonElement>",
        required: false,
      },
      onBlur: {
        type: "FocusEventHandler<HTMLButtonElement>",
        required: false,
      },
      onBlurCapture: {
        type: "FocusEventHandler<HTMLButtonElement>",
        required: false,
      },
      onChange: {
        type: "FormEventHandler<HTMLButtonElement>",
        required: false,
      },
      onChangeCapture: {
        type: "FormEventHandler<HTMLButtonElement>",
        required: false,
      },
      onBeforeInput: {
        type: "InputEventHandler<HTMLButtonElement>",
        required: false,
      },
      onBeforeInputCapture: {
        type: "FormEventHandler<HTMLButtonElement>",
        required: false,
      },
      onInput: {
        type: "FormEventHandler<HTMLButtonElement>",
        required: false,
      },
      onInputCapture: {
        type: "FormEventHandler<HTMLButtonElement>",
        required: false,
      },
      onReset: {
        type: "FormEventHandler<HTMLButtonElement>",
        required: false,
      },
      onResetCapture: {
        type: "FormEventHandler<HTMLButtonElement>",
        required: false,
      },
      onSubmit: {
        type: "FormEventHandler<HTMLButtonElement>",
        required: false,
      },
      onSubmitCapture: {
        type: "FormEventHandler<HTMLButtonElement>",
        required: false,
      },
      onInvalid: {
        type: "FormEventHandler<HTMLButtonElement>",
        required: false,
      },
      onInvalidCapture: {
        type: "FormEventHandler<HTMLButtonElement>",
        required: false,
      },
      onLoad: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onLoadCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onError: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onErrorCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onKeyDown: {
        type: "KeyboardEventHandler<HTMLButtonElement>",
        required: false,
      },
      onKeyDownCapture: {
        type: "KeyboardEventHandler<HTMLButtonElement>",
        required: false,
      },
      onKeyPress: {
        type: "KeyboardEventHandler<HTMLButtonElement>",
        required: false,
        description: "@deprecated Use `onKeyUp` or `onKeyDown` instead",
      },
      onKeyPressCapture: {
        type: "KeyboardEventHandler<HTMLButtonElement>",
        required: false,
        description:
          "@deprecated Use `onKeyUpCapture` or `onKeyDownCapture` instead",
      },
      onKeyUp: {
        type: "KeyboardEventHandler<HTMLButtonElement>",
        required: false,
      },
      onKeyUpCapture: {
        type: "KeyboardEventHandler<HTMLButtonElement>",
        required: false,
      },
      onAbort: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onAbortCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onCanPlay: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onCanPlayCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onCanPlayThrough: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onCanPlayThroughCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDurationChange: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDurationChangeCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onEmptied: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onEmptiedCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onEncrypted: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onEncryptedCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onEnded: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onEndedCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onLoadedData: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onLoadedDataCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onLoadedMetadata: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onLoadedMetadataCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onLoadStart: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onLoadStartCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPause: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPauseCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPlay: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPlayCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPlaying: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPlayingCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onProgress: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onProgressCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onRateChange: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onRateChangeCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onSeeked: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onSeekedCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onSeeking: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onSeekingCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onStalled: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onStalledCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onSuspend: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onSuspendCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onTimeUpdate: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onTimeUpdateCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onVolumeChange: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onVolumeChangeCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onWaiting: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onWaitingCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onAuxClick: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onAuxClickCapture: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onClick: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onClickCapture: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onContextMenu: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onContextMenuCapture: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDoubleClick: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDoubleClickCapture: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDrag: {
        type: "DragEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDragCapture: {
        type: "DragEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDragEnd: {
        type: "DragEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDragEndCapture: {
        type: "DragEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDragEnter: {
        type: "DragEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDragEnterCapture: {
        type: "DragEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDragExit: {
        type: "DragEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDragExitCapture: {
        type: "DragEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDragLeave: {
        type: "DragEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDragLeaveCapture: {
        type: "DragEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDragOver: {
        type: "DragEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDragOverCapture: {
        type: "DragEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDragStart: {
        type: "DragEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDragStartCapture: {
        type: "DragEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDrop: {
        type: "DragEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDropCapture: {
        type: "DragEventHandler<HTMLButtonElement>",
        required: false,
      },
      onMouseDown: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onMouseDownCapture: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onMouseEnter: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onMouseLeave: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onMouseMove: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onMouseMoveCapture: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onMouseOut: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onMouseOutCapture: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onMouseOver: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onMouseOverCapture: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onMouseUp: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onMouseUpCapture: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onSelect: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onSelectCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onTouchCancel: {
        type: "TouchEventHandler<HTMLButtonElement>",
        required: false,
      },
      onTouchCancelCapture: {
        type: "TouchEventHandler<HTMLButtonElement>",
        required: false,
      },
      onTouchEnd: {
        type: "TouchEventHandler<HTMLButtonElement>",
        required: false,
      },
      onTouchEndCapture: {
        type: "TouchEventHandler<HTMLButtonElement>",
        required: false,
      },
      onTouchMove: {
        type: "TouchEventHandler<HTMLButtonElement>",
        required: false,
      },
      onTouchMoveCapture: {
        type: "TouchEventHandler<HTMLButtonElement>",
        required: false,
      },
      onTouchStart: {
        type: "TouchEventHandler<HTMLButtonElement>",
        required: false,
      },
      onTouchStartCapture: {
        type: "TouchEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPointerDown: {
        type: "PointerEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPointerDownCapture: {
        type: "PointerEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPointerMove: {
        type: "PointerEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPointerMoveCapture: {
        type: "PointerEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPointerUp: {
        type: "PointerEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPointerUpCapture: {
        type: "PointerEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPointerCancel: {
        type: "PointerEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPointerCancelCapture: {
        type: "PointerEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPointerEnter: {
        type: "PointerEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPointerLeave: {
        type: "PointerEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPointerOver: {
        type: "PointerEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPointerOverCapture: {
        type: "PointerEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPointerOut: {
        type: "PointerEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPointerOutCapture: {
        type: "PointerEventHandler<HTMLButtonElement>",
        required: false,
      },
      onGotPointerCapture: {
        type: "PointerEventHandler<HTMLButtonElement>",
        required: false,
      },
      onGotPointerCaptureCapture: {
        type: "PointerEventHandler<HTMLButtonElement>",
        required: false,
      },
      onLostPointerCapture: {
        type: "PointerEventHandler<HTMLButtonElement>",
        required: false,
      },
      onLostPointerCaptureCapture: {
        type: "PointerEventHandler<HTMLButtonElement>",
        required: false,
      },
      onScroll: {
        type: "UIEventHandler<HTMLButtonElement>",
        required: false,
      },
      onScrollCapture: {
        type: "UIEventHandler<HTMLButtonElement>",
        required: false,
      },
      onScrollEnd: {
        type: "UIEventHandler<HTMLButtonElement>",
        required: false,
      },
      onScrollEndCapture: {
        type: "UIEventHandler<HTMLButtonElement>",
        required: false,
      },
      onWheel: {
        type: "WheelEventHandler<HTMLButtonElement>",
        required: false,
      },
      onWheelCapture: {
        type: "WheelEventHandler<HTMLButtonElement>",
        required: false,
      },
      onAnimationStart: {
        type: "AnimationEventHandler<HTMLButtonElement>",
        required: false,
      },
      onAnimationStartCapture: {
        type: "AnimationEventHandler<HTMLButtonElement>",
        required: false,
      },
      onAnimationEnd: {
        type: "AnimationEventHandler<HTMLButtonElement>",
        required: false,
      },
      onAnimationEndCapture: {
        type: "AnimationEventHandler<HTMLButtonElement>",
        required: false,
      },
      onAnimationIteration: {
        type: "AnimationEventHandler<HTMLButtonElement>",
        required: false,
      },
      onAnimationIterationCapture: {
        type: "AnimationEventHandler<HTMLButtonElement>",
        required: false,
      },
      onToggle: {
        type: "ToggleEventHandler<HTMLButtonElement>",
        required: false,
      },
      onBeforeToggle: {
        type: "ToggleEventHandler<HTMLButtonElement>",
        required: false,
      },
      onTransitionCancel: {
        type: "TransitionEventHandler<HTMLButtonElement>",
        required: false,
      },
      onTransitionCancelCapture: {
        type: "TransitionEventHandler<HTMLButtonElement>",
        required: false,
      },
      onTransitionEnd: {
        type: "TransitionEventHandler<HTMLButtonElement>",
        required: false,
      },
      onTransitionEndCapture: {
        type: "TransitionEventHandler<HTMLButtonElement>",
        required: false,
      },
      onTransitionRun: {
        type: "TransitionEventHandler<HTMLButtonElement>",
        required: false,
      },
      onTransitionRunCapture: {
        type: "TransitionEventHandler<HTMLButtonElement>",
        required: false,
      },
      onTransitionStart: {
        type: "TransitionEventHandler<HTMLButtonElement>",
        required: false,
      },
      onTransitionStartCapture: {
        type: "TransitionEventHandler<HTMLButtonElement>",
        required: false,
      },
      variant: {
        type: "enum",
        required: false,
        default: "primary",
      },
    },
  },
  Footer: {
    props: {},
  },
  components: {
    props: {
      accept: {
        type: "string",
        required: false,
      },
      alt: {
        type: "string",
        required: false,
      },
      autoComplete: {
        type: "HTMLInputAutoCompleteAttribute",
        required: false,
      },
      capture: {
        type: 'boolean | "user" | "environment"',
        required: false,
      },
      checked: {
        type: "boolean",
        required: false,
      },
      disabled: {
        type: "boolean",
        required: false,
      },
      form: {
        type: "string",
        required: false,
      },
      formAction: {
        type: "string | ((formData: FormData) => void | Promise<void>)",
        required: false,
      },
      formEncType: {
        type: "string",
        required: false,
      },
      formMethod: {
        type: "string",
        required: false,
      },
      formNoValidate: {
        type: "boolean",
        required: false,
      },
      formTarget: {
        type: "string",
        required: false,
      },
      height: {
        type: "string | number",
        required: false,
      },
      list: {
        type: "string",
        required: false,
      },
      max: {
        type: "string | number",
        required: false,
      },
      maxLength: {
        type: "number",
        required: false,
        default: "128",
      },
      min: {
        type: "string | number",
        required: false,
      },
      minLength: {
        type: "number",
        required: false,
      },
      multiple: {
        type: "boolean",
        required: false,
      },
      name: {
        type: "string",
        required: false,
      },
      pattern: {
        type: "string",
        required: false,
      },
      placeholder: {
        type: "string",
        required: false,
      },
      readOnly: {
        type: "boolean",
        required: false,
      },
      required: {
        type: "boolean",
        required: false,
      },
      size: {
        type: "number",
        required: false,
      },
      src: {
        type: "string",
        required: false,
      },
      step: {
        type: "string | number",
        required: false,
      },
      type: {
        type: "enum",
        required: false,
      },
      value: {
        type: "string | number | readonly string[]",
        required: false,
      },
      width: {
        type: "string | number",
        required: false,
      },
      onChange: {
        type: "FormEventHandler<HTMLButtonElement>",
        required: false,
      },
      defaultChecked: {
        type: "boolean",
        required: false,
      },
      defaultValue: {
        type: "string | number | readonly string[]",
        required: false,
      },
      suppressContentEditableWarning: {
        type: "boolean",
        required: false,
      },
      suppressHydrationWarning: {
        type: "boolean",
        required: false,
      },
      accessKey: {
        type: "string",
        required: false,
      },
      autoCapitalize: {
        type: '"off" | "none" | "on" | "sentences" | "words" | "characters" | (string & {})',
        required: false,
      },
      autoFocus: {
        type: "boolean",
        required: false,
      },
      className: {
        type: "string",
        required: false,
      },
      contentEditable: {
        type: 'Booleanish | "inherit" | "plaintext-only"',
        required: false,
      },
      contextMenu: {
        type: "string",
        required: false,
      },
      dir: {
        type: "string",
        required: false,
      },
      draggable: {
        type: "Booleanish",
        required: false,
      },
      enterKeyHint: {
        type: "enum",
        required: false,
      },
      hidden: {
        type: "boolean",
        required: false,
      },
      id: {
        type: "string",
        required: false,
      },
      lang: {
        type: "string",
        required: false,
      },
      nonce: {
        type: "string",
        required: false,
      },
      slot: {
        type: "string",
        required: false,
      },
      spellCheck: {
        type: "Booleanish",
        required: false,
      },
      style: {
        type: "CSSProperties",
        required: false,
      },
      tabIndex: {
        type: "number",
        required: false,
      },
      title: {
        type: "string",
        required: false,
      },
      translate: {
        type: "enum",
        required: false,
      },
      radioGroup: {
        type: "string",
        required: false,
      },
      role: {
        type: "AriaRole",
        required: false,
      },
      about: {
        type: "string",
        required: false,
      },
      content: {
        type: "string",
        required: false,
      },
      datatype: {
        type: "string",
        required: false,
      },
      inlist: {
        type: "any",
        required: false,
      },
      prefix: {
        type: "string",
        required: false,
      },
      property: {
        type: "string",
        required: false,
      },
      rel: {
        type: "string",
        required: false,
      },
      resource: {
        type: "string",
        required: false,
      },
      rev: {
        type: "string",
        required: false,
      },
      typeof: {
        type: "string",
        required: false,
      },
      vocab: {
        type: "string",
        required: false,
      },
      autoCorrect: {
        type: "string",
        required: false,
      },
      autoSave: {
        type: "string",
        required: false,
      },
      color: {
        type: "string",
        required: false,
      },
      itemProp: {
        type: "string",
        required: false,
      },
      itemScope: {
        type: "boolean",
        required: false,
      },
      itemType: {
        type: "string",
        required: false,
      },
      itemID: {
        type: "string",
        required: false,
      },
      itemRef: {
        type: "string",
        required: false,
      },
      results: {
        type: "number",
        required: false,
      },
      security: {
        type: "string",
        required: false,
      },
      unselectable: {
        type: "enum",
        required: false,
      },
      popover: {
        type: "enum",
        required: false,
      },
      popoverTargetAction: {
        type: "enum",
        required: false,
      },
      popoverTarget: {
        type: "string",
        required: false,
      },
      inert: {
        type: "boolean",
        required: false,
        description:
          "@see https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/inert",
      },
      inputMode: {
        type: "enum",
        required: false,
        description:
          "Hints at the type of data that might be entered by the user while editing the element or its contents\n@see {@link https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute}",
      },
      is: {
        type: "string",
        required: false,
        description:
          "Specify that a standard HTML element should behave like a defined custom built-in element\n@see {@link https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is}",
      },
      exportparts: {
        type: "string",
        required: false,
        description:
          "@see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/exportparts}",
      },
      part: {
        type: "string",
        required: false,
        description:
          "@see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/part}",
      },
      "aria-activedescendant": {
        type: "string",
        required: false,
        description:
          "Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.",
      },
      "aria-atomic": {
        type: "Booleanish",
        required: false,
        description:
          "Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.",
      },
      "aria-autocomplete": {
        type: "enum",
        required: false,
        description:
          "Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be\npresented if they are made.",
      },
      "aria-braillelabel": {
        type: "string",
        required: false,
        description:
          "Defines a string value that labels the current element, which is intended to be converted into Braille.\n@see aria-label.",
      },
      "aria-brailleroledescription": {
        type: "string",
        required: false,
        description:
          "Defines a human-readable, author-localized abbreviated description for the role of an element, which is intended to be converted into Braille.\n@see aria-roledescription.",
      },
      "aria-busy": {
        type: "Booleanish",
        required: false,
      },
      "aria-checked": {
        type: 'boolean | "true" | "false" | "mixed"',
        required: false,
        description:
          'Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.\n@see aria-pressed\n@see aria-selected.',
      },
      "aria-colcount": {
        type: "number",
        required: false,
        description:
          "Defines the total number of columns in a table, grid, or treegrid.\n@see aria-colindex.",
      },
      "aria-colindex": {
        type: "number",
        required: false,
        description:
          "Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.\n@see aria-colcount\n@see aria-colspan.",
      },
      "aria-colindextext": {
        type: "string",
        required: false,
        description:
          "Defines a human readable text alternative of aria-colindex.\n@see aria-rowindextext.",
      },
      "aria-colspan": {
        type: "number",
        required: false,
        description:
          "Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.\n@see aria-colindex\n@see aria-rowspan.",
      },
      "aria-controls": {
        type: "string",
        required: false,
        description:
          "Identifies the element (or elements) whose contents or presence are controlled by the current element.\n@see aria-owns.",
      },
      "aria-current": {
        type: 'boolean | "true" | "false" | "page" | "step" | "location" | "date" | "time"',
        required: false,
        description:
          "Indicates the element that represents the current item within a container or set of related elements.",
      },
      "aria-describedby": {
        type: "string",
        required: false,
        description:
          "Identifies the element (or elements) that describes the object.\n@see aria-labelledby",
      },
      "aria-description": {
        type: "string",
        required: false,
        description:
          "Defines a string value that describes or annotates the current element.\n@see related aria-describedby.",
      },
      "aria-details": {
        type: "string",
        required: false,
        description:
          "Identifies the element that provides a detailed, extended description for the object.\n@see aria-describedby.",
      },
      "aria-disabled": {
        type: "Booleanish",
        required: false,
        description:
          "Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.\n@see aria-hidden\n@see aria-readonly.",
      },
      "aria-dropeffect": {
        type: "enum",
        required: false,
        description:
          "Indicates what functions can be performed when a dragged object is released on the drop target.\n@deprecated in ARIA 1.1",
      },
      "aria-errormessage": {
        type: "string",
        required: false,
        description:
          "Identifies the element that provides an error message for the object.\n@see aria-invalid\n@see aria-describedby.",
      },
      "aria-expanded": {
        type: "Booleanish",
        required: false,
        description:
          "Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.",
      },
      "aria-flowto": {
        type: "string",
        required: false,
        description:
          "Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,\nallows assistive technology to override the general default of reading in document source order.",
      },
      "aria-grabbed": {
        type: "Booleanish",
        required: false,
        description:
          'Indicates an element\'s "grabbed" state in a drag-and-drop operation.\n@deprecated in ARIA 1.1',
      },
      "aria-haspopup": {
        type: 'boolean | "true" | "false" | "dialog" | "grid" | "listbox" | "menu" | "tree"',
        required: false,
        description:
          "Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.",
      },
      "aria-hidden": {
        type: "Booleanish",
        required: false,
        description:
          "Indicates whether the element is exposed to an accessibility API.\n@see aria-disabled.",
      },
      "aria-invalid": {
        type: 'boolean | "true" | "false" | "grammar" | "spelling"',
        required: false,
        description:
          "Indicates the entered value does not conform to the format expected by the application.\n@see aria-errormessage.",
      },
      "aria-keyshortcuts": {
        type: "string",
        required: false,
        description:
          "Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.",
      },
      "aria-label": {
        type: "string",
        required: false,
        description:
          "Defines a string value that labels the current element.\n@see aria-labelledby.",
      },
      "aria-labelledby": {
        type: "string",
        required: false,
        description:
          "Identifies the element (or elements) that labels the current element.\n@see aria-describedby.",
      },
      "aria-level": {
        type: "number",
        required: false,
        description:
          "Defines the hierarchical level of an element within a structure.",
      },
      "aria-live": {
        type: "enum",
        required: false,
        description:
          "Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.",
      },
      "aria-modal": {
        type: "Booleanish",
        required: false,
        description: "Indicates whether an element is modal when displayed.",
      },
      "aria-multiline": {
        type: "Booleanish",
        required: false,
        description:
          "Indicates whether a text box accepts multiple lines of input or only a single line.",
      },
      "aria-multiselectable": {
        type: "Booleanish",
        required: false,
        description:
          "Indicates that the user may select more than one item from the current selectable descendants.",
      },
      "aria-orientation": {
        type: "enum",
        required: false,
        description:
          "Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.",
      },
      "aria-owns": {
        type: "string",
        required: false,
        description:
          "Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship\nbetween DOM elements where the DOM hierarchy cannot be used to represent the relationship.\n@see aria-controls.",
      },
      "aria-placeholder": {
        type: "string",
        required: false,
        description:
          "Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.\nA hint could be a sample value or a brief description of the expected format.",
      },
      "aria-posinset": {
        type: "number",
        required: false,
        description:
          "Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.\n@see aria-setsize.",
      },
      "aria-pressed": {
        type: 'boolean | "true" | "false" | "mixed"',
        required: false,
        description:
          'Indicates the current "pressed" state of toggle buttons.\n@see aria-checked\n@see aria-selected.',
      },
      "aria-readonly": {
        type: "Booleanish",
        required: false,
        description:
          "Indicates that the element is not editable, but is otherwise operable.\n@see aria-disabled.",
      },
      "aria-relevant": {
        type: "enum",
        required: false,
        description:
          "Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.\n@see aria-atomic.",
      },
      "aria-required": {
        type: "Booleanish",
        required: false,
        description:
          "Indicates that user input is required on the element before a form may be submitted.",
      },
      "aria-roledescription": {
        type: "string",
        required: false,
        description:
          "Defines a human-readable, author-localized description for the role of an element.",
      },
      "aria-rowcount": {
        type: "number",
        required: false,
        description:
          "Defines the total number of rows in a table, grid, or treegrid.\n@see aria-rowindex.",
      },
      "aria-rowindex": {
        type: "number",
        required: false,
        description:
          "Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.\n@see aria-rowcount\n@see aria-rowspan.",
      },
      "aria-rowindextext": {
        type: "string",
        required: false,
        description:
          "Defines a human readable text alternative of aria-rowindex.\n@see aria-colindextext.",
      },
      "aria-rowspan": {
        type: "number",
        required: false,
        description:
          "Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.\n@see aria-rowindex\n@see aria-colspan.",
      },
      "aria-selected": {
        type: "Booleanish",
        required: false,
        description:
          'Indicates the current "selected" state of various widgets.\n@see aria-checked\n@see aria-pressed.',
      },
      "aria-setsize": {
        type: "number",
        required: false,
        description:
          "Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.\n@see aria-posinset.",
      },
      "aria-sort": {
        type: "enum",
        required: false,
        description:
          "Indicates if items in a table or grid are sorted in ascending or descending order.",
      },
      "aria-valuemax": {
        type: "number",
        required: false,
        description: "Defines the maximum allowed value for a range widget.",
      },
      "aria-valuemin": {
        type: "number",
        required: false,
        description: "Defines the minimum allowed value for a range widget.",
      },
      "aria-valuenow": {
        type: "number",
        required: false,
        description:
          "Defines the current value for a range widget.\n@see aria-valuetext.",
      },
      "aria-valuetext": {
        type: "string",
        required: false,
        description:
          "Defines the human readable text alternative of aria-valuenow for a range widget.",
      },
      children: {
        type: "ReactNode",
        required: false,
      },
      dangerouslySetInnerHTML: {
        type: "{ __html: string | TrustedHTML; }",
        required: false,
      },
      onCopy: {
        type: "ClipboardEventHandler<HTMLButtonElement>",
        required: false,
      },
      onCopyCapture: {
        type: "ClipboardEventHandler<HTMLButtonElement>",
        required: false,
      },
      onCut: {
        type: "ClipboardEventHandler<HTMLButtonElement>",
        required: false,
      },
      onCutCapture: {
        type: "ClipboardEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPaste: {
        type: "ClipboardEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPasteCapture: {
        type: "ClipboardEventHandler<HTMLButtonElement>",
        required: false,
      },
      onCompositionEnd: {
        type: "CompositionEventHandler<HTMLButtonElement>",
        required: false,
      },
      onCompositionEndCapture: {
        type: "CompositionEventHandler<HTMLButtonElement>",
        required: false,
      },
      onCompositionStart: {
        type: "CompositionEventHandler<HTMLButtonElement>",
        required: false,
      },
      onCompositionStartCapture: {
        type: "CompositionEventHandler<HTMLButtonElement>",
        required: false,
      },
      onCompositionUpdate: {
        type: "CompositionEventHandler<HTMLButtonElement>",
        required: false,
      },
      onCompositionUpdateCapture: {
        type: "CompositionEventHandler<HTMLButtonElement>",
        required: false,
      },
      onFocus: {
        type: "FocusEventHandler<HTMLButtonElement>",
        required: false,
      },
      onFocusCapture: {
        type: "FocusEventHandler<HTMLButtonElement>",
        required: false,
      },
      onBlur: {
        type: "FocusEventHandler<HTMLButtonElement>",
        required: false,
      },
      onBlurCapture: {
        type: "FocusEventHandler<HTMLButtonElement>",
        required: false,
      },
      onChangeCapture: {
        type: "FormEventHandler<HTMLButtonElement>",
        required: false,
      },
      onBeforeInput: {
        type: "InputEventHandler<HTMLButtonElement>",
        required: false,
      },
      onBeforeInputCapture: {
        type: "FormEventHandler<HTMLButtonElement>",
        required: false,
      },
      onInput: {
        type: "FormEventHandler<HTMLButtonElement>",
        required: false,
      },
      onInputCapture: {
        type: "FormEventHandler<HTMLButtonElement>",
        required: false,
      },
      onReset: {
        type: "FormEventHandler<HTMLButtonElement>",
        required: false,
      },
      onResetCapture: {
        type: "FormEventHandler<HTMLButtonElement>",
        required: false,
      },
      onSubmit: {
        type: "FormEventHandler<HTMLButtonElement>",
        required: false,
      },
      onSubmitCapture: {
        type: "FormEventHandler<HTMLButtonElement>",
        required: false,
      },
      onInvalid: {
        type: "FormEventHandler<HTMLButtonElement>",
        required: false,
      },
      onInvalidCapture: {
        type: "FormEventHandler<HTMLButtonElement>",
        required: false,
      },
      onLoad: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onLoadCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onError: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onErrorCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onKeyDown: {
        type: "KeyboardEventHandler<HTMLButtonElement>",
        required: false,
      },
      onKeyDownCapture: {
        type: "KeyboardEventHandler<HTMLButtonElement>",
        required: false,
      },
      onKeyPress: {
        type: "KeyboardEventHandler<HTMLButtonElement>",
        required: false,
        description: "@deprecated Use `onKeyUp` or `onKeyDown` instead",
      },
      onKeyPressCapture: {
        type: "KeyboardEventHandler<HTMLButtonElement>",
        required: false,
        description:
          "@deprecated Use `onKeyUpCapture` or `onKeyDownCapture` instead",
      },
      onKeyUp: {
        type: "KeyboardEventHandler<HTMLButtonElement>",
        required: false,
      },
      onKeyUpCapture: {
        type: "KeyboardEventHandler<HTMLButtonElement>",
        required: false,
      },
      onAbort: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onAbortCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onCanPlay: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onCanPlayCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onCanPlayThrough: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onCanPlayThroughCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDurationChange: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDurationChangeCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onEmptied: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onEmptiedCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onEncrypted: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onEncryptedCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onEnded: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onEndedCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onLoadedData: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onLoadedDataCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onLoadedMetadata: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onLoadedMetadataCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onLoadStart: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onLoadStartCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPause: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPauseCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPlay: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPlayCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPlaying: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPlayingCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onProgress: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onProgressCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onRateChange: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onRateChangeCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onSeeked: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onSeekedCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onSeeking: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onSeekingCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onStalled: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onStalledCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onSuspend: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onSuspendCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onTimeUpdate: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onTimeUpdateCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onVolumeChange: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onVolumeChangeCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onWaiting: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onWaitingCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onAuxClick: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onAuxClickCapture: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onClick: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onClickCapture: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onContextMenu: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onContextMenuCapture: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDoubleClick: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDoubleClickCapture: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDrag: {
        type: "DragEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDragCapture: {
        type: "DragEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDragEnd: {
        type: "DragEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDragEndCapture: {
        type: "DragEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDragEnter: {
        type: "DragEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDragEnterCapture: {
        type: "DragEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDragExit: {
        type: "DragEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDragExitCapture: {
        type: "DragEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDragLeave: {
        type: "DragEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDragLeaveCapture: {
        type: "DragEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDragOver: {
        type: "DragEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDragOverCapture: {
        type: "DragEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDragStart: {
        type: "DragEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDragStartCapture: {
        type: "DragEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDrop: {
        type: "DragEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDropCapture: {
        type: "DragEventHandler<HTMLButtonElement>",
        required: false,
      },
      onMouseDown: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onMouseDownCapture: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onMouseEnter: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onMouseLeave: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onMouseMove: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onMouseMoveCapture: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onMouseOut: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onMouseOutCapture: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onMouseOver: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onMouseOverCapture: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onMouseUp: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onMouseUpCapture: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onSelect: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onSelectCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onTouchCancel: {
        type: "TouchEventHandler<HTMLButtonElement>",
        required: false,
      },
      onTouchCancelCapture: {
        type: "TouchEventHandler<HTMLButtonElement>",
        required: false,
      },
      onTouchEnd: {
        type: "TouchEventHandler<HTMLButtonElement>",
        required: false,
      },
      onTouchEndCapture: {
        type: "TouchEventHandler<HTMLButtonElement>",
        required: false,
      },
      onTouchMove: {
        type: "TouchEventHandler<HTMLButtonElement>",
        required: false,
      },
      onTouchMoveCapture: {
        type: "TouchEventHandler<HTMLButtonElement>",
        required: false,
      },
      onTouchStart: {
        type: "TouchEventHandler<HTMLButtonElement>",
        required: false,
      },
      onTouchStartCapture: {
        type: "TouchEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPointerDown: {
        type: "PointerEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPointerDownCapture: {
        type: "PointerEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPointerMove: {
        type: "PointerEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPointerMoveCapture: {
        type: "PointerEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPointerUp: {
        type: "PointerEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPointerUpCapture: {
        type: "PointerEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPointerCancel: {
        type: "PointerEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPointerCancelCapture: {
        type: "PointerEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPointerEnter: {
        type: "PointerEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPointerLeave: {
        type: "PointerEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPointerOver: {
        type: "PointerEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPointerOverCapture: {
        type: "PointerEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPointerOut: {
        type: "PointerEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPointerOutCapture: {
        type: "PointerEventHandler<HTMLButtonElement>",
        required: false,
      },
      onGotPointerCapture: {
        type: "PointerEventHandler<HTMLButtonElement>",
        required: false,
      },
      onGotPointerCaptureCapture: {
        type: "PointerEventHandler<HTMLButtonElement>",
        required: false,
      },
      onLostPointerCapture: {
        type: "PointerEventHandler<HTMLButtonElement>",
        required: false,
      },
      onLostPointerCaptureCapture: {
        type: "PointerEventHandler<HTMLButtonElement>",
        required: false,
      },
      onScroll: {
        type: "UIEventHandler<HTMLButtonElement>",
        required: false,
      },
      onScrollCapture: {
        type: "UIEventHandler<HTMLButtonElement>",
        required: false,
      },
      onScrollEnd: {
        type: "UIEventHandler<HTMLButtonElement>",
        required: false,
      },
      onScrollEndCapture: {
        type: "UIEventHandler<HTMLButtonElement>",
        required: false,
      },
      onWheel: {
        type: "WheelEventHandler<HTMLButtonElement>",
        required: false,
      },
      onWheelCapture: {
        type: "WheelEventHandler<HTMLButtonElement>",
        required: false,
      },
      onAnimationStart: {
        type: "AnimationEventHandler<HTMLButtonElement>",
        required: false,
      },
      onAnimationStartCapture: {
        type: "AnimationEventHandler<HTMLButtonElement>",
        required: false,
      },
      onAnimationEnd: {
        type: "AnimationEventHandler<HTMLButtonElement>",
        required: false,
      },
      onAnimationEndCapture: {
        type: "AnimationEventHandler<HTMLButtonElement>",
        required: false,
      },
      onAnimationIteration: {
        type: "AnimationEventHandler<HTMLButtonElement>",
        required: false,
      },
      onAnimationIterationCapture: {
        type: "AnimationEventHandler<HTMLButtonElement>",
        required: false,
      },
      onToggle: {
        type: "ToggleEventHandler<HTMLButtonElement>",
        required: false,
      },
      onBeforeToggle: {
        type: "ToggleEventHandler<HTMLButtonElement>",
        required: false,
      },
      onTransitionCancel: {
        type: "TransitionEventHandler<HTMLButtonElement>",
        required: false,
      },
      onTransitionCancelCapture: {
        type: "TransitionEventHandler<HTMLButtonElement>",
        required: false,
      },
      onTransitionEnd: {
        type: "TransitionEventHandler<HTMLButtonElement>",
        required: false,
      },
      onTransitionEndCapture: {
        type: "TransitionEventHandler<HTMLButtonElement>",
        required: false,
      },
      onTransitionRun: {
        type: "TransitionEventHandler<HTMLButtonElement>",
        required: false,
      },
      onTransitionRunCapture: {
        type: "TransitionEventHandler<HTMLButtonElement>",
        required: false,
      },
      onTransitionStart: {
        type: "TransitionEventHandler<HTMLButtonElement>",
        required: false,
      },
      onTransitionStartCapture: {
        type: "TransitionEventHandler<HTMLButtonElement>",
        required: false,
      },
      label: {
        type: "string",
        required: false,
      },
      error: {
        type: "string",
        required: false,
      },
      helperText: {
        type: "string",
        required: false,
      },
    },
  },
  TextArea: {
    props: {
      autoComplete: {
        type: "HTMLInputAutoCompleteAttribute",
        required: false,
      },
      cols: {
        type: "number",
        required: false,
      },
      dirName: {
        type: "string",
        required: false,
      },
      disabled: {
        type: "boolean",
        required: false,
      },
      form: {
        type: "string",
        required: false,
      },
      maxLength: {
        type: "number",
        required: false,
        default: "128",
      },
      minLength: {
        type: "number",
        required: false,
      },
      name: {
        type: "string",
        required: false,
      },
      placeholder: {
        type: "string",
        required: false,
      },
      readOnly: {
        type: "boolean",
        required: false,
      },
      required: {
        type: "boolean",
        required: false,
      },
      rows: {
        type: "number",
        required: false,
      },
      value: {
        type: "string | number | readonly string[]",
        required: false,
      },
      wrap: {
        type: "string",
        required: false,
      },
      onChange: {
        type: "FormEventHandler<HTMLButtonElement>",
        required: false,
      },
      defaultChecked: {
        type: "boolean",
        required: false,
      },
      defaultValue: {
        type: "string | number | readonly string[]",
        required: false,
      },
      suppressContentEditableWarning: {
        type: "boolean",
        required: false,
      },
      suppressHydrationWarning: {
        type: "boolean",
        required: false,
      },
      accessKey: {
        type: "string",
        required: false,
      },
      autoCapitalize: {
        type: '"off" | "none" | "on" | "sentences" | "words" | "characters" | (string & {})',
        required: false,
      },
      autoFocus: {
        type: "boolean",
        required: false,
      },
      className: {
        type: "string",
        required: false,
      },
      contentEditable: {
        type: 'Booleanish | "inherit" | "plaintext-only"',
        required: false,
      },
      contextMenu: {
        type: "string",
        required: false,
      },
      dir: {
        type: "string",
        required: false,
      },
      draggable: {
        type: "Booleanish",
        required: false,
      },
      enterKeyHint: {
        type: "enum",
        required: false,
      },
      hidden: {
        type: "boolean",
        required: false,
      },
      id: {
        type: "string",
        required: false,
      },
      lang: {
        type: "string",
        required: false,
      },
      nonce: {
        type: "string",
        required: false,
      },
      slot: {
        type: "string",
        required: false,
      },
      spellCheck: {
        type: "Booleanish",
        required: false,
      },
      style: {
        type: "CSSProperties",
        required: false,
      },
      tabIndex: {
        type: "number",
        required: false,
      },
      title: {
        type: "string",
        required: false,
      },
      translate: {
        type: "enum",
        required: false,
      },
      radioGroup: {
        type: "string",
        required: false,
      },
      role: {
        type: "AriaRole",
        required: false,
      },
      about: {
        type: "string",
        required: false,
      },
      content: {
        type: "string",
        required: false,
      },
      datatype: {
        type: "string",
        required: false,
      },
      inlist: {
        type: "any",
        required: false,
      },
      prefix: {
        type: "string",
        required: false,
      },
      property: {
        type: "string",
        required: false,
      },
      rel: {
        type: "string",
        required: false,
      },
      resource: {
        type: "string",
        required: false,
      },
      rev: {
        type: "string",
        required: false,
      },
      typeof: {
        type: "string",
        required: false,
      },
      vocab: {
        type: "string",
        required: false,
      },
      autoCorrect: {
        type: "string",
        required: false,
      },
      autoSave: {
        type: "string",
        required: false,
      },
      color: {
        type: "string",
        required: false,
      },
      itemProp: {
        type: "string",
        required: false,
      },
      itemScope: {
        type: "boolean",
        required: false,
      },
      itemType: {
        type: "string",
        required: false,
      },
      itemID: {
        type: "string",
        required: false,
      },
      itemRef: {
        type: "string",
        required: false,
      },
      results: {
        type: "number",
        required: false,
      },
      security: {
        type: "string",
        required: false,
      },
      unselectable: {
        type: "enum",
        required: false,
      },
      popover: {
        type: "enum",
        required: false,
      },
      popoverTargetAction: {
        type: "enum",
        required: false,
      },
      popoverTarget: {
        type: "string",
        required: false,
      },
      inert: {
        type: "boolean",
        required: false,
        description:
          "@see https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/inert",
      },
      inputMode: {
        type: "enum",
        required: false,
        description:
          "Hints at the type of data that might be entered by the user while editing the element or its contents\n@see {@link https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute}",
      },
      is: {
        type: "string",
        required: false,
        description:
          "Specify that a standard HTML element should behave like a defined custom built-in element\n@see {@link https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is}",
      },
      exportparts: {
        type: "string",
        required: false,
        description:
          "@see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/exportparts}",
      },
      part: {
        type: "string",
        required: false,
        description:
          "@see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/part}",
      },
      "aria-activedescendant": {
        type: "string",
        required: false,
        description:
          "Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.",
      },
      "aria-atomic": {
        type: "Booleanish",
        required: false,
        description:
          "Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.",
      },
      "aria-autocomplete": {
        type: "enum",
        required: false,
        description:
          "Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be\npresented if they are made.",
      },
      "aria-braillelabel": {
        type: "string",
        required: false,
        description:
          "Defines a string value that labels the current element, which is intended to be converted into Braille.\n@see aria-label.",
      },
      "aria-brailleroledescription": {
        type: "string",
        required: false,
        description:
          "Defines a human-readable, author-localized abbreviated description for the role of an element, which is intended to be converted into Braille.\n@see aria-roledescription.",
      },
      "aria-busy": {
        type: "Booleanish",
        required: false,
      },
      "aria-checked": {
        type: 'boolean | "true" | "false" | "mixed"',
        required: false,
        description:
          'Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.\n@see aria-pressed\n@see aria-selected.',
      },
      "aria-colcount": {
        type: "number",
        required: false,
        description:
          "Defines the total number of columns in a table, grid, or treegrid.\n@see aria-colindex.",
      },
      "aria-colindex": {
        type: "number",
        required: false,
        description:
          "Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.\n@see aria-colcount\n@see aria-colspan.",
      },
      "aria-colindextext": {
        type: "string",
        required: false,
        description:
          "Defines a human readable text alternative of aria-colindex.\n@see aria-rowindextext.",
      },
      "aria-colspan": {
        type: "number",
        required: false,
        description:
          "Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.\n@see aria-colindex\n@see aria-rowspan.",
      },
      "aria-controls": {
        type: "string",
        required: false,
        description:
          "Identifies the element (or elements) whose contents or presence are controlled by the current element.\n@see aria-owns.",
      },
      "aria-current": {
        type: 'boolean | "true" | "false" | "page" | "step" | "location" | "date" | "time"',
        required: false,
        description:
          "Indicates the element that represents the current item within a container or set of related elements.",
      },
      "aria-describedby": {
        type: "string",
        required: false,
        description:
          "Identifies the element (or elements) that describes the object.\n@see aria-labelledby",
      },
      "aria-description": {
        type: "string",
        required: false,
        description:
          "Defines a string value that describes or annotates the current element.\n@see related aria-describedby.",
      },
      "aria-details": {
        type: "string",
        required: false,
        description:
          "Identifies the element that provides a detailed, extended description for the object.\n@see aria-describedby.",
      },
      "aria-disabled": {
        type: "Booleanish",
        required: false,
        description:
          "Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.\n@see aria-hidden\n@see aria-readonly.",
      },
      "aria-dropeffect": {
        type: "enum",
        required: false,
        description:
          "Indicates what functions can be performed when a dragged object is released on the drop target.\n@deprecated in ARIA 1.1",
      },
      "aria-errormessage": {
        type: "string",
        required: false,
        description:
          "Identifies the element that provides an error message for the object.\n@see aria-invalid\n@see aria-describedby.",
      },
      "aria-expanded": {
        type: "Booleanish",
        required: false,
        description:
          "Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.",
      },
      "aria-flowto": {
        type: "string",
        required: false,
        description:
          "Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,\nallows assistive technology to override the general default of reading in document source order.",
      },
      "aria-grabbed": {
        type: "Booleanish",
        required: false,
        description:
          'Indicates an element\'s "grabbed" state in a drag-and-drop operation.\n@deprecated in ARIA 1.1',
      },
      "aria-haspopup": {
        type: 'boolean | "true" | "false" | "dialog" | "grid" | "listbox" | "menu" | "tree"',
        required: false,
        description:
          "Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.",
      },
      "aria-hidden": {
        type: "Booleanish",
        required: false,
        description:
          "Indicates whether the element is exposed to an accessibility API.\n@see aria-disabled.",
      },
      "aria-invalid": {
        type: 'boolean | "true" | "false" | "grammar" | "spelling"',
        required: false,
        description:
          "Indicates the entered value does not conform to the format expected by the application.\n@see aria-errormessage.",
      },
      "aria-keyshortcuts": {
        type: "string",
        required: false,
        description:
          "Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.",
      },
      "aria-label": {
        type: "string",
        required: false,
        description:
          "Defines a string value that labels the current element.\n@see aria-labelledby.",
      },
      "aria-labelledby": {
        type: "string",
        required: false,
        description:
          "Identifies the element (or elements) that labels the current element.\n@see aria-describedby.",
      },
      "aria-level": {
        type: "number",
        required: false,
        description:
          "Defines the hierarchical level of an element within a structure.",
      },
      "aria-live": {
        type: "enum",
        required: false,
        description:
          "Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.",
      },
      "aria-modal": {
        type: "Booleanish",
        required: false,
        description: "Indicates whether an element is modal when displayed.",
      },
      "aria-multiline": {
        type: "Booleanish",
        required: false,
        description:
          "Indicates whether a text box accepts multiple lines of input or only a single line.",
      },
      "aria-multiselectable": {
        type: "Booleanish",
        required: false,
        description:
          "Indicates that the user may select more than one item from the current selectable descendants.",
      },
      "aria-orientation": {
        type: "enum",
        required: false,
        description:
          "Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.",
      },
      "aria-owns": {
        type: "string",
        required: false,
        description:
          "Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship\nbetween DOM elements where the DOM hierarchy cannot be used to represent the relationship.\n@see aria-controls.",
      },
      "aria-placeholder": {
        type: "string",
        required: false,
        description:
          "Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.\nA hint could be a sample value or a brief description of the expected format.",
      },
      "aria-posinset": {
        type: "number",
        required: false,
        description:
          "Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.\n@see aria-setsize.",
      },
      "aria-pressed": {
        type: 'boolean | "true" | "false" | "mixed"',
        required: false,
        description:
          'Indicates the current "pressed" state of toggle buttons.\n@see aria-checked\n@see aria-selected.',
      },
      "aria-readonly": {
        type: "Booleanish",
        required: false,
        description:
          "Indicates that the element is not editable, but is otherwise operable.\n@see aria-disabled.",
      },
      "aria-relevant": {
        type: "enum",
        required: false,
        description:
          "Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.\n@see aria-atomic.",
      },
      "aria-required": {
        type: "Booleanish",
        required: false,
        description:
          "Indicates that user input is required on the element before a form may be submitted.",
      },
      "aria-roledescription": {
        type: "string",
        required: false,
        description:
          "Defines a human-readable, author-localized description for the role of an element.",
      },
      "aria-rowcount": {
        type: "number",
        required: false,
        description:
          "Defines the total number of rows in a table, grid, or treegrid.\n@see aria-rowindex.",
      },
      "aria-rowindex": {
        type: "number",
        required: false,
        description:
          "Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.\n@see aria-rowcount\n@see aria-rowspan.",
      },
      "aria-rowindextext": {
        type: "string",
        required: false,
        description:
          "Defines a human readable text alternative of aria-rowindex.\n@see aria-colindextext.",
      },
      "aria-rowspan": {
        type: "number",
        required: false,
        description:
          "Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.\n@see aria-rowindex\n@see aria-colspan.",
      },
      "aria-selected": {
        type: "Booleanish",
        required: false,
        description:
          'Indicates the current "selected" state of various widgets.\n@see aria-checked\n@see aria-pressed.',
      },
      "aria-setsize": {
        type: "number",
        required: false,
        description:
          "Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.\n@see aria-posinset.",
      },
      "aria-sort": {
        type: "enum",
        required: false,
        description:
          "Indicates if items in a table or grid are sorted in ascending or descending order.",
      },
      "aria-valuemax": {
        type: "number",
        required: false,
        description: "Defines the maximum allowed value for a range widget.",
      },
      "aria-valuemin": {
        type: "number",
        required: false,
        description: "Defines the minimum allowed value for a range widget.",
      },
      "aria-valuenow": {
        type: "number",
        required: false,
        description:
          "Defines the current value for a range widget.\n@see aria-valuetext.",
      },
      "aria-valuetext": {
        type: "string",
        required: false,
        description:
          "Defines the human readable text alternative of aria-valuenow for a range widget.",
      },
      dangerouslySetInnerHTML: {
        type: "{ __html: string | TrustedHTML; }",
        required: false,
      },
      onCopy: {
        type: "ClipboardEventHandler<HTMLButtonElement>",
        required: false,
      },
      onCopyCapture: {
        type: "ClipboardEventHandler<HTMLButtonElement>",
        required: false,
      },
      onCut: {
        type: "ClipboardEventHandler<HTMLButtonElement>",
        required: false,
      },
      onCutCapture: {
        type: "ClipboardEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPaste: {
        type: "ClipboardEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPasteCapture: {
        type: "ClipboardEventHandler<HTMLButtonElement>",
        required: false,
      },
      onCompositionEnd: {
        type: "CompositionEventHandler<HTMLButtonElement>",
        required: false,
      },
      onCompositionEndCapture: {
        type: "CompositionEventHandler<HTMLButtonElement>",
        required: false,
      },
      onCompositionStart: {
        type: "CompositionEventHandler<HTMLButtonElement>",
        required: false,
      },
      onCompositionStartCapture: {
        type: "CompositionEventHandler<HTMLButtonElement>",
        required: false,
      },
      onCompositionUpdate: {
        type: "CompositionEventHandler<HTMLButtonElement>",
        required: false,
      },
      onCompositionUpdateCapture: {
        type: "CompositionEventHandler<HTMLButtonElement>",
        required: false,
      },
      onFocus: {
        type: "FocusEventHandler<HTMLButtonElement>",
        required: false,
      },
      onFocusCapture: {
        type: "FocusEventHandler<HTMLButtonElement>",
        required: false,
      },
      onBlur: {
        type: "FocusEventHandler<HTMLButtonElement>",
        required: false,
      },
      onBlurCapture: {
        type: "FocusEventHandler<HTMLButtonElement>",
        required: false,
      },
      onChangeCapture: {
        type: "FormEventHandler<HTMLButtonElement>",
        required: false,
      },
      onBeforeInput: {
        type: "InputEventHandler<HTMLButtonElement>",
        required: false,
      },
      onBeforeInputCapture: {
        type: "FormEventHandler<HTMLButtonElement>",
        required: false,
      },
      onInput: {
        type: "FormEventHandler<HTMLButtonElement>",
        required: false,
      },
      onInputCapture: {
        type: "FormEventHandler<HTMLButtonElement>",
        required: false,
      },
      onReset: {
        type: "FormEventHandler<HTMLButtonElement>",
        required: false,
      },
      onResetCapture: {
        type: "FormEventHandler<HTMLButtonElement>",
        required: false,
      },
      onSubmit: {
        type: "FormEventHandler<HTMLButtonElement>",
        required: false,
      },
      onSubmitCapture: {
        type: "FormEventHandler<HTMLButtonElement>",
        required: false,
      },
      onInvalid: {
        type: "FormEventHandler<HTMLButtonElement>",
        required: false,
      },
      onInvalidCapture: {
        type: "FormEventHandler<HTMLButtonElement>",
        required: false,
      },
      onLoad: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onLoadCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onError: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onErrorCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onKeyDown: {
        type: "KeyboardEventHandler<HTMLButtonElement>",
        required: false,
      },
      onKeyDownCapture: {
        type: "KeyboardEventHandler<HTMLButtonElement>",
        required: false,
      },
      onKeyPress: {
        type: "KeyboardEventHandler<HTMLButtonElement>",
        required: false,
        description: "@deprecated Use `onKeyUp` or `onKeyDown` instead",
      },
      onKeyPressCapture: {
        type: "KeyboardEventHandler<HTMLButtonElement>",
        required: false,
        description:
          "@deprecated Use `onKeyUpCapture` or `onKeyDownCapture` instead",
      },
      onKeyUp: {
        type: "KeyboardEventHandler<HTMLButtonElement>",
        required: false,
      },
      onKeyUpCapture: {
        type: "KeyboardEventHandler<HTMLButtonElement>",
        required: false,
      },
      onAbort: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onAbortCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onCanPlay: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onCanPlayCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onCanPlayThrough: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onCanPlayThroughCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDurationChange: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDurationChangeCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onEmptied: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onEmptiedCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onEncrypted: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onEncryptedCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onEnded: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onEndedCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onLoadedData: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onLoadedDataCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onLoadedMetadata: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onLoadedMetadataCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onLoadStart: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onLoadStartCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPause: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPauseCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPlay: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPlayCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPlaying: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPlayingCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onProgress: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onProgressCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onRateChange: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onRateChangeCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onSeeked: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onSeekedCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onSeeking: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onSeekingCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onStalled: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onStalledCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onSuspend: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onSuspendCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onTimeUpdate: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onTimeUpdateCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onVolumeChange: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onVolumeChangeCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onWaiting: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onWaitingCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onAuxClick: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onAuxClickCapture: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onClick: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onClickCapture: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onContextMenu: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onContextMenuCapture: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDoubleClick: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDoubleClickCapture: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDrag: {
        type: "DragEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDragCapture: {
        type: "DragEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDragEnd: {
        type: "DragEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDragEndCapture: {
        type: "DragEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDragEnter: {
        type: "DragEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDragEnterCapture: {
        type: "DragEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDragExit: {
        type: "DragEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDragExitCapture: {
        type: "DragEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDragLeave: {
        type: "DragEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDragLeaveCapture: {
        type: "DragEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDragOver: {
        type: "DragEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDragOverCapture: {
        type: "DragEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDragStart: {
        type: "DragEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDragStartCapture: {
        type: "DragEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDrop: {
        type: "DragEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDropCapture: {
        type: "DragEventHandler<HTMLButtonElement>",
        required: false,
      },
      onMouseDown: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onMouseDownCapture: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onMouseEnter: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onMouseLeave: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onMouseMove: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onMouseMoveCapture: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onMouseOut: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onMouseOutCapture: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onMouseOver: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onMouseOverCapture: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onMouseUp: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onMouseUpCapture: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onSelect: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onSelectCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onTouchCancel: {
        type: "TouchEventHandler<HTMLButtonElement>",
        required: false,
      },
      onTouchCancelCapture: {
        type: "TouchEventHandler<HTMLButtonElement>",
        required: false,
      },
      onTouchEnd: {
        type: "TouchEventHandler<HTMLButtonElement>",
        required: false,
      },
      onTouchEndCapture: {
        type: "TouchEventHandler<HTMLButtonElement>",
        required: false,
      },
      onTouchMove: {
        type: "TouchEventHandler<HTMLButtonElement>",
        required: false,
      },
      onTouchMoveCapture: {
        type: "TouchEventHandler<HTMLButtonElement>",
        required: false,
      },
      onTouchStart: {
        type: "TouchEventHandler<HTMLButtonElement>",
        required: false,
      },
      onTouchStartCapture: {
        type: "TouchEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPointerDown: {
        type: "PointerEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPointerDownCapture: {
        type: "PointerEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPointerMove: {
        type: "PointerEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPointerMoveCapture: {
        type: "PointerEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPointerUp: {
        type: "PointerEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPointerUpCapture: {
        type: "PointerEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPointerCancel: {
        type: "PointerEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPointerCancelCapture: {
        type: "PointerEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPointerEnter: {
        type: "PointerEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPointerLeave: {
        type: "PointerEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPointerOver: {
        type: "PointerEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPointerOverCapture: {
        type: "PointerEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPointerOut: {
        type: "PointerEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPointerOutCapture: {
        type: "PointerEventHandler<HTMLButtonElement>",
        required: false,
      },
      onGotPointerCapture: {
        type: "PointerEventHandler<HTMLButtonElement>",
        required: false,
      },
      onGotPointerCaptureCapture: {
        type: "PointerEventHandler<HTMLButtonElement>",
        required: false,
      },
      onLostPointerCapture: {
        type: "PointerEventHandler<HTMLButtonElement>",
        required: false,
      },
      onLostPointerCaptureCapture: {
        type: "PointerEventHandler<HTMLButtonElement>",
        required: false,
      },
      onScroll: {
        type: "UIEventHandler<HTMLButtonElement>",
        required: false,
      },
      onScrollCapture: {
        type: "UIEventHandler<HTMLButtonElement>",
        required: false,
      },
      onScrollEnd: {
        type: "UIEventHandler<HTMLButtonElement>",
        required: false,
      },
      onScrollEndCapture: {
        type: "UIEventHandler<HTMLButtonElement>",
        required: false,
      },
      onWheel: {
        type: "WheelEventHandler<HTMLButtonElement>",
        required: false,
      },
      onWheelCapture: {
        type: "WheelEventHandler<HTMLButtonElement>",
        required: false,
      },
      onAnimationStart: {
        type: "AnimationEventHandler<HTMLButtonElement>",
        required: false,
      },
      onAnimationStartCapture: {
        type: "AnimationEventHandler<HTMLButtonElement>",
        required: false,
      },
      onAnimationEnd: {
        type: "AnimationEventHandler<HTMLButtonElement>",
        required: false,
      },
      onAnimationEndCapture: {
        type: "AnimationEventHandler<HTMLButtonElement>",
        required: false,
      },
      onAnimationIteration: {
        type: "AnimationEventHandler<HTMLButtonElement>",
        required: false,
      },
      onAnimationIterationCapture: {
        type: "AnimationEventHandler<HTMLButtonElement>",
        required: false,
      },
      onToggle: {
        type: "ToggleEventHandler<HTMLButtonElement>",
        required: false,
      },
      onBeforeToggle: {
        type: "ToggleEventHandler<HTMLButtonElement>",
        required: false,
      },
      onTransitionCancel: {
        type: "TransitionEventHandler<HTMLButtonElement>",
        required: false,
      },
      onTransitionCancelCapture: {
        type: "TransitionEventHandler<HTMLButtonElement>",
        required: false,
      },
      onTransitionEnd: {
        type: "TransitionEventHandler<HTMLButtonElement>",
        required: false,
      },
      onTransitionEndCapture: {
        type: "TransitionEventHandler<HTMLButtonElement>",
        required: false,
      },
      onTransitionRun: {
        type: "TransitionEventHandler<HTMLButtonElement>",
        required: false,
      },
      onTransitionRunCapture: {
        type: "TransitionEventHandler<HTMLButtonElement>",
        required: false,
      },
      onTransitionStart: {
        type: "TransitionEventHandler<HTMLButtonElement>",
        required: false,
      },
      onTransitionStartCapture: {
        type: "TransitionEventHandler<HTMLButtonElement>",
        required: false,
      },
      label: {
        type: "string",
        required: false,
      },
      error: {
        type: "string",
        required: false,
      },
      helperText: {
        type: "string",
        required: false,
      },
      ref: {
        type: "Ref<HTMLTextAreaElement>",
        required: false,
        description:
          "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref).\n@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs}",
      },
      key: {
        type: "Key",
        required: false,
      },
    },
  },
  BikeListItem: {
    props: {
      bike: {
        type: "Bike",
        required: true,
      },
    },
  },
  LPContact: {
    props: {},
  },
  LPFAQuestion: {
    props: {
      question: {
        type: "ReactNode",
        required: true,
      },
      answer: {
        type: "ReactNode",
        required: true,
      },
      defaultOpen: {
        type: "boolean",
        required: false,
      },
      open: {
        type: "boolean",
        required: false,
      },
      onToggle: {
        type: "(open: boolean) => void",
        required: false,
      },
      id: {
        type: "string",
        required: false,
      },
      className: {
        type: "string",
        required: false,
      },
    },
  },
  PasswordField: {
    props: {
      accept: {
        type: "string",
        required: false,
      },
      alt: {
        type: "string",
        required: false,
      },
      autoComplete: {
        type: "HTMLInputAutoCompleteAttribute",
        required: false,
      },
      capture: {
        type: 'boolean | "user" | "environment"',
        required: false,
      },
      checked: {
        type: "boolean",
        required: false,
      },
      disabled: {
        type: "boolean",
        required: false,
      },
      form: {
        type: "string",
        required: false,
      },
      formAction: {
        type: "string | ((formData: FormData) => void | Promise<void>)",
        required: false,
      },
      formEncType: {
        type: "string",
        required: false,
      },
      formMethod: {
        type: "string",
        required: false,
      },
      formNoValidate: {
        type: "boolean",
        required: false,
      },
      formTarget: {
        type: "string",
        required: false,
      },
      height: {
        type: "string | number",
        required: false,
      },
      list: {
        type: "string",
        required: false,
      },
      max: {
        type: "string | number",
        required: false,
      },
      maxLength: {
        type: "number",
        required: false,
        default: "128",
      },
      min: {
        type: "string | number",
        required: false,
      },
      minLength: {
        type: "number",
        required: false,
      },
      multiple: {
        type: "boolean",
        required: false,
      },
      name: {
        type: "string",
        required: false,
      },
      pattern: {
        type: "string",
        required: false,
      },
      placeholder: {
        type: "string",
        required: false,
      },
      readOnly: {
        type: "boolean",
        required: false,
      },
      required: {
        type: "boolean",
        required: false,
      },
      size: {
        type: "number",
        required: false,
      },
      src: {
        type: "string",
        required: false,
      },
      step: {
        type: "string | number",
        required: false,
      },
      type: {
        type: "enum",
        required: false,
      },
      value: {
        type: "string | number | readonly string[]",
        required: false,
      },
      width: {
        type: "string | number",
        required: false,
      },
      onChange: {
        type: "FormEventHandler<HTMLButtonElement>",
        required: false,
      },
      defaultChecked: {
        type: "boolean",
        required: false,
      },
      defaultValue: {
        type: "string | number | readonly string[]",
        required: false,
      },
      suppressContentEditableWarning: {
        type: "boolean",
        required: false,
      },
      suppressHydrationWarning: {
        type: "boolean",
        required: false,
      },
      accessKey: {
        type: "string",
        required: false,
      },
      autoCapitalize: {
        type: '"off" | "none" | "on" | "sentences" | "words" | "characters" | (string & {})',
        required: false,
      },
      autoFocus: {
        type: "boolean",
        required: false,
      },
      className: {
        type: "string",
        required: false,
      },
      contentEditable: {
        type: 'Booleanish | "inherit" | "plaintext-only"',
        required: false,
      },
      contextMenu: {
        type: "string",
        required: false,
      },
      dir: {
        type: "string",
        required: false,
      },
      draggable: {
        type: "Booleanish",
        required: false,
      },
      enterKeyHint: {
        type: "enum",
        required: false,
      },
      hidden: {
        type: "boolean",
        required: false,
      },
      id: {
        type: "string",
        required: false,
      },
      lang: {
        type: "string",
        required: false,
      },
      nonce: {
        type: "string",
        required: false,
      },
      slot: {
        type: "string",
        required: false,
      },
      spellCheck: {
        type: "Booleanish",
        required: false,
      },
      style: {
        type: "CSSProperties",
        required: false,
      },
      tabIndex: {
        type: "number",
        required: false,
      },
      title: {
        type: "string",
        required: false,
      },
      translate: {
        type: "enum",
        required: false,
      },
      radioGroup: {
        type: "string",
        required: false,
      },
      role: {
        type: "AriaRole",
        required: false,
      },
      about: {
        type: "string",
        required: false,
      },
      content: {
        type: "string",
        required: false,
      },
      datatype: {
        type: "string",
        required: false,
      },
      inlist: {
        type: "any",
        required: false,
      },
      prefix: {
        type: "string",
        required: false,
      },
      property: {
        type: "string",
        required: false,
      },
      rel: {
        type: "string",
        required: false,
      },
      resource: {
        type: "string",
        required: false,
      },
      rev: {
        type: "string",
        required: false,
      },
      typeof: {
        type: "string",
        required: false,
      },
      vocab: {
        type: "string",
        required: false,
      },
      autoCorrect: {
        type: "string",
        required: false,
      },
      autoSave: {
        type: "string",
        required: false,
      },
      color: {
        type: "string",
        required: false,
      },
      itemProp: {
        type: "string",
        required: false,
      },
      itemScope: {
        type: "boolean",
        required: false,
      },
      itemType: {
        type: "string",
        required: false,
      },
      itemID: {
        type: "string",
        required: false,
      },
      itemRef: {
        type: "string",
        required: false,
      },
      results: {
        type: "number",
        required: false,
      },
      security: {
        type: "string",
        required: false,
      },
      unselectable: {
        type: "enum",
        required: false,
      },
      popover: {
        type: "enum",
        required: false,
      },
      popoverTargetAction: {
        type: "enum",
        required: false,
      },
      popoverTarget: {
        type: "string",
        required: false,
      },
      inert: {
        type: "boolean",
        required: false,
        description:
          "@see https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/inert",
      },
      inputMode: {
        type: "enum",
        required: false,
        description:
          "Hints at the type of data that might be entered by the user while editing the element or its contents\n@see {@link https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute}",
      },
      is: {
        type: "string",
        required: false,
        description:
          "Specify that a standard HTML element should behave like a defined custom built-in element\n@see {@link https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is}",
      },
      exportparts: {
        type: "string",
        required: false,
        description:
          "@see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/exportparts}",
      },
      part: {
        type: "string",
        required: false,
        description:
          "@see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/part}",
      },
      "aria-activedescendant": {
        type: "string",
        required: false,
        description:
          "Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.",
      },
      "aria-atomic": {
        type: "Booleanish",
        required: false,
        description:
          "Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.",
      },
      "aria-autocomplete": {
        type: "enum",
        required: false,
        description:
          "Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be\npresented if they are made.",
      },
      "aria-braillelabel": {
        type: "string",
        required: false,
        description:
          "Defines a string value that labels the current element, which is intended to be converted into Braille.\n@see aria-label.",
      },
      "aria-brailleroledescription": {
        type: "string",
        required: false,
        description:
          "Defines a human-readable, author-localized abbreviated description for the role of an element, which is intended to be converted into Braille.\n@see aria-roledescription.",
      },
      "aria-busy": {
        type: "Booleanish",
        required: false,
      },
      "aria-checked": {
        type: 'boolean | "true" | "false" | "mixed"',
        required: false,
        description:
          'Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.\n@see aria-pressed\n@see aria-selected.',
      },
      "aria-colcount": {
        type: "number",
        required: false,
        description:
          "Defines the total number of columns in a table, grid, or treegrid.\n@see aria-colindex.",
      },
      "aria-colindex": {
        type: "number",
        required: false,
        description:
          "Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.\n@see aria-colcount\n@see aria-colspan.",
      },
      "aria-colindextext": {
        type: "string",
        required: false,
        description:
          "Defines a human readable text alternative of aria-colindex.\n@see aria-rowindextext.",
      },
      "aria-colspan": {
        type: "number",
        required: false,
        description:
          "Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.\n@see aria-colindex\n@see aria-rowspan.",
      },
      "aria-controls": {
        type: "string",
        required: false,
        description:
          "Identifies the element (or elements) whose contents or presence are controlled by the current element.\n@see aria-owns.",
      },
      "aria-current": {
        type: 'boolean | "true" | "false" | "page" | "step" | "location" | "date" | "time"',
        required: false,
        description:
          "Indicates the element that represents the current item within a container or set of related elements.",
      },
      "aria-describedby": {
        type: "string",
        required: false,
        description:
          "Identifies the element (or elements) that describes the object.\n@see aria-labelledby",
      },
      "aria-description": {
        type: "string",
        required: false,
        description:
          "Defines a string value that describes or annotates the current element.\n@see related aria-describedby.",
      },
      "aria-details": {
        type: "string",
        required: false,
        description:
          "Identifies the element that provides a detailed, extended description for the object.\n@see aria-describedby.",
      },
      "aria-disabled": {
        type: "Booleanish",
        required: false,
        description:
          "Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.\n@see aria-hidden\n@see aria-readonly.",
      },
      "aria-dropeffect": {
        type: "enum",
        required: false,
        description:
          "Indicates what functions can be performed when a dragged object is released on the drop target.\n@deprecated in ARIA 1.1",
      },
      "aria-errormessage": {
        type: "string",
        required: false,
        description:
          "Identifies the element that provides an error message for the object.\n@see aria-invalid\n@see aria-describedby.",
      },
      "aria-expanded": {
        type: "Booleanish",
        required: false,
        description:
          "Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.",
      },
      "aria-flowto": {
        type: "string",
        required: false,
        description:
          "Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,\nallows assistive technology to override the general default of reading in document source order.",
      },
      "aria-grabbed": {
        type: "Booleanish",
        required: false,
        description:
          'Indicates an element\'s "grabbed" state in a drag-and-drop operation.\n@deprecated in ARIA 1.1',
      },
      "aria-haspopup": {
        type: 'boolean | "true" | "false" | "dialog" | "grid" | "listbox" | "menu" | "tree"',
        required: false,
        description:
          "Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.",
      },
      "aria-hidden": {
        type: "Booleanish",
        required: false,
        description:
          "Indicates whether the element is exposed to an accessibility API.\n@see aria-disabled.",
      },
      "aria-invalid": {
        type: 'boolean | "true" | "false" | "grammar" | "spelling"',
        required: false,
        description:
          "Indicates the entered value does not conform to the format expected by the application.\n@see aria-errormessage.",
      },
      "aria-keyshortcuts": {
        type: "string",
        required: false,
        description:
          "Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.",
      },
      "aria-label": {
        type: "string",
        required: false,
        description:
          "Defines a string value that labels the current element.\n@see aria-labelledby.",
      },
      "aria-labelledby": {
        type: "string",
        required: false,
        description:
          "Identifies the element (or elements) that labels the current element.\n@see aria-describedby.",
      },
      "aria-level": {
        type: "number",
        required: false,
        description:
          "Defines the hierarchical level of an element within a structure.",
      },
      "aria-live": {
        type: "enum",
        required: false,
        description:
          "Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.",
      },
      "aria-modal": {
        type: "Booleanish",
        required: false,
        description: "Indicates whether an element is modal when displayed.",
      },
      "aria-multiline": {
        type: "Booleanish",
        required: false,
        description:
          "Indicates whether a text box accepts multiple lines of input or only a single line.",
      },
      "aria-multiselectable": {
        type: "Booleanish",
        required: false,
        description:
          "Indicates that the user may select more than one item from the current selectable descendants.",
      },
      "aria-orientation": {
        type: "enum",
        required: false,
        description:
          "Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.",
      },
      "aria-owns": {
        type: "string",
        required: false,
        description:
          "Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship\nbetween DOM elements where the DOM hierarchy cannot be used to represent the relationship.\n@see aria-controls.",
      },
      "aria-placeholder": {
        type: "string",
        required: false,
        description:
          "Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.\nA hint could be a sample value or a brief description of the expected format.",
      },
      "aria-posinset": {
        type: "number",
        required: false,
        description:
          "Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.\n@see aria-setsize.",
      },
      "aria-pressed": {
        type: 'boolean | "true" | "false" | "mixed"',
        required: false,
        description:
          'Indicates the current "pressed" state of toggle buttons.\n@see aria-checked\n@see aria-selected.',
      },
      "aria-readonly": {
        type: "Booleanish",
        required: false,
        description:
          "Indicates that the element is not editable, but is otherwise operable.\n@see aria-disabled.",
      },
      "aria-relevant": {
        type: "enum",
        required: false,
        description:
          "Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.\n@see aria-atomic.",
      },
      "aria-required": {
        type: "Booleanish",
        required: false,
        description:
          "Indicates that user input is required on the element before a form may be submitted.",
      },
      "aria-roledescription": {
        type: "string",
        required: false,
        description:
          "Defines a human-readable, author-localized description for the role of an element.",
      },
      "aria-rowcount": {
        type: "number",
        required: false,
        description:
          "Defines the total number of rows in a table, grid, or treegrid.\n@see aria-rowindex.",
      },
      "aria-rowindex": {
        type: "number",
        required: false,
        description:
          "Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.\n@see aria-rowcount\n@see aria-rowspan.",
      },
      "aria-rowindextext": {
        type: "string",
        required: false,
        description:
          "Defines a human readable text alternative of aria-rowindex.\n@see aria-colindextext.",
      },
      "aria-rowspan": {
        type: "number",
        required: false,
        description:
          "Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.\n@see aria-rowindex\n@see aria-colspan.",
      },
      "aria-selected": {
        type: "Booleanish",
        required: false,
        description:
          'Indicates the current "selected" state of various widgets.\n@see aria-checked\n@see aria-pressed.',
      },
      "aria-setsize": {
        type: "number",
        required: false,
        description:
          "Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.\n@see aria-posinset.",
      },
      "aria-sort": {
        type: "enum",
        required: false,
        description:
          "Indicates if items in a table or grid are sorted in ascending or descending order.",
      },
      "aria-valuemax": {
        type: "number",
        required: false,
        description: "Defines the maximum allowed value for a range widget.",
      },
      "aria-valuemin": {
        type: "number",
        required: false,
        description: "Defines the minimum allowed value for a range widget.",
      },
      "aria-valuenow": {
        type: "number",
        required: false,
        description:
          "Defines the current value for a range widget.\n@see aria-valuetext.",
      },
      "aria-valuetext": {
        type: "string",
        required: false,
        description:
          "Defines the human readable text alternative of aria-valuenow for a range widget.",
      },
      children: {
        type: "ReactNode",
        required: false,
      },
      dangerouslySetInnerHTML: {
        type: "{ __html: string | TrustedHTML; }",
        required: false,
      },
      onCopy: {
        type: "ClipboardEventHandler<HTMLButtonElement>",
        required: false,
      },
      onCopyCapture: {
        type: "ClipboardEventHandler<HTMLButtonElement>",
        required: false,
      },
      onCut: {
        type: "ClipboardEventHandler<HTMLButtonElement>",
        required: false,
      },
      onCutCapture: {
        type: "ClipboardEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPaste: {
        type: "ClipboardEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPasteCapture: {
        type: "ClipboardEventHandler<HTMLButtonElement>",
        required: false,
      },
      onCompositionEnd: {
        type: "CompositionEventHandler<HTMLButtonElement>",
        required: false,
      },
      onCompositionEndCapture: {
        type: "CompositionEventHandler<HTMLButtonElement>",
        required: false,
      },
      onCompositionStart: {
        type: "CompositionEventHandler<HTMLButtonElement>",
        required: false,
      },
      onCompositionStartCapture: {
        type: "CompositionEventHandler<HTMLButtonElement>",
        required: false,
      },
      onCompositionUpdate: {
        type: "CompositionEventHandler<HTMLButtonElement>",
        required: false,
      },
      onCompositionUpdateCapture: {
        type: "CompositionEventHandler<HTMLButtonElement>",
        required: false,
      },
      onFocus: {
        type: "FocusEventHandler<HTMLButtonElement>",
        required: false,
      },
      onFocusCapture: {
        type: "FocusEventHandler<HTMLButtonElement>",
        required: false,
      },
      onBlur: {
        type: "FocusEventHandler<HTMLButtonElement>",
        required: false,
      },
      onBlurCapture: {
        type: "FocusEventHandler<HTMLButtonElement>",
        required: false,
      },
      onChangeCapture: {
        type: "FormEventHandler<HTMLButtonElement>",
        required: false,
      },
      onBeforeInput: {
        type: "InputEventHandler<HTMLButtonElement>",
        required: false,
      },
      onBeforeInputCapture: {
        type: "FormEventHandler<HTMLButtonElement>",
        required: false,
      },
      onInput: {
        type: "FormEventHandler<HTMLButtonElement>",
        required: false,
      },
      onInputCapture: {
        type: "FormEventHandler<HTMLButtonElement>",
        required: false,
      },
      onReset: {
        type: "FormEventHandler<HTMLButtonElement>",
        required: false,
      },
      onResetCapture: {
        type: "FormEventHandler<HTMLButtonElement>",
        required: false,
      },
      onSubmit: {
        type: "FormEventHandler<HTMLButtonElement>",
        required: false,
      },
      onSubmitCapture: {
        type: "FormEventHandler<HTMLButtonElement>",
        required: false,
      },
      onInvalid: {
        type: "FormEventHandler<HTMLButtonElement>",
        required: false,
      },
      onInvalidCapture: {
        type: "FormEventHandler<HTMLButtonElement>",
        required: false,
      },
      onLoad: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onLoadCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onError: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onErrorCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onKeyDown: {
        type: "KeyboardEventHandler<HTMLButtonElement>",
        required: false,
      },
      onKeyDownCapture: {
        type: "KeyboardEventHandler<HTMLButtonElement>",
        required: false,
      },
      onKeyPress: {
        type: "KeyboardEventHandler<HTMLButtonElement>",
        required: false,
        description: "@deprecated Use `onKeyUp` or `onKeyDown` instead",
      },
      onKeyPressCapture: {
        type: "KeyboardEventHandler<HTMLButtonElement>",
        required: false,
        description:
          "@deprecated Use `onKeyUpCapture` or `onKeyDownCapture` instead",
      },
      onKeyUp: {
        type: "KeyboardEventHandler<HTMLButtonElement>",
        required: false,
      },
      onKeyUpCapture: {
        type: "KeyboardEventHandler<HTMLButtonElement>",
        required: false,
      },
      onAbort: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onAbortCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onCanPlay: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onCanPlayCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onCanPlayThrough: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onCanPlayThroughCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDurationChange: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDurationChangeCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onEmptied: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onEmptiedCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onEncrypted: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onEncryptedCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onEnded: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onEndedCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onLoadedData: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onLoadedDataCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onLoadedMetadata: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onLoadedMetadataCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onLoadStart: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onLoadStartCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPause: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPauseCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPlay: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPlayCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPlaying: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPlayingCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onProgress: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onProgressCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onRateChange: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onRateChangeCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onSeeked: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onSeekedCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onSeeking: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onSeekingCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onStalled: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onStalledCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onSuspend: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onSuspendCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onTimeUpdate: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onTimeUpdateCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onVolumeChange: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onVolumeChangeCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onWaiting: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onWaitingCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onAuxClick: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onAuxClickCapture: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onClick: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onClickCapture: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onContextMenu: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onContextMenuCapture: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDoubleClick: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDoubleClickCapture: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDrag: {
        type: "DragEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDragCapture: {
        type: "DragEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDragEnd: {
        type: "DragEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDragEndCapture: {
        type: "DragEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDragEnter: {
        type: "DragEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDragEnterCapture: {
        type: "DragEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDragExit: {
        type: "DragEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDragExitCapture: {
        type: "DragEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDragLeave: {
        type: "DragEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDragLeaveCapture: {
        type: "DragEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDragOver: {
        type: "DragEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDragOverCapture: {
        type: "DragEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDragStart: {
        type: "DragEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDragStartCapture: {
        type: "DragEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDrop: {
        type: "DragEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDropCapture: {
        type: "DragEventHandler<HTMLButtonElement>",
        required: false,
      },
      onMouseDown: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onMouseDownCapture: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onMouseEnter: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onMouseLeave: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onMouseMove: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onMouseMoveCapture: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onMouseOut: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onMouseOutCapture: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onMouseOver: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onMouseOverCapture: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onMouseUp: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onMouseUpCapture: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onSelect: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onSelectCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onTouchCancel: {
        type: "TouchEventHandler<HTMLButtonElement>",
        required: false,
      },
      onTouchCancelCapture: {
        type: "TouchEventHandler<HTMLButtonElement>",
        required: false,
      },
      onTouchEnd: {
        type: "TouchEventHandler<HTMLButtonElement>",
        required: false,
      },
      onTouchEndCapture: {
        type: "TouchEventHandler<HTMLButtonElement>",
        required: false,
      },
      onTouchMove: {
        type: "TouchEventHandler<HTMLButtonElement>",
        required: false,
      },
      onTouchMoveCapture: {
        type: "TouchEventHandler<HTMLButtonElement>",
        required: false,
      },
      onTouchStart: {
        type: "TouchEventHandler<HTMLButtonElement>",
        required: false,
      },
      onTouchStartCapture: {
        type: "TouchEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPointerDown: {
        type: "PointerEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPointerDownCapture: {
        type: "PointerEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPointerMove: {
        type: "PointerEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPointerMoveCapture: {
        type: "PointerEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPointerUp: {
        type: "PointerEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPointerUpCapture: {
        type: "PointerEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPointerCancel: {
        type: "PointerEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPointerCancelCapture: {
        type: "PointerEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPointerEnter: {
        type: "PointerEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPointerLeave: {
        type: "PointerEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPointerOver: {
        type: "PointerEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPointerOverCapture: {
        type: "PointerEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPointerOut: {
        type: "PointerEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPointerOutCapture: {
        type: "PointerEventHandler<HTMLButtonElement>",
        required: false,
      },
      onGotPointerCapture: {
        type: "PointerEventHandler<HTMLButtonElement>",
        required: false,
      },
      onGotPointerCaptureCapture: {
        type: "PointerEventHandler<HTMLButtonElement>",
        required: false,
      },
      onLostPointerCapture: {
        type: "PointerEventHandler<HTMLButtonElement>",
        required: false,
      },
      onLostPointerCaptureCapture: {
        type: "PointerEventHandler<HTMLButtonElement>",
        required: false,
      },
      onScroll: {
        type: "UIEventHandler<HTMLButtonElement>",
        required: false,
      },
      onScrollCapture: {
        type: "UIEventHandler<HTMLButtonElement>",
        required: false,
      },
      onScrollEnd: {
        type: "UIEventHandler<HTMLButtonElement>",
        required: false,
      },
      onScrollEndCapture: {
        type: "UIEventHandler<HTMLButtonElement>",
        required: false,
      },
      onWheel: {
        type: "WheelEventHandler<HTMLButtonElement>",
        required: false,
      },
      onWheelCapture: {
        type: "WheelEventHandler<HTMLButtonElement>",
        required: false,
      },
      onAnimationStart: {
        type: "AnimationEventHandler<HTMLButtonElement>",
        required: false,
      },
      onAnimationStartCapture: {
        type: "AnimationEventHandler<HTMLButtonElement>",
        required: false,
      },
      onAnimationEnd: {
        type: "AnimationEventHandler<HTMLButtonElement>",
        required: false,
      },
      onAnimationEndCapture: {
        type: "AnimationEventHandler<HTMLButtonElement>",
        required: false,
      },
      onAnimationIteration: {
        type: "AnimationEventHandler<HTMLButtonElement>",
        required: false,
      },
      onAnimationIterationCapture: {
        type: "AnimationEventHandler<HTMLButtonElement>",
        required: false,
      },
      onToggle: {
        type: "ToggleEventHandler<HTMLButtonElement>",
        required: false,
      },
      onBeforeToggle: {
        type: "ToggleEventHandler<HTMLButtonElement>",
        required: false,
      },
      onTransitionCancel: {
        type: "TransitionEventHandler<HTMLButtonElement>",
        required: false,
      },
      onTransitionCancelCapture: {
        type: "TransitionEventHandler<HTMLButtonElement>",
        required: false,
      },
      onTransitionEnd: {
        type: "TransitionEventHandler<HTMLButtonElement>",
        required: false,
      },
      onTransitionEndCapture: {
        type: "TransitionEventHandler<HTMLButtonElement>",
        required: false,
      },
      onTransitionRun: {
        type: "TransitionEventHandler<HTMLButtonElement>",
        required: false,
      },
      onTransitionRunCapture: {
        type: "TransitionEventHandler<HTMLButtonElement>",
        required: false,
      },
      onTransitionStart: {
        type: "TransitionEventHandler<HTMLButtonElement>",
        required: false,
      },
      onTransitionStartCapture: {
        type: "TransitionEventHandler<HTMLButtonElement>",
        required: false,
      },
      label: {
        type: "string",
        required: false,
      },
      error: {
        type: "string",
        required: false,
      },
      helperText: {
        type: "string",
        required: false,
      },
    },
  },
  LPFeature: {
    props: {
      emoji: {
        type: "string",
        required: true,
      },
      title: {
        type: "string",
        required: true,
      },
      description: {
        type: "string",
        required: true,
      },
      onClick: {
        type: "() => void",
        required: false,
      },
      as: {
        type: "enum",
        required: false,
        default: "article",
      },
      href: {
        type: "string",
        required: false,
      },
    },
  },
  TextField: {
    props: {
      accept: {
        type: "string",
        required: false,
      },
      alt: {
        type: "string",
        required: false,
      },
      autoComplete: {
        type: "HTMLInputAutoCompleteAttribute",
        required: false,
      },
      capture: {
        type: 'boolean | "user" | "environment"',
        required: false,
      },
      checked: {
        type: "boolean",
        required: false,
      },
      disabled: {
        type: "boolean",
        required: false,
      },
      form: {
        type: "string",
        required: false,
      },
      formAction: {
        type: "string | ((formData: FormData) => void | Promise<void>)",
        required: false,
      },
      formEncType: {
        type: "string",
        required: false,
      },
      formMethod: {
        type: "string",
        required: false,
      },
      formNoValidate: {
        type: "boolean",
        required: false,
      },
      formTarget: {
        type: "string",
        required: false,
      },
      height: {
        type: "string | number",
        required: false,
      },
      list: {
        type: "string",
        required: false,
      },
      max: {
        type: "string | number",
        required: false,
      },
      maxLength: {
        type: "number",
        required: false,
        default: "128",
      },
      min: {
        type: "string | number",
        required: false,
      },
      minLength: {
        type: "number",
        required: false,
      },
      multiple: {
        type: "boolean",
        required: false,
      },
      name: {
        type: "string",
        required: false,
      },
      pattern: {
        type: "string",
        required: false,
      },
      placeholder: {
        type: "string",
        required: false,
      },
      readOnly: {
        type: "boolean",
        required: false,
      },
      required: {
        type: "boolean",
        required: false,
      },
      size: {
        type: "number",
        required: false,
      },
      src: {
        type: "string",
        required: false,
      },
      step: {
        type: "string | number",
        required: false,
      },
      type: {
        type: "enum",
        required: false,
      },
      value: {
        type: "string | number | readonly string[]",
        required: false,
      },
      width: {
        type: "string | number",
        required: false,
      },
      onChange: {
        type: "FormEventHandler<HTMLButtonElement>",
        required: false,
      },
      defaultChecked: {
        type: "boolean",
        required: false,
      },
      defaultValue: {
        type: "string | number | readonly string[]",
        required: false,
      },
      suppressContentEditableWarning: {
        type: "boolean",
        required: false,
      },
      suppressHydrationWarning: {
        type: "boolean",
        required: false,
      },
      accessKey: {
        type: "string",
        required: false,
      },
      autoCapitalize: {
        type: '"off" | "none" | "on" | "sentences" | "words" | "characters" | (string & {})',
        required: false,
      },
      autoFocus: {
        type: "boolean",
        required: false,
      },
      className: {
        type: "string",
        required: false,
      },
      contentEditable: {
        type: 'Booleanish | "inherit" | "plaintext-only"',
        required: false,
      },
      contextMenu: {
        type: "string",
        required: false,
      },
      dir: {
        type: "string",
        required: false,
      },
      draggable: {
        type: "Booleanish",
        required: false,
      },
      enterKeyHint: {
        type: "enum",
        required: false,
      },
      hidden: {
        type: "boolean",
        required: false,
      },
      id: {
        type: "string",
        required: false,
      },
      lang: {
        type: "string",
        required: false,
      },
      nonce: {
        type: "string",
        required: false,
      },
      slot: {
        type: "string",
        required: false,
      },
      spellCheck: {
        type: "Booleanish",
        required: false,
      },
      style: {
        type: "CSSProperties",
        required: false,
      },
      tabIndex: {
        type: "number",
        required: false,
      },
      title: {
        type: "string",
        required: false,
      },
      translate: {
        type: "enum",
        required: false,
      },
      radioGroup: {
        type: "string",
        required: false,
      },
      role: {
        type: "AriaRole",
        required: false,
      },
      about: {
        type: "string",
        required: false,
      },
      content: {
        type: "string",
        required: false,
      },
      datatype: {
        type: "string",
        required: false,
      },
      inlist: {
        type: "any",
        required: false,
      },
      prefix: {
        type: "string",
        required: false,
      },
      property: {
        type: "string",
        required: false,
      },
      rel: {
        type: "string",
        required: false,
      },
      resource: {
        type: "string",
        required: false,
      },
      rev: {
        type: "string",
        required: false,
      },
      typeof: {
        type: "string",
        required: false,
      },
      vocab: {
        type: "string",
        required: false,
      },
      autoCorrect: {
        type: "string",
        required: false,
      },
      autoSave: {
        type: "string",
        required: false,
      },
      color: {
        type: "string",
        required: false,
      },
      itemProp: {
        type: "string",
        required: false,
      },
      itemScope: {
        type: "boolean",
        required: false,
      },
      itemType: {
        type: "string",
        required: false,
      },
      itemID: {
        type: "string",
        required: false,
      },
      itemRef: {
        type: "string",
        required: false,
      },
      results: {
        type: "number",
        required: false,
      },
      security: {
        type: "string",
        required: false,
      },
      unselectable: {
        type: "enum",
        required: false,
      },
      popover: {
        type: "enum",
        required: false,
      },
      popoverTargetAction: {
        type: "enum",
        required: false,
      },
      popoverTarget: {
        type: "string",
        required: false,
      },
      inert: {
        type: "boolean",
        required: false,
        description:
          "@see https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/inert",
      },
      inputMode: {
        type: "enum",
        required: false,
        description:
          "Hints at the type of data that might be entered by the user while editing the element or its contents\n@see {@link https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute}",
      },
      is: {
        type: "string",
        required: false,
        description:
          "Specify that a standard HTML element should behave like a defined custom built-in element\n@see {@link https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is}",
      },
      exportparts: {
        type: "string",
        required: false,
        description:
          "@see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/exportparts}",
      },
      part: {
        type: "string",
        required: false,
        description:
          "@see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/part}",
      },
      "aria-activedescendant": {
        type: "string",
        required: false,
        description:
          "Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.",
      },
      "aria-atomic": {
        type: "Booleanish",
        required: false,
        description:
          "Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.",
      },
      "aria-autocomplete": {
        type: "enum",
        required: false,
        description:
          "Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be\npresented if they are made.",
      },
      "aria-braillelabel": {
        type: "string",
        required: false,
        description:
          "Defines a string value that labels the current element, which is intended to be converted into Braille.\n@see aria-label.",
      },
      "aria-brailleroledescription": {
        type: "string",
        required: false,
        description:
          "Defines a human-readable, author-localized abbreviated description for the role of an element, which is intended to be converted into Braille.\n@see aria-roledescription.",
      },
      "aria-busy": {
        type: "Booleanish",
        required: false,
      },
      "aria-checked": {
        type: 'boolean | "true" | "false" | "mixed"',
        required: false,
        description:
          'Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.\n@see aria-pressed\n@see aria-selected.',
      },
      "aria-colcount": {
        type: "number",
        required: false,
        description:
          "Defines the total number of columns in a table, grid, or treegrid.\n@see aria-colindex.",
      },
      "aria-colindex": {
        type: "number",
        required: false,
        description:
          "Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.\n@see aria-colcount\n@see aria-colspan.",
      },
      "aria-colindextext": {
        type: "string",
        required: false,
        description:
          "Defines a human readable text alternative of aria-colindex.\n@see aria-rowindextext.",
      },
      "aria-colspan": {
        type: "number",
        required: false,
        description:
          "Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.\n@see aria-colindex\n@see aria-rowspan.",
      },
      "aria-controls": {
        type: "string",
        required: false,
        description:
          "Identifies the element (or elements) whose contents or presence are controlled by the current element.\n@see aria-owns.",
      },
      "aria-current": {
        type: 'boolean | "true" | "false" | "page" | "step" | "location" | "date" | "time"',
        required: false,
        description:
          "Indicates the element that represents the current item within a container or set of related elements.",
      },
      "aria-describedby": {
        type: "string",
        required: false,
        description:
          "Identifies the element (or elements) that describes the object.\n@see aria-labelledby",
      },
      "aria-description": {
        type: "string",
        required: false,
        description:
          "Defines a string value that describes or annotates the current element.\n@see related aria-describedby.",
      },
      "aria-details": {
        type: "string",
        required: false,
        description:
          "Identifies the element that provides a detailed, extended description for the object.\n@see aria-describedby.",
      },
      "aria-disabled": {
        type: "Booleanish",
        required: false,
        description:
          "Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.\n@see aria-hidden\n@see aria-readonly.",
      },
      "aria-dropeffect": {
        type: "enum",
        required: false,
        description:
          "Indicates what functions can be performed when a dragged object is released on the drop target.\n@deprecated in ARIA 1.1",
      },
      "aria-errormessage": {
        type: "string",
        required: false,
        description:
          "Identifies the element that provides an error message for the object.\n@see aria-invalid\n@see aria-describedby.",
      },
      "aria-expanded": {
        type: "Booleanish",
        required: false,
        description:
          "Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.",
      },
      "aria-flowto": {
        type: "string",
        required: false,
        description:
          "Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,\nallows assistive technology to override the general default of reading in document source order.",
      },
      "aria-grabbed": {
        type: "Booleanish",
        required: false,
        description:
          'Indicates an element\'s "grabbed" state in a drag-and-drop operation.\n@deprecated in ARIA 1.1',
      },
      "aria-haspopup": {
        type: 'boolean | "true" | "false" | "dialog" | "grid" | "listbox" | "menu" | "tree"',
        required: false,
        description:
          "Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.",
      },
      "aria-hidden": {
        type: "Booleanish",
        required: false,
        description:
          "Indicates whether the element is exposed to an accessibility API.\n@see aria-disabled.",
      },
      "aria-invalid": {
        type: 'boolean | "true" | "false" | "grammar" | "spelling"',
        required: false,
        description:
          "Indicates the entered value does not conform to the format expected by the application.\n@see aria-errormessage.",
      },
      "aria-keyshortcuts": {
        type: "string",
        required: false,
        description:
          "Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.",
      },
      "aria-label": {
        type: "string",
        required: false,
        description:
          "Defines a string value that labels the current element.\n@see aria-labelledby.",
      },
      "aria-labelledby": {
        type: "string",
        required: false,
        description:
          "Identifies the element (or elements) that labels the current element.\n@see aria-describedby.",
      },
      "aria-level": {
        type: "number",
        required: false,
        description:
          "Defines the hierarchical level of an element within a structure.",
      },
      "aria-live": {
        type: "enum",
        required: false,
        description:
          "Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.",
      },
      "aria-modal": {
        type: "Booleanish",
        required: false,
        description: "Indicates whether an element is modal when displayed.",
      },
      "aria-multiline": {
        type: "Booleanish",
        required: false,
        description:
          "Indicates whether a text box accepts multiple lines of input or only a single line.",
      },
      "aria-multiselectable": {
        type: "Booleanish",
        required: false,
        description:
          "Indicates that the user may select more than one item from the current selectable descendants.",
      },
      "aria-orientation": {
        type: "enum",
        required: false,
        description:
          "Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.",
      },
      "aria-owns": {
        type: "string",
        required: false,
        description:
          "Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship\nbetween DOM elements where the DOM hierarchy cannot be used to represent the relationship.\n@see aria-controls.",
      },
      "aria-placeholder": {
        type: "string",
        required: false,
        description:
          "Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.\nA hint could be a sample value or a brief description of the expected format.",
      },
      "aria-posinset": {
        type: "number",
        required: false,
        description:
          "Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.\n@see aria-setsize.",
      },
      "aria-pressed": {
        type: 'boolean | "true" | "false" | "mixed"',
        required: false,
        description:
          'Indicates the current "pressed" state of toggle buttons.\n@see aria-checked\n@see aria-selected.',
      },
      "aria-readonly": {
        type: "Booleanish",
        required: false,
        description:
          "Indicates that the element is not editable, but is otherwise operable.\n@see aria-disabled.",
      },
      "aria-relevant": {
        type: "enum",
        required: false,
        description:
          "Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.\n@see aria-atomic.",
      },
      "aria-required": {
        type: "Booleanish",
        required: false,
        description:
          "Indicates that user input is required on the element before a form may be submitted.",
      },
      "aria-roledescription": {
        type: "string",
        required: false,
        description:
          "Defines a human-readable, author-localized description for the role of an element.",
      },
      "aria-rowcount": {
        type: "number",
        required: false,
        description:
          "Defines the total number of rows in a table, grid, or treegrid.\n@see aria-rowindex.",
      },
      "aria-rowindex": {
        type: "number",
        required: false,
        description:
          "Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.\n@see aria-rowcount\n@see aria-rowspan.",
      },
      "aria-rowindextext": {
        type: "string",
        required: false,
        description:
          "Defines a human readable text alternative of aria-rowindex.\n@see aria-colindextext.",
      },
      "aria-rowspan": {
        type: "number",
        required: false,
        description:
          "Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.\n@see aria-rowindex\n@see aria-colspan.",
      },
      "aria-selected": {
        type: "Booleanish",
        required: false,
        description:
          'Indicates the current "selected" state of various widgets.\n@see aria-checked\n@see aria-pressed.',
      },
      "aria-setsize": {
        type: "number",
        required: false,
        description:
          "Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.\n@see aria-posinset.",
      },
      "aria-sort": {
        type: "enum",
        required: false,
        description:
          "Indicates if items in a table or grid are sorted in ascending or descending order.",
      },
      "aria-valuemax": {
        type: "number",
        required: false,
        description: "Defines the maximum allowed value for a range widget.",
      },
      "aria-valuemin": {
        type: "number",
        required: false,
        description: "Defines the minimum allowed value for a range widget.",
      },
      "aria-valuenow": {
        type: "number",
        required: false,
        description:
          "Defines the current value for a range widget.\n@see aria-valuetext.",
      },
      "aria-valuetext": {
        type: "string",
        required: false,
        description:
          "Defines the human readable text alternative of aria-valuenow for a range widget.",
      },
      children: {
        type: "ReactNode",
        required: false,
      },
      dangerouslySetInnerHTML: {
        type: "{ __html: string | TrustedHTML; }",
        required: false,
      },
      onCopy: {
        type: "ClipboardEventHandler<HTMLButtonElement>",
        required: false,
      },
      onCopyCapture: {
        type: "ClipboardEventHandler<HTMLButtonElement>",
        required: false,
      },
      onCut: {
        type: "ClipboardEventHandler<HTMLButtonElement>",
        required: false,
      },
      onCutCapture: {
        type: "ClipboardEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPaste: {
        type: "ClipboardEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPasteCapture: {
        type: "ClipboardEventHandler<HTMLButtonElement>",
        required: false,
      },
      onCompositionEnd: {
        type: "CompositionEventHandler<HTMLButtonElement>",
        required: false,
      },
      onCompositionEndCapture: {
        type: "CompositionEventHandler<HTMLButtonElement>",
        required: false,
      },
      onCompositionStart: {
        type: "CompositionEventHandler<HTMLButtonElement>",
        required: false,
      },
      onCompositionStartCapture: {
        type: "CompositionEventHandler<HTMLButtonElement>",
        required: false,
      },
      onCompositionUpdate: {
        type: "CompositionEventHandler<HTMLButtonElement>",
        required: false,
      },
      onCompositionUpdateCapture: {
        type: "CompositionEventHandler<HTMLButtonElement>",
        required: false,
      },
      onFocus: {
        type: "FocusEventHandler<HTMLButtonElement>",
        required: false,
      },
      onFocusCapture: {
        type: "FocusEventHandler<HTMLButtonElement>",
        required: false,
      },
      onBlur: {
        type: "FocusEventHandler<HTMLButtonElement>",
        required: false,
      },
      onBlurCapture: {
        type: "FocusEventHandler<HTMLButtonElement>",
        required: false,
      },
      onChangeCapture: {
        type: "FormEventHandler<HTMLButtonElement>",
        required: false,
      },
      onBeforeInput: {
        type: "InputEventHandler<HTMLButtonElement>",
        required: false,
      },
      onBeforeInputCapture: {
        type: "FormEventHandler<HTMLButtonElement>",
        required: false,
      },
      onInput: {
        type: "FormEventHandler<HTMLButtonElement>",
        required: false,
      },
      onInputCapture: {
        type: "FormEventHandler<HTMLButtonElement>",
        required: false,
      },
      onReset: {
        type: "FormEventHandler<HTMLButtonElement>",
        required: false,
      },
      onResetCapture: {
        type: "FormEventHandler<HTMLButtonElement>",
        required: false,
      },
      onSubmit: {
        type: "FormEventHandler<HTMLButtonElement>",
        required: false,
      },
      onSubmitCapture: {
        type: "FormEventHandler<HTMLButtonElement>",
        required: false,
      },
      onInvalid: {
        type: "FormEventHandler<HTMLButtonElement>",
        required: false,
      },
      onInvalidCapture: {
        type: "FormEventHandler<HTMLButtonElement>",
        required: false,
      },
      onLoad: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onLoadCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onError: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onErrorCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onKeyDown: {
        type: "KeyboardEventHandler<HTMLButtonElement>",
        required: false,
      },
      onKeyDownCapture: {
        type: "KeyboardEventHandler<HTMLButtonElement>",
        required: false,
      },
      onKeyPress: {
        type: "KeyboardEventHandler<HTMLButtonElement>",
        required: false,
        description: "@deprecated Use `onKeyUp` or `onKeyDown` instead",
      },
      onKeyPressCapture: {
        type: "KeyboardEventHandler<HTMLButtonElement>",
        required: false,
        description:
          "@deprecated Use `onKeyUpCapture` or `onKeyDownCapture` instead",
      },
      onKeyUp: {
        type: "KeyboardEventHandler<HTMLButtonElement>",
        required: false,
      },
      onKeyUpCapture: {
        type: "KeyboardEventHandler<HTMLButtonElement>",
        required: false,
      },
      onAbort: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onAbortCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onCanPlay: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onCanPlayCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onCanPlayThrough: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onCanPlayThroughCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDurationChange: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDurationChangeCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onEmptied: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onEmptiedCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onEncrypted: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onEncryptedCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onEnded: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onEndedCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onLoadedData: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onLoadedDataCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onLoadedMetadata: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onLoadedMetadataCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onLoadStart: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onLoadStartCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPause: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPauseCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPlay: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPlayCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPlaying: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPlayingCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onProgress: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onProgressCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onRateChange: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onRateChangeCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onSeeked: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onSeekedCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onSeeking: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onSeekingCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onStalled: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onStalledCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onSuspend: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onSuspendCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onTimeUpdate: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onTimeUpdateCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onVolumeChange: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onVolumeChangeCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onWaiting: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onWaitingCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onAuxClick: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onAuxClickCapture: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onClick: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onClickCapture: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onContextMenu: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onContextMenuCapture: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDoubleClick: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDoubleClickCapture: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDrag: {
        type: "DragEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDragCapture: {
        type: "DragEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDragEnd: {
        type: "DragEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDragEndCapture: {
        type: "DragEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDragEnter: {
        type: "DragEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDragEnterCapture: {
        type: "DragEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDragExit: {
        type: "DragEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDragExitCapture: {
        type: "DragEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDragLeave: {
        type: "DragEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDragLeaveCapture: {
        type: "DragEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDragOver: {
        type: "DragEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDragOverCapture: {
        type: "DragEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDragStart: {
        type: "DragEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDragStartCapture: {
        type: "DragEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDrop: {
        type: "DragEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDropCapture: {
        type: "DragEventHandler<HTMLButtonElement>",
        required: false,
      },
      onMouseDown: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onMouseDownCapture: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onMouseEnter: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onMouseLeave: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onMouseMove: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onMouseMoveCapture: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onMouseOut: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onMouseOutCapture: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onMouseOver: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onMouseOverCapture: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onMouseUp: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onMouseUpCapture: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onSelect: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onSelectCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onTouchCancel: {
        type: "TouchEventHandler<HTMLButtonElement>",
        required: false,
      },
      onTouchCancelCapture: {
        type: "TouchEventHandler<HTMLButtonElement>",
        required: false,
      },
      onTouchEnd: {
        type: "TouchEventHandler<HTMLButtonElement>",
        required: false,
      },
      onTouchEndCapture: {
        type: "TouchEventHandler<HTMLButtonElement>",
        required: false,
      },
      onTouchMove: {
        type: "TouchEventHandler<HTMLButtonElement>",
        required: false,
      },
      onTouchMoveCapture: {
        type: "TouchEventHandler<HTMLButtonElement>",
        required: false,
      },
      onTouchStart: {
        type: "TouchEventHandler<HTMLButtonElement>",
        required: false,
      },
      onTouchStartCapture: {
        type: "TouchEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPointerDown: {
        type: "PointerEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPointerDownCapture: {
        type: "PointerEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPointerMove: {
        type: "PointerEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPointerMoveCapture: {
        type: "PointerEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPointerUp: {
        type: "PointerEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPointerUpCapture: {
        type: "PointerEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPointerCancel: {
        type: "PointerEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPointerCancelCapture: {
        type: "PointerEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPointerEnter: {
        type: "PointerEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPointerLeave: {
        type: "PointerEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPointerOver: {
        type: "PointerEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPointerOverCapture: {
        type: "PointerEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPointerOut: {
        type: "PointerEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPointerOutCapture: {
        type: "PointerEventHandler<HTMLButtonElement>",
        required: false,
      },
      onGotPointerCapture: {
        type: "PointerEventHandler<HTMLButtonElement>",
        required: false,
      },
      onGotPointerCaptureCapture: {
        type: "PointerEventHandler<HTMLButtonElement>",
        required: false,
      },
      onLostPointerCapture: {
        type: "PointerEventHandler<HTMLButtonElement>",
        required: false,
      },
      onLostPointerCaptureCapture: {
        type: "PointerEventHandler<HTMLButtonElement>",
        required: false,
      },
      onScroll: {
        type: "UIEventHandler<HTMLButtonElement>",
        required: false,
      },
      onScrollCapture: {
        type: "UIEventHandler<HTMLButtonElement>",
        required: false,
      },
      onScrollEnd: {
        type: "UIEventHandler<HTMLButtonElement>",
        required: false,
      },
      onScrollEndCapture: {
        type: "UIEventHandler<HTMLButtonElement>",
        required: false,
      },
      onWheel: {
        type: "WheelEventHandler<HTMLButtonElement>",
        required: false,
      },
      onWheelCapture: {
        type: "WheelEventHandler<HTMLButtonElement>",
        required: false,
      },
      onAnimationStart: {
        type: "AnimationEventHandler<HTMLButtonElement>",
        required: false,
      },
      onAnimationStartCapture: {
        type: "AnimationEventHandler<HTMLButtonElement>",
        required: false,
      },
      onAnimationEnd: {
        type: "AnimationEventHandler<HTMLButtonElement>",
        required: false,
      },
      onAnimationEndCapture: {
        type: "AnimationEventHandler<HTMLButtonElement>",
        required: false,
      },
      onAnimationIteration: {
        type: "AnimationEventHandler<HTMLButtonElement>",
        required: false,
      },
      onAnimationIterationCapture: {
        type: "AnimationEventHandler<HTMLButtonElement>",
        required: false,
      },
      onToggle: {
        type: "ToggleEventHandler<HTMLButtonElement>",
        required: false,
      },
      onBeforeToggle: {
        type: "ToggleEventHandler<HTMLButtonElement>",
        required: false,
      },
      onTransitionCancel: {
        type: "TransitionEventHandler<HTMLButtonElement>",
        required: false,
      },
      onTransitionCancelCapture: {
        type: "TransitionEventHandler<HTMLButtonElement>",
        required: false,
      },
      onTransitionEnd: {
        type: "TransitionEventHandler<HTMLButtonElement>",
        required: false,
      },
      onTransitionEndCapture: {
        type: "TransitionEventHandler<HTMLButtonElement>",
        required: false,
      },
      onTransitionRun: {
        type: "TransitionEventHandler<HTMLButtonElement>",
        required: false,
      },
      onTransitionRunCapture: {
        type: "TransitionEventHandler<HTMLButtonElement>",
        required: false,
      },
      onTransitionStart: {
        type: "TransitionEventHandler<HTMLButtonElement>",
        required: false,
      },
      onTransitionStartCapture: {
        type: "TransitionEventHandler<HTMLButtonElement>",
        required: false,
      },
      label: {
        type: "string",
        required: false,
      },
      error: {
        type: "string",
        required: false,
      },
      helperText: {
        type: "string",
        required: false,
      },
    },
  },
  Tickbox: {
    props: {
      children: {
        type: "ReactNode",
        required: false,
      },
      autoComplete: {
        type: "HTMLInputAutoCompleteAttribute",
        required: false,
      },
      disabled: {
        type: "boolean",
        required: false,
      },
      form: {
        type: "string",
        required: false,
      },
      maxLength: {
        type: "number",
        required: false,
        default: "128",
      },
      minLength: {
        type: "number",
        required: false,
      },
      name: {
        type: "string",
        required: false,
      },
      placeholder: {
        type: "string",
        required: false,
      },
      readOnly: {
        type: "boolean",
        required: false,
      },
      required: {
        type: "boolean",
        required: false,
      },
      value: {
        type: "string | number | readonly string[]",
        required: false,
      },
      onChange: {
        type: "FormEventHandler<HTMLButtonElement>",
        required: false,
      },
      defaultChecked: {
        type: "boolean",
        required: false,
      },
      defaultValue: {
        type: "string | number | readonly string[]",
        required: false,
      },
      suppressContentEditableWarning: {
        type: "boolean",
        required: false,
      },
      suppressHydrationWarning: {
        type: "boolean",
        required: false,
      },
      accessKey: {
        type: "string",
        required: false,
      },
      autoCapitalize: {
        type: '"off" | "none" | "on" | "sentences" | "words" | "characters" | (string & {})',
        required: false,
      },
      autoFocus: {
        type: "boolean",
        required: false,
      },
      className: {
        type: "string",
        required: false,
      },
      contentEditable: {
        type: 'Booleanish | "inherit" | "plaintext-only"',
        required: false,
      },
      contextMenu: {
        type: "string",
        required: false,
      },
      dir: {
        type: "string",
        required: false,
      },
      draggable: {
        type: "Booleanish",
        required: false,
      },
      enterKeyHint: {
        type: "enum",
        required: false,
      },
      hidden: {
        type: "boolean",
        required: false,
      },
      id: {
        type: "string",
        required: false,
      },
      lang: {
        type: "string",
        required: false,
      },
      nonce: {
        type: "string",
        required: false,
      },
      slot: {
        type: "string",
        required: false,
      },
      spellCheck: {
        type: "Booleanish",
        required: false,
      },
      style: {
        type: "CSSProperties",
        required: false,
      },
      tabIndex: {
        type: "number",
        required: false,
      },
      title: {
        type: "string",
        required: false,
      },
      translate: {
        type: "enum",
        required: false,
      },
      radioGroup: {
        type: "string",
        required: false,
      },
      role: {
        type: "AriaRole",
        required: false,
      },
      about: {
        type: "string",
        required: false,
      },
      content: {
        type: "string",
        required: false,
      },
      datatype: {
        type: "string",
        required: false,
      },
      inlist: {
        type: "any",
        required: false,
      },
      prefix: {
        type: "string",
        required: false,
      },
      property: {
        type: "string",
        required: false,
      },
      rel: {
        type: "string",
        required: false,
      },
      resource: {
        type: "string",
        required: false,
      },
      rev: {
        type: "string",
        required: false,
      },
      typeof: {
        type: "string",
        required: false,
      },
      vocab: {
        type: "string",
        required: false,
      },
      autoCorrect: {
        type: "string",
        required: false,
      },
      autoSave: {
        type: "string",
        required: false,
      },
      color: {
        type: "string",
        required: false,
      },
      itemProp: {
        type: "string",
        required: false,
      },
      itemScope: {
        type: "boolean",
        required: false,
      },
      itemType: {
        type: "string",
        required: false,
      },
      itemID: {
        type: "string",
        required: false,
      },
      itemRef: {
        type: "string",
        required: false,
      },
      results: {
        type: "number",
        required: false,
      },
      security: {
        type: "string",
        required: false,
      },
      unselectable: {
        type: "enum",
        required: false,
      },
      popover: {
        type: "enum",
        required: false,
      },
      popoverTargetAction: {
        type: "enum",
        required: false,
      },
      popoverTarget: {
        type: "string",
        required: false,
      },
      inert: {
        type: "boolean",
        required: false,
        description:
          "@see https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/inert",
      },
      inputMode: {
        type: "enum",
        required: false,
        description:
          "Hints at the type of data that might be entered by the user while editing the element or its contents\n@see {@link https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute}",
      },
      is: {
        type: "string",
        required: false,
        description:
          "Specify that a standard HTML element should behave like a defined custom built-in element\n@see {@link https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is}",
      },
      exportparts: {
        type: "string",
        required: false,
        description:
          "@see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/exportparts}",
      },
      part: {
        type: "string",
        required: false,
        description:
          "@see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/part}",
      },
      "aria-activedescendant": {
        type: "string",
        required: false,
        description:
          "Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.",
      },
      "aria-atomic": {
        type: "Booleanish",
        required: false,
        description:
          "Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.",
      },
      "aria-autocomplete": {
        type: "enum",
        required: false,
        description:
          "Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be\npresented if they are made.",
      },
      "aria-braillelabel": {
        type: "string",
        required: false,
        description:
          "Defines a string value that labels the current element, which is intended to be converted into Braille.\n@see aria-label.",
      },
      "aria-brailleroledescription": {
        type: "string",
        required: false,
        description:
          "Defines a human-readable, author-localized abbreviated description for the role of an element, which is intended to be converted into Braille.\n@see aria-roledescription.",
      },
      "aria-busy": {
        type: "Booleanish",
        required: false,
      },
      "aria-checked": {
        type: 'boolean | "true" | "false" | "mixed"',
        required: false,
        description:
          'Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.\n@see aria-pressed\n@see aria-selected.',
      },
      "aria-colcount": {
        type: "number",
        required: false,
        description:
          "Defines the total number of columns in a table, grid, or treegrid.\n@see aria-colindex.",
      },
      "aria-colindex": {
        type: "number",
        required: false,
        description:
          "Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.\n@see aria-colcount\n@see aria-colspan.",
      },
      "aria-colindextext": {
        type: "string",
        required: false,
        description:
          "Defines a human readable text alternative of aria-colindex.\n@see aria-rowindextext.",
      },
      "aria-colspan": {
        type: "number",
        required: false,
        description:
          "Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.\n@see aria-colindex\n@see aria-rowspan.",
      },
      "aria-controls": {
        type: "string",
        required: false,
        description:
          "Identifies the element (or elements) whose contents or presence are controlled by the current element.\n@see aria-owns.",
      },
      "aria-current": {
        type: 'boolean | "true" | "false" | "page" | "step" | "location" | "date" | "time"',
        required: false,
        description:
          "Indicates the element that represents the current item within a container or set of related elements.",
      },
      "aria-describedby": {
        type: "string",
        required: false,
        description:
          "Identifies the element (or elements) that describes the object.\n@see aria-labelledby",
      },
      "aria-description": {
        type: "string",
        required: false,
        description:
          "Defines a string value that describes or annotates the current element.\n@see related aria-describedby.",
      },
      "aria-details": {
        type: "string",
        required: false,
        description:
          "Identifies the element that provides a detailed, extended description for the object.\n@see aria-describedby.",
      },
      "aria-disabled": {
        type: "Booleanish",
        required: false,
        description:
          "Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.\n@see aria-hidden\n@see aria-readonly.",
      },
      "aria-dropeffect": {
        type: "enum",
        required: false,
        description:
          "Indicates what functions can be performed when a dragged object is released on the drop target.\n@deprecated in ARIA 1.1",
      },
      "aria-errormessage": {
        type: "string",
        required: false,
        description:
          "Identifies the element that provides an error message for the object.\n@see aria-invalid\n@see aria-describedby.",
      },
      "aria-expanded": {
        type: "Booleanish",
        required: false,
        description:
          "Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.",
      },
      "aria-flowto": {
        type: "string",
        required: false,
        description:
          "Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,\nallows assistive technology to override the general default of reading in document source order.",
      },
      "aria-grabbed": {
        type: "Booleanish",
        required: false,
        description:
          'Indicates an element\'s "grabbed" state in a drag-and-drop operation.\n@deprecated in ARIA 1.1',
      },
      "aria-haspopup": {
        type: 'boolean | "true" | "false" | "dialog" | "grid" | "listbox" | "menu" | "tree"',
        required: false,
        description:
          "Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.",
      },
      "aria-hidden": {
        type: "Booleanish",
        required: false,
        description:
          "Indicates whether the element is exposed to an accessibility API.\n@see aria-disabled.",
      },
      "aria-invalid": {
        type: 'boolean | "true" | "false" | "grammar" | "spelling"',
        required: false,
        description:
          "Indicates the entered value does not conform to the format expected by the application.\n@see aria-errormessage.",
      },
      "aria-keyshortcuts": {
        type: "string",
        required: false,
        description:
          "Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.",
      },
      "aria-label": {
        type: "string",
        required: false,
        description:
          "Defines a string value that labels the current element.\n@see aria-labelledby.",
      },
      "aria-labelledby": {
        type: "string",
        required: false,
        description:
          "Identifies the element (or elements) that labels the current element.\n@see aria-describedby.",
      },
      "aria-level": {
        type: "number",
        required: false,
        description:
          "Defines the hierarchical level of an element within a structure.",
      },
      "aria-live": {
        type: "enum",
        required: false,
        description:
          "Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.",
      },
      "aria-modal": {
        type: "Booleanish",
        required: false,
        description: "Indicates whether an element is modal when displayed.",
      },
      "aria-multiline": {
        type: "Booleanish",
        required: false,
        description:
          "Indicates whether a text box accepts multiple lines of input or only a single line.",
      },
      "aria-multiselectable": {
        type: "Booleanish",
        required: false,
        description:
          "Indicates that the user may select more than one item from the current selectable descendants.",
      },
      "aria-orientation": {
        type: "enum",
        required: false,
        description:
          "Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.",
      },
      "aria-owns": {
        type: "string",
        required: false,
        description:
          "Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship\nbetween DOM elements where the DOM hierarchy cannot be used to represent the relationship.\n@see aria-controls.",
      },
      "aria-placeholder": {
        type: "string",
        required: false,
        description:
          "Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.\nA hint could be a sample value or a brief description of the expected format.",
      },
      "aria-posinset": {
        type: "number",
        required: false,
        description:
          "Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.\n@see aria-setsize.",
      },
      "aria-pressed": {
        type: 'boolean | "true" | "false" | "mixed"',
        required: false,
        description:
          'Indicates the current "pressed" state of toggle buttons.\n@see aria-checked\n@see aria-selected.',
      },
      "aria-readonly": {
        type: "Booleanish",
        required: false,
        description:
          "Indicates that the element is not editable, but is otherwise operable.\n@see aria-disabled.",
      },
      "aria-relevant": {
        type: "enum",
        required: false,
        description:
          "Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.\n@see aria-atomic.",
      },
      "aria-required": {
        type: "Booleanish",
        required: false,
        description:
          "Indicates that user input is required on the element before a form may be submitted.",
      },
      "aria-roledescription": {
        type: "string",
        required: false,
        description:
          "Defines a human-readable, author-localized description for the role of an element.",
      },
      "aria-rowcount": {
        type: "number",
        required: false,
        description:
          "Defines the total number of rows in a table, grid, or treegrid.\n@see aria-rowindex.",
      },
      "aria-rowindex": {
        type: "number",
        required: false,
        description:
          "Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.\n@see aria-rowcount\n@see aria-rowspan.",
      },
      "aria-rowindextext": {
        type: "string",
        required: false,
        description:
          "Defines a human readable text alternative of aria-rowindex.\n@see aria-colindextext.",
      },
      "aria-rowspan": {
        type: "number",
        required: false,
        description:
          "Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.\n@see aria-rowindex\n@see aria-colspan.",
      },
      "aria-selected": {
        type: "Booleanish",
        required: false,
        description:
          'Indicates the current "selected" state of various widgets.\n@see aria-checked\n@see aria-pressed.',
      },
      "aria-setsize": {
        type: "number",
        required: false,
        description:
          "Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.\n@see aria-posinset.",
      },
      "aria-sort": {
        type: "enum",
        required: false,
        description:
          "Indicates if items in a table or grid are sorted in ascending or descending order.",
      },
      "aria-valuemax": {
        type: "number",
        required: false,
        description: "Defines the maximum allowed value for a range widget.",
      },
      "aria-valuemin": {
        type: "number",
        required: false,
        description: "Defines the minimum allowed value for a range widget.",
      },
      "aria-valuenow": {
        type: "number",
        required: false,
        description:
          "Defines the current value for a range widget.\n@see aria-valuetext.",
      },
      "aria-valuetext": {
        type: "string",
        required: false,
        description:
          "Defines the human readable text alternative of aria-valuenow for a range widget.",
      },
      dangerouslySetInnerHTML: {
        type: "{ __html: string | TrustedHTML; }",
        required: false,
      },
      onCopy: {
        type: "ClipboardEventHandler<HTMLButtonElement>",
        required: false,
      },
      onCopyCapture: {
        type: "ClipboardEventHandler<HTMLButtonElement>",
        required: false,
      },
      onCut: {
        type: "ClipboardEventHandler<HTMLButtonElement>",
        required: false,
      },
      onCutCapture: {
        type: "ClipboardEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPaste: {
        type: "ClipboardEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPasteCapture: {
        type: "ClipboardEventHandler<HTMLButtonElement>",
        required: false,
      },
      onCompositionEnd: {
        type: "CompositionEventHandler<HTMLButtonElement>",
        required: false,
      },
      onCompositionEndCapture: {
        type: "CompositionEventHandler<HTMLButtonElement>",
        required: false,
      },
      onCompositionStart: {
        type: "CompositionEventHandler<HTMLButtonElement>",
        required: false,
      },
      onCompositionStartCapture: {
        type: "CompositionEventHandler<HTMLButtonElement>",
        required: false,
      },
      onCompositionUpdate: {
        type: "CompositionEventHandler<HTMLButtonElement>",
        required: false,
      },
      onCompositionUpdateCapture: {
        type: "CompositionEventHandler<HTMLButtonElement>",
        required: false,
      },
      onFocus: {
        type: "FocusEventHandler<HTMLButtonElement>",
        required: false,
      },
      onFocusCapture: {
        type: "FocusEventHandler<HTMLButtonElement>",
        required: false,
      },
      onBlur: {
        type: "FocusEventHandler<HTMLButtonElement>",
        required: false,
      },
      onBlurCapture: {
        type: "FocusEventHandler<HTMLButtonElement>",
        required: false,
      },
      onChangeCapture: {
        type: "FormEventHandler<HTMLButtonElement>",
        required: false,
      },
      onBeforeInput: {
        type: "InputEventHandler<HTMLButtonElement>",
        required: false,
      },
      onBeforeInputCapture: {
        type: "FormEventHandler<HTMLButtonElement>",
        required: false,
      },
      onInput: {
        type: "FormEventHandler<HTMLButtonElement>",
        required: false,
      },
      onInputCapture: {
        type: "FormEventHandler<HTMLButtonElement>",
        required: false,
      },
      onReset: {
        type: "FormEventHandler<HTMLButtonElement>",
        required: false,
      },
      onResetCapture: {
        type: "FormEventHandler<HTMLButtonElement>",
        required: false,
      },
      onSubmit: {
        type: "FormEventHandler<HTMLButtonElement>",
        required: false,
      },
      onSubmitCapture: {
        type: "FormEventHandler<HTMLButtonElement>",
        required: false,
      },
      onInvalid: {
        type: "FormEventHandler<HTMLButtonElement>",
        required: false,
      },
      onInvalidCapture: {
        type: "FormEventHandler<HTMLButtonElement>",
        required: false,
      },
      onLoad: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onLoadCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onError: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onErrorCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onKeyDown: {
        type: "KeyboardEventHandler<HTMLButtonElement>",
        required: false,
      },
      onKeyDownCapture: {
        type: "KeyboardEventHandler<HTMLButtonElement>",
        required: false,
      },
      onKeyPress: {
        type: "KeyboardEventHandler<HTMLButtonElement>",
        required: false,
        description: "@deprecated Use `onKeyUp` or `onKeyDown` instead",
      },
      onKeyPressCapture: {
        type: "KeyboardEventHandler<HTMLButtonElement>",
        required: false,
        description:
          "@deprecated Use `onKeyUpCapture` or `onKeyDownCapture` instead",
      },
      onKeyUp: {
        type: "KeyboardEventHandler<HTMLButtonElement>",
        required: false,
      },
      onKeyUpCapture: {
        type: "KeyboardEventHandler<HTMLButtonElement>",
        required: false,
      },
      onAbort: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onAbortCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onCanPlay: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onCanPlayCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onCanPlayThrough: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onCanPlayThroughCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDurationChange: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDurationChangeCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onEmptied: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onEmptiedCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onEncrypted: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onEncryptedCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onEnded: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onEndedCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onLoadedData: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onLoadedDataCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onLoadedMetadata: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onLoadedMetadataCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onLoadStart: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onLoadStartCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPause: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPauseCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPlay: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPlayCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPlaying: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPlayingCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onProgress: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onProgressCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onRateChange: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onRateChangeCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onSeeked: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onSeekedCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onSeeking: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onSeekingCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onStalled: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onStalledCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onSuspend: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onSuspendCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onTimeUpdate: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onTimeUpdateCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onVolumeChange: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onVolumeChangeCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onWaiting: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onWaitingCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onAuxClick: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onAuxClickCapture: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onClick: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onClickCapture: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onContextMenu: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onContextMenuCapture: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDoubleClick: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDoubleClickCapture: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDrag: {
        type: "DragEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDragCapture: {
        type: "DragEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDragEnd: {
        type: "DragEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDragEndCapture: {
        type: "DragEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDragEnter: {
        type: "DragEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDragEnterCapture: {
        type: "DragEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDragExit: {
        type: "DragEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDragExitCapture: {
        type: "DragEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDragLeave: {
        type: "DragEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDragLeaveCapture: {
        type: "DragEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDragOver: {
        type: "DragEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDragOverCapture: {
        type: "DragEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDragStart: {
        type: "DragEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDragStartCapture: {
        type: "DragEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDrop: {
        type: "DragEventHandler<HTMLButtonElement>",
        required: false,
      },
      onDropCapture: {
        type: "DragEventHandler<HTMLButtonElement>",
        required: false,
      },
      onMouseDown: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onMouseDownCapture: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onMouseEnter: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onMouseLeave: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onMouseMove: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onMouseMoveCapture: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onMouseOut: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onMouseOutCapture: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onMouseOver: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onMouseOverCapture: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onMouseUp: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onMouseUpCapture: {
        type: "MouseEventHandler<HTMLButtonElement>",
        required: false,
      },
      onSelect: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onSelectCapture: {
        type: "ReactEventHandler<HTMLButtonElement>",
        required: false,
      },
      onTouchCancel: {
        type: "TouchEventHandler<HTMLButtonElement>",
        required: false,
      },
      onTouchCancelCapture: {
        type: "TouchEventHandler<HTMLButtonElement>",
        required: false,
      },
      onTouchEnd: {
        type: "TouchEventHandler<HTMLButtonElement>",
        required: false,
      },
      onTouchEndCapture: {
        type: "TouchEventHandler<HTMLButtonElement>",
        required: false,
      },
      onTouchMove: {
        type: "TouchEventHandler<HTMLButtonElement>",
        required: false,
      },
      onTouchMoveCapture: {
        type: "TouchEventHandler<HTMLButtonElement>",
        required: false,
      },
      onTouchStart: {
        type: "TouchEventHandler<HTMLButtonElement>",
        required: false,
      },
      onTouchStartCapture: {
        type: "TouchEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPointerDown: {
        type: "PointerEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPointerDownCapture: {
        type: "PointerEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPointerMove: {
        type: "PointerEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPointerMoveCapture: {
        type: "PointerEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPointerUp: {
        type: "PointerEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPointerUpCapture: {
        type: "PointerEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPointerCancel: {
        type: "PointerEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPointerCancelCapture: {
        type: "PointerEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPointerEnter: {
        type: "PointerEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPointerLeave: {
        type: "PointerEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPointerOver: {
        type: "PointerEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPointerOverCapture: {
        type: "PointerEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPointerOut: {
        type: "PointerEventHandler<HTMLButtonElement>",
        required: false,
      },
      onPointerOutCapture: {
        type: "PointerEventHandler<HTMLButtonElement>",
        required: false,
      },
      onGotPointerCapture: {
        type: "PointerEventHandler<HTMLButtonElement>",
        required: false,
      },
      onGotPointerCaptureCapture: {
        type: "PointerEventHandler<HTMLButtonElement>",
        required: false,
      },
      onLostPointerCapture: {
        type: "PointerEventHandler<HTMLButtonElement>",
        required: false,
      },
      onLostPointerCaptureCapture: {
        type: "PointerEventHandler<HTMLButtonElement>",
        required: false,
      },
      onScroll: {
        type: "UIEventHandler<HTMLButtonElement>",
        required: false,
      },
      onScrollCapture: {
        type: "UIEventHandler<HTMLButtonElement>",
        required: false,
      },
      onScrollEnd: {
        type: "UIEventHandler<HTMLButtonElement>",
        required: false,
      },
      onScrollEndCapture: {
        type: "UIEventHandler<HTMLButtonElement>",
        required: false,
      },
      onWheel: {
        type: "WheelEventHandler<HTMLButtonElement>",
        required: false,
      },
      onWheelCapture: {
        type: "WheelEventHandler<HTMLButtonElement>",
        required: false,
      },
      onAnimationStart: {
        type: "AnimationEventHandler<HTMLButtonElement>",
        required: false,
      },
      onAnimationStartCapture: {
        type: "AnimationEventHandler<HTMLButtonElement>",
        required: false,
      },
      onAnimationEnd: {
        type: "AnimationEventHandler<HTMLButtonElement>",
        required: false,
      },
      onAnimationEndCapture: {
        type: "AnimationEventHandler<HTMLButtonElement>",
        required: false,
      },
      onAnimationIteration: {
        type: "AnimationEventHandler<HTMLButtonElement>",
        required: false,
      },
      onAnimationIterationCapture: {
        type: "AnimationEventHandler<HTMLButtonElement>",
        required: false,
      },
      onToggle: {
        type: "ToggleEventHandler<HTMLButtonElement>",
        required: false,
      },
      onBeforeToggle: {
        type: "ToggleEventHandler<HTMLButtonElement>",
        required: false,
      },
      onTransitionCancel: {
        type: "TransitionEventHandler<HTMLButtonElement>",
        required: false,
      },
      onTransitionCancelCapture: {
        type: "TransitionEventHandler<HTMLButtonElement>",
        required: false,
      },
      onTransitionEnd: {
        type: "TransitionEventHandler<HTMLButtonElement>",
        required: false,
      },
      onTransitionEndCapture: {
        type: "TransitionEventHandler<HTMLButtonElement>",
        required: false,
      },
      onTransitionRun: {
        type: "TransitionEventHandler<HTMLButtonElement>",
        required: false,
      },
      onTransitionRunCapture: {
        type: "TransitionEventHandler<HTMLButtonElement>",
        required: false,
      },
      onTransitionStart: {
        type: "TransitionEventHandler<HTMLButtonElement>",
        required: false,
      },
      onTransitionStartCapture: {
        type: "TransitionEventHandler<HTMLButtonElement>",
        required: false,
      },
      formAction: {
        type: "string | ((formData: FormData) => void | Promise<void>)",
        required: false,
      },
      formEncType: {
        type: "string",
        required: false,
      },
      formMethod: {
        type: "string",
        required: false,
      },
      formNoValidate: {
        type: "boolean",
        required: false,
      },
      formTarget: {
        type: "string",
        required: false,
      },
      list: {
        type: "string",
        required: false,
      },
      step: {
        type: "string | number",
        required: false,
      },
      accept: {
        type: "string",
        required: false,
      },
      alt: {
        type: "string",
        required: false,
      },
      capture: {
        type: 'boolean | "user" | "environment"',
        required: false,
      },
      checked: {
        type: "boolean",
        required: false,
      },
      height: {
        type: "string | number",
        required: false,
      },
      max: {
        type: "string | number",
        required: false,
      },
      min: {
        type: "string | number",
        required: false,
      },
      multiple: {
        type: "boolean",
        required: false,
      },
      pattern: {
        type: "string",
        required: false,
      },
      size: {
        type: "number",
        required: false,
      },
      src: {
        type: "string",
        required: false,
      },
      width: {
        type: "string | number",
        required: false,
      },
      label: {
        type: "ReactNode",
        required: false,
      },
      description: {
        type: "ReactNode",
        required: false,
      },
    },
  },
} as const;
export type ComponentManifest = typeof components;
