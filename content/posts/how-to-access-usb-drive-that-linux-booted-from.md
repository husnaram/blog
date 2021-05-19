---
title: "How to Access USB Drive That Linux Booted From"
date: 2021-05-19T11:22:50+07:00
draft: false
tags:
    - linux
---

Been a long time ago i'm trying linux liveUSB, and the present i try it again.

Intent of this act is grabing data from laptop without operating system. In my case i'm using [bunsenLabs](https://www.bunsenlabs.org/), the debian based linux distro.

I want to the data stored on USB drive that linux booted from. Here is the solution.

Check where USB drive mounted

`lsblk`

But, usually liveUSB drive mounted on `/lib/live/mount/medium`

Remount USB device

`sudo mount -o remount,rw /lib/live/mount/medium`

`rw` options for give write permission.

After that, i can do anything.