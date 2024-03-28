package com.Virtusa.VirtusaBackend1.Repository;

import com.Virtusa.VirtusaBackend1.Model.Violators;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ViolatorsRepository extends JpaRepository<Violators,Integer> {
    List<Violators> findAllByPoliceId(int policeId);
}
