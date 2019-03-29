# Proxy Nexus

[https://proxynexus.net](https://proxynexus.net)

Make high quality Netrunner proxies. Generates ready to print PDFs from a NetrunnerDB deck list, a retail set, or a custom card list. 

Based on this https://codepen.io/Theavon/pen/YQmgBG
and this https://gparmer.github.io/anrproxy/

Uses scans from /u/LepcisMagna/ https://www.reddit.com/r/Netrunner/comments/8pgfbj/android_netrunner_cards_up_to_kitara_600dpi/

Images de-speckled using https://gist.github.com/ankitjaininfo/86e7e07a8df12e246ce49ec0a7168716
and slightly enhanced using mogrify -modulate 105,105


## Intended features
 
* Option to generate MPC printable images, including black border frame/bleed
* Under retail sets, allow picking 1 set vs play set for Core/revised core/SC19
* Under card list, allow alt art selection


Requires images directory, filled with images named after their NetrunnerDB id.