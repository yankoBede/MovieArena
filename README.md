# Movie Arena #

This is a simple Angular project used for educational purposes only. It is a website oriented to the movie fans. Here they can find brief information about a lot of movies and have the opportunity to add a new movie to the site. They can like/unlike movies which are not created by them. The 5 most favourite movies are listed after successful login in the site. Also they can navigate to all the movies in the site, these ones added by them and their favourite ones. 

The project consists of several components. The login and registration components are related to the authentication part. Both use template-driven forms.
All the movies related components are positioned in the 'movie' folder. The 'list' component is used for visualition of a movie entity in home component as well as in 'all-movie', 'added-by-me-movies', 'liked-movies' components. 'create' and 'edit' components use reactive forms. There is an 'detail' component where the users can read more about a particular movie and depending on their rights can delete/edit a movie if they are the creator or can like/unlike a movie if it is not added by them.
There are also 'header' and 'footer' components. The tabs in the header components are displayed depending on whether the user is logged in or not. 

The backend part is achieved using Progress Kinvey as an interceptor is used for organizing the requests srtucture to the server.

There are 3 custom modules: one for the movies part, for the header and footer called 'core' and a shared one where is positioned 'password-match' directive. The navigation is organized using the Angular routing methanism. A gaurd is used to determine whether a page can be opened or not by the use depending whether they are logged or not. 
