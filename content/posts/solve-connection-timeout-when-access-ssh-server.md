---
title: "Solve Connection Timeout When Access Ssh Server"
date: 2021-03-23T20:07:31+07:00
draft: true
---

First time manage the server for my web app host. Here i'm using Alibaba Cloud.

For the first time access server with ssh was nothing problem. But after moment add `http` port with `ufw` tool on local machine, and disconnect to ssh and trying to connect again the result show

```
ssh: connect to host 147.139.164.109 port 22: Connection timed out
```

Solving this with

https://www.digitalocean.com/docs/droplets/resources/troubleshooting-ssh/connectivity/#checking-your-firewall