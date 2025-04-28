# Title

## Value Proposition

**As a** `User` <br>
**I want to** `view a list of movies` <br>
**so that** `I can see what films have been released` <br>

## Description
![wireframe](./assets/scribble-movie-list.png)


## Acceptance Criteria
- A list of films are displayed in tile format
- Each film is contained within a card in which:
    - The film's rating is displayed in the top right hand corner of the poster
    - The film's title is displayed above the poster
- The card is linked to a separate page
- This page displays the default error message "Sorry we couldn't retrieve the latest movie data at the moment. Please try again later"

## Tasks

- Add film details to a database
- GET stored poster, title and rating from the database
- Display the film's title, poster and rating in a card element as specified in the acceptance criteria
- Create scalable grid display format for film
- Link each card to a separate dynamically routed movie page