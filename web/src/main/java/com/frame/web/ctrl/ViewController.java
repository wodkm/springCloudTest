package com.frame.web.ctrl;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@RequestMapping("/view")
@Controller
public class ViewController {

    @GetMapping("/{viewName}")
    public ModelAndView view(Model model, @PathVariable(value="viewName") String viewName){
        model.addAttribute("viewName",viewName);
        return new ModelAndView("index", "params", model);
    }
}
