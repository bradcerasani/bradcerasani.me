---
title: PiDesk
description: Hacking Ikea's sit-stand desk with a Raspberry Pi to support programatic control and realtime height feedback.
date: '2015-01-01'
image: '/projects/pi-desk/hero.jpg'
favicon: 🔩
status: live
---

In 2015 Ikea’s Bekant series sit/stand desk came to Canada.

I wrote a scraper that polled Ikea’s website for stock at my local store, and picked one up as soon as they were available. The desk worked fine, but the controller was very basic and didn’t have height presets, so I decided to make my own.

I assumed the Ikea legs had some sort of sync unit and limit switches within them, and that I could just short the three-conductor controller wire in order to make the desk go up or down. This did not end up being the case, so I opened up the Ikea controller module and found a small PCB within it.

To interface with this PCB as non-destructively as possible, I made a replacement for the original button’s ribbon wire out of plastic, flexible adhesive, and wires that I attached to a screw terminal. The screw terminal is connected to a bank of two relays for software control, and a 3.5mm headphone jack for pluggable hardware control in the event that the software isn’t working.

<PostImage size="large" src="/projects/pi-desk/hero.jpg" />

The relays are connected to a Raspberry Pi running a basic controller software I wrote in Python and Node.js. It uses feedback from an ultrasonic sensor to measure the desk’s height. For software control, I made a series of Alfred shortcuts on my Mac that sent requests to the desk’s API. For hardware control, I wired up a SPDT on-off-on toggle switch.

At one point I wrote a wrapper for the desk’s API and opened it up to the internet during a meeting with my team at Black Pixel. This allowed my coworkers to control the desk’s height using slash commands in Slack. This was not one of my better ideas, but made for a memorable meeting (for me anyway).
