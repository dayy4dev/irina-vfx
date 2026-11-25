# Irina Dialog

A modal dialog that springs into view with speed lines, smoke puffs, shards, and `ドン!`.

## Usage

```html
<script src="dialog.js"></script>

<irina-dialog id="dlg" heading="Special Attack">
  <p>Ready to trigger the finisher?</p>
  <irina-button slot="actions" onclick="dlg.close()">Confirm</irina-button>
</irina-dialog>
```

- **Open / Close:** Call `el.show()` (or `el.showModal()`), `el.close()`, or toggle `el.open`.
- **Events:** Fires `close` when dismissed via `Escape`, backdrop click, or the close button.
