## Unicorn.js, a jQuery plugin for sweet cyclic rainbow text!
Carve hours from development time with **unicorn.js**! This revolutionary JQuery plug-in ***not only* applies rainbow colors** to elements' text, ***but also* animates these colors upon hover** in a direction of your choosing! No longer must you worry about rolling you own solution to this commonplace front-end task; just sit back, relax, and let unicorn.js take the wheel. 

----------

> *"I truly feel that Unicorn.js is to become as commonplace as reset.css in web development. As its usage grows rampantly, I will undoubtedly be hailed as the Sir Isaac Newton of HTML Elements"*  <br> **-Todd**, *creator*

### Accolades

> *"I had given up jQuery completely. But then Unicorn.js brought me back. The sweet, pulsating rainbow of joy is a part of my daily routine now."* <br> **-[Paul Irish][3]**, front-end developer &amp; general badass 

    
### All this functionality must come with a price, no?
In short, **NO**! After much soul-searching -- and rejections from [Code Canyon][2] -- I decided to release this web development panacea free of charge. ***You heard right, folks...* FREE!!!** 

### I'm sold, but how do get started with Unicorn.js
*Lucky for you, implementation is simple.*

After including `JQuery 1.7+`, simply download and include [**<strong>unicorn.js</strong>**][3]. For example, let's consider adding the following just before your closing `</body>` tag:

    <script src="//code.jquery.com/jquery-1.10.2.min.js"></script>
    <script src="path/to/unicorn/unicorn.js"></script>

With the brunt of the work done, simply add another script block below the preceding two:

    <script>
    $(function() {
        $(".awesome_text").unicorn();
    });
    </script>

The dazzlingly dazzling `unicorn()` method will attach mouse event handlers to the selected elements. Now when hovered, the target element's text color animates, becoming an **irresistible swirling spectacle of cyclic rainbow splendor!!!**

### That's great, but what if I require a bit more versatility?

*You're in luck! Unicorn is a shining beacon for versatility in plugin authoring.*

**Options**

<ol><li>Saturation<ul><li>changes the intensity of colours<li>accepts integer values between 1 and 100</li></ul></li><li>Light<ul><li>reflects the colours' brightness<li>accepts integer values between 1 and 100</li><li>defaults to 50, as values of 100 will produce solid white text</li></ul></li><li>Speed (ms)<ul><li>the length of one cycle<li>accepts integer values representing ms (1s = 1000ms)</li></ul></li><li>ltr<ul><li>specifies the direction of "<strong>bow-flow</strong>," standing for `left to right`<li>accepts binary value of true or false</li><li>defaults to false, so <strong>bow-flow</strong> is right to left</li></ul></li></ol>

Let's examine the following:

    <script>
    $(function() {
        $(".awesome_text").unicorn({
            "saturation":100,
            "light":60,
            "speed":50,
            "ltr":true
        });
    });
    </script>


Now, that's a beauty!

# What're you waiting for???
I think you've got it. <strong>Go, ahead... Get your bow-flow on.</strong>
<br>
<br>
 


  [1]: http://www.paulirish.com/
  [2]: http://codecanyon.net/
  [3]: https://raw2.github.com/toddpress/Unicorn-js/master/unicorn.js
