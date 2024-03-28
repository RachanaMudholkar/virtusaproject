package com.Virtusa.VirtusaBackend1.Service;

import com.Virtusa.VirtusaBackend1.Model.Violators;

import java.util.List;

public interface ViolatorsService {
    public Boolean saveData(Violators violators);
   public  List<Violators>getData(int policeId);
}
