import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-menu-bar',
  standalone: true,
  imports: [MenubarModule],
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.scss'
})
export class MenuBarComponent implements OnInit {
  
  items: MenuItem[] | undefined;

  ngOnInit(): void {
    this.items = [
      {
          label: 'Personas',
          icon: 'pi pi-users',
          items: [
              {
                 label: 'Alumnos',
                 icon: 'pi pi-user'
              },
              {
                label: 'Docentes',
                icon: 'pi pi-user'
              }
          ]
      },
      {
          label: 'Institucion',
          icon: 'pi pi-graduation-cap',
          items: [
            {
               label: 'Sedes',
               icon: 'pi pi-building'
            },
            {
              label: 'Cursos',
              icon: 'pi pi-book'
            },
            {
                label: 'Clases',
                icon: 'pi pi-briefcase'
            }
        ]
      },
      {
          label: 'Administrador',
          icon: 'pi pi-lock',
          items: [
              {
                  label: 'Usuarios',
                  icon: 'pi pi-user'
              },
              {
                  label: 'Bitacora',
                  icon: 'pi pi-server'
              }
          ]
      }
  ]
  }

}
