# Irina Drawer

A slide-over drawer/sheet that streaks in with speed lines, lands in dust with `ズザッ`, and slides back out when dismissed.

## Usage

```html
<script src="drawer.js"></script>

<irina-drawer id="drw" heading="Navigation" side="right">
  <p>Drawer content here.</p>
</irina-drawer>
```

- **Open / Close:** Call `el.show()`, `el.close()`, or toggle `el.open`.
- **Side:** Set `side="right"` (default) or `side="left"`.
- **Events:** Fires `close` when dismissed via `Escape`, backdrop click, or the close button.
