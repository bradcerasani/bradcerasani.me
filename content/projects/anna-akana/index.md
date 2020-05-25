---
title: AnnaAkana.com
description: AnnaAkana desc
date: '2014-01-01'
image: /video/projects/anna-akana/anna-akana-website.mp4
---

I worked with actor, writer, and director Anna Akana to build a new online home for a series of short films she released in 2014. The site holds details about the films, their cast and crew, and behind-the-scenes content.

The site is managed with a PHP-based CMS and Node.js service I wrote that interacts with a handful of third-party APIs. When a new short film is added to the CMS, the Node process fetches metadata about the film from YouTube, caches it in Redis, and transports it to the front-end via WebSocket. A cron job polls the view and like counts for each short film, and the socket connection allows these changes to be reflected in the UI in real-time.

Each short film added to the CMS has an accompanying hashtag on Instagram for behind-the-scenes content that the Node process also queries and caches for display. The same flow is utilized to surface real-time subscriber/follower counts from YouTube, Facebook, Instagram, and Twitter.

<PostImage src="projects/anna-akana/social-stats.png" size="large" />

The design of the short-film list utilizes cinematic 2.4:1 video previews that loop a 10-15 second clips when hovered over. The short film detail pages are themeable from the CMS, and both header and detail sections fade to 10% opacity while the film is playing to help minimize distraction.

<Video src="/video/projects/anna-akana/anna-akana-website.mp4" size="large" />
  
Anna has since gone on to appear in TV and film for Marvel/Disney, Netflix, Lionsgate, ABC, Comedy Central, YouTube Red, and others.
