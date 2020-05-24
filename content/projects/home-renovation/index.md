---
title: Home Renovation
description: Home Renovation
date: '2018-01-01'
daterange: 2017–2018
image: /projects/home-renovation/hero.jpg
---

From 2017-2018, we did a major renovation at our home that spanned our kitchen, ensuite, and the conversion of a small attached garage to a family room. A close friend introduced me to SketchUp, and did some initial mockups based on where I thought things should go. When evaluating contractors to execute the work, I chose the company that was most comfortable with SketchUp, and had a team of design-minded craftspeople willing to work out of it rather than static drawings.

For several months I designed and redesigned each space in SketchUp, and did so again as constraints emerged when we began interior demolition. Our house is close to 100 years old, and any renovation, especially in an old house, comes with surprises.

Working in 3D allowed me to more carefully consider the spaces and sightlines than a typical plan or one-off render. Using a friend’s VR rig, I could walk through the models to better understand flow and utility. Many of the fixtures I considered had 3D models available, so I was able to audition them in the space before placing an order. When options were presented during the construction, I was able to model each permutation to better understand its context and outcome, rather than rush a decision or leave it solely to the contractor.

The final design attempts to blend old with new by mixing modern lines with natural materials. I’ve never designed a space or physical thing like this before, but found the principals familiar to what I knew in software, and learned a lot about the process along the way.

Two of my favourite features are as follows:

1. _Custom Hue-compatible flush-mount linear lights_
   The lights are a combination of parts I sourced and assembled from a handful of different suppliers. I met an engineer on Reddit who had designed and procured a small run of five-channel (RGB, warm white, cool white) LED strips that matched the Philips Hue Lightstrips Plus but exceeded their performance in every measurable way: colour rendering index, lumen output, efficiency, and diode (group) density. He was super helpful throughout the process.

In order to achieve line of light, I ran two of these strips offset along the side walls of flush-mount aluminium extrusions that I ordered from a company based out of Poland. For each zone, I had the electrician run regular line-voltage light switches to the basement near my electrical panel, and low voltage wire from the install locations to the panel as well. Downstairs, I wired the line-voltage light switches to close commercial 24v power supplies. Each power supply feeds its own Philips Hue LS+ controller and dual PWM amplifiers; one for tunable white and another for RGB. In total I built five discrete fixtures that can be addressed individually or by group from the Philips Hue app or any voice assistant, and still work with standard in-wall switches to match the rest of the house.

2. _Hidden powder room_
   Towards the back of the house, there is a bank of three full-height cabinets on the north wall. Behind the first door is a pantry, framed in baltic birch with adjustable shelves. The third door is more storage, mostly for cleaning and dog supplies. The centre door opens to a T-shaped powder room hidden behind the other cabinets.

The powder room is painted a deep navy, in contrast to the otherwise bright house. A feature wall has floor-to-ceiling period appropriate wallpaper from William Morris, and I had a friend sandblast the chrome bathroom fixtures to reveal raw brass underneath. I treated the brass with an acid mixture to accelerate patina into cohesion with other original fixtures in the house.

When the powder room door opens, a ZigBee-enabled reed switch communicates with Home Assistant running on a Raspberry Pi to turn the powder room lights on. If we have people over, the Hue-compatible linear fixture outside the powder room door can turn into an airplane-style occupancy indicator, turning red when occupied and green when available.
