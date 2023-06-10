# Newest Hacker News - Cristina Zlatov

![BANNER](public/images/banner.png)

I build the my third project for the [Start2Impact](https://www.start2impact.it/) online course. It is a News API and Weather API based project in Vanilla JavaScript.

## Table of contents

- [Overview](#overview)
  - [The task](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The task

The task was to create a News webpage that fetches the newest stories from the [Hacker News API](https://github.com/HackerNews/API/blob/master/README.md).

One of the main requirements was to integrate a load more button that would fetch ten pieces of news at a time.

I decided to integrate Weather API data and a date into the project for completeness.

### Links

- URL: [Live Website URL](https://vocal-rugelach-86d415.netlify.app/)

## My process

As I decided to tackle the most complex part first, starting by fetching the array of IDs from the [Hacker News API](https://github.com/HackerNews/API/blob/master/README.md) was my first step.

Then I created a function that fetches a single story given an id as a parameter. The parameter is placed into the fetch URL as a template literal.

At last, in order to fetch ten stories, I created a function with an index parameter. It splits the array of IDs in 50 sub-arrays of 10 IDs using chunk() from [Lodash](https://lodash.com/) and returns each arrays based on the index provided upon the call.

This function is assigned to a click event listener with a cumulating value as a parameter (currentIndex++). Now, every time the Load More button is clicked, the value of currentIndex++ increases by one, and the event listener displays the corresponding sub-array.

Moreover, this fetch function calls the displayStories function.

Fetching data from the [Weather API](https://open-meteo.com/) follows a similar pattern if actions.

Both calls use Async/Await and Try/Catch for error handling and a displayError function.

The last piece of logic was creating and displaying the date on the sidebar.

For the designing and styling process I decided on the mobile first approach.

The layout for mobile is straight forward, without any layout choices besides the grid display for the weather.

For the desktop I opted for a more traditional sidebar layout made with flex-box.

The entire project was created with [Vite](https://vitejs.dev/).

### Built with

- Semantic HTML5 markup
- Sass
- Flex-box
- Mobile-first workflow
- JavaScript
- Fetch API

### What I learned or got more details on

Fells like I went to hell and back in order to get to these 4 lines of code, but it was all worth it.

I tried so many other intricate ways but I learned that, at the end of the day, the less pretentious code is the most efficient.

```javascript
const chunkedIds = _.chunk(ids, 10);

let tenStories = await Promise.all(
  chunkedIds[index].map((id) => fetchStory(id))
);
```

The currentIndex++ refers to index in the example below.

```javascript
fetchTenStories(currentIndex++);
```

## Author

- Twitter - [Cristina Zlatov](https://twitter.com/zlatov_cristina)
- Linkedin - [Cristina Zlatov](https://www.linkedin.com/in/cristina-zlatov/)

## Acknowledgments

Finally I'd like to thank Start2Impact for inspiring me to take on their course in the first place and making me feel comfortable while learning everything from zero.
