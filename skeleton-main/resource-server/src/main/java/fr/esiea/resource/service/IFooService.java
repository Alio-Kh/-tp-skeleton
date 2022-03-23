package fr.esiea.resource.service;

import fr.esiea.resource.persistence.model.Foo;

import java.util.Optional;


public interface IFooService {
    Optional<Foo> findById(Long id);

    Foo save(Foo foo);
    
    Iterable<Foo> findAll();

}
