package projectApp.controllers;

import projectApp.model.*;
import projectApp.services.MainService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

import static java.lang.Integer.parseInt;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("api/movies")
public class MoviesController {
    @Autowired
    private MainService mainService;

    @Autowired
    private RatingRepository ratingRepository;

    @Autowired
    private MovieRepository movieRepository;

    @GetMapping
    public ResponseEntity<List<MovieDetail>> getAllMovies(){
        String[] splitMovieCategories = {};
        List<MovieDetail> movies = mainService.filteredListOfMoviesWithIMDB(splitMovieCategories);

        return ResponseEntity.ok(movies);
    }

    @GetMapping("/recommendations")
    public ResponseEntity<List<MovieDetail>> getRecommendations(
            @RequestParam(required = false, defaultValue = "") String title,
            @RequestParam(required = false, defaultValue = "") String limit
    ) {
        String movieTitle = title;

        if (movieTitle == null) {
            movieTitle = "";
        }

        String limitArg = limit;
        int parsedLimit;

        try {
            if (limitArg == null || limitArg.equals("")) {
                parsedLimit = 10;
            } else {
                parsedLimit = parseInt(limitArg);

                if (parsedLimit < 0) {
                    parsedLimit = 10;
                }
            }
        } catch (NumberFormatException e) {
            parsedLimit = 10;
        }

        String[] splitMovieCategories = {};
        List<MovieDetail> filteredMovies = mainService.filteredListOfMoviesWithIMDB(splitMovieCategories);
        List<Integer> similarOccupationsList = mainService.similarOccupationsList("");
        List<User> similarUsers = mainService.getUsersFromGivenConstraints("", "", similarOccupationsList);
        List<Rating> ratings =  mainService.getRatingsFromUsers(similarUsers);
        List<MovieDetail> recommendedMovies = mainService.recommendMoviesByTitle(movieTitle, filteredMovies, parsedLimit, ratings);

        return ResponseEntity.ok(recommendedMovies);
    }
}
