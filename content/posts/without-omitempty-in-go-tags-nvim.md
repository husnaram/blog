---
title: "Without Omitempty in Go Tags Nvim"
date: 2021-01-22T08:54:36+07:00
draft: false
tags:
- neovim
---

Using `go.tags` of `coc-go` features will add minimalistic tag on side each fields of struct, and accompanied by `omitempty`.

At this `omitempty` moment my editor make me struggeling to remove it.

>`omitempty` aims to hide tags when field has no one value, in other words `nil`

Here the escape.

Open up your `coc-settings.json` of vim/neovim config, then add this lines.

```
"go.tags": {
    "options": "json="
}
```

Call command `:wq`

Try it out, now.