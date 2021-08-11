---
title: "{{ replace (.Name | replaceRE "[0-9-]+_" "") "-" " " | title }}"
date: {{ .Date }}
tags: 
draft: false
---
