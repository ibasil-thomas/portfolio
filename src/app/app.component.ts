import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { Title, Meta } from '@angular/platform-browser';
import { LanguageService } from "src/app/services/language/language.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'basil-portfolio';

  constructor(
    private titleService: Title,
    private metaService: Meta,
    private languageService: LanguageService
  ) {
  }
  ngOnInit(): void {

    this.languageService.initLanguage()

    this.titleService.setTitle("Basil Thomas | Software Engineer");
    this.metaService.addTags([
      { name: 'keywords', content: 'Front-end, MEAN Stack Developer , .NET, Azure Fundamentals Certified , Software Engineer, Developer' },
      { name: 'description', content: 'As a software engineer with expertise in both fron-end and back-end technologies, I have a comprehensive understanding of full-stack web development. My strong foundation in JavaScript allows me to effectively work with front-end technologies such as Angular and VueJS, as well as back-end technologies such as ASP.NET, .NET Core and NodeJS.' },
    ]);
    
    AOS.init();


  }
}
