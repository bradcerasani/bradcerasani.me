---
title: Designing <br /> a home
description: Blending the old with the new in the renovation of our 1920s home, adventures in custom lighting fabrication, and learning how to model in 3D.
date: '2018-01-01'
daterange: 2017–2018
image: /projects/designing-a-home/hero.jpg
favicon: 🏠
status: live
---

From 2017-2018, my wife and I had our home renovated. I designed the space, and we had a design-minded builder execute the work.

A friend had introduced me to SketchUp, and helped with some initial models of the space. Using these files as a starting point, I spent several months iterating on the design with increasing fidelity, revisiting the process as constraints emerged through demolition. Our house is close to 100 years old, and any renovation—especially in an old house⁠—is bound for surprises.

<PostImage src="/projects/designing-a-home/IMG_0148.jpg" caption="Kitchen pre-demolition" $size="large"/>

<PostImage src="/projects/designing-a-home/IMG_0144.jpg" caption="Kitchen pre-demolition (opposite angle)" $size="large"/>

<PostImage src="/projects/designing-a-home/IMG_0343.jpg" caption="One such surprise: 4-6 inches of concrete under the kitchen floor. The house is not slab-on-grade; there's another layer of structural concrete and a basement under there. Thankfuly concrete doesn't bond well to concrete and it came up easily." $size="large"/>

Working in 3D allowed me to more carefully consider the spaces and sightlines than a typical plan or one-off render. Using a friend’s VR rig, I walked through the models to better understand flow and utility. Many of the fixtures and appliances considered had 3D models available, so I was able to audition them in the space before making a commitment. When options were presented during the construction, I was able to model each permutation to better understand it in context, rather than rush a decision or leave it solely to the builder. It also helped immensely that the builder was comfortable with SketchUp, so I could send ideas over for them to assess feasibility. In the end, the build came remarkably close to the model.

<ImageCompare
$size="large"
image1="/projects/designing-a-home/0S7A7533-sketchup.jpg"
image2="/projects/designing-a-home/0S7A7533.jpg"  
caption="Comparison of SketchUp model and finished space"
position="33"
/>

The final design attempts to blend old with new, and mixes modern lines with natural materials. This was the first space I've designed, but I found the principles familiar to what I knew in other disciplines, and learned a lot about the process along the way. I go into more detail about a few of my favourite features below.

<ImageCompare
$size="large"
image1="/projects/designing-a-home/0S7A7604-before.jpg"
image2="/projects/designing-a-home/0S7A7604.jpg"
caption="Comparison of mid-demoliton and final"
/>

<PostImage $size="full" src="/projects/designing-a-home/0S7A7712.jpg" />

<PostImage $size="full" src="/projects/designing-a-home/0S7A7686.jpg" />

<PostImage $size="full" src="/projects/designing-a-home/0S7A7658.jpg" />

<br />

## Lighting

In continuing the mix of old and new, I integrated Danish lighting from the 1950s in the dining room, and custom-made modern linear lighting in the kitchen.

<PostImage $size="large" src="/projects/designing-a-home/0S7A7555.jpg" caption="One of three custom-made linear lights in the kitchen"/>

The linear lights consist of flush-mount aluminum channels with diffusers, five-channel LED strips[^1] colour-matched to Philips Hue, dual PWM[^2] amplifiers (RGB and tunable white), Philips Hue LS+ controllers, and commercial power supplies.

In order to eliminate hotspots, I ran two light strips along the side walls of the aluminium channels, and created an offset for consistent spacing between CW•RGB•WW[^3] diode clusters. In testing several methods of mounting and diffusion, I found this approach to be the best balance of heat dissipation and output.

<Figure $size="large">
  <Grid $gutter="calc(var(--spaceDefault) / 2)">
    <GridItem $width={{ sm: '1/3 * 100%' }}>
      <Video src="/video/projects/designing-a-home/light-assembly.mp4" />
    </GridItem>
    <GridItem $width={{ sm: '1/3 * 100%' }}>
      <Img src="/projects/designing-a-home/IMG_0164x.jpg" sizes="400px"/>
    </GridItem>
    <GridItem $width={{ sm: '1/3 * 100%' }}>
      <Img src="/projects/designing-a-home/IMG_0140.jpg" sizes="400px"/>
    </GridItem>
  </Grid>
</Figure>

