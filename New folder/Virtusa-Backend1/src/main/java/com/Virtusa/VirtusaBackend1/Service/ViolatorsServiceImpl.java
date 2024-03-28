package com.Virtusa.VirtusaBackend1.Service;

import com.Virtusa.VirtusaBackend1.Model.User;
import com.Virtusa.VirtusaBackend1.Model.Violators;
import com.Virtusa.VirtusaBackend1.Repository.UserRepository;
import com.Virtusa.VirtusaBackend1.Repository.ViolatorsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ViolatorsServiceImpl implements ViolatorsService{
    @Autowired
    ViolatorsRepository violatorsRepository;

    @Autowired
    UserRepository userRepository;

    @Override
    public Boolean saveData(Violators violators) {
        Optional<User>u=userRepository.findById(violators.getPoliceId());
        if(u.isEmpty()){
            return false;
        }
        violatorsRepository.save(violators);
        return true;
    }

    @Override
    public List<Violators> getData(int policeId) {
        return violatorsRepository.findAllByPoliceId(policeId);
    }


}
