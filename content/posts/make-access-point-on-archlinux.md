---
title: 'Make Access Point on Archlinux'
date: 2021-08-07T19:42:19+07:00
draft: false
---

Awalnya browsing untuk mencari tahu cara menampilkan preview development web yang ada di laptop ke smartphone tanpa internet atau simpelnya tanpa di deploy.

Tapi, logicnya si laptop ini mesti terkonesi dengan smartphone, lalu solusi muncul yaitu dengna AP (access point) atau hotspot yand dipancarkan laptop, kemudian diakses via smartphone.

Hasil browsingnya ada di sini [Tutorial Share Koneksi Wifi (Hotspot) di Arch Linux](https://jagongoding.com/linux/arch-linux/tutorial-share-koneksi-wifi-hotspot-di-arch-linux/).

Saat menerapkan tutorial tersebut ada kendala saat membuat access pointnya.

Jelasnya ketika command ini `sudo create_ap wlp2s0 wlp2s0 archer passang`. Hasilnya keluar error `ERROR: Failed to initialize lock`.

Langsung saja google lagi, dan tentu saja hasilnya ada di "issues"nya repo 'create_ap' sendiri, di sini [Failed to initialize lock error #384](https://github.com/oblique/create_ap/issues/384).

Solusinya cukup menghapus file `create_ap.all.lock`, dengan command `sudo rm /tmp/create_ap.all.lock`.

And done. Buka smartphone, enable wifi, lalu scan. Detected.
