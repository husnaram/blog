---
title: "Make Word Transform to Uppercase in First Char Each"
date: 2021-03-28T21:32:02+07:00
draft: false
tags:
- php
---

To make first char of fullname or just name transform into uppercase without painless is simple.

Built-in string function of PHP had answerability. Yeah, sure `ucwords()` + `strtolower()`. You combine they like this `ucwords(strtolower("HUBERT blAINe"))`, and got it `Hubert Blaine`.