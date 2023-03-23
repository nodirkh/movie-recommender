package projectApp.model;

import java.util.List;

public interface RatingRepositoryCustom {
    public List<Rating> sampleRatingsByUserId(String[] userIds, int size);
}
