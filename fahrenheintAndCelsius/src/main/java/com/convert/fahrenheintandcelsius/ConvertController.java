package com.convert.fahrenheintandcelsius;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("convert")
public class ConvertController {

    @GetMapping("/celsiusToFahrenheint/{celsius}")
    public Double celsiusToFahrenheint(@PathVariable Double celsius) {
        return celsius * 1.8 + 32;
    }

    @GetMapping("/fahrenheintToCelsius/{fahrenheint}")
    public Double fahrenheintToCelsius(@PathVariable Double fahrenheint) {
        return (fahrenheint - 32 ) / 1.8;
    }
}
