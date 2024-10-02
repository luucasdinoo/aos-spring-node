package br.com.aos.curriculoapi.model.services;

import br.com.aos.curriculoapi.model.entities.Experience;
import br.com.aos.curriculoapi.model.repositories.ExperienceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ExperienceService {

    private final ExperienceRepository experienceRepository;

    @Autowired
    public ExperienceService(ExperienceRepository experienceRepository) {
        this.experienceRepository = experienceRepository;
    }

    public Experience save(Experience personalData) {
        return experienceRepository.save(personalData);
    }

    public Experience findById(Long id){
        return experienceRepository.findById(id)
                .orElseThrow(()-> new RuntimeException(new RuntimeException(String.format("Id= '%s' não encontrado", id))));
    }

    public List<Experience> findAll(){
        return experienceRepository.findAll();
    }

    public void delete(Long id){
        Experience data = findById(id);
        experienceRepository.delete(data);
    }
}
