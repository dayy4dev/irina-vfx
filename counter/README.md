# Irina Counter

A like/upvote counter button that pops with a spiky burst, shards, glint, and `ポン` when activated.

## Usage

```html
<script src="counter.js"></script>

<irina-counter count="12" label="Like" name="likes"></irina-counter>
```

- **State:** Read or set `el.count` and `el.active`. Fires `change` with `{ detail: { count, active } }`.
- **Forms:** With a `name` attribute, its `count` is submitted with the enclosing form.
