# Irina Badge

A manga stamp badge that slams onto the page with `shuchu` concentration lines, puffs, a sparkle, and custom SFX lettering.

## Usage

```html
<script src="badge.js"></script>
<irina-badge>NEW</irina-badge>
<irina-badge variant="ink">MANGA</irina-badge>
<irina-badge interactive variant="accent" sfx="BAM!">Trigger Stamp</irina-badge>
```

- `variant`: `default`, `accent`, or `ink`.
- `interactive`: renders as a `<button>` that triggers `stamp()` on click and fires a `stamp` event.
- `sfx`: sound-effect word (`pon`, `don`, `gogo`, `kachi`, `shu`, `zuza`, or any custom text such as `BAM!`).
- Call `el.stamp()` programmatically to fire the slam animation.
