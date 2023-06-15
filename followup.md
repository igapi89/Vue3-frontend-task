## Implementation

1. What libraries did you add to the frontend? What are they used for?

Libraries I used:

- Element plus (UI library for vue 3) - https://element-plus.org/en-US/
- axios

2. What would you change about your implementation if you had to handle thousands of items?

If Backend implementation allows - I would not fetch all of the items at once but only the number of items that need to be shown in the viewport (pagination or infinite scroll)

If however we only have an endpoint that fetches all of the items at once - I would render only the items that are currently in or close to the viewport.
That's possible on frontend using libraries such as vue-virtual-scroller or vue-virtual-scroll-grid

## General

1. If you had more time, what further improvements or new features would you add?

On the top of my head:

- Finishing responsive
- Improve styling, adding some global styles for components, buttons, fonts
- Tests, jest or similar
- Also dialog prompt for delete item
- Rearranging some code in composables, for example - custom validation rules
- Making some loaders, to indicate when a request to API is in progress
- Animations
- Finding more efficient way to update form component state when changing from one update dialog to another
- Commenting the code in more detailed manner

2. Which parts are you most proud of? And why?
   I'm not proud of anything, pride is currently not in my emotion list :D. I'm satisfied with my speed completing this task though. :D

3. Which parts did you spend the most time with? What did you find most difficult?
   Point 8. from general question 1. In this 4/5 hours that I spend working on this task -
   I didn't have a lot of time to investigate why Vue didn't update the form component properly when handling single dishes data updates.

4. How did you find the test overall? Did you have any issues or have difficulties completing? If you have any suggestions on how we can improve the test, we'd love to hear them.
   It was good. It was more or less a standard test, encapsulating a pretty large portion of Frontend knowledge.
