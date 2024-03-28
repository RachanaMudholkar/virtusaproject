package com.Virtusa.VirtusaBackend1.Controller;

import com.Virtusa.VirtusaBackend1.Model.Violators;
import com.Virtusa.VirtusaBackend1.Service.ViolatorsServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/violator")
@CrossOrigin("*")
public class ViolatorsController {

    @Autowired
    ViolatorsServiceImpl violatorsService;

    @PostMapping
    public ResponseEntity<String>saveData(@RequestBody Violators violators){
        if(violatorsService.saveData(violators)){
            return new ResponseEntity<>("Saved Sucessfully",HttpStatus.OK);
        }
        return new ResponseEntity<>("User Not Found",HttpStatus.NOT_FOUND);

    }

    @GetMapping
    public ResponseEntity<List<Violators>>getData(@RequestParam("policeId")int policeId){
        List<Violators>list=violatorsService.getData(policeId);
        if(list.isEmpty()){
            return ResponseEntity.notFound().build();
        }
        return new ResponseEntity<>(list,HttpStatus.OK);
    }

}