For each fixture, I had an electrician run a standard line-voltage light switch to a junction box near the electrical panel in the basement, and low voltage wire from there back up to its respective installation location. Downstairs, I connected each switched line to a 24V power supply that feeds a Philips Hue LS+ controller and two PWM amplifiers that power the fixture.

<Figure $size="large">
  <Grid $gutter="calc(var(--spaceDefault) / 2)">
    <GridItem $width={{ sm: '1/3 * 100%' }}>
      <Img src="/projects/designing-a-home/IMG_0039.jpg" sizes="400px"/>
    </GridItem>
    <GridItem $width={{ sm: '1/3 * 100%' }}>
      <Img src="/projects/designing-a-home/IMG_0164.jpg" sizes="400px"/>
    </GridItem>
    <GridItem $width={{ sm: '1/3 * 100%' }}>
      <Img src="/projects/designing-a-home/IMG_0591.jpg" sizes="400px"/>
    </GridItem>
  </Grid>
</Figure>

In total I built five discrete lights; each addressable individually or by group from the Philips Hue app or any voice assistant. All of them work seamlessly with standard in-wall switches to match the rest of the house.

In terms of brightness, at peak output the three fixtures in the kitchen are capable of roughly 23,400 lm at 4200k, with a CRI of 95+. This equates to approximately 29 standard 60W light bulbs or 78(!) Philips Hue GU10s. A (desired) side effect of having this much available light is that in practice, the fixtures are rarely over 50% power, which should extend the lifespan of the LEDs considerably.

<Figure $size="large">
  <Grid $gutter="calc(var(--spaceDefault) / 2)">
    <GridItem $width={{ sm: '1/3 * 100%' }}>
      <Img src="/projects/designing-a-home/corner.jpg" sizes="400px"/>
    </GridItem>
    <GridItem $width={{ sm: '1/3 * 100%' }}>
      <Img src="/projects/designing-a-home/IMG_9681.jpg" sizes="400px"/>
    </GridItem>
    <GridItem $width={{ sm: '1/3 * 100%' }}>
      <Video src="/video/projects/designing-a-home/controller-2.mp4" />
    </GridItem>
  </Grid>
</Figure>

## Hide and Seek

Towards the back of the house, there is a bank of three full-height cabinets on the north wall. Behind the first door is a pantry, framed in baltic birch with adjustable shelves. The third door is more storage, mostly for cleaning and dog supplies. The centre door opens to a T-shaped powder room hidden behind the other cabinets.

<PostImage $size="large" src="/projects/designing-a-home/0S7A7645.jpg" caption="The second handle on the left is a powder room. This lower level was previously an attached garage"/>

I painted the powder room a deep navy, in contrast to the otherwise bright house. A feature wall has floor-to-ceiling period appropriate wallpaper by William Morris, in a pattern called Golden Lily[^4].

I had a friend sandblast chrome bathroom fixtures to reveal the raw brass underneath, and treated them with an acid mixture to accelerate patina into cohesion with other original fixtures in the house.

<PostImage $size="full" src="/projects/designing-a-home/0S7A8615.jpg" caption="Main floor powder room"/>

When the powder room door opens, a ZigBee-enabled reed switch communicates with Home Assistant running on a Raspberry Pi to turn the lights on. If we're entertaining, the linear fixture outside the door can turn into an airplane-style occupancy indicator, turning red when occupied and green when available.

<PostVideo $size="large" src="/video/projects/designing-a-home/occupancy-demo-color-corrected.mp4" caption="Door to main floor powder room with occupancy automation enabled" />

[^1]: The lightstrips are called [Bifröst](https://sowilodesign.com/collections/bifrost/products/bifrost-147-pro-led-strip) and made by a company called [Sowilo DS](https://sowilodesign.com/). I was one of their first customers, and Mike from Sowilo was immensely helpful throughout this process.
[^2]: PWM stands for [Pulse Width Modulation](https://en.wikipedia.org/wiki/Pulse-width_modulation).
[^3]: CW•RGB•WW stands for Cool White, Red, Green, Blue, and Warm White. With the strips I used, the cool white diode is 6500k, and the warm white is 2200k.
[^4]: If you've seen [Sex Education](https://www.netflix.com/title/80197526) on Netflix, Dr. Jean Milburn (Otis' mum) has this same wallpaper along with other [William Morris](https://en.wikipedia.org/wiki/William_Morris) patterns throughout her house. William Morris was a pioneer of the [Arts and Crafts movement](https://en.wikipedia.org/wiki/Arts_and_Crafts_movement).
