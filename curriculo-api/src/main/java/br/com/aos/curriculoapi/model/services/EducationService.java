package br.com.aos.curriculoapi.model.services;

import br.com.aos.curriculoapi.model.entities.Education;
import br.com.aos.curriculoapi.model.repositories.EducationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EducationService {

    private final EducationRepository educationRepository;

    @Autowired
    public EducationService(EducationRepository educationRepository) {
        this.educationRepository = educationRepository;
    }

    public Education save(Education personalData) {
        return educationRepository.save(personalData);
    }

    public Education findById(Long id){
        return educationRepository.findById(id)
                .orElseThrow(()-> new RuntimeException(new RuntimeException(String.format("Id= '%s' não encontrado", id))));
    }

    public List<Education> findAll(){
        return educationRepository.findAll();
    }

    public void delete(Long id){
        Education data = findById(id);
        educationRepository.delete(data);
    }
}
