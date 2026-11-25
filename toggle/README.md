# Toggle

A procedural manga switch that stretches like a smear frame, floods with accent ink, and lands with concentration lines (`shuchu`), a `slash`, `splash`, sparkle, and `カチッ`. Turn it off and it snaps back with speed lines and a smoke puff.

## Run it

```sh
python3 -m http.server 8000     # from the repo folder
# open http://localhost:8000/toggle/
```

## Use it

```html
<script src="toggle.js"></script>
<irina-toggle label="Notifications"></irina-toggle>
<irina-toggle label="Dark mode" checked name="dark"></irina-toggle>
```

```js
el.addEventListener('change', () => console.log(el.checked));
el.checked = true;    // from code: jumps to the end, no animation
el.flip();            // from code, with the animation
```

| attribute | what it sets | default |
|---|---|---|
| `label` | what a screen reader calls it | Toggle |
| `checked` | on | off |
| `name`, `value` | sent with its form when on, like a checkbox | value `on` |
| `disabled` | can't be flipped | off |

- **It is a `role="switch"` button** inside a shadow root, so Space and Enter flip it and `aria-checked` follows.
- **Follows `--ir-*` and `IrinaVFX.P` live**, including `--ir-r`, `--ir-sh`, `--ir-acc`, `--ir-ink`, and `--ir-card`.
- **Only a person flipping it plays the effects.** Setting `checked` from code goes straight to the end.
- **Reduced motion** skips straight to the final state.
