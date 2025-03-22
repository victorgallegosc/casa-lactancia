import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-academic-formation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './academic-formation.component.html',
  styleUrl: './academic-formation.component.css'
})
export class AcademicFormationComponent {
  academicItems = [
    {
      title: 'Profesionista clínico',
      items: [
        {
          degree: 'Enfermera Profesional',
          institution: 'Universidad Autónoma de Nuevo León'
        },
        {
          degree: 'Enfermera Especialista Pediátrica',
          institution: 'Tec de Monterrey (ITESM)'
        }
      ]
    },
    {
      title: 'Certificaciones',
      items: [
        {
          degree: 'IBCLC® International Board Certified Lactation Consultant®',
          institution: 'International Board of Lactation Consultant Examiners (IBLCE)',
          description: '(Consultora Internacional Certificada en Lactancia materna)'
        },
        {
          degree: 'Especialista de Lactancia Certificada',
          institution: 'Chilbirth Services, Inc.'
        }
      ]
    },
    {
      title: 'Formación Adicional',
      items: [
        {
          degree: 'Asesora de Lactancia y Formación para IBCLC',
          institution: 'Edulacta'
        },
        {
          degree: 'Diplomado de Lactancia',
          institution: 'INSP (Instituto Nacional de Salud Pública)'
        },
        {
          degree: 'Capacitador de Lactancia',
          institution: 'Secretaría de Salud'
        }
      ]
    }
  ];

  conferences = [
    'Congreso Nacional de Consultores de Lactancia ACCLAM 2021 y 2017',
    'Congreso para Formación de Profesionales en Lactancia de Crianzamor Lima, Peru. (2021)',
    'Congreso de Colegio de Pediatría de Nuevo León (2019)',
    'Congreso de Salud Materno Infantil Facultad de Enfermería, UANL (2019, 2020)',
    'Conferencia en Diálogos U-ERRE Laboratorio Desarrollo Infantil Universidad Regiomontana. (2017)'
  ];

  collaborations = [
    'Promotora de Lactancia en diferentes medios de TV y Radio: Dominio FM, TV Nuevo León y TV Azteca',
    'Colaboración con Liverpool Monterrey, impartiendo pláticas de Lactancia',
    'Colaboración con Coorporativo HEB impartiendo pláticas de Lactancia a sus empleados',
    'Colaboración en Empresa Oxxo impartiendo pláticas de Lactancia a sus trabajadoras'
  ];

  memberships = [
    'ACCLAM Asociación de Consultores certificados en Lactancia de México',
    'Comité Estatal Interinstitucional de Lactancia de Nuevo León',
    'Comité Interinstitucional de Vigilancia de Lactancia de Nuevo León',
    'ILCA'
  ];
}
