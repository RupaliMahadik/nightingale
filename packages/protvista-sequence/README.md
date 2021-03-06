# `<protvista-sequence>`
Displays the sequence in the selected region if there is enough space for the characters.
Displays the axis legend of the selected region.
See it running [Here](https://ebi-webcomponents.github.io/protvista-sequence/).


## Usage
```html
      <protvista-sequence length="456" start="34" end="400"></protvista-sequence>
```

## API Reference

### Properties

### `sequence: string`
The sequence to display

#### `length: number`
The protein or nucleic acid sequence length.

#### `start: number (optional)`
The start position of the selected region.

#### `end: number (optional)`
The end position of the selected region.

#### `highlightStart: number (optional)`
The start position of the highlighted region.

#### `highlightEnd: number (optional)`
The end position of the highlighted region.

### Events
