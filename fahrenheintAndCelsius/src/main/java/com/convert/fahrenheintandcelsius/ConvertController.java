package com.convert.fahrenheintandcelsius;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ConvertController {

    @GetMapping("/celsiusParaFahrenheit/{grau}")
    public Double celsiusParaFahrenheit(@PathVariable Double grau) {
        return grau * 1.8 + 32;
    }

    @GetMapping("/fahrenheitParaCelsius/{grau}")
    public Double fahrenheitParaCelsius(@PathVariable Double grau) {
        return (grau - 32 ) / 1.8;
    }
}
