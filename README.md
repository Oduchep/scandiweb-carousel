# Scandiweb-carousel

This is a React carousel slider component built with babel and webpack. It takes in images, text or video.

All you have to do is import the component `CarouselSlider` and it's child component `CarouselItem` (which houses whatever HTML element you want to use).

## How To Use

**Step 1**
Clone this repository to your loacal machine by copying the URL and typing this code in your editor terminal or Git bash
`git clone <add URL link here>`

**Step 2**
Import the CarouselSlider component wherever you want to use it and reference it with opening and closing tags like so
`<CarouselSlider></CarouselSlider>`

**Step 3**
Import the CarouselItem component as well and reference it with opening and closing tags within the CarouselSlider tag like so

```<CarouselSlider>
        <CarouselItem></CarouselItem>
    </CarouselSlider>
```

**Step 4**
Add whatever HTML element and content you want to be displayed in your carousel

```<CarouselSlider>
        <CarouselItem>
            <p> Peter Pan lives in Wonderland</p>
        </CarouselItem>

        <CarouselItem>
            <img src='https://unsplash.com/photos/Pv63mjQ93_U' alt='Unsplash photo'/>
        </CarouselItem>
    </CarouselSlider>
```

**Step 5**
These items or elements are without styling especially the images and videos therefore some would not appear as you would like them. There is an easy fix, which is to add your own style to the element you want to make changes to.
Say you want to change the background color, font size, width, height, etc, all you have to do is target the particular element and style it with _CSS_ or any _stying library_ you are currently using. (For more clarity, check my App.js and App.css)

**There, you are all set!**
