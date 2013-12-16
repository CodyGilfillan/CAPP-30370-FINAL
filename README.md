CAPP-30370-FINAL
================
My roommate and I ran a smoothie business out of our dorm's basement this past fall to make some money this past fall. We had been taking orders via physical order forms or text-ins, but we thought an online ordering system would be easier to track business. The purpose of this website is to do just that. Our website is designed to provide basic information about why we started the business, what goes into our smoothies, and how you can order them. 

##Breakpoints 
-------------
As suggested, I used 700px and 1000px as my breakpoints for tablet and desktop devices, respectively. The 3 pages I created for this website are: home, menu, and order now. 

### Home Page Breakpoints
For the home page, everything flows down from the top when viewed with a mobile device. At 700px, I created a noticably bigger "Order Yours Now!" hyperlink (size 50px) and allowed the max-width of the text go from 50% to 70%. At 1000px, I increased the font of the "Order Yours Now!" hyperlink to 90px and shrunk the max-width of the text from to 70% to 60%.

### Menu Page Breakpoints
For the menu page, again everything flows down from the top when viewed with a mobile device. At 700px, I created a CSS animation that changes the color scheme of the "COMING SOON >>>>> PASSION FRUIT" text. At 1000px, I moved the mango image towards the middle of the page and gave it a continuous animation. It transforms horizontally while staying fixed in a relative position.

### Order Page Breakpoints
For the order page, yet again, everything including the images stacks on top of each other when viewed with a mobile device. At 700px, the three images move to form a 3 column layout stated in the next section. At 1000px, I had a difficult time giving the layout look all that different, but I changed the % width of the 3 images.

## 3-Up Column Layout
On the "order now" page, I created a 3 column layout that corresponds to the 3 possible options for smoothies. The 3 types include a radio button to choose your smoothie as well as an image to give you an idea of what the smoothie looks like.

## CSS Animation on continuous loop

For my continuous loop, I have a picture (mango.jpg) that spins horizontally indefinately. This is designed to draw attention to our new flavor, passion fruit, that is coming soon.

## CSS Animation that Occurs on User Interaction

On the tablet size (min 700px) and higher for the menu page, I created a CSS animation that changes the color scheme of the "COMING SOON >>>>> PASSION FRUIT" text when you hover over it. I thought this would help to get the customers excited about the new website.


## Background Image

My background image {url(sb.jpg)} is a large picture of a smoothie with a picture of a delicious smoothie with fresh fruit resting on a clean wood floor.  I love the color scheme of it too, as I hear the color orange inspires enthusiasm and suggests affordability. It appears on all pages of my website, as I feel it looks good across all platforms.

## jQuery interaction

My jQuery interaction appears at the bottom on the menu page. Instead of having a standard 1-10 scale, I wanted to be creative. So, after the customer suggests a new flavor, I ask them to enter a font size between 10-100 (100 being very bad) demonstrated how much they want this flavor. Upon entering the font size in the box and clicking the button, "This Much Cody!" will be displayed in the designated font size the user described.
