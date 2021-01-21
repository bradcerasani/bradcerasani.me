---
title: Designing <br /> a Home
description: Blending the old with the new in the renovation of our 1920s home, adventures in custom lighting, and learning how to design in 3D.
date: '2018-01-01'
daterange: 2017–2018
image: /projects/home-renovation/hero.jpg
favicon: 🏠
---

From 2017-2018, we had our home renovated.

A friend introduced me to SketchUp, and helped with some initial models of the space. Using these files as a starting point, I spent several months iterating on the design with increasing fidelity, repeating the process as constraints emerged through demolition. Our house is close to 100 years old, and any renovation—especially in an old house⁠—is bound for surprises.

<!-- <PostImage src="/projects/home-renovation/IMG_0148.jpg" caption="Kitchen before"/> -->

<ImageCompare
  size="large"
  image1="/projects/home-renovation/0S7A7533-sketchup.jpg"
  image2="/projects/home-renovation/0S7A7533.jpg"  
  caption="SketchUp model and finished space"
  position="33"
/>

Working in 3D allowed me to more carefully consider the spaces and sightlines than a typical plan or one-off render. Using a friend’s VR rig, I could walk through the models to better understand flow and utility. Many of the fixtures and appliances we considered had 3D models available, so I was able to audition them in the space before making a commitment. When options were presented during the construction, I was able to model each permutation to better understand its context and outcome, rather than rush a decision or leave it solely to the contractor.

<ImageCompare
  size="large"
  image1="/projects/home-renovation/0S7A7604-before.jpg"
  image2="/projects/home-renovation/0S7A7604.jpg"
  caption="Before/after from mid-demoliton to final"
/>

The design attempts to blend old with new, and mixes modern lines with natural materials. I’ve never designed a space before, but found the principles familiar to what I knew in software, and learned a lot about the process along the way.

<PostImage size="full" src="/projects/home-renovation/0S7A7686.jpg" />

<PostImage size="full" src="/projects/home-renovation/0S7A7712.jpg" />

<PostImage size="full" src="/projects/home-renovation/0S7A7658.jpg" />

<br />

## Lighting

In continuing the mix of old and new, I integrated Danish lighting from the 1950s in the dining room, and custom-made modern linear lighting in the kitchen.

<PostImage size="large" src="/projects/home-renovation/0S7A7555.jpg" />

The linear lights consist of flush-mount aluminum channels with diffusers, [five-channel LED strips](https://sowilodesign.com/) colour-matched to Philips Hue, dual PWM amplifiers (RGB and tunable white), Philips Hue LS+ controllers, and commercial power supplies.

In order to achieve even linear light, I ran two light strips along the side walls of the aluminium channels, and created an offset for consistent spacing between CW•RGB•WW diode clusters. In testing several methods of mounting and diffusion, I found this approach to be the best balance of heat dissipation and output.

<Figure size="large">
  <Grid gutter="calc(var(--spaceDefault) / 2)">
    <GridItem width={{ sm: '1/3 * 100%' }}>
      <Video src="/video/projects/home-renovation/light-assembly.mp4" />
    </GridItem>
    <GridItem width={{ sm: '1/3 * 100%' }}>
      <Img src="/projects/home-renovation/IMG_0164x.jpg" sizes="400px"/>
    </GridItem>
    <GridItem width={{ sm: '1/3 * 100%' }}>
      <Img src="/projects/home-renovation/IMG_0140.jpg" sizes="400px"/>
    </GridItem>
  </Grid>
</Figure>

For each fixture, I had an electrician run a standard line-voltage light switch to a junction box near the electrical panel in the basement, and low voltage wire from there back up to its respective installation location. Downstairs, I connected each switched line to a 24V power supply that feeds a Philips Hue LS+ controller and two PWM amplifiers that power the fixture.

<Figure size="large">
  <Grid gutter="calc(var(--spaceDefault) / 2)">
    <GridItem width={{ sm: '1/3 * 100%' }}>
      <Img src="/projects/home-renovation/IMG_0039.jpg" sizes="400px"/>
    </GridItem>
    <GridItem width={{ sm: '1/3 * 100%' }}>
      <Img src="/projects/home-renovation/IMG_0164.jpg" sizes="400px"/>
    </GridItem>
    <GridItem width={{ sm: '1/3 * 100%' }}>
      <Img src="/projects/home-renovation/IMG_0591.jpg" sizes="400px"/>
    </GridItem>
  </Grid>
</Figure>

In total I built five discrete lights; each addressable individually or by group from the Philips Hue app or any voice assistant. They work seamlessly with standard in-wall switches to match the rest of the house.

In terms of brightness, at peak output the three fixtures in the kitchen are capable of roughly 23,400 lm at 4200k, with a CRI of 95+. This equates to approximately 29 standard 60W light bulbs or 78 Philips Hue GU10s.

<Figure size="large">
  <Grid gutter="calc(var(--spaceDefault) / 2)">
    <GridItem width={{ sm: '1/3 * 100%' }}>
      <Img src="/projects/home-renovation/corner.jpg" sizes="400px"/>
    </GridItem>
    <GridItem width={{ sm: '1/3 * 100%' }}>
      <Img src="/projects/home-renovation/IMG_9681.jpg" sizes="400px"/>
    </GridItem>
    <GridItem width={{ sm: '1/3 * 100%' }}>
      <Video src="/video/projects/home-renovation/controller-2.mp4" />
    </GridItem>
  </Grid>
</Figure>

## Hide and Seek

Towards the back of the house, there is a bank of three full-height cabinets on the one wall. Behind the first door is a pantry, framed in baltic birch with adjustable shelves. The third door is more storage, mostly for cleaning and dog supplies. The centre door opens to a T-shaped powder room hidden behind the other cabinets.

<PostImage size="large" src="/projects/home-renovation/0S7A7645.jpg" caption="The second handle on the left is a powder room. The lower level was previously an attached garage"/>

The powder room is painted a deep navy, in contrast to the otherwise bright house. A feature wall has floor-to-ceiling period appropriate wallpaper by William Morris, in a pattern called Golden Lily.

I had a friend sandblast the chrome bathroom fixtures to reveal the raw brass underneath, and treated them with an acid mixture to accelerate patina into cohesion with original fixtures in the house.

<PostImage size="full" src="/projects/home-renovation/0S7A8615.jpg" caption="Main floor powder room"/>

When the powder room door opens, a ZigBee-enabled reed switch communicates with Home Assistant running on a Raspberry Pi to turn the lights on. If we're entertaining, the linear fixture outside the door can turn into an airplane-style occupancy indicator, turning red when occupied and green when available.

<PostVideo size="large" src="/video/projects/home-renovation/occupancy-demo-color-corrected.mp4" caption="Big stretch" />
