---
title: "Reload Neovim Config Without Restarting Editor"
date: 2021-01-22T08:42:03+07:00
draft: false
tags:
- neovim
---

Just watched neovim video on youtube at [ThePrimeagen](https://www.youtube.com/channel/UC8ENHE5xdFSwx71u3fDH5Xw) channel. And he can install plugin without close/restarting the nvim editor, then i realized what command he typed.

Ok, i got it.

```
:so %
```

That's it!
And i find explained of the command from [superuser.com](https://superuser.com/questions/132029/how-do-you-reload-your-vimrc-file-without-restarting-vim).

>`:so` for short command of `:source` which reads the content of the specified file and treats it as nvim/vim code. And `%` stads for current file name.