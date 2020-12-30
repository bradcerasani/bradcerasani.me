---
title: Liftoff
description: Shedbot 2.0 reflects a sharper focus on building for the web.
image: /images/writing/liftoff/cover.jpg
date: '2012-12-06'
---

<Note>

This post coincided with the launch of an updated portfolio site in 2012. Check it out in the archives [here](https://2012.bradcerasani.me), where you can also view this entry in its [original context](https://2012.bradcerasani.me/blog).

</Note>

Shedbot 2.0 reflects a sharper focus on building for the web. The old website has been refined into a single page responsive layout with a small, select portfolio of web projects. The new site is lightweight, and progressively enhances for high pixel density "retina" displays with resolutions up to an absurd 5120 x 2880[^1].

<PostImage src="writing/liftoff/moon.jpg" alt="Alt text" caption="Moon over Kenora, Ontario – 10&quot; f4.7 Newtonian telescope, Canon 7D" size="large" />

Load weight on mobile is 316K, 375K for mobile retina, 960K at largest non-retina breakpoint, and a respectable 1511K for widescreen retina.

The blog features responsive, full width images that are dynamically downloaded in 1 of 5 sizes depending on the user's screen resolution. Type is FF Tisa Web Pro and Proxima Nova, served by Typekit.

## A Retina Web

There's no silver bullet approach to support a retina web, but as high pixel density displays become increasingly popular their support should be prioritized. Whenever the project allows, resources are better spent enhancing the user experience for those at the cutting edge of technology over patching fixes for non-compliant legacy browsers.

I'll outline the tools and methods I used to support high pixel density displays here in a blog post next week. In the mean time, let me know what you think of the new site.

Happy Thursday.

[^1]: The [website this post describes](https://2012.bradcerasani.me) was built shortly after high pixel density displays came to laptops for the first time. The notion of a 5120 x 2880 display seemed absurd but inevitable, so I added the assets and media queries to handle it. The 5k iMac was announced around 2 years later.
