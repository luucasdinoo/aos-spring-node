package br.com.aos.curriculoapi.model.services;

import br.com.aos.curriculoapi.model.entities.PersonalData;
import br.com.aos.curriculoapi.model.repositories.PersonalDataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PersonalDataService {

    private final PersonalDataRepository personalDataRepository;

    @Autowired
    public PersonalDataService(PersonalDataRepository personalDataRepository) {
        this.personalDataRepository = personalDataRepository;
    }

    public PersonalData save(PersonalData personalData) {
        return personalDataRepository.save(personalData);
    }

    public PersonalData findById(Long id){
        return personalDataRepository.findById(id)
                .orElseThrow(()-> new RuntimeException(new RuntimeException(String.format("Id= '%s' não encontrado", id))));
    }

    public List<PersonalData> findAll(){
        return personalDataRepository.findAll();
    }

    public void delete(Long id){
        PersonalData data = findById(id);
        personalDataRepository.delete(data);
    }
}
