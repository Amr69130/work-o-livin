import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent implements OnInit {
  private route = inject(ActivatedRoute); // ✅


  description: string = `créée en 2023, Work-O-Livin est une plateforme de mise en relation 
  entre les travailleurs et les employeurs. Notre mission est de faciliter la recherche d'emploi 
  et de promouvoir le travail flexible et à distance. 
  Nous croyons que chacun mérite de trouver un emploi qui correspond à ses compétences et à son mode de vie.`;

ngOnInit() {
	  
	}
}
