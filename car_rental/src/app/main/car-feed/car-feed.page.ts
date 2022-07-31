import { Component, OnInit } from '@angular/core';
import {
  collection,
  addDoc,
  Firestore,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
  query,
  where
} from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-car-feed',
  templateUrl: './car-feed.page.html',
  styleUrls: ['./car-feed.page.scss'],
})
export class CarFeedPage implements OnInit {

  test:any=[
    

  ]

  carmodel:any;
  cartype:any;
  description:any;
  price:any;

  userData:any;
  currentUser:any;

  
  constructor(private firestore:Firestore,private router:Router,private modal:ModalController, private toast:ToastController) {
    this.userData=JSON.parse(localStorage.getItem('user'));
    console.log(this.userData.user);



   }

  ngOnInit() {



    this.getPosts()

    this.getdata()
  }



  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  async presentToast(message: string) {
    const toast = await this.toast.create({
      message: message,
      duration: 2000,
    });
    toast.present();
  }

  getdata(){
    const dbinstance=collection(this.firestore,'users');
    const q=query(dbinstance,where("uid", "==", this.userData.user.uid));



    getDocs(q,).then(res=>{
      this.currentUser = [
        ...res.docs.map((doc: any) => {

          return {  id: doc.id ,...doc.data(),};

        }),

      ];
      console.log(this.currentUser);

    }).catch(err=>{
      console.log(err);
    })
  }



  getPosts(){
    const dbinstance=collection(this.firestore,'posts');

    getDocs(dbinstance).then(res=>{
      this.test = [
        ...res.docs.map((doc: any) => {

          return {  id: doc.id ,...doc.data(),};

        }),

      ];
      console.log(this.test);
    }).catch(err=>{
      console.log(err);
    })

  }


  addCar(){
    const date=new Date();
    


    let data={
      location:"test",
      bookerid:"test",
      carmodel:this.carmodel,
      cartype:this.cartype,
      description:this.description,
      price:this.price,
      status:"available",
      date:date.toDateString(),
      ownerid:"xo3BDds0H9bEAP8cvxThP3cscO02",
      username:"khen",
      img:'https://www.stratstone.com/-/media/stratstone/porsche/new-cars/inline-images/taycan/porsche-taycan-rear-driving-720x405px.ashx?mh=1440&la=en&h=405&w=720&mw=2560&hash=BC569C94BDA5FDD37E5587C7F313AFBC'

      
    }

    const dbinstance=collection(this.firestore,'posts');
    addDoc(dbinstance,data).then(res=>{
      this.presentToast('Car Added Successfully');
      this.modal.dismiss()
      console.log(data, res);

      this.ngOnInit()

    }).catch(err=>{
      console.log(err);
      this.presentToast('Error Adding Car');

    })

    
  }
}
