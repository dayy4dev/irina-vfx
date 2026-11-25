# Irina Select

A dropdown select whose trigger squashes, menu springs open with smoke puffs, and picking an option lands a glint and `カチッ`.

## Usage

```html
<script src="select.js"></script>

<irina-select label="Weapon" name="weapon">
  <option value="katana">Katana</option>
  <option value="kunai">Kunai</option>
  <option value="shuriken">Shuriken</option>
</irina-select>
```

- **Value:** Read or set `el.value`. Fires `change` when the selection changes.
- **Forms:** With a `name` attribute, its value is submitted with the enclosing form.
- **Width:** Defaults to `230px`; override via `--ir-select-width`.
