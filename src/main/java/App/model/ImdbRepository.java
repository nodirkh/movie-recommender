package projectApp.model;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ImdbRepository extends MongoRepository<Imdb, String> { }
