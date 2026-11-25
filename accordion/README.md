# Irina Accordion

A collapsible panel whose header squashes, body springs open, and bottom corners land with smoke puffs and `ポン`.

## Usage

```html
<script src="accordion.js"></script>

<irina-accordion heading="Special Notes">
  Hidden content goes here.
</irina-accordion>
```

- **State:** Read or set `el.open` (or use the `open` attribute). Fires `change` with `{ detail: { open } }`.
- **Width:** Defaults to `280px`; override via `--ir-accordion-width`.
