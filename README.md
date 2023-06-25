# 05 Third-Party APIs: Work Day Scheduler

## Task

This is the week 5 challenge where we were tasked with creating a simple calendar application that allows a user to save events for each hour of a typical working day (9am-5pm). 
This app runs in the browser and features dynamically updated HTML and CSS powered by jQuery as well as utilising Day.js API for time/date manipulation.

## User Story

```md
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

```md
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours of 9am&ndash;5pm
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

Link to deployed site: https://sambeekman.github.io/calander/

![sambeekman github io_calander_](https://github.com/SamBeekman/calander/assets/131665093/0dca71be-7d7c-4c32-a636-440cac56d8f9)


## Installation

N.A

## Usage

To use the calander, click on a timeblock to enter any events/tasks you have for the day.
If you wish to save these events to the calander, click the save button to the right of that particular timeblock.

Color code:
Past - Gray
Present- Red
Future - Green
