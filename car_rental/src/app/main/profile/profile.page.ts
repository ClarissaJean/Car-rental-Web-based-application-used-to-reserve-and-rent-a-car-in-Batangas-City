import { Component, OnInit } from '@angular/core';
import { collection, Firestore, getDocs,query,where } from '@angular/fire/firestore';
import {
  Auth,
  createUserWithEmailAndPassword,
  updateProfile,
  sendPasswordResetEmail,
  signOut
} from '@angular/fire/auth';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {


  data:any=[]

  profile:any=[]
  constructor(private firestore:Firestore,private auth:Auth,private toast:ToastController,private router:Router) { 

    this.data=JSON.parse(localStorage.getItem('user')) 

    console.log(this.data.user)
  }

  ngOnInit() {
  }


  
}
