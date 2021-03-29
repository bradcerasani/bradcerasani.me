---
title: Tesla software problems in winter
description: When Designed in California™ meets -40°.
date: '2021-03-29'
image: /writing/tesla-software-problems-in-winter/share.jpg
video: /video/writing/tesla-software-problems-in-winter/energy-contrast-compressed.mp4
favicon: ❄️
skipHero: true
---

I've driven a Model 3 for two winters now, and generally speaking it's a good cold weather car. I live in the [coldest major city in Canada](https://www.tourismwinnipeg.com/winter-experiences), and I do _not_ miss pumping gas in -40°. The ability to preheat the car in a closed garage without worrying about fumes is also really nice.

Tesla has received criticism for frozen door handles and other hardware features that don't perform optimally in winter, but in my experience, the area with the most room for improvement is software.

## Inaccuracy of range estimates

Batteries don't perform well in the cold. This is not unique to EVs; most owners of internal combustion engine (ICE) cars that live in cold climates are no stranger to jumper cables, booster packs, and trickle chargers for dealing with frozen batteries. Many cars here have block heaters to keep the engine oil warm during bouts of extreme weather—so even ICE cars are plugged in.

A Tesla's reduced range in winter is very real, but not as much of an issue as one might expect. The average drive for most people most of the time only uses a fraction of a vehicle's total fuel capacity. Tesla recommends keeping its cars plugged in whenever they aren't being driven—especially in low temperatures—which usually means they're topped up after every drive. Extended road trips that might challenge a Tesla's range aren't common here in winter, because road conditions and inclement weather make it less safe to travel long distances by car in general. Winter road trips are still possible in an EV—they just require longer and more frequent stops.

What _is_ a problem driving a Tesla in cold weather is that the battery range indicator is not adjusted for temperature, so drivers have to guess how much range they have remaining.

I collected data from all of my drives in temperatures below 0°C (32°F) over the course of two winters, and filtered trips that were less than 5 km. With a sample size of 181 drives, the average accuracy of my Tesla's range indicator in these conditions was 44.2%[^1]. **This means on average, for every 5 km driven, the range remaining went down by more than 11 km.** The accuracy varied considerably as well, from 71% to as low as 21% in extreme cold.

> This means on average, for every 5 km driven, the range remaining went down by more than 11 km.

With a few taps it is possible to view a graph of the car's efficiency over the last 50, 25, or 10 kilometres driven, and a weighted prediction of remaining range based on these values and current charge level. While this prediction is generally more accurate than the primary range indicator, the assumption that efficiency of the previous `n` kilometres driven is indicative of the next `m` kilometres driven is still often wrong, and exposes an interesting bias in its design.

<PostVideo $size="large" src="/video/writing/tesla-software-problems-in-winter/energy-contrast-compressed.mp4" caption="The energy graph can show a very different range projection than the primary indicator, and neither are consistently accurate" />

In much of the world—especially cold climates—weather conditions can change considerably overnight, and low temperatures have a greater impact on range than even the most extreme driving patterns. **In Winnipeg, we can see more temperature fluctuation in a single day than San Francisco experiences in an entire year.** Even Tesla's concealed range prediction appears to be modeled after a use case wherein the driver has a regular ~50km commute in an area with limited temperature variation—which in all likelihood, it was.

At any given time, a Tesla knows the current weather, the weather forecast, how many passengers its carrying, historical driving patterns, climate control settings, tire pressure, and hundreds of other indicators it could use to make an accurate prediction of range. Tesla could aggregate this data from thousands of vehicles over millions of drives in similar conditions and further improve their prediction accuracy... but they don't. The primary indicator displays an idealized range estimate based on what the current charge level would achieve in perfect conditions, while ignoring the environmental factors that actually influence it. Ironically this is from the automaker that positions itself at the forefront of technology-driven situational awareness—i.e. autonomous driving.

The battery indicator's remaining range estimate is arguably the most important gauge in any EV, and to have it regularly off by a factor of two or more is dangerous. It's unlikely anyone buying a Tesla in a cold climate is expecting optimal range in winter[^2], but an accurate, contextually-aware range estimate is a safety feature, and should be the default[^3].

## Regenerative braking and traction loss

Regenerative braking (regen) uses an electric vehicle's kinetic energy to charge its battery. I find this to be the most striking difference in driver experience between an ICE car and an electric car; in an EV, as soon as you're off the accelerator, regen kicks in and you're slowing down immediately. Once you get used to this it's great, and most driving can be done by feathering a single pedal instead of alternating between gas and brake. Tesla has said the brakes on its cars are used so infrequently they may never need to be replaced.

In cold weather, a Tesla's ability to regeneratively brake is lessened due to a cold battery's reduced ability to accept charge. This makes it drive more like a regular car until the battery heats up and regen improves. When the battery _is_ sufficiently warm and regen is working, driving it sometimes reminds me of being a teenager again—riding in my friend's Honda Civic as he'd e-brake drift every snowy corner on our way home from school.

With regen working, coming off the accelerator too quickly can cause more regen-induced resistance in the car's drivetrain than there is between the tires and winter roads, so the car slides. Because the amount of regen applied is relative to battery temperature and changes over the course of a drive, the driving experience changes too, and can catch you by surprise.

Unlike Anti-lock Braking Systems (ABS), there does not appear to be any stutter or cadence in a Tesla's application of regen. To regain control and unlock the wheels from a regen-induced slide, one must counterintuitively resume pressure on the accelerator. A Tesla does not seem to recognize when it's experiencing regen-induced traction loss, or presumably it would stutter or reduce the amount of regen applied and compensate with the brakes.

In some Teslas there is an option in the UI to globally reduce the amount of regen the car applies, but I suspect most in cold climates are hesitant to enable this setting since it further reduces range. Improving the consistency of regen and adding measures to recognize and correct regen-induced traction loss would make for a safer driver experience.

## Climate control, humidity, and windshield defrost

In cold climates, snow or ice on boots and jackets melts in the warmth of a car's interior and increases humidity, which then accumulates on cold glass in the form of fog or ice. This is especially common when breathing heavily after a workout, or carpooling with friends after a team sport.

In auto mode of the Model 3's climate control, it is not possible to enable the windshield vents. Enabling them while in auto mode switches climate control to manual mode, but returning to auto mode disables them again. Auto mode may turn the windshield vents on periodically, but in my experience it is often not enough to maintain clear visibility.

<PostVideo $size="large" src="/video/writing/tesla-software-problems-in-winter/climate-control-compressed.mp4" caption="In a Model 3's climate control, the windshield vents turn themselves off when in auto mode" />

The windshield defrost mode works well and is extremely powerful, but it requires the driver to turn it on and off manually. Using it for light fog is like a farmer addressing a mouse problem by adopting a lion.

Further, when windshield defrost _is_ actually needed, the first tap of the control always blows cold air—even when ambient temperatures are -40°. A second tap is required for hot air. It would be nice if Tesla acknowledged that when temperatures are below a certain threshold, blowing more cold air into the cabin probably not the best default.

## Night mode at sunset

Tesla screens automatically switch to night (dark) mode at sunset, which is essential for keeping one's eyes adjusted to driving in the dark. However, the duration of twilight—i.e. the time between sunset and actual darkness or astronomical dusk—varies considerably based on time of year and distance from the equator. During winter in northern climates, the sky is still light far after sunset. **Within a certain proximity to either pole, twilight can last for hours**[^4].

Switching to night mode before it is dark out can introduce glare that makes the screen difficult to see. The screen's ambient light sensor still works but it only adjusts backlight brightness, and no amount of backlight behind a dark UI will come close to legibility of a light UI when it's still light out.

Using astronomical dusk or an AI-centric approach to make a better determination of when or when not to enable night mode would improve driver experience.

<PostImage src="/writing/tesla-software-problems-in-winter/IMG_0425.jpg" $size="large" caption="Night mode is automatically enabled at sunset, but at some latitudes sunset is a poor indicator of ambient light level" />

## Snowflake icon drop shadow

Lastly... and I recognize this is especially pedantic... the Tesla UI displays a snowflake icon when the battery is cold, indicating a reduction in available capacity. In cold climates this icon is a fixture for months—except perhaps for a short period after supercharging or hours of consecutive driving.

Presence of the indicator is fine, but the snowflake icon itself has an inexplicable drop shadow that exists nowhere else in the UI.

<PostImage src="/writing/tesla-software-problems-in-winter/0S7A3613.jpg" $size="large" caption="Snowflake icon with inexplicable drop shadow" />

The characteristics of the shadow are unlike any other in the UI; it's short, harsh, and opaque, rather than large, soft, and diffused. The shadow isn't used to visually separate the snowflake from background elements, because nothing is ever rendered behind it. The negative vertical positioning of the shadow doesn't make sense in our reality because it implies being lit from below, rather than above. I can't make sense of the shadow from an accessibility standpoint either because in context, the snowflake's blue colour alone has better contrast than other elements of the UI that are objectively more important.

<PostImage src="/writing/tesla-software-problems-in-winter/0S7A3592.jpg" $size="large" caption="Snowflake icon with inexplicable drop shadow in broader context" />

Because of this, I can only assume the snowflake's drop shadow is a bug, and, since it only appears in cold weather, it's plausible that few designers at Tesla have ever seen it.

## Wrap up

Despite its current shortcomings in winter, I don't hesitate to recommend a Tesla to people in cold climates—as long as they usually park somewhere with power. While I can go days without charging my car in summer, in winter it really should be plugged in more often than not.

The one area I have noticed better winter performance year-over-year is Autopilot. In my first winter with the car, Autopilot was seldom available unless road markings were clearly visible. This past winter it was available much more frequently and seemed to work well.

2020 was the first full year Tesla had Supercharger infrastructure coast-to-coast in Canada, and their cars are becoming much more popular here. Hopefully they'll prioritize more cold weather improvements soon, and make for a better driver experience next winter.

---

Questions, comments, or corrections? Let me know on [Twitter](https://twitter.com/bradcerasani).

[^1]: I also queried drives greater than 5 km in temperatures resembling that of San Francisco (8°C to 21°C), and found the accuracy of range estimation to be 90%.
[^2]: Again, reduced range in cold weather is usually not an issue, however failing to provide an accurate range estimate is.
[^3]: In time, I suspect the accuracy of range estimates in EVs to be regulated within a reasonable margin of error the same way speedometers are.
[^4]: See [Wikipedia](https://en.wikipedia.org/wiki/Twilight) for more on civil, nautical, and astronomical twilight.
