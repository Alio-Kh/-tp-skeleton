package fr.esiea.resource.persistence.repository;

import fr.esiea.resource.persistence.model.Foo;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface IFooRepository extends PagingAndSortingRepository<Foo, Long> {
}
