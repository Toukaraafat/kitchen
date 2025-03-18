import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProfileService } from '../services/profile.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-head-chief-details',
  imports: [RouterModule,CommonModule],
  templateUrl: './head-chief-details.component.html',
  styleUrl: './head-chief-details.component.css'
})
export class HeadChiefDetailsComponent {
  profileData!: any
  errorMessage: string = '';


constructor(private profileService:ProfileService){

}
  ngOnInit(): void {
    this.fetchProfile();
  }

  fetchProfile(): void {
    this.profileService.getInfos().subscribe({
      next: (response) => {

        this.profileData = response.data;
        console.log('Profile Data:', this.profileData);
      },
      error: (error) => {
        console.error('Error fetching profile:', error);
        this.errorMessage = 'Failed to load profile data';
      }
    });
  }
}
